import React from 'react';
import { Paper, Box } from '@mui/material';
import classnames from 'classnames';

//components
import { Typography } from '../Wrappers';

// styles
import useStyles from './styles';

export default function Widget({
  children,
  title,
  subtitle,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  inheritHeight,
  searchField,
  className,
  showMenu,
  style,
  widgetWithDropdown,
  ...props
}) {
  let classes = useStyles(props);

  return (
    <div
      className={classnames(
        {
          [classes.inheritHeight]: inheritHeight,
          [classes.widgetWrapper]: !inheritHeight,
        },
        className,
      )}
      style={style}
    >
      <Paper
        className={classnames(classes.paper, {
          [props.paperClass]: props.paperClass,
        })}
        classes={{ root: classes.widgetRoot }}
      >
        {!title ? (
          <>
            {header ? (
              <div className={classes.widgetHeader}>{header}</div>
            ) : null}
          </>
        ) : (
          <>
            {!widgetWithDropdown && (
              <div className={classes.widgetHeader}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Box display={'flex'} style={{ width: 'calc(100% - 20px)' }}>
                    <Typography
                      variant='h4'
                      color='text'
                      colorBrightness={'secondary'}
                      noWrap
                    >
                      {title}
                    </Typography>
                    <Box alignSelf='flex-end' ml={1}>
                      <Typography
                        color='text'
                        colorBrightness={'hint'}
                        variant={'caption'}
                      >
                        {subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
            )}
          </>
        )}

        <div
          className={classnames(classes.widgetBody, {
            [classes.noPadding]: noBodyPadding,
            [classes.paddingTop]: !title && !noBodyPadding,
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
    </div>
  );
}
