import React from 'react';
import { withStyles, useTheme } from '@mui/styles';
import {Tabs, Typography, Box} from '@mui/material';
import Tab from '@mui/material/Tab';

import FolderBlue from '../Icons/FolderBlue';
import FolderBlueDark from '../Icons/FolderBlueDark';
import FolderRed from '../Icons/FolderRed';
import FolderRedDark from '../Icons/FolderRedDark';
import FolderGreen from '../Icons/FolderGreen';
import FolderGreenDark from '../Icons/FolderGreenDark';
import FolderYellow from '../Icons/FolderYellow';
import FolderYellowDark from '../Icons/FolderYellowDark';
import SwipeableViews from 'react-swipeable-views';

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
          <Typography component={'div'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AntTabs = withStyles((theme) => ({
  root: {
    borderBottom: `1px solid rgba(185, 185, 185, 0.3)`,
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(0),
    color: theme.palette.text.primary,
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
    '&:hover': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.text.primary,
    },
    '&:focus': {
      color: theme.palette.text.primary,
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
  codeComponent: {
    flexGrow: 1,
    borderRadius: '10px', 
    backgroundColor: 'red',  
    border: '3px solid black',
    '&:: -webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 7px rgba(0,0,0,.3)', 
      borderRadius: '10px', 
      backgroundColor: '#F5F5F5'
    },
    '&:: -webkit-scrollbar': {
      width: '5px', 
      backgroundColor: '#F5F5F5', 
      borderRadius: '10px'
    }, 
    '&:: -webkit-scrollbar-thumb': {
      width: '4px', 
      height: '5px',
      borderRadius: '10px', 
      '-webkit-box-shadow': 'inset 0 0 7px rgba(0,0,0,.3)', 
      backgroundColor: 'white'
    } 
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
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setIndex(index)
  }

  const handleChangeIndex = (index) => {
    setIndex(index)
  }

  // eslint-disable-next-line no-unused-vars
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();

  return (
    <div className={classes.root}>
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
        style={{ padding: '24px 0 0 '}}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel>
          <span className={classes.folderWrapper}>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderBlueDark title="UI/UX" label="files" value={178} /> 
              : <FolderBlue title="UI/UX" label="files" value={178} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderRedDark title="Design" label="files" value={154} /> 
              : <FolderRed title="Design" label="files" value={154} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderGreenDark title="Mobile" label="files" value={98} /> 
              : <FolderGreen title="Mobile" label="files" value={98} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderYellowDark title="Illustration" label="files" value={154} /> 
              : <FolderYellow title="Illustration" label="files" value={154} />
            }
          </div>
          </span>
        </TabPanel>
        <TabPanel>
          <span className={classes.folderWrapper}>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderBlueDark title="UI/UX" label="files" value={178} /> 
              : <FolderBlue title="UI/UX" label="files" value={178} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderRedDark title="Design" label="files" value={154} /> 
              : <FolderRed title="Design" label="files" value={154} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderGreenDark title="Mobile" label="files" value={98} /> 
              : <FolderGreen title="Mobile" label="files" value={98} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderYellowDark title="Illustration" label="files" value={154} /> 
              : <FolderYellow title="Illustration" label="files" value={154} />
            }
          </div>
          </span>
        </TabPanel>
        <TabPanel>
          <span className={classes.folderWrapper}>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderBlueDark title="UI/UX" label="files" value={178} /> 
              : <FolderBlue title="UI/UX" label="files" value={178} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderRedDark title="Design" label="files" value={154} /> 
              : <FolderRed title="Design" label="files" value={154} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderGreenDark title="Mobile" label="files" value={98} /> 
              : <FolderGreen title="Mobile" label="files" value={98} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderYellowDark title="Illustration" label="files" value={154} /> 
              : <FolderYellow title="Illustration" label="files" value={154} />
            }
          </div>
          </span>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default withStyles(styles)(CustomizedTabs);
