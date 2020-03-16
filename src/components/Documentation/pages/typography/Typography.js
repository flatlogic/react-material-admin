import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'

import useStyles from '../../styles'

//components
import Widget from '../../../Widget'
import { Typography } from '../../../Wrappers'
import Code from '../../../Code'

const TypographyPage = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const TabPanel = ({ children, index, className = classes.tabPanel }) => {
        if (index === value) {
            return <section className={className}>{children}</section>
        }
        return null
    }
    return (
        <Widget title={'Typography'} inheritHeight disableWidgetMenu>
            <Typography variant={'body2'}>
                Provide typography on your page.
            </Typography>
            <Code>{`import { Typography } from './components/Wrappers';`}</Code>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label="Example" />
                    <Tab label="Code" />
                </Tabs>
            </AppBar>
            <TabPanel index={0}>
                <Typography variant={"body1"}>Default typography</Typography>
                <Typography size={"sm"} variant={"body1"}>SM typography</Typography>
                <Typography size={"md"} variant={"body1"}>MD typography</Typography>
                <Typography size={"xl"} variant={"body1"}>XL typography</Typography>
                <Typography size={"xxl"} variant={"body1"}>XXL typography</Typography>
            </TabPanel>
            <TabPanel index={1}>
                <Code>{`
    <Typography variant={"body1"}>Default typography</Typography>
    <Typography size={"sm"} variant={"body1"}>SM typography</Typography>
    <Typography size={"md"} variant={"body1"}>MD typography</Typography>
    <Typography size={"xl"} variant={"body1"}>XL typography</Typography>
    <Typography size={"xxl"} variant={"body1"}>XXL typography</Typography>
                `}</Code>
            </TabPanel>
        </Widget>
    )
}

export default TypographyPage
