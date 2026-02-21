import React from "react";
import { Grid, MobileStepper } from "@mui/material";
import { makeStyles, useTheme } from "styles/muiCompat";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

//images
import img1 from "../../images/carousel/1.jpg";
import img2 from "../../images/carousel/2.jpg";
import img3 from "../../images/carousel/3.jpg";

//components
import { Button, Typography } from "../../components/Wrappers";
import Widget from "../../components/Widget";

const places1 = [
{
  label: "San Francisco – Oakland Bay Bridge, United States",
  imgPath: img1
},
{
  label: "Alaska - Glacier Bay National Park, United States",
  imgPath: img2
},
{
  label: "Bali, Indonesia",
  imgPath: img3
}];


const places2 = [
{
  label: "Alaska - Glacier Bay National Park, United States",
  imgPath: img2
},
{
  label: "Bali, Indonesia",
  imgPath: img3
},
{
  label: "San Francisco – Oakland Bay Bridge, United States",
  imgPath: img1
}];


const places3 = [
{
  label: "Bali, Indonesia",
  imgPath: img3
},
{
  label: "San Francisco – Oakland Bay Bridge, United States",
  imgPath: img1
},
{
  label: "Alaska - Glacier Bay National Park, United States",
  imgPath: img2
}];


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%"
  }
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = places1.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 5000);

    return () => clearInterval(timer);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={3}>
      <Grid size={6}>
        <Widget
          square
          elevation={0}
          header={<Typography>{places1[activeStep].label}</Typography>}
          disableWidgetMenu
          noBodyPadding>
          
          <div>
            <img
              className={classes.img}
              src={places1[activeStep].imgPath}
              alt={places1[activeStep].label} />
            
          </div>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}>
              
                Next
                {theme.direction === "rtl" ?
              <KeyboardArrowLeft /> :

              <KeyboardArrowRight />
              }
              </Button>
            }
            backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}>
              
                {theme.direction === "rtl" ?
              <KeyboardArrowRight /> :

              <KeyboardArrowLeft />
              }
                Back
              </Button>
            } />
          
        </Widget>
      </Grid>
      <Grid size={6}>
        <Widget
          square
          elevation={0}
          header={<Typography>{places2[activeStep].label}</Typography>}
          disableWidgetMenu
          noBodyPadding>
          
          <div>
            <img
              className={classes.img}
              src={places2[activeStep].imgPath}
              alt={places2[activeStep].label} />
            
          </div>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}>
              
                Next
                {theme.direction === "rtl" ?
              <KeyboardArrowLeft /> :

              <KeyboardArrowRight />
              }
              </Button>
            }
            backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}>
              
                {theme.direction === "rtl" ?
              <KeyboardArrowRight /> :

              <KeyboardArrowLeft />
              }
                Back
              </Button>
            } />
          
        </Widget>
      </Grid>
      <Grid size={12}>
        <Widget
          square
          elevation={0}
          header={<Typography>{places3[activeStep].label}</Typography>}
          disableWidgetMenu
          noBodyPadding>
          
          <div>
            <img
              className={classes.img}
              src={places3[activeStep].imgPath}
              alt={places3[activeStep].label} />
            
          </div>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="progress"
            activeStep={activeStep}
            nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}>
              
                Next
                {theme.direction === "rtl" ?
              <KeyboardArrowLeft /> :

              <KeyboardArrowRight />
              }
              </Button>
            }
            backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}>
              
                {theme.direction === "rtl" ?
              <KeyboardArrowRight /> :

              <KeyboardArrowLeft />
              }
                Back
              </Button>
            } />
          
        </Widget>
      </Grid>
    </Grid>);

}

export default Carousel;