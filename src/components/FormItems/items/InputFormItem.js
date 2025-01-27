import React  from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import TextField from '@mui/material/TextField';

const InputFormItem = (props) => {
  const {
    name,
    schema,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    inputProps,
    errorMessage,
    multiline
  } = props;

  const { label } = schema[name];

  return (
    <FastField name={name}>
      {({ form }) => (
        <>
          <TextField
            id='outlined-basic'
            variant='outlined'
            fullWidth
            label={label}
            multiline={multiline}
            rows={multiline && 4}
            onChange={(event) => {
              form.setFieldValue(name, event.target.value);
              form.setFieldTouched(name);
            }}
            value={form.values[name] || ''}
            placeholder={placeholder || undefined}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            // error={FormErrors.validateStatus(form, name, errorMessage)}
            {...inputProps}
          />
          <div className='invalid-feedback'>
            {FormErrors.displayableError(form, name, errorMessage)}
          </div>
          {!!hint && <small className='form-text text-muted'>{hint}</small>}
        </>
      )}
    </FastField>
  );
};

InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
};

export default InputFormItem;
