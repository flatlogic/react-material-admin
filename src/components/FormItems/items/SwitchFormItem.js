import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

const SwitchFormItem = (props) => {
  const { name, schema, hint, errorMessage } =
    props;

  const { label } = schema[name];

  return (
    <FastField name={name}>
      {({ form }) => (
        <>
          <FormGroup>
            <FormLabel>{label}</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  color='default'
                  onChange={(event) => {
                    form.setFieldValue(name, event.target.checked);
                    form.setFieldTouched(name);
                  }}
                  checked={!!form.values[name]}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
            />
          </FormGroup>

          <div className='invalid-feedback'>
            {FormErrors.displayableError(form, name, errorMessage)}
          </div>
          {!!hint && <small className='form-text text-muted'>{hint}</small>}
        </>
      )}
    </FastField>
  );
};

SwitchFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.string,
  size: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
};

export default SwitchFormItem;
