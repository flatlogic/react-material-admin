const hostApi = process.env.NODE_ENV === "development"
    ? "http://localhost"
    : "https://sing-generator-node.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://flatlogic.github.io/react-material-admin-full";

export default {
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: "admin@flatlogic.com",
    password: "password"
  }
};
