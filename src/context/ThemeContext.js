import React from 'react'
import Themes from '../themes'

const ThemeStateContext = React.createContext();
const ThemeDispatchContext = React.createContext();


function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_COLOR_THEME":
      return {
        ...state,
        theme: Themes[action.theme]
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children }) {
  var [state, dispatch] = React.useReducer(themeReducer, {
    theme: Themes[localStorage.getItem("theme")] || Themes.default
  });
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
  var context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useThemeState must be used within a ThemeProvider");
  }
  return context;
}

function useThemeDispatch() {
  var context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error("useTheemDispatch must be used within a ThemeProvider");
  }
  return context;
}

export {
  ThemeProvider,
  useThemeState,
  useThemeDispatch,
  ThemeStateContext
};
