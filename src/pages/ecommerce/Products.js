import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from "@mui/material";
import Icon from "@mdi/react";
import {
  Star as StarIcon,
  StarBorder as StarOutlinedIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";
import {
  mdiFacebook as FacebookIcon,
  mdiInstagram as InstagramIcon,
  mdiTwitter as TwitterIcon
} from "@mdi/js";
import useStyles from "./styles";
import { yellow } from "@mui/material/colors";

//components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography, Link, Button } from "../../components/Wrappers";

//images
import img1 from "../../images/product/img1.jpg";
import img2 from "../../images/product/img2.jpg";
import img3 from "../../images/product/img3.jpg";
import img4 from "../../images/product/img4.jpg";
import img5 from "../../images/product/img5.jpeg";
import img6 from "../../images/product/img6.jpg";
import payment1 from "../../images/product/mastercard.svg";
import payment2 from "../../images/product/paypal.svg";
import payment3 from "../../images/product/visa.svg";
import payment4 from "../../images/product/aexpress.svg";

export const rows = [
  {
    id: 1,
    img: img1,
    title: "Trainers",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
    color: "primary",
    status: "Shipped",
    process: "64%"
  },
  {
    id: 2,
    img: img2,
    title: "Boots",
    subtitle: "Trainers In Blue",
    price: 37,
    rating: 4.6,
    color: "success",
    status: "Delivered",
    process: "100%"
  },
  {
    id: 3,
    img: img3,
    title: "Flat sandals",
    subtitle: "Trainers In White",
    price: 70,
    rating: 4.6,
    color: "secondary",
    status: "Canceled",
    process: "0%"
  },
  {
    id: 4,
    img: img4,
    title: "Trainers",
    subtitle: "Trainers In Blue",
    price: 85,
    rating: 4.6,
    color: "primary",
    status: "Shipped",
    process: "64%"
  },
  {
    id: 5,
    img: img5,
    title: "Flat sandals",
    subtitle: "Trainers In White",
    price: 12,
    rating: 4.6,
    color: "success",
    status: "Delivered",
    process: "100%"
  },
  {
    id: 6,
    img: img6,
    title: "Trainers",
    subtitle: "Trainers In Blue",
    price: 76,
    rating: 4.6,
    color: "secondary",
    status: "Canceled",
    process: "0%"
  },
  {
    id: 7,
    img: img1,
    title: "Boots",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
    color: "primary",
    status: "Shipped",
    process: "64%"
  },
  {
    id: 8,
    img: img2,
    title: "Flat sandals",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
    color: "success",
    status: "Delivered",
    process: "100%"
  },
  {
    id: 9,
    img: img3,
    title: "Trainers",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
    color: "secondary",
    status: "Canceled",
    process: "0%"
  },
  {
    id: 10,
    img: img4,
    title: "Boots",
    subtitle: "Trainers In Blue",
    price: 76,
    rating: 4.6,
    color: "primary",
    status: "Shipped",
    process: "64%"
  },
  {
    id: 11,
    img: img5,
    title: "Trainers",
    subtitle: "Trainers In White",
    price: 71,
    rating: 4.6,
    color: "success",
    status: "Delivered",
    process: "100%"
  },
  {
    id: 12,
    img: img6,
    title: "Flat sandals",
    subtitle: "Trainers In Blue",
    price: 76,
    rating: 4.6,
    color: "secondary",
    status: "Canceled",
    process: "0%"
  }
];

const Product = props => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();
  const [size, setValues] = React.useState("");
  const handleChange = event => {
    setValues(event.target.value);
  };
  const [addSize, setAddSize] = React.useState(1);
  const handleChangeAddSize = event => {
    setAddSize(event.target.value);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu noBodyPadding>
            <Grid container>
              <Grid item md={6} xs={12}>
                {!props.match.params.id ? (
                  <img
                    src={rows[0].img}
                    alt={rows[0].title}
                    style={{ width: "100%", minHeight: 400 }}
                  />
                ) : (
                  <img
                    src={rows[props.match.params.id - 1].img}
                    alt={rows[props.match.params.id - 1].title}
                    style={{ width: "100%", minHeight: 400 }}
                  />
                )}
              </Grid>
              <Grid item md={6} xs={12}>
                <Box
                  m={3}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  style={{ height: "calc(100% - 48px)" }}
                >
                  <Box>
                    {!props.match.params.id ? (
                      <div style={{ fontSize: "1.5rem", color: yellow[700] }}>
                        {rows[0].rating}
                        <StarIcon
                          style={{ color: yellow[700], marginTop: -5 }}
                        />
                      </div>
                    ) : (
                      <>
                        <Typography
                          style={{ color: yellow[700] }}
                          display={"inline"}
                        >
                          {rows[props.match.params.id - 1].rating}
                        </Typography>
                        <StarIcon
                          style={{ color: yellow[700], marginTop: -5 }}
                        />
                      </>
                    )}{" "}
                  </Box>
                  <Box>
                    {!props.match.params.id ? (
                      <>
                        <Typography variant="h3" uppercase>
                          {rows[0].title}
                        </Typography>
                        <Typography>{rows[0].subtitle}</Typography>
                      </>
                    ) : (
                      <>
                        <Typography variant="h3" uppercase>
                          {rows[props.match.params.id - 1].title}
                        </Typography>
                        <Typography>
                          {rows[props.match.params.id].subtitle}
                        </Typography>
                      </>
                    )}{" "}
                  </Box>
                  <Box>
                    {!props.match.params.id ? (
                      <>
                        <Typography weight="medium" variant={"h5"}>
                          ${rows[0].price}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography weight="medium">
                          ${rows[props.match.params.id].price}
                        </Typography>
                      </>
                    )}{" "}
                  </Box>
                  <Box>
                    <Link>Size Guide</Link>
                  </Box>
                  <Box display="flex" alignItems={"center"}>
                    <FormControl
                      variant="outlined"
                      className={classes.form}
                      style={{ marginRight: 15 }}
                    >
                      <InputLabel htmlFor="size-simple" ref={inputLabel}>
                        Select size
                      </InputLabel>
                      <Select
                        value={size}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                        inputProps={{
                          name: "size",
                          id: "size-simple"
                        }}
                        className={classes.denseSelect}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.form}>
                      <Select
                        value={addSize}
                        onChange={handleChangeAddSize}
                        className={classes.selectEmpty}
                        margin={"dense"}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={5}>6</MenuItem>
                        <MenuItem value={5}>7</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ flexGrow: 3 }}
                    >
                      add to bag
                      <ShoppingCartIcon style={{ marginLeft: 8 }} />
                    </Button>
                    <StarOutlinedIcon
                      style={{ marginLeft: 16 }}
                      className={classes.form}
                    />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <img
                      src={payment1}
                      alt={"mastercard"}
                      style={{ width: 40, marginRight: 8 }}
                    />
                    <img
                      src={payment2}
                      alt={"paypal"}
                      style={{ width: 40, marginRight: 8 }}
                    />
                    <img
                      src={payment3}
                      alt={"visa"}
                      style={{ width: 40, marginRight: 8 }}
                    />
                    <img
                      src={payment4}
                      alt={"americanexpress"}
                      style={{ width: 40 }}
                    />
                  </Box>
                  <Typography color="text" colorBrightness={"secondary"}>
                    FREE Delivery & Returns
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget disableWidgetMenu title="Product Info">
            <Grid container>
              <Grid item xs={12}>
                <Grid container item spacing={3}>
                  <Grid item container direction={"column"} md={4} xs={12}>
                    <Typography variant="h5" style={{ marginBottom: 16 }}>
                      PRODUCT DESCRIPTION
                    </Typography>
                    <ul>
                      <li>
                        Sneakers (also known as athletic shoes, tennis shoes,gym
                        shoes, runners, takkies, or trainers) are shoes
                        primarily designed for sports or other forms of physical
                        exercise, but which are now also often used for everyday
                        wear.
                      </li>
                      <li>
                        The term generally describes a type of footwear with a
                        flexible sole made of rubber or synthetic material and
                        an upper part made of leather or synthetic materials.
                      </li>
                    </ul>
                  </Grid>
                  <Grid
                    item
                    container
                    direction={"column"}
                    justify={"space-between"}
                    md={4}
                    xs={12}
                  >
                    <Box>
                      <Typography variant="h5" style={{ marginBottom: 16 }}>
                        PRODUCT CODE
                      </Typography>
                      <p>135234</p>
                    </Box>
                    <Box>
                      <Typography variant="h5" style={{ marginBottom: 16 }}>
                        TECHNOLOGY
                      </Typography>
                      <ul>
                        <li>Ollie patch</li>
                        <li>Cup soles</li>
                        <li>Vulcanized rubber soles</li>
                      </ul>
                    </Box>
                  </Grid>
                  <Grid item container direction={"column"} md={4} xs={12}>
                    <Box>
                      <Typography variant="h5" style={{ marginBottom: 16 }}>
                        SHARE
                      </Typography>
                      <p>
                        Share photo with a tag{" "}
                        <Link to="#" color="primary">
                          #whitetrainers
                        </Link>
                      </p>
                      <Box mb={1} ml={"-16px"}>
                        <IconButton aria-label="facebook">
                          <Icon
                            path={FacebookIcon}
                            size={1}
                            color="#6E6E6E99"
                          />
                        </IconButton>
                        <IconButton aria-label="instagram">
                          <Icon
                            path={InstagramIcon}
                            size={1}
                            color="#6E6E6E99"
                          />
                        </IconButton>
                        <IconButton aria-label="twitter">
                          <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h5" style={{ marginBottom: 16 }}>
                        RATING & REVIEWS
                      </Typography>
                      {!props.match.params.id ? (
                        <div style={{ fontSize: "1.5rem", color: yellow[700] }}>
                          {rows[0].rating}
                          <StarIcon
                            style={{ color: yellow[700], marginTop: -5 }}
                          />
                        </div>
                      ) : (
                        <>
                          <Typography
                            style={{ color: yellow[700] }}
                            display={"inline"}
                          >
                            {rows[props.match.params.id - 1].rating}
                          </Typography>
                          <StarIcon
                            style={{ color: yellow[700], marginTop: -5 }}
                          />
                        </>
                      )}
                      <p>32 Reviews</p>
                      <Link to="#" color="primary">
                        Read all
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      <PageTitle title="You may also like" />
      <Grid item xs={12}>
        <Box display="flex" flexWrap="wrap">
          <Box flexGrow={1} mr={3} mb={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img1}
                  title={rows[0].title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {rows[0].title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {rows[0].subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2" component="p">
                  ${rows[0].price}
                </Typography>
                <div style={{ color: yellow[700], display: 'flex', alignItems: 'center' }}>
                  {rows[0].rating}
                  <StarIcon style={{ color: yellow[700], marginLeft: 5 }} />
                </div>
              </CardActions>
            </Card>
          </Box>
          <Box flexGrow={1} mr={3} mb={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img2}
                  title={rows[1].img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {rows[1].title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {rows[1].subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2" component="p">
                  ${rows[1].price}
                </Typography>
                <div style={{ color: yellow[700], display: 'flex', alignItems: 'center' }}>
                  {rows[1].rating}
                  <StarIcon style={{ color: yellow[700], marginLeft: 5 }} />
                </div>
              </CardActions>
            </Card>
          </Box>
          <Box flexGrow={1} mr={3} mb={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img3}
                  title={rows[2].img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {rows[2].title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {rows[2].subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2" component="p">
                  ${rows[2].price}
                </Typography>
                <div style={{ color: yellow[700], display: 'flex', alignItems: 'center' }}>
                  {rows[2].rating}
                  <StarIcon style={{ color: yellow[700], marginLeft: 5 }} />
                </div>
              </CardActions>
            </Card>
          </Box>
          <Box flexGrow={1} mb={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img4}
                  title={rows[3].img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {rows[3].title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {rows[3].subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2" component="p">
                  ${rows[3].price}
                </Typography>
                <div style={{ color: yellow[700], display: 'flex', alignItems: 'center' }}>
                  {rows[3].rating}
                  <StarIcon style={{ color: yellow[700], marginLeft: 5 }} />
                </div>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Product;
