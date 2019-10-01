import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Star as StarIcon } from "@material-ui/icons";
import useStyles from "./styles";

//components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

//images
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpeg";
import img6 from "../../images/img6.jpg";
import { yellow } from "@material-ui/core/colors/index";

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
  const classes = useStyles();
  const [size, setValues] = React.useState();
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
              <Grid item xs={7}>
                {!props.match.params.id ? (
                  <img
                    src={rows[0].img}
                    alt={rows[0].title}
                    style={{ width: "100%" }}
                  />
                ) : (
                  <img
                    src={rows[props.match.params.id - 1].img}
                    alt={rows[props.match.params.id - 1].title}
                    style={{ width: "100%", maxHeight: 500 }}
                  />
                )}
              </Grid>
              <Grid item xs={5}>
                <Box m={3}>
                  <Box mb={3}>
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
                  <Box mb={3}>
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
                        <Typography color="secondary">
                          {rows[props.match.params.id].subtitle}
                        </Typography>
                      </>
                    )}{" "}
                  </Box>
                  <Box mb={3}>
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
                  <Box mb={3}>
                    <FormControl className={classes.form}>
                      <InputLabel htmlFor="size-simple">Select size</InputLabel>
                      <Select
                        value={size}
                        onChange={handleChange}
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
                      <Select value={addSize} onChange={handleChangeAddSize}>
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
