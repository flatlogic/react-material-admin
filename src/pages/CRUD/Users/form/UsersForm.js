import { Formik } from 'formik';
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';

import InputFormItem from 'components/FormItems/items/InputFormItem';
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';

import usersFields from 'pages/CRUD/Users/helpers/usersFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const UsersForm = (props) => {
  const {
    isEditing,
    isProfile,
    findLoading,
    record,
    onSubmit,
    onCancel
  } = props;

  const iniValues = () => {
    return IniValues(usersFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(usersFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(usersFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }

    return isEditing ? 'Edit Users' : 'Add Users';
  };

  const renderForm = () =>
  <Widget title={title()} collapse close>
      <Formik
      onSubmit={handleSubmit}
      initialValues={iniValues()}
      validationSchema={formValidations()}>
      
        {(form) =>
      <form onSubmit={form.handleSubmit}>
            <Grid container spacing={3} direction='column'>
              <Grid>
                <InputFormItem
              name={'firstName'}
              schema={usersFields}
              autoFocus />
            
              </Grid>

              <Grid>
                <InputFormItem name={'lastName'} schema={usersFields} />
              </Grid>

              <Grid>
                <InputFormItem name={'phoneNumber'} schema={usersFields} />
              </Grid>

              <Grid>
                <InputFormItem name={'email'} schema={usersFields} />
              </Grid>

              <Grid>
                <RadioFormItem name={'role'} schema={usersFields} />
              </Grid>

              <Grid>
                <SwitchFormItem name={'disabled'} schema={usersFields} />
              </Grid>

              <Grid>
                <ImagesFormItem
              name={'avatar'}
              schema={usersFields}
              path={'users/avatar'}
              fileProps={{
                size: undefined,
                formats: undefined
              }}
              max={undefined} />
            
              </Grid>

              <Grid>
                <InputFormItem name={'password'} schema={usersFields} />
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={2}>
              <Grid>
                <Button
              color='primary'
              variant='contained'
              onClick={form.handleSubmit}>
              
                  Save
                </Button>
              </Grid>
              <Grid>
                <Button
              color='primary'
              variant='outlined'
              onClick={form.handleReset}>
              
                  Reset
                </Button>
              </Grid>
              <Grid>
                <Button
              color='primary'
              variant='outlined'
              onClick={() => onCancel()}>
              
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
      }
      </Formik>
    </Widget>;

  if (findLoading) {
    return <Loader />;
  }
  if (isEditing && !record) {
    return <Loader />;
  }
  return renderForm();
};
export default UsersForm;