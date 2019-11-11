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
    },
    MUIDataTable: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "#4A4A4A1A"
      }
    },
    MuiMenu: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9"
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF"
          }
        }
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF"
        }
      }
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white"
      }
    },
    MuiTableRow: {
      root: {
        height: 56
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        padding: "14px 40px 14px 24px"
      },
      head: {
        fontSize: "0.95rem"
      },
      body: {
        fontSize: "0.95rem"
      },
      paddingCheckbox: {
        padding: "0 0 0 15px"
      }
    }
  }
};

export default {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
  secondary: createMuiTheme({ ...secondaryTheme, ...overrides }),
  success: createMuiTheme({ ...successTheme, ...overrides })
};
