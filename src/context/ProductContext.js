import React from "react";
import axios from "axios";

import config from "../config";
import { rows } from "../pages/ecommerce/mock";

const ProductsContext = React.createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return {
        isLoaded: true,
        products: action.payload
      };
    case "EDIT_PRODUCT":
      const index = action.payload.id;
      return {
        isLoaded: true,
        products: rows.map(c => {
          if (c.id === index) {
            return { ...c, ...action.payload };
          }
          return c;
        })
      };

    case "CREATE_PRODUCT":
      return {
        isLoaded: true,
        products: rows.push(action.payload)
      };

    default:
      return {
        ...state
      };
  }
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useReducer(rootReducer, {
    isLoaded: false,
    products: rows
  });
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsState = () => {
  const context = React.useContext(ProductsContext);
  return context;
};

export function getProductsRequest(dispatch) {
  // We check if app runs with backend mode
  if (config.isBackend) {
    return axios.get("/products").then(res => {
      dispatch({ type: "UPDATE_PRODUCTS", payload: res.data });
    });
  }
}

export function deleteProductRequest({ id, history, dispatch }) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  axios.delete("/products/" + id).then(res => {
    getProductsRequest(dispatch);
    if (history.location.pathname !== "/app/ecommerce/management") {
      history.push("/app/ecommerce/management");
    }
  });
}

export function getProductInfo(dispatch) {
  // We check if app runs with backend mode
  if (config.isBackend) {
    axios.get("/products").then(res => {
      dispatch({ type: "UPDATE_PRODUCTS", payload: res.data });
    });
  }
}

export function updateProduct(product, dispatch) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  axios.put("/products/" + product.id, product).then(res => {
    dispatch({ type: "EDIT_PRODUCT", payload: res.data });
  });
}

export function createProduct(product, dispatch) {
  // We check if app runs with backend mode
  if (!config.isBackend) return;

  axios.post("/products", product).then(res => {
    dispatch({ type: "EDIT_PRODUCT", payload: res.data });
  });
}

export function receiveProduct(product, products) {
  if (!config.isBackend) return;

  console.log(products);
}

export { ProductsProvider, ProductsContext, useProductsState };
