import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import FormErrors from 'components/FormItems/formErrors';

const DatePickerFormItem = (props) => {
  const {
    name,
    schema,
    hint,
    size,
    placeholder,
    autoFocus,
    autoComplete,
    inputProps,
    errorMessage,
    required = false,
    showTimeInput,
  } = props;

  const { label } = schema[name];
  return (
    <FastField name={name}>
      {({ form }) => {
        return (
          <div className='form-group'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(params) => <TextField {...params} />}
                label={label}
                value={form.values[name]}
                showToolbar
                onChange={(value) => {
                  form.setFieldValue(name, value);
                  form.setFieldTouched(name);
                }}
              />
            </LocalizationProvider>
            <div className='invalid-feedback'>
              {FormErrors.displayableError(form, name, errorMessage)}
            </div>
            {!!hint && <small className='form-text text-muted'>{hint}</small>}
          </div>
        );
      }}
    </FastField>
  );
};

DatePickerFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
};

export default DatePickerFormItem;
