import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './components/App';
import { LayoutProvider } from './context/LayoutContext';
import { UserProvider } from './context/UserContext';
import { ManagementProvider } from './context/ManagementContext';
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext,
} from './context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import config from '../src/config';
import 'leaflet/dist/leaflet.css';

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = 'application/json';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LayoutProvider>
    <UserProvider>
      <StyledEngineProvider injectFirst>
        <ThemeChangeProvider>
          <ThemeStateContext.Consumer>
            {(theme) => (
              <ThemeProviderV5 theme={theme}>
                <ManagementProvider>
                  <CssBaseline />
                  <App />
                </ManagementProvider>
              </ThemeProviderV5>
            )}
          </ThemeStateContext.Consumer>
        </ThemeChangeProvider>
      </StyledEngineProvider>
    </UserProvider>
  </LayoutProvider>,
);
