const hostApi =
  process.env.NODE_ENV === 'development' ? 'http://localhost' : '';
const portApi = process.env.NODE_ENV === 'development' ? 8080 : '';
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://flatlogic.github.io/react-material-admin-full';

export default {
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: 'https://sing-generator-node.herokuapp.com',
  isBackend: process.env.REACT_APP_BACKEND,
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
