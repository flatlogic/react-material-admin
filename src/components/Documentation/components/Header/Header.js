import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { withRouter } from 'react-router-dom';

// Material-UI core components
import { AppBar, Toolbar, IconButton, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material';

// Material Icons
import {
  ArrowBack as ArrowBackIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Components
import { Typography, Link } from '../../../Wrappers';
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from '../../../../context/LayoutContext';
import classNames from 'classnames';

const Header = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  let layoutState = useLayoutState();
  let layoutDispatch = useLayoutDispatch();
  const [isSmall, setSmall] = useState(false);

  useEffect(function () {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color='inherit'
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse,
          )}
        >
          {(!layoutState.isSidebarOpened && isSmall) ||
          (layoutState.isSidebarOpened && !isSmall) ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant='h6' block className={classes.logo}>
          React Material Admin Full{' '}
          <Typography variant={'h5'}>&nbsp; Documentation</Typography>
        </Typography>
        <Box
          display={'flex'}
          alignItems={'center'}
          className={classes.fullWidthXs}
        >
          <Box display={'flex'} className={classes.icons}>
            <Link href={'https://twitter.com/flatlogic'}>
              <IconButton>
                <TwitterIcon style={{ color: '#fff' }} />
              </IconButton>
            </Link>
            <Link href={'https://www.facebook.com/flatlogic'}>
              <IconButton>
                <FacebookIcon style={{ color: '#fff' }} />
              </IconButton>
            </Link>
            <Link href={'https://instagram.com/flatlogiccom/'}>
              <IconButton>
                <InstagramIcon style={{ color: '#fff' }} />
              </IconButton>
            </Link>
            <Link href={'https://www.linkedin.com/company/flatlogic/'}>
              <IconButton>
                <LinkedInIcon style={{ color: '#fff' }} />
              </IconButton>
            </Link>
            <Link href={'https://github.com/flatlogic'}>
              <IconButton>
                <GitHubIcon style={{ color: '#fff' }} />
              </IconButton>
            </Link>
          </Box>
          <Box className={classes.headerButtons}>
            <Button
              color={'inherit'}
              style={{ marginRight: 16 }}
              onClick={() => props.history.push('/app')}
            >
              Live Preview
            </Button>
            <Button
              href={'https://flatlogic.com/templates/react-material-admin-full'}
              variant='outlined'
              color='secondary'
            >
              Buy
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
