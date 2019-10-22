import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import "./index.css";

import { LayoutStateContext } from "./context/LayoutContext";

ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <LayoutStateContext.Consumer>
        {value => (
          <ThemeProvider theme={value.theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        )}
      </LayoutStateContext.Consumer>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
