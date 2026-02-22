import { makeStyles } from 'styles/mui';

const styles = () => ({
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

const useStyles = makeStyles(styles);

const DayNames = () => {
    const classes = useStyles();
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

export default DayNames;
