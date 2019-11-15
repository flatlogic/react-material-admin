import React from "react";
import { Grid, Box } from "@material-ui/core";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// components
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function CarouselComp() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Widget title="Default Carousel" disableWidgetMenu>
            <Typography>
              The carousel is a slideshow for cycling through a series of
              content, built with CSS 3D transforms and a bit of JavaScript. It
              works with a series of images, text, or custom markup. It also
              includes support for previous/next controls and indicators.{" "}
            </Typography>
            <Box my={3}>
              <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={true}
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={img1}
                          alt="First slide"
                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={img2}
                          alt="Second slide"
                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={img3}
                          alt="Third slide"
                        />
                      </MDBView>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
