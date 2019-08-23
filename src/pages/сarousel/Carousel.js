import React from "react";
import { Grid, Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function Colors() {
  return (
    <>
      <PageTitle title="Carousel" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Widget title="Default Carousel" disableWidgetMenu>
            <Typography>
              There is a couple of brand colors that we're using. But all the
              time you can start to use{" "}
            </Typography>
            <Link href="https://material-ui.com/customization/color/#color">
              Material UI native color palette
            </Link>
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