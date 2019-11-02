import defaultTheme from "./default";
import successTheme from "./success";
import secondaryTheme from "./secondary";

import { createMuiTheme } from "@material-ui/core";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.64rem"
    },
    h4: {
      fontSize: "1.5rem"
    },
    h5: {
      fontSize: "1.285rem"
    },
    h6: {
      fontSize: "1.142rem"
    }
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    },
    MuiPaper: {
      root: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    }
  }
};

export default {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
  secondary: createMuiTheme({ ...secondaryTheme, ...overrides }),
  success: createMuiTheme({ ...successTheme, ...overrides })
};
