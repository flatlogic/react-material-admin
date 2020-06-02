import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider } from "@material-ui/styles";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { ManagementProvider } from "./context/ManagementContext";
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext
} from "./context/ThemeContext";
import { CssBaseline } from "@material-ui/core";
import config from "../src/config";

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common["Content-Type"] = "application/json";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
        <ThemeChangeProvider>
          <ThemeStateContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <ManagementProvider>
                <CssBaseline />
                <App />
                </ManagementProvider>
              </ThemeProvider>
            )}
          </ThemeStateContext.Consumer>
        </ThemeChangeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
