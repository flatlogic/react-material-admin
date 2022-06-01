import React, { useEffect } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  TextField as Input
} from "@mui/material";
import { useParams, useHistory } from "react-router-dom";

//context
import {
  getProductsRequest,
  useProductsState,
  updateProduct,
  createProduct,
  getProductsImages
} from "../../context/ProductContext";

//components
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";
import config from "../../config";

const CreateProduct = () => {
  const { id } = useParams();
  const context = useProductsState();

  const getId = id => {
    return context.products.products.findIndex(c => {
      return c.id == id; // eslint-disable-line
    });
  };

  const [localProducts, setLocalProducts] = React.useState(
    context.products.products[getId(id)]
  );

  const [newProduct, setNewProduct] = React.useState({
    img:
      "https://flatlogic-node-backend.herokuapp.com/assets/products/img1.jpg",
    title: null,
    subtitle: null,
    price: 0.1,
    rating: 5,
    description_1: null,
    description_2: null,
    code: null,
    hashtag: null,
    technology: [],
    discount: 0
  });

  // function sendNotification() {
  //   const componentProps = {
  //     type: "feedback",
  //     message: "Product has been Updated!",
  //     variant: "contained",
  //     color: "success"
  //   };
  //   const options = {
  //     type: "info",
  //     position: toast.POSITION.TOP_RIGHT,
  //     progressClassName: classes.progress,
  //     className: classes.notification,
  //     timeOut: 1000
  //   };
  //   return toast(
  //     <Notification
  //       {...componentProps}
  //       className={classes.notificationComponent}
  //     />,
  //     options
  //   );
  // }

  useEffect(() => {
    getProductsRequest(context.setProducts);
    getProductsImages(context.setProducts);
  }, []); // eslint-disable-line

  useEffect(() => {
    setLocalProducts(context.products.products[getId(id)]);
  }, [context]); // eslint-disable-line

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

  const getEditProduct = () => {
    updateProduct(localProducts, context.setProducts);
    // sendNotification();
  };

  const createNewProduct = () => {
    createProduct(newProduct, context.setProducts);
    history.push("/app/ecommerce/management");
  };

  const changeImgSrc = e => {
    if (isCreateProduct) {
      setNewProduct({ ...localProducts, img: e.target.value });
    } else {
      setLocalProducts({ ...localProducts, img: e.target.value });
    }
  };


  const isCreateProduct =
    window.location.hash === "#/app/ecommerce/management/create";

  return (
    <>
      <Grid container spacing={3}>
        {/*<ToastContainer*/}
        {/*  className={classes.toastsContainer}*/}
        {/*  closeButton={*/}
        {/*    <CloseButton className={classes.notificationCloseButton} />*/}
        {/*  }*/}
        {/*  closeOnClick={false}*/}
        {/*  progressClassName={classes.notificationProgress}*/}
        {/*/>*/}
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
                      value={
                        isCreateProduct ? newProduct.img : localProducts.img
                      }
                      fullWidth
                      onChange={e => changeImgSrc(e)}
                    >
                      {context.products.images.map((c, i) => (
                        <MenuItem value={c} key={c}>
                          <img src={c} style={{ height: 100, width: 200 }} alt={"ecommerce product"}/>
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
                      id="description_2"
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
                      value={
                        isCreateProduct ? newProduct.code : localProducts.code
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


export default CreateProduct;
