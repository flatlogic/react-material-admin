import React from 'react'
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'

import { ArrowRightAlt as ArrowRight } from '@material-ui/icons'

import useStyles from '../../styles'
import useStyles2 from '../overview/styles'

//components
import Widget from '../../../Widget'
import { Typography, Link } from '../../../Wrappers'
import Code from '../../../Code'

const TypographyPage = () => {
    const classes = useStyles()
    const classes2 = useStyles2()
    const [value, setValue] = React.useState(0)
    const [weightValue, setWeightValue] = React.useState(0)
    const [colorValue, setColorValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleChangeWeight = (event, newValue) => {
        setWeightValue(newValue)
    }
    const handleChangeColor = (event, newValue) => {
        setColorValue(newValue)
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
                Provide typography on your page.
            </Typography>
            <Code>{`import { Typography } from './components/Wrappers';`}</Code>
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
                <Typography variant={'body1'}>Default typography</Typography>
                <Typography size={'sm'} variant={'body1'}>
                    SM typography
                </Typography>
                <Typography size={'md'} variant={'body1'}>
                    MD typography
                </Typography>
                <Typography size={'xl'} variant={'body1'}>
                    XL typography
                </Typography>
                <Typography size={'xxl'} variant={'body1'}>
                    XXL typography
                </Typography>
            </TabPanel>
            <TabPanel index={1} value={value}>
                <Code>{`
    <Typography variant={"body1"}>Default typography</Typography>
    <Typography size={"sm"} variant={"body1"}>SM typography</Typography>
    <Typography size={"md"} variant={"body1"}>MD typography</Typography>
    <Typography size={"xl"} variant={"body1"}>XL typography</Typography>
    <Typography size={"xxl"} variant={"body1"}>XXL typography</Typography>
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
                <Typography variant={'body1'}>Default weight</Typography>
                <Typography weight="light" variant={'body1'}>
                    Light weight
                </Typography>
                <Typography weight="medium" variant={'body1'}>
                    Medium typography
                </Typography>
                <Typography weight="bold" variant={'body1'}>
                    Bold typography
                </Typography>
            </TabPanel>
            <TabPanel index={1} value={weightValue}>
                <Code>{`
    <Typography variant={"body1"}>Default weight</Typography>
    <Typography weight="light" variant={"body1"}>Light weight</Typography>
    <Typography weight="medium" variant={"body1"}>Medium typography</Typography>
    <Typography weight="bold" variant={"body1"}>Bold typography</Typography>
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
                <Typography variant={'body1'}>Default</Typography>
                <Typography color={'primary'} variant={'body1'}>
                    Primary
                </Typography>
                <Typography color={'secondary'} variant={'body1'}>
                    Secondary
                </Typography>
                <Typography color={'warning'} variant={'body1'}>
                    Warning
                </Typography>
                <Typography color={'success'} variant={'body1'}>
                    Success
                </Typography>
                <Typography color={'info'} variant={'body1'}>
                    Success
                </Typography>
            </TabPanel>
            <TabPanel index={1} value={colorValue}>
                <Code>{`
    <Typography variant={'body1'}>Default</Typography>
    <Typography color={"primary"} variant={'body1'}>
        Primary
    </Typography>
    <Typography color={"secondary"} variant={'body1'}>
        Secondary
    </Typography>
    <Typography color={"warning"} variant={'body1'}>
        Warning
    </Typography>
    <Typography color={"success"} variant={'body1'}>
        Success
    </Typography>
    <Typography color={"info"} variant={'body1'}>
        Success
    </Typography>
                `}</Code>
            </TabPanel>
            <Box mt={1}>
                <Link
                    href={
                        'https://material-ui.com/api/typography/#typography-api'
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
    )
}

export default TypographyPage
