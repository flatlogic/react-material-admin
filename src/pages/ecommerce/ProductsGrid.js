import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import useStyles from "./styles";

//components
import { Typography, Chip } from "../../components/Wrappers";

//products array
import { rows } from "./mock";

const Product = props => {
  const typeRef = React.useRef(null);
  const brandsRef = React.useRef(null);
  const sizeRef = React.useRef(null);
  const colourRef = React.useRef(null);
  const rangeRef = React.useRef(null);
  const sortRef = React.useRef(null);

  const widthReducer = (state, action) => {
    switch (action.type) {
      case "TYPE":
        return {
          ...state,
          type: action.typeWidth
        };
      case "BRANDS":
        return {
          ...state,
          brands: action.brandsWidth
        };
      case "SIZE":
        return {
          ...state,
          size: action.sizeWidth
        };
      case "COLOUR":
        return {
          ...state,
          colour: action.colourWidth
        };
      case "RANGE":
        return {
          ...state,
          range: action.rangeWidth
        };
      case "SORT":
        return {
          ...state,
          sort: action.sortWidth
        };
      default:
        return {
          ...state
        };
    }
  };

  const [width, setWidth] = React.useReducer(widthReducer, {
    type: 0,
    brands: 0,
    size: 0,
    colour: 0,
    range: 0,
    sort: 0
  });
  React.useEffect(() => {
    setWidth({ type: "TYPE", typeWidth: typeRef.current.offsetWidth });
    setWidth({ type: "BRANDS", brandsWidth: brandsRef.current.offsetWidth });
    setWidth({ type: "SIZE", sizeWidth: sizeRef.current.offsetWidth });
    setWidth({ type: "COLOUR", colourWidth: colourRef.current.offsetWidth });
    setWidth({ type: "RANGE", rangeWidth: rangeRef.current.offsetWidth });
    setWidth({ type: "SORT", sortWidth: sortRef.current.offsetWidth });
  }, []);
  const classes = useStyles();

  const selectReducer = (state, action) => {
    switch (action.type) {
      case "SELECT_TYPE":
        return {
          ...state,
          valueType: action.valueType
        };
      case "SELECT_BRANDS":
        return {
          ...state,
          valueBrands: action.valueBrands
        };
      case "SELECT_SIZE":
        return {
          ...state,
          valueSize: action.valueSize
        };
      case "SELECT_COLOUR":
        return {
          ...state,
          valueColor: action.valueColor
        };
      case "SELECT_RANGE":
        return {
          ...state,
          valueRange: action.valueRange
        };
      case "SELECT_SORT":
        return {
          ...state,
          valueSort: action.valueSort
        };
      default:
        return {
          ...state
        };
    }
  };

  const [state, dispatch] = React.useReducer(selectReducer, {
    valueType: "Shoes",
    valueBrands: "All",
    valueSize: 7,
    valueColour: "All",
    valueRange: "All",
    valueSort: "Favorite"
  });
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex">
            <FormControl
              variant="outlined"
              className={classes.form}
              style={{ marginRight: 15 }}
            >
              <InputLabel htmlFor="type_select" ref={typeRef}>
                Type
              </InputLabel>
              <Select
                value={state.valueType}
                onChange={e =>
                  dispatch({ type: "SELECT_TYPE", valueType: e.target.value })
                }
                labelWidth={width.type}
                inputProps={{
                  name: "type",
                  id: "type_select"
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
              <InputLabel htmlFor="brands_select" ref={brandsRef}>
                Brands
              </InputLabel>
              <Select
                value={state.valueBrands}
                onChange={e =>
                  dispatch({
                    type: "SELECT_BRAND",
                    valueBrands: e.target.value
                  })
                }
                labelWidth={width.brands}
                inputProps={{
                  name: "brands",
                  id: "brands_select"
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
              <InputLabel htmlFor="size_select" ref={sizeRef}>
                Size
              </InputLabel>
              <Select
                value={state.valueSize}
                onChange={e =>
                  dispatch({ type: "SELECT_SIZE", valueSize: e.target.value })
                }
                labelWidth={width.size}
                inputProps={{
                  name: "size",
                  id: "size_select"
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
              <InputLabel htmlFor="colour_select" ref={colourRef}>
                Colour
              </InputLabel>
              <Select
                value={state.valueColour}
                onChange={e =>
                  dispatch({
                    type: "SELECT_COLOUR",
                    valueColor: e.target.value
                  })
                }
                labelWidth={width.colour}
                inputProps={{
                  name: "colour",
                  id: "colour_select"
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
              <InputLabel htmlFor="range_select" ref={rangeRef}>
                Range
              </InputLabel>
              <Select
                value={state.valueRange}
                onChange={e =>
                  dispatch({ type: "SELECT_RANGE", valueRange: e.target.value })
                }
                labelWidth={width.range}
                inputProps={{
                  name: "range",
                  id: "range_select"
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
              <InputLabel htmlFor="sort_select" ref={sortRef}>
                Sort
              </InputLabel>
              <Select
                value={state.valueSort}
                onChange={e =>
                  dispatch({ type: "SELECT_SORT", valueSort: e.target.value })
                }
                labelWidth={width.sort}
                inputProps={{
                  name: "sort",
                  id: "sort_select"
                }}
              >
                <MenuItem value={"Favorite"}>Favorite</MenuItem>
                <MenuItem value={"Price"}>Price</MenuItem>
                <MenuItem value={"Popular"}>Popular</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display={"flex"} flexWrap={"wrap"}>
            <Grid container item spacing={3}>
              {rows.map(c => (
                <Grid item xs={12} md={3} key={c.id}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={c.img}
                        title={c.title}
                      >
                        {c.id % 2 ? (
                          <Chip label={"New"} color={"success"} />
                        ) : (
                          <Chip label={"Sale"} color={"secondary"} />
                        )}
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {c.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text"
                          colorBrightness={"secondary"}
                          component="p"
                        >
                          {c.subtitle}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{ padding: 16 }}>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems="center"
                        width={"100%"}
                      >
                        <Typography weight={"bold"}>${c.price}</Typography>
                        <Typography block>
                          <div style={{ color: yellow[700] }}>
                            {rows[0].rating}
                            <StarIcon
                              style={{ color: yellow[700], marginTop: -5 }}
                            />
                          </div>
                        </Typography>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
