const isDevelopment = import.meta.env.DEV;
const hostApi = isDevelopment
  ? "http://localhost"
  : "https://sing-generator-node.herokuapp.com";
const portApi = isDevelopment ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl = isDevelopment
  ? "http://localhost:3000"
  : typeof window !== "undefined"
    ? window.location.origin
    : "https://flatlogic.github.io/react-material-admin-full";
const isBackend = String(import.meta.env.VITE_BACKEND).toLowerCase() === "true";

const appConfig = {
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend,
  auth: {
    email: 'admin@flatlogic.com',
    password: 'password',
  },
  app: {
    colors: {
      dark: '#002B49',
      light: '#FFFFFF',
      sea: '#004472',
      sky: '#E9EBEF',
      wave: '#D1E7F6',
      rain: '#CCDDE9',
      middle: '#D7DFE6',
      black: '#13191D',
      salat: '#21AE8C',
    },
  },
};

export default appConfig;
