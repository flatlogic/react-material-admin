import React from "react";
import { Grid, Box, IconButton } from "@material-ui/core";
import { Navigation } from "@material-ui/icons";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import {
  Favorite as LikeIcon,
  Chat as CommentsIcon,
  ChatBubble as ChatIcon,
} from "@material-ui/icons";
import useStyles from './styles'

//images
import img1 from "../../images/a2.jpg";
import img2 from "../../images/a4.jpg";
import img3 from "../../images/profile.jpg";

//components
import {
  Typography,
  Avatar,
  Link,
  Input,
} from "../../components/Wrappers";
import { Annotation, Timestep, Circle } from "../../components/Timeline";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: parseFloat(-37.813179),
        lng: parseFloat(144.950259),
      }}
    >
      <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
    </GoogleMap>
  )),
);

export default function TimelineComp() {
  const classes = useStyles()
  return (
    <>
      <PageTitle title="Timeline" />
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Annotation>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} flexDirection="column">
                    <Box display="flex">
                      <Avatar src={img1} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box fontWeight={"fontWeightBold"}>
                          <Link to="#" color="primary">
                            Jessica Nilson
                          </Link>{" "}
                          @jess
                        </Box>
                        <Box fontSize={".875rem"}>
                          10:12 am - Publicly near Minsk
                        </Box>
                      </Typography>
                    </Box>
                    <Box height={200} width={"100%"} mx={"-24px"} mt={2}>
                      <BasicMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
                        loadingElement={
                          <div
                            style={{ height: "inherit", width: "inherit" }}
                          />
                        }
                        containerElement={
                          <div
                            style={{
                              height: "100%",
                              width: "calc(100% + 48px)",
                            }}
                          />
                        }
                        mapElement={<div style={{ height: "100%" }} />}
                      />
                    </Box>
                    <Box display="flex" ml={"-12px"} mt={1}>
                      <IconButton aria-label="like">
                        <LikeIcon />
                      </IconButton>
                      <IconButton aria-label="comments">
                        <CommentsIcon />
                      </IconButton>
                    </Box>
                    <Box display="flex" mt={2}>
                      <Avatar src={img1} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          display="flex"
                          alignItems="center"
                          fontSize={".77rem"}
                        >
                          <Link to="#" color="primary">
                            Jessica Nilson
                          </Link>{" "}
                          <Box
                            fontSize={".7rem"}
                            fontWeight="fontWeightRegular"
                            ml={1}
                          >
                            7 mins ago
                          </Box>
                        </Box>
                        <Box fontSize={".8rem"}>
                          Someone said they were the best people out there just
                          few years ago. Don't know better options.
                        </Box>
                      </Typography>
                    </Box>
                    <Box display="flex" mt={2}>
                      <Avatar src={img2} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          display="flex"
                          alignItems="center"
                          fontSize={".77rem"}
                        >
                          <Link to="#" color="primary">
                            Ignacio Abad
                          </Link>{" "}
                          <Box
                            fontSize={".7rem"}
                            fontWeight="fontWeightRegular"
                            ml={1}
                          >
                            6 mins ago
                          </Box>
                        </Box>
                        <Box fontSize={".8rem"}>
                          True. Heard absolutely the same.
                        </Box>
                      </Typography>
                    </Box>
                    <Box display="flex" mt={3}>
                      <Avatar color="primary" style={{ marginRight: 8 }}>
                        P
                      </Avatar>
                      <Input
                        placeholder="Write your comment..."
                        style={{ flexGrow: 1 }}
                      />
                    </Box>
                  </Box>
                </Widget>
              </Box>
              <Circle color={"primary"}>
                <Navigation className={classes.icon}/>
              </Circle>
              <Timestep day={"yesterday"} timestep={"8:03 pm"} />
            </Annotation>
            <Annotation>
              <Timestep day={"yesterday"} timestep={"9:03 am"} right />
              <Circle color={"primary"}>
                <ChatIcon className={classes.icon}/>
              </Circle>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} flexDirection="column">
                    <Box display="flex">
                      <Avatar src={img3} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box fontWeight={"fontWeightBold"}>
                          <Link to="#" color="primary">
                            Bob Nilson
                          </Link>{" "}
                          @nils
                        </Box>
                        <Box fontSize={".875rem"}>
                          February 22, 2014 at 01:59 PM
                        </Box>
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      There is no such thing as maturity. There is instead an
                      ever-evolving process of maturing. Because when there is a
                      maturity, there is ...
                    </Box>
                    <Box display="flex" ml={"-12px"} mt={1}>
                      <IconButton aria-label="like">
                        <LikeIcon />
                      </IconButton>
                      <IconButton aria-label="comments">
                        <CommentsIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Widget>
              </Box>
            </Annotation>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
