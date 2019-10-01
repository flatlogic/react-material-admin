import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import {
  Star as StarIcon,
  StarOutlined as StarOutlinedIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";
import useStyles from "./styles";
import { yellow } from "@material-ui/core/colors/index";

//components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Link, Button } from "../../components/Wrappers";

//images
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpeg";
import img6 from "../../images/img6.jpg";
import payment1 from "../../images/mastercard.39748d61.svg";
import payment2 from "../../images/paypal.7c552892.svg";
import payment3 from "../../images/visa.868e1896.svg";
import payment4 from "../../images/aexpress.2f7bff60.svg";

export const rows = [
  {
    id: 1,
    img: img1,
    title: "Trainers",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
  },
  {
    id: 2,
    img: img2,
    title: "Boots",
    subtitle: "Trainers In Blue",
    price: 37,
    rating: 4.6,
  },
  {
    id: 3,
    img: img3,
    title: "Flat sandals",
    subtitle: "Trainers In White",
    price: 70,
    rating: 4.6,
  },
  {
    id: 4,
    img: img4,
    title: "Trainers",
    subtitle: "Trainers In Blue",
    price: 85,
    rating: 4.6,
  },
  {
    id: 5,
    img: img5,
    title: "Flat sandals",
    subtitle: "Trainers In White",
    price: 12,
    rating: 4.6,
  },
  {
    id: 6,
    img: img6,
    title: "Trainers",
    subtitle: "Trainers In Blue",
    price: 76,
    rating: 4.6,
  },
  {
    id: 7,
    img: img1,
    title: "Boots",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
  },
  {
    id: 8,
    img: img2,
    title: "Flat sandals",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
  },
  {
    id: 9,
    img: img3,
    title: "Trainers",
    subtitle: "Trainers In White",
    price: 76,
    rating: 4.6,
  },
  {
    id: 10,
    img: img4,
    title: "Boots",
    subtitle: "Trainers In Blue",
    price: 76,
    rating: 4.6,
  },
  {
    id: 11,
    img: img5,
    title: "Trainers",
    subtitle: "Trainers In White",
    price: 71,
    rating: 4.6,
  },
  {
    id: 12,
    img: img6,
    title: "Flat sandals",
    subtitle: "Trainers In Blue",
    price: 76,
    rating: 4.6,
  },
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
      <PageTitle title="Product Detail" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu noBodyPadding>
            <Grid container>
              <Grid item md={8} xs={12}>
                {!props.match.params.id ? (
                  <img
                    src={rows[0].img}
                    alt={rows[0].title}
                    style={{ width: "100%", maxHeight: 500 }}
                  />
                ) : (
                  <img
                    src={rows[props.match.params.id - 1].img}
                    alt={rows[props.match.params.id - 1].title}
                    style={{ width: "100%", maxHeight: 500 }}
                  />
                )}
              </Grid>
              <Grid item md={4} xs={12}>
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
                        <Typography textColor="secondary">
                          {rows[0].subtitle}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography variant="h3" uppercase>
                          {rows[props.match.params.id - 1].title}
                        </Typography>
                        <Typography textColor="secondary">
                          {rows[props.match.params.id].subtitle}
                        </Typography>
                      </>
                    )}{" "}
                  </Box>
                  <Box>
                    {!props.match.params.id ? (
                      <>
                        <Typography weight="medium">
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
                    <Link href="#">Size Guide</Link>
                  </Box>
                  <Box display="flex">
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
                          id: "size-simple",
                        }}
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
                  <Box>
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
                  <Typography textColor="hint">
                    FREE Delivery & Returns
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget disableWidgetMenu title="Product Description">
            <Grid container>
              <Grid item xs={12}>
                <Box display="flex">
                  <Box className={classes.form}>
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
                  </Box>
                  <Box className={classes.form}>
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
                  </Box>
                  <Box className={classes.form}>
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
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
