import { screen } from '@testing-library/react';

import Login from '../../pages/login/Login';
import { renderWithProviders } from '../utils/renderWithProviders';

describe('Login Smoke', () => {
  it('renders login screen with main controls', () => {
    renderWithProviders(<Login />, { route: '/login' });

    expect(screen.getByRole('tab', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email adress/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /forgot password/i }),
    ).toBeInTheDocument();
  });
});
