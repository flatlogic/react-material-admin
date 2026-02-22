import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import Dashboard from '../../pages/dashboard/Dashboard';
import { renderWithProviders } from '../utils/renderWithProviders';

vi.mock('@mui/icons-material', () =>
  new Proxy(
    { __esModule: true },
    {
      get: (_target, prop) => {
        if (prop === '__esModule') {
          return true;
        }
        if (prop === 'then') {
          return undefined;
        }
        return () => null;
      },
      has: (_target, prop) => prop !== 'then',
    },
  ),
);

describe('Dashboard Smoke', () => {
  it('renders key dashboard widgets', () => {
    renderWithProviders(<Dashboard />, { route: '/app/dashboard' });

    expect(screen.getByText(/support tracker/i)).toBeInTheDocument();
    expect(screen.getByText(/revenue breakdown/i)).toBeInTheDocument();
  });
});
