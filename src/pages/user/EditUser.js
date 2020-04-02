import React from 'react'
import { Grid, Box, TextField } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import Checkbox from '@material-ui/core/Checkbox'
import Switch from '@material-ui/core/Switch'

import useStyles from './styles'

import {
    PersonOutline as PersonOutlineIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
} from '@material-ui/icons'

import Widget from '../../components/Widget'
import { Typography, Button } from '../../components/Wrappers'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import photo from '../../images/profile.jpg'

const EditUser = () => {
    const classes = useStyles()
    const [tab, setTab] = React.useState(0)

    const handleChangeTab = (event, newValue) => {
        setTab(newValue)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Widget>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Tabs
                            value={0}
                            indicatorColor="primary"
                            textColor="primary"
                            value={tab}
                            onChange={handleChangeTab}
                            aria-label="full width tabs example"
                        >
                            <Tab
                                label="ACCOUNT"
                                icon={<PersonOutlineIcon />}
                                classes={{ wrapper: classes.icon }}
                            />
                            <Tab
                                label="PROFILE"
                                icon={<PersonOutlineIcon />}
                                classes={{ wrapper: classes.icon }}
                            />
                            <Tab
                                label="CHANGE PASSWORD"
                                icon={<LockIcon />}
                                classes={{ wrapper: classes.icon }}
                            />
                            <Tab
                                label="SETTINGS"
                                icon={<SettingsIcon />}
                                classes={{ wrapper: classes.icon }}
                            />
                        </Tabs>
                    </Box>
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget>
                    <Grid item justify={'center'} container>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            width={600}
                        >
                            {tab === 0 ? (
                                <>
                                    <Typography
                                        variant={'h5'}
                                        weight={'medium'}
                                        style={{ marginBottom: 30 }}
                                    >
                                        Account
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        defaultValue={'Username'}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        defaultValue={'Username@gmail.com'}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    />
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={20}
                                        >
                                            <MenuItem value={10}>User</MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </>
                            ) : tab === 1 ? (
                                <>
                                    <Typography
                                        variant={'h5'}
                                        weight={'medium'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        Personal Information
                                    </Typography>
                                    <Typography weight={'medium'}>
                                        Photo:
                                    </Typography>
                                    <img
                                        src={photo}
                                        alt="photo"
                                        width={123}
                                        style={{ borderRadius: 8 }}
                                    />
                                    <Typography
                                        size={'sm'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        .PNG, .JPG, .JPEG
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        defaultValue={'Robbert'}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        defaultValue={'Cotton'}
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'1-555-666-7070'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        type={'email'}
                                        defaultValue={'Jane@gmail.com'}
                                    />
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={10}
                                        >
                                            <MenuItem value={10}>
                                                United States
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={10}
                                        >
                                            <MenuItem value={10}>
                                                California
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={10}
                                        >
                                            <MenuItem value={10}>
                                                Polo Alto
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={
                                            '1258 Riverside Drive Redding'
                                        }
                                    />
                                    <Typography
                                        variant={'h5'}
                                        weight={'medium'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        Company Information
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'Company'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'AD1234567891'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'Company@gmail.com'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'1-353-969-7070'}
                                    />
                                    <Typography
                                        variant={'h5'}
                                        weight={'medium'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        Social
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={
                                            'https://www.facebook.com/janejonson'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={
                                            'https://twitter/janejonson'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={
                                            'https://www.instagram.com/janejonson'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={
                                            'https://github.com/janejonson'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={
                                            'https://codepen.io/janejonson'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'@janejonson'}
                                    />
                                </>
                            ) : tab === 2 ? (
                                <>
                                    <Typography
                                        variant={'h5'}
                                        weight={'medium'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        Password
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'Current Password'}
                                        helperText={'Forgot Password?'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'New Password'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'Verify Password'}
                                    />
                                </>
                            ) : (
                                <>
                                    <Typography
                                        variant={'h5'}
                                        weight={'medium'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        Settings
                                    </Typography>
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={10}
                                        >
                                            <MenuItem value={10}>
                                                English
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Typography weight={'bold'}>
                                        Communication:
                                    </Typography>
                                    <Box display={'flex'}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked
                                                    name="checkedB"
                                                    color="secondary"
                                                />
                                            }
                                            label="Email"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="checkedB"
                                                    color="secondary"
                                                />
                                            }
                                            label="Messages"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Phone"
                                        />
                                    </Box>
                                    <Box display={"flex"} mt={2} alignItems={"center"}>
                                        <Typography weight={"medium"}>
                                            Email notification
                                        </Typography>
                                        <Switch color={"primary"} checked />
                                    </Box>
                                    <Box display={"flex"} mt={2} mb={2} alignItems={"center"}>
                                        <Typography weight={"medium"}>
                                            Send copy to personal email
                                        </Typography>
                                        <Switch color={"primary"} />
                                    </Box>
                                </>
                            )}
                            <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                            >
                                <Button variant={'outlined'} color={'primary'}>
                                    Reset
                                </Button>
                                <Button variant={'contained'} color={'success'}>
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Widget>
            </Grid>
        </Grid>
    )
}

export default EditUser
