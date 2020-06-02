import React, { useEffect } from 'react'
import { Grid, Box, TextField } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useParams } from 'react-router'
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
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext'
import {
  useUserState,
} from '../../context/UserContext'


import { actions } from '../../context/ManagementContext'

const EditUser = () => {
    const classes = useStyles()
    const [tab, setTab] = React.useState(0)
    const [data, setData] = React.useState(null);
    let { id } = useParams();
    const handleChangeTab = (event, newValue) => {
        setTab(newValue)
    }

    var managementDispatch = useManagementDispatch()
    var managementValue = useManagementState()
    let userState = useUserState();

    useEffect(() => {
        //  const res = actions.doFind(id)(managementDispatch)
        //   console.log('with id', res)
        //   setData(managementValue);
      async function init() {
        if (id !== 'edit') {
          
          await actions.doFind(id)(managementDispatch)
          setTimeout(() => console.log('with id', managementValue),1000)
          setData(managementValue);
        } else {
          console.log('without id',userState)
          setData(userState)
        }
      }
      
      init();
      //console.log(managementValue, userState, id)
    }, [managementDispatch, id])

    function handleSubmit() {
      actions.doUpdate(id, data)(managementDispatch)
    }

    // function handleChange(e) {
    //   setData({
    //     ...data,
    //     [e.target.name]: e.target.value,
    //   });
    // }
    console.log('render ONe')
    return (
        <Grid container spacing={3}>
          <h1>{id}</h1>
          <h2>-> {managementValue && managementValue.currentUser && managementValue.currentUser.firstName}</h2>
            <Grid item xs={12}>
                <Widget>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Tabs
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
                                        defaultValue={managementValue && managementValue.currentUser && managementValue.currentUser.firstName}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        value={'Username@gmail.com'}
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
                                            labelId="demo-simple-select-outlined-label-2"
                                            id="demo-simple-select-outlined-2"
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
                                                    color="secondary"
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
                                <Button variant={'contained'} color={'success'} onClick={handleSubmit}>
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
