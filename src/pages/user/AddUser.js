import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import { toast } from 'react-toastify'
import Axios from 'axios'
import config from '../../config'
import uuid from 'uuid/v4'

import Notification from "../../components/Notification";

import { Button, Typography } from '../../components/Wrappers'
import Widget from '../../components/Widget'

import { actions } from '../../context/ManagementContext'
import {
  useManagementDispatch,
} from '../../context/ManagementContext'


function getSteps() {
    return ['Create Account', 'User Details', 'Business Details', 'Social']
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Create New Account'
        case 1:
            return 'Create User Details'
        case 2:
            return 'Business Details'
        case 3:
            return 'Social'
        default:
            return ''
    }
}

const AddUser = () => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [skipped, setSkipped] = React.useState(new Set())
    const [newUser, setNewUser] = React.useState({
      avatars: [],
      disabled: null,
      email: '',
      emailVerificationToken: null,
      emailVerificationTokenExpiresAt: null,
      emailVerified: true,
      firstName: '',
      fullName: '',
      lastName: '',
      password: null,
      passwordResetToken: null,
      passwordResetTokenExpiresAt: null,
      phoneNumber: '',
      role: 'user',
    });
    function handleChange(e) {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
    }
    const fileInput = React.useRef(null);
    const steps = getSteps()
    const classes = useStyles()

    function extractExtensionFrom(filename) {
      if (!filename) {
        return null;
      }
    
      const regex = /(?:\.([^.]+))?$/;
      return regex.exec(filename)[1];
    }

    const uploadToServer = async (file, path, filename) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('filename', filename);
      const uri = `${config.baseURLApi}/file/upload/${path}`;
      await Axios.post(uri, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
  
      const privateUrl = `${path}/${filename}`;
  
      return `${config.baseURLApi}/file/download?privateUrl=${privateUrl}`;
    }

    const handleFile = async (event) => {
      const file = event.target.files[0];
  
      const extension = extractExtensionFrom(file.name);
      const id = uuid();
      const filename = `${id}.${extension}`;
      const privateUrl = `users/avatar/${filename}`;
  
      const publicUrl = await uploadToServer(
        file,
        'users/avatar',
        filename,
      );
      let avatarObj = {
        id: id,
        name: file.name,
        sizeInBytes: file.size,
        privateUrl,
        publicUrl,
        new: true      
      }

      setNewUser({
          ...newUser,
          avatars: [...newUser.avatars, avatarObj]
      })

      return ;
    }
    const isStepSkipped = step => {
        return skipped.has(step)
    }

    var managementDispatch = useManagementDispatch()
    const history = useHistory()
    const doSubmit = (id, data) => {
        actions.doCreate(data, history)(managementDispatch);
      
    };

    const handleNext = () => {
        let newSkipped = skipped
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1)
        setSkipped(newSkipped)

        if (activeStep === 3) {
          doSubmit(null, newUser, history)
          sendNotification()
        }
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    const deleteOneImage = (id) => {
      setNewUser({
        ...newUser,
        avatars: newUser.avatars.filter(avatar => avatar.id !== id)
      })
    }

    function sendNotification() {
      const componentProps = {
        type: "feedback",
        message: "User added!",
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
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Widget>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}
                            if (isStepSkipped(index)) {
                                stepProps.completed = false
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps} classes={{completed: classes.stepCompleted}}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
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
                            <Typography
                                variant={'h5'}
                                weight={'medium'}
                                style={{ marginBottom: 30 }}
                            >
                                {getStepContent(activeStep)}
                            </Typography>
                            {activeStep === 0 ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="Username"
                                        onChange={handleChange}
                                        name="fullName"
                                        value={newUser.fullName || ''}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText="Please enter your username"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Email Address"
                                        onChange={handleChange}
                                        value={newUser.email || ''}
                                        name="email"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'We’ll never share your email with anyone else'
                                        }
                                        type={'email'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        onChange={handleChange}
                                        name="password"
                                        value={newUser.password || ''}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'Enter your password. Min 6 characters long'
                                        }
                                        type={'password'}
                                    />
                                    <FormControl
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Role
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={newUser.role || "user"}
                                            defaultValue="User"
                                            name="role"
                                            onChange={handleChange}
                                            label="Role"
                                        >
                                            <MenuItem value="user">User</MenuItem>
                                            <MenuItem value="admin">Admin</MenuItem>
                                        </Select>
                                        <FormHelperText
                                            id={'demo-simple-select-outlined'}
                                        >
                                            Please choose the role
                                        </FormHelperText>
                                    </FormControl>
                                </>
                            ) : activeStep === 1 ? (
                                <>
                                    <Typography weight={'medium'}>
                                        Photo:
                                    </Typography>
                                    <div class={classes.galleryWrap}>
                                    {newUser && newUser.avatars && newUser.avatars.length !== 0 ? (
                                      newUser.avatars.map((avatar, idx) => (
                                        <div className={classes.imgWrap}>
                                          <span className={classes.deleteImageX} onClick={() => deleteOneImage(avatar.id)}>×</span>
                                          <img
                                              src={avatar.publicUrl}
                                              alt="avatar"
                                              height={'100%'}
                                          />                                          
                                        </div>
                                      ))
                                    ): null}
                                    </div>
                                    <label
                                      className={classes.uploadLabel}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      {'Upload an image'}
                                        <input style={{ display: 'none' }} accept="image/*" type="file" ref={fileInput} onChange={handleFile} />
                                    </label>
                                    <Typography
                                        size={'sm'}
                                        style={{ marginBottom: 35 }}
                                    >
                                        .PNG, .JPG, .JPEG
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        label="First Name"
                                        onChange={handleChange}
                                        name="firstName"
                                        value={newUser.firstName || ''}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText="Enter your first name"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        onChange={handleChange}
                                        name="lastName"
                                        value={newUser.lastName || ''}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your last name'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Contact number"
                                        onChange={handleChange}
                                        value={newUser.phoneNumber || ''}
                                        name="phoneNumber"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'Enter your contact number '
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        value={newUser.email || ''}
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your email'}
                                        type={'email'}
                                    />
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Country
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={newUser.role || "user"}
                                            defaultValue="User"
                                            name="role"
                                            onChange={handleChange}
                                            label="Role"
                                        >
                                            <MenuItem value="user">
                                                User
                                            </MenuItem>
                                            <MenuItem value="admin">
                                                Admin
                                            </MenuItem>
                                        </Select>
                                        <FormHelperText
                                            id={'demo-simple-select-outlined'}
                                        >
                                            Choose your role
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            State
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={''}
                                            label="State"
                                        >
                                            <MenuItem value={10}>User</MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                        <FormHelperText
                                            id={'demo-simple-select-outlined'}
                                        >
                                            Choose your state
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            City
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={''}
                                            label="City"
                                        >
                                            <MenuItem value={10}>User</MenuItem>
                                            <MenuItem value={20}>
                                                Admin
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Super Admin
                                            </MenuItem>
                                        </Select>
                                        <FormHelperText
                                            id={'demo-simple-select-outlined'}
                                        >
                                            Choose your city
                                        </FormHelperText>
                                    </FormControl>
                                    <TextField
                                        id="outlined-basic"
                                        label="Address"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your adress'}
                                    />
                                </>
                            ) : activeStep === 2 ? (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="Company Name"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText="Enter your company name"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Company Registered ID"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'Enter your company registered ID'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Cmpany Email"
                                        onChange={handleChange}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your company email'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        value={''}
                                        label="Company Contact"
                                        onChange={handleChange}
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'Enter your company cpntact'
                                        }
                                    />
                                </>
                            ) : (
                                <>
                                    <TextField
                                        id="outlined-basic"
                                        label="Facebook"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText="Enter your Facebook link"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Twitter"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your Twitter link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Instagram"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your Instagram link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="GitHub"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your GitHub link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="CodePen"
                                        variant="outlined"
                                        onChange={handleChange}
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your CodePen link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Slack"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your Slack link'}
                                    />
                                </>
                            )}
                            <div>
                                <div>
                                    {activeStep === 0 ? (
                                        <Box
                                            display={'flex'}
                                            justifyContent={'flex-end'}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                            >
                                                Next
                                            </Button>
                                        </Box>
                                    ) : (
                                        <Box
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Button
                                                onClick={handleBack}
                                                variant={'outlined'}
                                                color={'primary'}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                            >
                                                {activeStep === steps.length - 1
                                                    ? 'Finish'
                                                    : 'Next'}
                                            </Button>
                                        </Box>
                                    )}
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Widget>
            </Grid>
        </Grid>
    )
}

export default AddUser
