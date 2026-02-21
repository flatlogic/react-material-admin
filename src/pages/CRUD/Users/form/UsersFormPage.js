import React, { useEffect } from 'react';
import UsersForm from 'pages/CRUD/Users/form/UsersForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  actions,
  useManagementDispatch,
  useManagementState,
} from '../../../../context/ManagementContext';

const UsersFormPage = () => {
  const managementDispatch = useManagementDispatch();
  const managementState = useManagementState();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isEditing = () => {
    return !!params.id;
  };

  const isProfile = () => {
    return location.pathname === '/app/profile';
  };

  const doSubmit = (id, data) => {
    if (isEditing() || isProfile()) {
      actions.doUpdate(id, data, navigate, {
        isProfile: isProfile(),
        redirectPath: isProfile() ? null : '/app/users',
      })(managementDispatch);
    } else {
      actions.doCreate(data, navigate, '/app/users')(managementDispatch);
    }
  };

  useEffect(() => {
    if (isEditing()) {
      actions.doFind(params.id, {
        navigate,
        redirectPath: '/app/users',
      })(managementDispatch);
    } else {
      if (isProfile()) {
        const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
        const currentUserId = currentUser?.user?.id;
        actions.doFind(currentUserId, {
          navigate,
          redirectPath: '/app/dashboard',
        })(managementDispatch);
      } else {
        managementDispatch(actions.doNew());
      }
    }
  }, [location.pathname, managementDispatch, navigate, params.id]);

  const { saveLoading, findLoading, currentUser } = managementState;
  const record = isEditing() || isProfile() ? currentUser : {};

  return (
    <>
      <UsersForm
        saveLoading={saveLoading}
        findLoading={findLoading}
        currentUser={currentUser}
        record={record}
        isEditing={isEditing()}
        isProfile={isProfile()}
        onSubmit={doSubmit}
        onCancel={() => navigate('/app/users')}
      />
    </>
  );
};

export default UsersFormPage;
