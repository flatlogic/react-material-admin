import React from 'react';

import {
  Popper,
  Divider,
  RadioGroup,
  Box,
  Radio,
  Switch as SwitchMode,
} from '@mui/material';

import useStyles from '../styles';

// components
import Widget from '../../Widget';
import { Typography } from '../../Wrappers';
import Themes from '../../../themes';
import { useThemeDispatch } from '../../../context/ThemeContext';

function ColorChangeThemePopper({ open, id, anchorEl }) {
  const classes = useStyles();
  let themeDispatch = useThemeDispatch();
  const handleChangeTheme = (e) => {
    localStorage.setItem('theme', e.target.value);
    themeDispatch(Themes[e.target.value]);
  };

  const toggleDarkTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'default');
      themeDispatch(Themes.default);
    } else {
      localStorage.setItem('theme', 'dark');
      themeDispatch(Themes.dark);
    }
  };

  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      placement={'left-start'}
      style={{ zIndex: 100 }}
      elevation={4}
    >
      <Widget disableWidgetMenu>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <>
            <Typography variant='body2' weight={'bold'} uppercase>
              color theme
            </Typography>
            <RadioGroup
              aria-label='theme'
              value={localStorage.getItem('theme')}
              onChange={(e) => handleChangeTheme(e)}
            >
              <Box display='flex' justifyContent='space-between'>
                <Radio value='default' className={classes.defaultRadio} />
                <Radio value='secondary' className={classes.secondaryRadio} />
                <Radio value='success' className={classes.successRadio} />
              </Box>
            </RadioGroup>
          </>
          <Divider style={{ width: '100%', margin: '8px 0 16px 0' }} />
          <>
            <Typography variant='body2' weight={'bold'} uppercase>
              dark mode
            </Typography>
            <SwitchMode
              checked={localStorage.getItem('theme') === 'dark'}
              onChange={() => toggleDarkTheme()}
            />
          </>
        </Box>
      </Widget>
    </Popper>
  );
}

export default React.memo(ColorChangeThemePopper, (prevProps, nextProps) => {
  return prevProps.anchorEl === nextProps.anchorEl;
});
