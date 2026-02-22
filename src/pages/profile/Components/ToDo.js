import React from 'react';
import { makeStyles } from 'styles/mui';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ToDoItem from './ToDoItem';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}

const AntTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid rgba(185, 185, 185, 0.3)`,
  margin: '0 24px',
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  },
}));

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 72,
  fontSize: '14px',
  fontWeight: theme.typography.fontWeightMedium,
  marginRight: theme.spacing(4),
  color: theme.palette.text.primary,
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  '&:hover': {
    color: theme.palette.text.primary,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&:focus': {
    color: theme.palette.text.primary,
  },
}));

const styles = (theme) => ({
  root: {
    maxHeight: 575,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    overflow: 'auto',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      width: '3px',
    },
    '&::-webkit-scrollbar-track': {
      width: '3px',
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#D8D8D8',
      borderRadius: 5,
      outline: '1px solid #D8D8D8',
    },
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  folderWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
})

const useStyles = makeStyles(styles);

function CustomizedTabs() {
  const classes = useStyles();

  const [index, setIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setIndex(index)
  }

  const Todos = [
    { color: '#FFC35F', time: '10.20', title: 'Call conference with a New' },
    { color: '#536DFE', time: '10.30', title: 'Presentation Demo Ecological' },
    { color: '#3CD4A0', time: '10.50', title: 'Call with PR Manager' },
    { color: '#FFC35F', time: '11.10', title: 'Interview with a new UI/UX' },
    { color: '#FF5C93', time: '11.30', title: 'Call conference with a New' },
    { color: '#536DFE', time: '12.00', title: 'Presentation Demo Ecological' },
    { color: '#FFC35F', time: '12.40', title: 'Sales Presentation' },
    { color: '#3CD4A0', time: '13.20', title: 'Call conference in New-York' },
    { color: '#FFC35F', time: '15.20', title: 'Development of the new Widget' },
    { color: '#536DFE', time: '16.00', title: 'Code review and refactoring' },
    { color: '#FFC35F', time: '10.20', title: 'Call conference with a New' },
    { color: '#536DFE', time: '10.30', title: 'Presentation Demo Ecological' },
    { color: '#3CD4A0', time: '10.50', title: 'Call with PR Manager' },
    { color: '#FFC35F', time: '11.10', title: 'Interview with a new UI/UX' },
    { color: '#FF5C93', time: '11.30', title: 'Call conference with a New' },
    { color: '#536DFE', time: '12.00', title: 'Presentation Demo Ecological' },
    { color: '#FFC35F', time: '12.40', title: 'Sales Presentation' },
    { color: '#3CD4A0', time: '13.20', title: 'Call conference in New-York' },
    { color: '#FFC35F', time: '15.20', title: 'Development of the new Widget' },
    { color: '#536DFE', time: '16.00', title: 'Code review and refactoring' },
  ]

  return (
    <div className={classes.root}>
      <AntTabs
        value={index}
        onChange={handleChange}
      >
        <AntTab value={0} label="Today" />
        <AntTab value={1} label="This week" />
        <AntTab value={2} label="This month" />
      </AntTabs>
      <TabPanel value={index} index={0} style={{ padding: 0 }}>
        {Todos.map((item, index) => (
          <ToDoItem key={index} title={item.title} color={item.color} time={item.time} />
        ))}
      </TabPanel>
      <TabPanel value={index} index={1}>
        {Todos.map((item, index) => (
          <ToDoItem key={index} color={item.color} time={item.time} title={item.title} />
        ))}
      </TabPanel>
      <TabPanel value={index} index={2}>
        {Todos.map((item, index) => (
          <ToDoItem key={index} color={item.color} time={item.time} title={item.title} />
        ))}
      </TabPanel>
    </div>
  );
}

export default CustomizedTabs;
