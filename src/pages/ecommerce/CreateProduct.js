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
import useStyles from "./styles";

//context
import {
  getProductsRequest,
  useProductsState,
  updateProduct,
  createProduct
} from "../../context/ProductContext";

//components
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";
import config from "../../config";
import { toast, ToastContainer } from "react-toastify";
import { Close as CloseIcon } from "@material-ui/icons";
import Notification from "../../components/Notification";

const CreateProduct = () => {
  const classes = useStyles();
  const { id } = useParams();
  const context = useProductsState();

  const getId = () => {
    return context.products.products.findIndex(c => {
      return c.id == id;
    });
  };

  const [localProducts, setLocalProducts] = React.useState(
    context.products.products[id - 1]
  );

  const [newProduct, setNewProduct] = React.useState({
    img:
      "https://flatlogic-node-backend.herokuapp.com/assets/products/img1.jpg",
    title: "",
    subtitle: "",
    price: "0.1",
    rating: "5",
    description_1: "",
    description_2: "",
    code: "",
    hashtag: "",
    technology: [],
    discount: "0"
  });

  function sendNotification() {
    const componentProps = {
      type: "feedback",
      message: "Product has been Updated!",
      variant: "contained",
      color: "success"
    };
    const options = {
      type: "info",
      position: toast.POSITION.TOP_RIGHT,
      progressClassName: classes.progress,
      className: classes.notification,
      timeOut: 1000
    };
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options
    );
  }

  useEffect(() => {
    getProductsRequest(context.setProducts);
  }, []);

  useEffect(() => {
    setLocalProducts(context.products.products[getId()]);
  }, [context]);

  const history = useHistory();

  const editProduct = e => {
    setLocalProducts({
      ...localProducts,
      [e.target.id]: e.currentTarget.value
    });
  };

  const editNewProduct = e => {
    setNewProduct({
      ...newProduct,
      [e.target.id]: e.currentTarget.value
    });
  };

  console.log(localProducts);
  console.log(context.products.products);
  console.log(newProduct);

  const getEditProduct = () => {
    updateProduct(localProducts, context.setProducts);
    sendNotification();
  };

  const createNewProduct = () => {
    console.log("1");
    createProduct(newProduct, context.setProducts);
  };

  const isCreateProduct =
    window.location.hash === "#/app/ecommerce/management/create";

  return (
    <>
      <Grid container spacing={3}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />
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
                    <Select
                      value={isCreateProduct ? 1 : id}
                      fullWidth
                      onChange={e => console.log(e.currentTarget)}
                    >
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
                      value={
                        isCreateProduct ? newProduct.title : localProducts.title
                      }
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      value={
                        isCreateProduct
                          ? newProduct.subtitle
                          : localProducts.subtitle
                      }
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      value={
                        isCreateProduct ? newProduct.price : localProducts.price
                      }
                      type={"number"}
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      value={
                        isCreateProduct
                          ? newProduct.discount
                          : localProducts.discount
                      }
                      type={"number"}
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Description 1</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="description_1"
                      margin="normal"
                      variant="outlined"
                      multiline
                      value={
                        isCreateProduct
                          ? newProduct["description_1"]
                          : localProducts["description_1"]
                      }
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box width={300}>
                    <Typography variant={"h6"}>Description 2</Typography>
                  </Box>
                  <Box width={500}>
                    <Input
                      id="description_1"
                      margin="normal"
                      variant="outlined"
                      multiline
                      value={
                        isCreateProduct
                          ? newProduct["description_2"]
                          : localProducts["description_2"]
                      }
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      value={
                        isCreateProduct
                          ? newProduct.hashtag
                          : localProducts.hashtag
                      }
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
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
                      value={
                        isCreateProduct
                          ? newProduct.rating
                          : localProducts.rating
                      }
                      fullWidth
                      onChange={e =>
                        isCreateProduct ? editNewProduct(e) : editProduct(e)
                      }
                    />
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Button
                    variant={"contained"}
                    color={"success"}
                    style={{ marginRight: 8 }}
                    onClick={() =>
                      isCreateProduct ? createNewProduct() : getEditProduct()
                    }
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

function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}

export default CreateProduct;
