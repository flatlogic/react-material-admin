import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectFormItem = (props) => {
  const { schema, form, name, hint, errorMessage } = props;

  const { label, options } = schema[name];

  const handleChange = (event) => {
    const value = event.target.value;
    if (!value) {
      form.setFieldValue(name, null);
      return;
    }
    form.setFieldValue(name, value);
  };

  return (
    <FastField name={name}>
      {({ form }) => (
        <>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              label={label}
              value={form.values[name] || ''}
              onChange={handleChange}
              id={name}
              name={name}
            >
              {options.map((option) => {
                return <MenuItem value={option.value}>{option.label}</MenuItem>;
              })}
            </Select>

            <div className='invalid-feedback'>
              {FormErrors.displayableError(form, name, errorMessage)}
            </div>

            {!!hint && <small className='form-text text-muted'>{hint}</small>}
          </FormControl>
        </>
      )}
    </FastField>
  );
};

SelectFormItem.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
};

export default SelectFormItem;
