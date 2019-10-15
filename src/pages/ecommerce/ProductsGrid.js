import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

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
import payment1 from "../../images/mastercard.svg";
import payment2 from "../../images/paypal.svg";
import payment3 from "../../images/visa.svg";
import payment4 from "../../images/aexpress.svg";

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

  const reducer = (state, action) => {
    switch(action.type) {
      case "SELECT_TYPE":
        return {
          ...state,
          valueType: action.valueType
        }
        case "SELECT_BRANDS": 
        return {
          ...state,
          valueBrands: action.valueBrands
        }
        case "SELECT_SIZE": 
        return {
          ...state,
          valueSize: action.valueSize
        }
        case "SELECT_COLOUR": 
        return {
          ...state,
          valueColor: action.valueColor
        }
        case "SELECT_RANGE": 
        return {
          ...state,
          valueRange: action.valueRange
        }
        case "SELECT_SORT": 
        return {
          ...state,
          valueSort: action.valueSort
        }
        default: 
        return {
          ...state
        }
    }
  }

  const [state, dispatch] = React.useReducer(reducer, {
    valueType: 'Shoes',
    valueBrands: 'All',
    valueSize: 7,
    valueColour: 'All',
    valueRange: 'All',
    valueSort: 'Favorite'
  })
  return (
    <>
      <PageTitle title="Products Grid" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box display="flex">
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="type_select" ref={inputLabel}>
                Type
              </InputLabel>
              <Select
                value={state.valueType}
                onChange={(e) => dispatch({type: 'SELECT_TYPE', valueType: e.target.value})}
                labelWidth={labelWidth}
                inputProps={{
                  name: "type",
                  id: "type_select",
                }}
              >
                <MenuItem value={"Shoes"}>Shoes</MenuItem>
                <MenuItem value={"Boots"}>Boots</MenuItem>
                <MenuItem value={"Trainers"}>Trainers</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="brands_select" ref={inputLabel}>
                Brands
              </InputLabel>
              <Select
                value={state.valueBrands}
                onChange={(e) => dispatch({type: 'SELECT_BRAND', valueBrands: e.target.value})}
                labelWidth={labelWidth}
                inputProps={{
                  name: "brands",
                  id: "brands_select",
                }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Nike"}>Nike</MenuItem>
                <MenuItem value={"Adidas"}>Adidas</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="size_select" ref={inputLabel}>
                Size
              </InputLabel>
              <Select
                value={state.valueSize}
                onChange={(e) => dispatch({type: 'SELECT_SIZE', valueSize: e.target.value})}
                labelWidth={labelWidth}
                inputProps={{
                  name: "size",
                  id: "size_select",
                }}
              >
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>

                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>

                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={12.5}>12.5</MenuItem>
                <MenuItem value={13}>13</MenuItem>

              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="colour_select" ref={inputLabel}>
                Colour
              </InputLabel>
              <Select
                value={state.valueColour}
                onChange={(e) => dispatch({type: 'SELECT_COLOUR', valueColor: e.target.value})}
                labelWidth={labelWidth}
                inputProps={{
                  name: "colour",
                  id: "colour_select",
                }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"White"}>White</MenuItem>
                <MenuItem value={"Black"}>Black</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="range_select" ref={inputLabel}>
                Select size
              </InputLabel>
              <Select
                value={state.valueRange}
                onChange={(e) => dispatch({type: 'SELECT_RANGE', valueRange: e.target.value})}
                labelWidth={labelWidth}
                inputProps={{
                  name: "range",
                  id: "range_select",
                }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"-"}>-</MenuItem>
                <MenuItem value={"None"}>None</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="sort_select" ref={inputLabel}>
                Sort
              </InputLabel>
              <Select
                value={state.valueSort}
                onChange={(e) => dispatch({type: 'SELECT_SORT', valueSort: e.target.value})}
                labelWidth={labelWidth}
                inputProps={{
                  name: "sort",
                  id: "sort_select",
                }}
              >
                <MenuItem value={"Favorite"}>Favorite</MenuItem>
                <MenuItem value={"Price"}>Price</MenuItem>
                <MenuItem value={"Popular"}>Popular</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
