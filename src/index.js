import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider as ThemeChangeProvider } from "./context/ThemeContext";
import "./index.css";

import { ThemeStateContext } from "./context/ThemeContext";

ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeChangeProvider>
        <ThemeStateContext.Consumer>
          {value => (
            <ThemeProvider theme={value.theme}>
              <CssBaseline />
              <App />
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
