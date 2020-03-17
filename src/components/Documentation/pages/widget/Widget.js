import React from 'react'
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'

import { ArrowRightAlt as ArrowRight } from '@material-ui/icons'

import useStyles from '../../styles'
import useStyles2 from '../overview/styles'

//components
import Widget from '../../../Widget'
import { Typography, Link } from '../../../Wrappers'
import Code from '../../../Code'

const WidgetPage = () => {
  const classes = useStyles()
  const classes2 = useStyles2()
  const [value, setValue] = React.useState(0)
  const [weightValue, setWeightValue] = React.useState(0)
  const [colorValue, setColorValue] = React.useState(0)
  const [value4, setValue4] = React.useState(0)
  const [value5, setValue5] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeWeight = (event, newValue) => {
    setWeightValue(newValue)
  }
  const handleChangeColor = (event, newValue) => {
    setColorValue(newValue)
  }
  const handleChangeValue4 = (event, newValue) => {
    setValue4(newValue)
  }
  const handleChangeValue5 = (event, newValue) => {
    setValue5(newValue)
  }
  const TabPanel = ({
                      children,
                      index,
                      className = classes.tabPanel,
                      value,
                    }) => {
    if (index === value) {
      return <section className={className}>{children}</section>
    }
    return null
  }
  return (
      <Widget title={'Typography'} inheritHeight disableWidgetMenu>
        <Typography variant={'body2'}>
          Provide widget on your page.
        </Typography>
        <Code>{`import Widget from './components/Widget';`}</Code>
        <AppBar position="static">
          <Tabs
              value={value}
              onChange={handleChange}
              aria-label="typography size"
          >
            <Tab label="Example" />
            <Tab label="Code" />
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={value}>
          <Widget title={"Widget example"}>
            Widget with the title
          </Widget>
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Code>{`
    <Widget title={"Widget example"}>
        Widget with the title
    </Widget>
                `}</Code>
        </TabPanel>
        <AppBar position="static" style={{ marginTop: 16 }}>
          <Tabs
              value={weightValue}
              onChange={handleChangeWeight}
              aria-label="typography weight"
          >
            <Tab label="Example" />
            <Tab label="Code" />
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={weightValue}>
          <Widget title={"Title"} subtitle={"subtitle"}>
            Widget with the title and the subtitle
          </Widget>
        </TabPanel>
        <TabPanel index={1} value={weightValue}>
          <Code>{`
    <Widget title={"Title"} subtitle={"subtitle"}>
        Widget with the title and the subtitle
    </Widget>
                `}</Code>
        </TabPanel>
        <AppBar position="static" style={{ marginTop: 16 }}>
          <Tabs
              value={colorValue}
              onChange={handleChangeColor}
              aria-label="typography weight"
          >
            <Tab label="Example" />
            <Tab label="Code" />
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={colorValue}>
          <Widget noBodyPadding>
            No body padding
          </Widget>
        </TabPanel>
        <TabPanel index={1} value={colorValue}>
          <Code>{`
    <Widget noBodyPadding>
        No body padding
    </Widget>
                `}</Code>
        </TabPanel>
        <AppBar position="static" style={{ marginTop: 16 }}>
          <Tabs
              value={value4}
              onChange={handleChangeValue4}
              aria-label="typography weight"
          >
            <Tab label="Example" />
            <Tab label="Code" />
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={value4}>
          <Widget title={"Title"} disableWidgetMenu>
            No widget menu
          </Widget>
        </TabPanel>
        <TabPanel index={1} value={value4}>
          <Code>{`
    <Widget title={"Title"} disableWidgetMenu>
        No widget menu
    </Widget>
                `}</Code>
        </TabPanel>
        <AppBar position="static" style={{ marginTop: 16 }}>
          <Tabs
              value={value5}
              onChange={handleChangeValue5}
              aria-label="typography weight"
          >
            <Tab label="Example" />
            <Tab label="Code" />
          </Tabs>
        </AppBar>
        <TabPanel index={0} value={value5}>
          <Widget header={(
              <>
              <h1>Widget header</h1>
              </>
          )}>
            Custom header
          </Widget>
        </TabPanel>
        <TabPanel index={1} value={value5}>
          <Code>{`
    <Widget header={(
              <>
              <h1>Widget header</h1>
              </>
          )}>
            Custom header
    </Widget>
                `}</Code>
        </TabPanel>
        <Box mt={1}>
          <Link
              href={
                'https://material-ui.com/api/paper/'
              }
              color={'primary'}
              className={classes2.link}
              variant={'h6'}
              target={""}
          >
            Other props <ArrowRight />
          </Link>
        </Box>
      </Widget>
  );
};

export default WidgetPage;
