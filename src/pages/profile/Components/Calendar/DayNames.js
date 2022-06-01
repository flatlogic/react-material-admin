import React from 'react';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
    calendarItemContainer: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        transition: 'all 0.4s ease-in-out 0s',
    },
    calendarRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    daysHeader: {
        width: '100%',
        padding: '5px 0',
        backgroundColor: 'transparent',
    },
    dayName: {
        color: '#cccccc',
    },
})

const DayNames = ({ classes }) => {
    return (
        <div className={`${classes.calendarRow} ${classes.daysHeader}`}>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>S</span>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>M</span>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>T</span>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>W</span>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>T</span>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>F</span>
        <span className={`${classes.calendarItemContainer} ${classes.dayName}`}>S</span>
        </div>
    );
}

export default withStyles(styles)(DayNames);