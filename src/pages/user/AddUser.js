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

import useStyles from './styles'

import photo from '../../images/profile.jpg'

import { Button, Typography } from '../../components/Wrappers'
import Widget from '../../components/Widget'

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
    const steps = getSteps()
    const classes = useStyles()

    const isStepOptional = step => {
        return step === 1
    }

    const isStepSkipped = step => {
        return skipped.has(step)
    }

    const handleNext = () => {
        let newSkipped = skipped
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1)
        setSkipped(newSkipped)
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
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
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText="Please enter your username"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Email Address"
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
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'Enter your password. Min 6 characters long'
                                        }
                                        type={'password'}
                                    />
                                    <FormControl
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Role
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={''}
                                            label="Role"
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
                                            Please choose the role
                                        </FormHelperText>
                                    </FormControl>
                                </>
                            ) : activeStep === 1 ? (
                                <>
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
                                        label="First Name"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText="Enter your first name"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your last name'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Contact number"
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
                                            value={''}
                                            label="Country"
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
                                            Choose your country
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
                                        style={{ marginBottom: 35 }}
                                        helperText="Enter your company name"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Company Registered ID"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={
                                            'Enter your company registered ID'
                                        }
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Cmpany Email"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your company email'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Company Contact"
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
                                        style={{ marginBottom: 35 }}
                                        helperText="Enter your Facebook link"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Twitter"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your Twitter link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Instagram"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your Instagram link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="GitHub"
                                        variant="outlined"
                                        style={{ marginBottom: 35 }}
                                        helperText={'Enter your GitHub link'}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="CodePen"
                                        variant="outlined"
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
