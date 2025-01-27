import React, { createContext, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

export const INITIAL_STATE = {
  open: false,
  message: '',
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'top',
  },
  autoHideDuration: 4000,
  type: 'success',
};

const ACTIONS = {
  open: 'open',
  close: 'close',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.open:
      return {
        ...state,
        open: true,
        ...action.options,
      };
    case ACTIONS.close:
      return INITIAL_STATE;
    default:
      return state;
  }
}

const getSnackbar = () => {
  const SnackbarContext = createContext({});
  let dispatchAction;

  const SnackbarProvider = ({ initialValue = INITIAL_STATE, children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialValue);
    dispatchAction = dispatch;

    const handleClose = () => {
      dispatchAction({ type: ACTIONS.close });
    };

    return (
      <SnackbarContext.Provider value={state}>
        <Snackbar
          open={state.open}
          autoHideDuration={state.autoHideDuration}
          TransitionComponent={Slide}
          onClose={handleClose}
          anchorOrigin={{
            horizontal: state.anchorOrigin.horizontal,
            vertical: state.anchorOrigin.vertical,
          }}
        >
          <Alert
            onClose={handleClose}
            severity={state.type}
            sx={{ width: '100%' }}
          >
            {state.message}
          </Alert>
        </Snackbar>
        {children}
      </SnackbarContext.Provider>
    );
  };

  const showSnackbar = (options) => {
    dispatchAction && dispatchAction({ type: ACTIONS.open, options });
  };

  return [SnackbarProvider, () => useContext(SnackbarContext), showSnackbar];
};

const [SnackbarProvider, useSnackbar, showSnackbar] = getSnackbar();

export { SnackbarProvider, useSnackbar, showSnackbar };
