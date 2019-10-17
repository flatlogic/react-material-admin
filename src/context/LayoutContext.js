import React from "react";

var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    case "COLOR_TOGGLE_APPBAR":
      return {
        ...state,
        appBarColor: action.color,
      };
      case "COLOR_TOGGLE_SIDEBAR": 
    return {
      ...state,
      linkActiveColor: action.linkColor
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) {
  let i = 0;
  var [state, dispatch] = React.useReducer(layoutReducer, {
    isSidebarOpened: false,
    appBarColor: "primary",
    linkActiveColor: "primary",
  });
  localStorage.setItem('state', JSON.stringify(state))
  for (let key in state) {
    if (i === 0) continue 
    localStorage.setItem(key, state[key])
    i++
  }
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  var context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

const toggleSidebar = dispatch => {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
};

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };
