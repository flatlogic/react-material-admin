import React, { useEffect } from "react";
import {
  Box,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  TextField as Input
} from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";

//context
import {
  getProductsRequest,
  useProductsState,
  updateProduct
} from "../../context/ProductContext";

//components
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

const CreateProduct = () => {
  const context = useProductsState();
  useEffect(() => {
    getProductsRequest(context.setProducts);
  }, []);
  const history = useHistory();
  const { id } = useParams();

  const [localProducts, setLocalProducts] = React.useState(
    context.products[id - 1]
  );

  console.log(localProducts);

  const changeInputValue = e => {
    console.log(e.currentTarget);
  };

  const editProduct = () => {
    updateProduct(localProducts, context.setProducts);
  };

  const join = localProducts.technology
    ? localProducts.technology.join(", ")
    : null;

  const isCreateProduct =
    window.location.hash === "#/app/ecommerce/management/create";
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget
            title={isCreateProduct ? "New product" : "Edit product"}
            disableWidgetMenu
          >
            <Box display={"flex"} flexDirection="column">
              <form>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Image</Typography>
                  </Box>
                  <Box width={200}>
                    <Select value={id} fullWidth>
                      {context.products.map(c => (
                        <MenuItem value={c.id}>
                          <img
                            src={c.img}
                            alt={c.title}
                            style={{ height: 100, width: 200 }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Title</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? "" : localProducts.title}
                      fullWidth
                      onChange={e => changeInputValue(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Subtitle</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? "" : localProducts.subtitle}
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Price</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? 0.01 : localProducts.price}
                      type={"number"}
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Discount</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? 0.01 : localProducts.discount}
                      type={"number"}
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Description</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      multiline
                      value={
                        isCreateProduct ? 0.01 : localProducts["description_1"]
                      }
                      fullWidth
                      onChange={e => console.log(e.target.value)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Code</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? "" : localProducts.code}
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Hashtag</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? 0.01 : localProducts.hashtag}
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Technology</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      placeholder={"Add Tag"}
                      fullWidth
                      value={isCreateProduct ? "" : join}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Rating</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      type={"number"}
                      value={isCreateProduct ? 5 : localProducts.rating}
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Button
                    variant={"contained"}
                    color={"success"}
                    style={{ marginRight: 8 }}
                  >
                    {isCreateProduct ? "Save" : "Edit"}
                  </Button>
                  <Button
                    variant={"contained"}
                    onClick={() => history.push("/app/ecommerce/management")}
                  >
                    Back
                  </Button>
                </Box>
              </form>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateProduct;
