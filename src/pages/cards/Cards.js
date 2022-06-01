import React from "react";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  CardHeader,
  IconButton,
  Divider
} from "@mui/material";
import {
  Star as StarIcon,
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon
} from "@mui/icons-material";
import useStyles from "./styles";

//images
import backImg from "../../images/cards/lifestyle.jpg";
import isometricImg from "../../images/cards/isometric.jpg";
import mountainsImg from "../../images/cards/mountains.jpeg";
import rnsImg from "../../images/cards/rns.png";

// components
import { Typography, Button, Link, Avatar } from "../../components/Wrappers";

export default function BadgeComp() {
  const props = {
    card: backImg
  };
  const classes = useStyles(props);
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                13 Mar
              </Typography>
              <Typography variant="h5" component="h2">
                Lifestyle brand
              </Typography>
              <Typography variant="body2" component="p">
                A lifestyle brand is a company that markets its products or
                services to embody the interests, attitudes, and opinions of a
                group or a culture. Lifestyle brands seek to inspire, guide, and
                motivate people, with the goal of their products contributing to
                the definition of the consumer's way of life.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color={"inherit"}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card className={classes.cardMedia}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={isometricImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions classes={{ root: classes.cardActions }}>
              <Button variant="contained" size="small" color="primary">
                Share
              </Button>
              <Button variant="contained" size="small" color="secondary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item md={4} xs={12}>
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            <Box mb={6}>
              <Card className={classes.cardMedia}>
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    <Link color={"success"}>Avr Rating </Link>
                    <Link>All Time</Link>
                  </Typography>
                  <Divider style={{ width: "100%" }} />
                  <Box display={"flex"} alignItems={"center"} my={3}>
                    <Box>
                      <StarIcon className={classes.starIcon} />
                      <StarIcon className={classes.starIcon} />
                      <StarIcon className={classes.starIcon} />
                      <StarIcon className={classes.starIcon} />
                      <StarIcon className={classes.starIcon} />
                    </Box>
                    <Box style={{ marginLeft: "auto" }}>342 REVIEWS</Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary" block>
                    <Typography color={"success"} variant={"h5"}>
                      69%
                    </Typography>
                    of customers recommend this product
                  </Typography>
                </CardContent>
                <CardActions classes={{ root: classes.cardActions }}>
                  <Button variant="contained" size="small" color="success">
                    Write a review
                  </Button>
                </CardActions>
              </Card>
            </Box>
            <Box>
              <Card className={classes.cardMedia}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="" color={"primary"}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Weekly Inspiration"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image={mountainsImg}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    There are at least 109 mountains on Earts with elevations
                    greeter than 7,200 meters
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card className={classes.cardMedia}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={rnsImg}
                title="Technology"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Technology
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React Native Starter
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider style={{ width: "100%" }} />
            <CardActions classes={{ root: classes.cardActions }}>
              <Typography variant={"subtitle1"}>from $49.95</Typography>
              <Button
                size="small"
                color="success"
                variant="contained"
                style={{ marginLeft: "auto" }}
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
