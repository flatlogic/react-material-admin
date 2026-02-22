import { screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';

import UsersTable from '../../pages/CRUD/Users/table/UsersTable.js';
import UsersFormPage from '../../pages/CRUD/Users/form/UsersFormPage.js';
import { renderWithProviders } from '../utils/renderWithProviders';

describe('Users Smoke', () => {
  it('renders users table and mock data', async () => {
    renderWithProviders(<UsersTable />, { route: '/app/users' });

    expect(screen.getByRole('button', { name: /^new$/i })).toBeInTheDocument();
    expect(await screen.findByText('Admin')).toBeInTheDocument();
  });

  it('renders users edit form route', async () => {
    const editRoute = (
      <Routes>
        <Route path='/app/users/:id/edit' element={<UsersFormPage />} />
      </Routes>
    );

    renderWithProviders(
      editRoute,
      { route: '/app/users/1/edit' },
    );

    expect(await screen.findByText(/edit users/i)).toBeInTheDocument();
    expect(await screen.findByDisplayValue('Admin')).toBeInTheDocument();
  });
});
