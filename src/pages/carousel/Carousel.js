import React from "react";
import { Grid, MobileStepper } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//images
import img1 from "../../images/carousel/1.jpg";
import img2 from "../../images/carousel/2.jpg";
import img3 from "../../images/carousel/3.jpg";

//components
import { Button, Typography } from "../../components/Wrappers";
import Widget from "../../components/Widget";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
  }
];

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
  }
];

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
  }
];

const useStyles = makeStyles(theme => ({
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

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Widget
          square
          elevation={0}
          header={<Typography>{places1[activeStep].label}</Typography>}
          disableWidgetMenu
          noBodyPadding
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {places1.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Widget>
      </Grid>
      <Grid item xs={6}>
        <Widget
          square
          elevation={0}
          header={<Typography>{places2[activeStep].label}</Typography>}
          disableWidgetMenu
          noBodyPadding
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {places2.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Widget>
      </Grid>
      <Grid item xs={12}>
        <Widget
          square
          elevation={0}
          header={<Typography>{places3[activeStep].label}</Typography>}
          disableWidgetMenu
          noBodyPadding
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {places3.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="progress"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Widget>
      </Grid>
    </Grid>
  );
}

export default Carousel;
