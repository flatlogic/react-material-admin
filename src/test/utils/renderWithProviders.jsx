import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import { LayoutProvider } from '../../context/LayoutContext';
import { UserProvider } from '../../context/UserContext';
import { ManagementProvider } from '../../context/ManagementContext';
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext,
} from '../../context/ThemeContext';

function Providers({ children, route = '/' }) {
  localStorage.setItem('theme', 'default');

  return (
    <MemoryRouter initialEntries={[route]}>
      <LayoutProvider>
        <UserProvider>
          <StyledEngineProvider injectFirst>
            <ThemeChangeProvider>
              <ThemeStateContext.Consumer>
                {(theme) => (
                  <ThemeProviderV5 theme={theme}>
                    <ManagementProvider>{children}</ManagementProvider>
                  </ThemeProviderV5>
                )}
              </ThemeStateContext.Consumer>
            </ThemeChangeProvider>
          </StyledEngineProvider>
        </UserProvider>
      </LayoutProvider>
    </MemoryRouter>
  );
}

function renderWithProviders(ui, options = {}) {
  const { route = '/', ...rest } = options;
  return render(ui, {
    wrapper: ({ children }) => <Providers route={route}>{children}</Providers>,
    ...rest,
  });
}

export { Providers, renderWithProviders };
