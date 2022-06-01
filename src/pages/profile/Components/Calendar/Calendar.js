import React, { useState } from 'react'
import { withStyles } from '@mui/styles';
import '../../../../../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css';

import DayNames from './DayNames'
import { v4 as uuid } from 'uuid';
import Week from './Week';
import moment from 'moment/moment';

const styles = (theme) => ({

  calendarRectangle: {
    width: '100%',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ccc',
    fontSize: '.9rem',
    overflow: 'visible',
  },
  
  calendarRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  calendarHeader: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      color: '#ccc',
  },
  
  mainCalendar: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  titleHeader: {
      width: '100%',
      height: '70%',
      whiteSpace: 'nowrap',
      fontSize: '1.2em',
      fontWeight: 700,
      backgroundColor: 'transparent',

      '@media (min-width: 992px)': {
      fontSize: '1.4em',
      },

      '@media (min-width: 1200px)': {
      fontSize: '1.2em',
      }
  },
  
  headerText: {
      flex: 5,
      display: 'flex',
  },

  monthLabel: {
      flex: 3,
      color: theme.palette.text.primary,
      fontSize: '1.1rem',
      justifyContent: 'center!important',
      '@media (max-width: 1330px)': {
          fontSize: '.9rem'
      }
  },

  daysContainer: {
      width: '100%',
      background: 'transparent',
      height: 'inherit',
      padding: '15px 0 0',
  },

  calendarItemContainer: {
      flexGrow: 1,
      display: 'flex',
      
      alignItems: 'center',
      flex: 1,
      height: '100%',
      transition: 'all 0.4s ease-in-out 0s',
      '&:first-child': {
          justifyContent: 'flex-start',
          paddingLeft: '15px',
      },
      '&:last-child': {
          justifyContent: 'flex-end',
          paddingRight: '15px',
      },
  },
  
  arrow: {
      cursor: 'pointer',
      fontSize: '1rem',
      color: '#C9C9C9',
  },
      
});

const Calendar = ({ classes }) => {

  const [date, setDate] = useState({
      selectedMonth: moment(),
      selectedDay: moment().startOf("day"),
      selectedMonthEvents: [
          {
          title: "The flower bed",
          info: "Contents here",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-02`, "YYYYMMDD"),
          },
          {
          title: "Stop world water pollution",
          info: "Have a kick off meeting with .inc company",
          itemStyle: "#f0b518",
          date: moment(`${moment().year()}-${moment().month() + 1}-05`, "YYYYMMDD"),
          },
          {
          title: "Light Blue 2.2 release",
          info: "Some contents here",
          itemStyle: "#58d777",
          date: moment(`${moment().year()}-${moment().month() + 1}-18`, "YYYYMMDD"),
          },
          {
          title: "A link",
          info: "",
          itemStyle: "#f45722",
          link: "http://www.flatlogic.com",
          date: moment(`${moment().year()}-${moment().month() + 1}-28`, "YYYYMMDD"),
          },
      ],
      showEvents: false
  });

  const previous = () => {
      setDate({
          selectedMonth: date.selectedMonth.subtract(1, "month")
      });
  }
  
  const next = () =>  {
      setDate({
          selectedMonth: date.selectedMonth.add(1, "month")
      });
  }
  
  const renderMonthLabel = () =>  {
  return (
      <span className={`${classes.calendarItemContainer} ${classes.monthLabel}`}>
      {date.selectedMonth.format("MMMM YYYY")}
      </span>
  );
  }

  const renderWeeks = () =>  {
  const currentMonthView = date.selectedMonth;
  const currentSelectedDay = date.selectedDay;

  let weeks = [];
  let done = false;
  let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Sunday");
  let count = 0;
  let monthIndex = previousCurrentNextView.month();

  while (!done) {
      weeks.push(
          <Week
              key={uuid()}
              selectedMonthEvents={date.selectedMonthEvents}
              previousCurrentNextView={previousCurrentNextView.clone()}
              currentMonthView={currentMonthView}
              selected={currentSelectedDay}
          />
      );
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
  }
  return weeks;
  }

  return (
      <div className={`${classes.calendarRectangle}`}>
      <div>
      <section className={`${classes.mainCalendar}`}>
        <header className={`${classes.calendarHeader}`}>
          <div className={`${classes.calendarRow} ${classes.titleHeader}`}>
            <i
              className={`${classes.calendarItemContainer} ${classes.arrow} la la-angle-left`}
              onClick={previous}
            />
            <div className={`${classes.calendarItemContainer} ${classes.headerText}`}>
            
            {renderMonthLabel()}
            </div>
            <i 
              className={`${classes.calendarItemContainer} ${classes.arrow} la la-angle-right`} 
              onClick={next} 
            />
          </div>
          <DayNames />
        </header>
        <div className={`${classes.daysContainer}`}>
          {renderWeeks()}
        </div>
      </section>
      </div>
      </div>
  )
}

export default withStyles(styles)(Calendar);