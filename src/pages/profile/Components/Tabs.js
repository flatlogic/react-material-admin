import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FolderBlue from '../Icons/FolderBlue';
import FolderRed from '../Icons/FolderRed';
import FolderGreen from '../Icons/FolderGreen';
import FolderYellow from '../Icons/FolderYellow';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index }
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AntTabs = withStyles({
  root: {
    borderBottom: `1px solid #e8e8e8`,
  },
  indicator: {
    backgroundColor: 'FF5992',
    borderRadius: 2,
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(0),
    color: '#A1AEBD',
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
    '&:hover': {
      color: '#4A4A4A',
      opacity: 1,
    },
    '&$selected': {
      color: '#4A4A4A',
    },
    '&:focus': {
      color: '#4A4A4A',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    '& .react-swipeable-view-container': {
      transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s !important'
    },
    paddingBottom: 0,
  },
  padding: {
    padding: theme.spacing(3),
    paddingBottom: 0,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  folderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

function CustomizedTabs({ classes }) {
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setIndex(index)
  }

  const handleChangeIndex = (index) => {
    setIndex(index)
  }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();

  return (
    <div class={classes.root}>
      <AntTabs
        value={index}
        onChange={handleChange}
      >
        <AntTab value={0} label="Work" />
        <AntTab value={1} label="Private" />
        <AntTab value={2} label="Social" />
      </AntTabs>
      <SwipeableViews
        index={index}
        style={{ padding: '24px 0 0 ' }}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel>
          <span className={classes.folderWrapper}>
            <FolderBlue title="UI/UX" label="files" value={178} />
            <FolderRed title="Design" label="files" value={154} />
            <FolderGreen title="Mobile" label="files" value={98} />
            <FolderYellow title="Illustration" label="files" value={154} />
          </span>
        </TabPanel>
        <TabPanel>
          <span className={classes.folderWrapper}>
            <FolderBlue title="UI/UX" label="files" value={178} />
            <FolderRed title="Design" label="files" value={154} />
            <FolderGreen title="Mobile" label="files" value={98} />
            <FolderYellow title="Illustration" label="files" value={154} />
          </span>
        </TabPanel>
        <TabPanel>
          <span className={classes.folderWrapper}>
            <FolderBlue title="UI/UX" label="files" value={178} />
            <FolderRed title="Design" label="files" value={154} />
            <FolderGreen title="Mobile" label="files" value={98} />
            <FolderYellow title="Illustration" label="files" value={154} />
          </span>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default withStyles(styles)(CustomizedTabs);
