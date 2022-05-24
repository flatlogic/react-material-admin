import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import Popover from '@mui/material/Popover';

const styles = (theme) => ({

      today: {
          '& > div': {
              backgroundColor: '#7C90FF',
              borderRadius: '50%',
              color: '#fff !important',            
          }
      },
      
      day: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: 30,
          width: 30,
      },
      
      dayNumber: {
          width: '28px',
          height: '28px',
          cursor: 'pointer',
          display: 'flex',
          margin: '3px 0',
          color: theme.palette.text.primary,
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          '@media (max-width: 1330px)': {
            width: 26,
            height: 26
          },
          '@media (max-width: 1280px)': {
            width: 25,
            height: 25
          }
      },
      
      hasEvents: {
          '& > div, & > a': {
              position: 'relative',
              color: theme.palette.text.primary,
              borderRadius: '50%',
              fontWeight: 'bold',
          }
      },
      
      differentMonth: {
          visibility: 'hidden',
          height: 0,
      },
      
      '@media(max-width: 810px)': {
        dayNumber: {
          width: 25,
          height: 25,
        }
      },
  
      selected: {
          '& .hasEvents': {
              position: 'relative',
          }
      },
      
      calendarDot: {
          position: 'absolute',
          top: -1,
          right: 12,
          width: 6,
          height: 6,
          borderRadius: 6,
          backgroundColor: 'inherit',
          '@media (max-width: 1330px)': {
            right: 10,
          }
      },

      eventLink: {
        fontFamily: 'roboto',
        padding: 10,
        color: theme.palette.text.primary,
        display: 'inline-block',
        '& > h4': {
          margin: 0,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 0
        },
      },

      eventContent: {
        fontFamily: 'roboto',
        padding: 15,
        color: theme.palette.text.primary,
        display: 'inline-block',
        '& > h4': {
          margin: 0,
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6
        },
        '& > h5': {
          margin: 0,
          fontSize: 12,
          opacity: .7,
          fontWeight: 100
        }
      },

      customShadow: {
        '& > div:nth-child(3)': {
          boxShadow: '0 0 40px -5px #8598AE!important',
        }
      }
})

const Day = ({ classes, day, selected }) => {
  const [popover, setPopover] = useState({
    popoverShow: false,
    tooltipShow: false
  })

  const togglePopover = (event) => {
    setPopover({ popoverShow: !popover.popoverShow })
    setAnchorEl(event.currentTarget);
  }

  // eslint-disable-next-line no-unused-vars
  const toggleTooltip = () => {
    setPopover({ tooltipShow: !popover.tooltipShow })
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {
    
  };

  // eslint-disable-next-line no-unused-vars
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
      <div className={
          `${classes.day}` +
          (day.isToday ? ` ${classes.today}` : "") +
          (day.isCurrentMonth ? "" : ` ${classes.differentMonth}`) +
          (day.date.isSame(selected) ? ` ${classes.selected}` : "") +
          (day.hasEvents ? ` ${classes.hasEvents}` : "") } > 

        {!day.hasEvents ? 
        <div className={classes.dayNumber}>{day.number}</div> 
        : (day.hasEvents || day.link) ?
          <React.Fragment>
            <div
              onClick={togglePopover}
              id={`Popover${day.number}`}
              className={classes.dayNumber}> {day.number}
                {day.itemStyle ? 
                  <span 
                    style={{backgroundColor: `${day.itemStyle}`}} 
                    className={classes.calendarDot}>
                  </span> : "" }
            </div>
            <Popover
                id={id}
                open={popover.popoverShow}
                anchorEl={anchorEl}
                onClose={togglePopover}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ root: classes.customShadow }}
              >
                {day.link ? (
                <a className={classes.eventLink} href={day.link}>
                  <h4>{day.title}</h4>
                </a>) : (
                  <div className={classes.eventContent}>
                    <h4>{day.title}</h4>
                    <h5>{day.info}</h5>
                  </div>
                )}
            </Popover>
            
          </React.Fragment> 
        : "" }
      
      </div>
    );
}
export default withStyles(styles)(Day);