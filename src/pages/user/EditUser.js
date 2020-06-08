import React, { useEffect } from 'react'
import { Grid, Box, TextField } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useParams } from 'react-router'
import Checkbox from '@material-ui/core/Checkbox'
import Switch from '@material-ui/core/Switch'
import { useLocation, useHistory } from 'react-router-dom';
import useStyles from './styles'

import {
    PersonOutline as PersonOutlineIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
} from '@material-ui/icons'

import photo from '../../images/profile.jpg'
import Widget from '../../components/Widget'
import { Typography, Button } from '../../components/Wrappers'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { toast } from 'react-toastify'

import Notification from '../../components/Notification'
import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext'


import { actions } from '../../context/ManagementContext'

const EditUser = () => {
    const classes = useStyles()
    const [tab, setTab] = React.useState(0)
    const [password, setPassword] = React.useState({
      newPassword: '',
      confirmPassword: '',
      currentPassword: '',
    });
    const [data, setData] = React.useState(null)
    const [editable, setEditable] = React.useState(false)
    let { id } = useParams();
    const handleChangeTab = (event, newValue) => {
        setTab(newValue)
    }
    const location = useLocation();
    const managementDispatch = useManagementDispatch()
    const managementValue = useManagementState()
    const history = useHistory();
    function sendNotification() {
      const componentProps = {
        type: "feedback",
        message: "User edited!",
        variant: "contained",
        color: "success"
      };
      const options = {
        type: "info",
        position: toast.POSITION.TOP_RIGHT,
        progressClassName: classes.progress,
        className: classes.notification,
        timeOut: 1000
      };
      return toast(
        <Notification
          {...componentProps}
          className={classes.notificationComponent}
        />,
        options
      );
    }
    useEffect(() => {
      actions.doFind(id)(managementDispatch)
      actions.doFetch({}, false)(managementDispatch);
    }, []);

    useEffect(() => {
      
      if (location.pathname.includes('edit')) {
        setEditable(true);
      }
    }, [location.pathname]);


    useEffect(() => {
      if (id !== 'edit') {
        setData(managementValue.currentUser)
      } else {
        const currentUser = managementValue.rows.find(x => x.id === localStorage.getItem('user_id'));
        setData(currentUser)
      }
    }, [managementDispatch, managementValue, id])

    function handleSubmit() {
      if (id === 'edit') {
        actions.doUpdate(localStorage.getItem('user_id'), data)(managementDispatch)
      } else {
        actions.doUpdate(id, data)(managementDispatch)        
      }
      sendNotification()
      history.push('/app/user/list')
    }

    function handleUpdatePassword() {
      actions.doChangePassword(password)(managementDispatch)
    }

    function handleChangePassword(e) {
      setPassword({
        ...password,
        [e.target.name]: e.target.value,
      })
    }

    function handleChange(e) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }

    function onDrop(pictureFiles, pictureDataURLs) {
      setData({
          ...data,
          avatars: [{publicUrl: pictureDataURLs}],
      });
    }

    return (
        <Grid container spacing={3}>
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
                                        value={data && data.firstName}
                                        onChange={handleChange}
                                        name="firstName"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        value={data && data.email}
                                        name="email"
                                        onChange={handleChange}
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
                                            defaultValue="user"
                                            value={data && data.role}
                                            name="email"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"admin"}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={"user"}>
                                                User
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
                                        defaultValue="Name"
                                        value={data && data.firstName}
                                        name="firstName"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        defaultValue={'Last Name'}
                                        value={data && data.lastName}
                                        name="lastName"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'1-555-666-7070'}
                                        value={data && data.phone}
                                        name="phone"
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        type={'email'}
                                        defaultValue={'Jane@gmail.com'}
                                        value={data && data.email}
                                        name="email"
                                        onChange={handleChange}
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
                                        value={password.currentPassword || ''}
                                        name="currentPassword"
                                        onChange={handleChangePassword}
                                        helperText={'Forgot Password?'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'New Password'}
                                        value={password.newPassword || ''}
                                        name="newPassword"
                                        onChange={handleChangePassword}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        defaultValue={'Verify Password'}
                                        value={password.confirmPassword || ''}
                                        name="confirmPassword"
                                        onChange={handleChangePassword}
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
                            {editable && 
                              <Box
                                  display={'flex'}
                                  justifyContent={'space-between'}
                              >
                                {tab !== 2 ? (
                                  <>
                                  <Button variant={'outlined'} color={'primary'}>
                                      Reset
                                  </Button>
                                  <Button variant={'contained'} color={'success'} onClick={handleSubmit}>
                                      Save
                                  </Button>
                                  </>                                
                                ) : (
                                  <>
                                  <Button variant={'outlined'} color={'primary'}>
                                      Reset
                                  </Button>
                                  <Button variant={'contained'} color={'success'} onClick={handleUpdatePassword}>
                                      Save Password
                                  </Button>
                                  </> 
                                )}

                              </Box>                              
                             
                            }
                        </Box>
                    </Grid>
                </Widget>
            </Grid>
        </Grid>
    )
}

export default EditUser
