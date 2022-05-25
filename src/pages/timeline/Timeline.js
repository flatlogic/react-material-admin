import React from "react";
import {
  Grid,
  Box,
  IconButton,
  Divider,
  Collapse,
  CardContent,
  TextField as Input
} from "@mui/material";
import { Navigation as NavigationIcon } from "@mui/icons-material";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import {
  Favorite as LikeIcon,
  Chat as CommentsIcon,
  ChatBubble as ChatIcon,
  FreeBreakfast as BreakfastIcon
} from "@mui/icons-material";
import useStyles from "./styles";

//images
import img1 from "../../images/timeline/a2.jpg";
import img2 from "../../images/timeline/a3.jpg";
import img3 from "../../images/timeline/profile.jpg";
import img4 from "../../images/timeline/a4.jpg";
import img5 from "../../images/timeline/a1.jpg";
import mountains from "../../images/timeline/mountains.jpeg";

//components
import { Typography, Avatar, Link, Button } from "../../components/Wrappers";
import { Annotation, Timestep, Circle } from "../../components/Timeline";
import Widget from "../../components/Widget";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: parseFloat(-37.813179),
        lng: parseFloat(144.950259)
      }}
    >
      <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
    </GoogleMap>
  ))
);

export default function TimelineComp() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            className={classes.wrapper}
          >
            <Annotation>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} flexDirection="column">
                    <Box display="flex">
                      <Avatar src={img1} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box fontWeight={"fontWeightBold"}>
                          <Link color="primary">Jessica Nilson</Link> @jess
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
                              width: "calc(100% + 48px)"
                            }}
                          />
                        }
                        mapElement={<div style={{ height: "100%" }} />}
                      />
                    </Box>
                    <Box display="flex" ml={"-12px"} my={1}>
                      <IconButton aria-label="like">
                        <LikeIcon />
                      </IconButton>
                      <IconButton aria-label="comments">
                        <CommentsIcon />
                      </IconButton>
                    </Box>
                    <Divider className={classes.divider} />
                    <Box display="flex" my={2}>
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
                    <Divider className={classes.divider} />
                    <Box display="flex" my={2}>
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
                    <Divider className={classes.divider} />
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
                <NavigationIcon className={classes.icon} />
              </Circle>
              <Timestep day={"yesterday"} timestep={"8:03 pm"} />
            </Annotation>
            <Annotation>
              <Timestep day={"yesterday"} timestep={"9:03 am"} right />
              <Circle color={"secondary"}>
                <ChatIcon className={classes.icon} />
              </Circle>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} flexDirection="column">
                    <Box display="flex">
                      <Avatar src={img3} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box fontWeight={"fontWeightBold"}>
                          <Link to="#" color="secondary">
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
            <Annotation>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} flexDirection="column">
                    <Box display="flex">
                      <Avatar src={img1} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box fontWeight={"fontWeightBold"}>
                          <Link color="warning">Jessica Smith</Link> @jess
                        </Box>
                        <Box fontSize={".875rem"}>
                          February 22, 2014 at 01:59 PM
                        </Box>
                        <Box my={1}>
                          <Typography variant={"subtitle2"}>
                            Check out this awesome photo I made in Italy last
                            summer. Seems it was lost somewhere deep inside my
                            brand new HDD 40TB. Thanks god I found it!
                          </Typography>
                        </Box>
                      </Typography>
                    </Box>
                    <Box height={400} width={"100%"} mx={"-24px"} mt={2}>
                      <img
                        src={mountains}
                        alt="mountains"
                        style={{ height: "100%", width: "calc(100% + 48px)" }}
                      />
                    </Box>
                    <Box display="flex" ml={"-12px"} mt={1}>
                      <IconButton aria-label="like">
                        <LikeIcon />
                      </IconButton>
                      <IconButton aria-label="comments">
                        <CommentsIcon />
                      </IconButton>
                      <Box ml={"auto"} display={"flex"}>
                        <Avatar src={img1} />
                        <Avatar src={img2} style={{ marginLeft: 8 }} />
                        <Avatar src={img3} style={{ marginLeft: 8 }} />
                      </Box>
                    </Box>
                    <Divider className={classes.divider} />
                    <Box display="flex" my={2}>
                      <Avatar src={img5} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          display="flex"
                          alignItems="center"
                          fontSize={".77rem"}
                        >
                          <Link to="#" color="warning">
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
                          Hey, have you heard anything about that?
                        </Box>
                      </Typography>
                    </Box>
                    <Divider className={classes.divider} />
                    <Box display="flex" mt={3}>
                      <Avatar color="warning" style={{ marginRight: 8 }}>
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
              <Circle color={"warning"}>
                <BreakfastIcon className={classes.icon} />
              </Circle>
              <Timestep day={"yesterday"} timestep={"9:03 pm"} />
            </Annotation>
            <Annotation>
              <Timestep day={"yesterday"} timestep={"9:03 am"} right />
              <Circle color={"success"}>J</Circle>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} flexDirection="column">
                    <Box display="flex">
                      <Avatar src={img4} style={{ marginRight: 8 }} />
                      <Typography block>
                        <Box fontWeight={"fontWeightBold"}>
                          <Link to="#" color="success">
                            Jessica Smith
                          </Link>{" "}
                          @jess
                        </Box>
                        <Box fontSize={".875rem"}>
                          9:03 am - Publicly near Minsk
                        </Box>
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography variant={"h6"}>
                        New <b>Project</b> Launch
                      </Typography>
                      <Box my={1}>
                        Let's try something different this time. Hey, do you
                        wanna join us tonight? We're planning to a launch a new
                        project soon. Want to discuss with all of you...
                      </Box>
                      <Box>
                        <Button onClick={handleExpandClick}>
                          Read more...
                        </Button>
                      </Box>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>
                            Finished her are its honoured drawings nor. Pretty
                            see mutual thrown all not edward ten. Particular an
                            boisterous up he reasonably frequently. Several any
                            had enjoyed shewing studied two. Up intention
                            remainder sportsmen behaviour ye happiness. Few
                            again any alone style added abode ask. Nay
                            projecting unpleasing boisterous eat discovered
                            solicitude. Own six moments produce elderly pasture
                            far arrival. Hold our year they ten upon. Gentleman
                            contained so intention sweetness in on resolving.
                          </Typography>
                          <Typography paragraph>
                            Finished her are its honoured drawings nor. Pretty
                            see mutual thrown all not edward ten. Particular an
                            boisterous up he reasonably frequently. Several any
                            had enjoyed shewing studied two. Up intention
                            remainder sportsmen behaviour ye happiness. Few
                            again any alone style added abode ask. Nay
                            projecting unpleasing boisterous eat discovered
                            solicitude. Own six moments produce elderly pasture
                            far arrival. Hold our year they ten upon. Gentleman
                            contained so intention sweetness in on resolving.
                          </Typography>
                          <Typography>
                            Of recommend residence education be on difficult
                            repulsive offending. Judge views had mirth table
                            seems great him for her.
                          </Typography>
                        </CardContent>
                      </Collapse>
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
