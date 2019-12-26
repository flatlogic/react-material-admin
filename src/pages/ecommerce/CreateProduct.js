import React, { useEffect } from "react";
import {
  Box,
  CircularProgress,
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
import config from "../../config";

const CreateProduct = () => {
  const { id } = useParams();
  const context = useProductsState();
  const [localProducts, setLocalProducts] = React.useState(
    context.products.products[id - 1]
  );
  useEffect(() => {
    getProductsRequest(context.setProducts);
  }, []);

  useEffect(() => {
    setLocalProducts(context.products.products[id - 1]);
  }, [context]);

  const history = useHistory();

  console.log(localProducts);
  console.log(context.products, "--");

  const editProduct = e => {
    setLocalProducts({
      ...localProducts,
      [e.target.id]: e.currentTarget.value
    });
  };

  const getEditProduct = () => {
    updateProduct(localProducts, context.setProducts);
    // history.push("/app/ecommerce/management");
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
            {config.isBackend && !context.products.isLoaded ? (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress size={26} />
              </Box>
            ) : (
              <Box display={"flex"} flexDirection="column">
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Image</Typography>
                  </Box>
                  <Box width={200}>
                    <Select value={id} fullWidth>
                      {context.products.products.map(c => (
                        <MenuItem value={c.id} key={c.id}>
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
                      id="title"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? "" : localProducts.title}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Subtitle</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="subtitle"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? "" : localProducts.subtitle}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Price</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="price"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? 0.01 : localProducts.price}
                      type={"number"}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Discount</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="discount"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? 0.01 : localProducts.discount}
                      type={"number"}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Description</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="description_1"
                      margin="normal"
                      variant="outlined"
                      multiline
                      value={
                        isCreateProduct ? 0.01 : localProducts["description_1"]
                      }
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Code</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="code"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? "" : localProducts.code}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Hashtag</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="hashtag"
                      margin="normal"
                      variant="outlined"
                      value={isCreateProduct ? 0.01 : localProducts.hashtag}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Technology</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="technology"
                      margin="normal"
                      variant="outlined"
                      placeholder={"Add Tag"}
                      fullWidth
                      value={isCreateProduct ? "" : join}
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Rating</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="rating"
                      margin="normal"
                      variant="outlined"
                      type={"number"}
                      value={isCreateProduct ? 5 : localProducts.rating}
                      fullWidth
                      onChange={e => editProduct(e)}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Button
                    variant={"contained"}
                    color={"success"}
                    style={{ marginRight: 8 }}
                    onClick={() => getEditProduct()}
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
              </Box>
            )}
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateProduct;
