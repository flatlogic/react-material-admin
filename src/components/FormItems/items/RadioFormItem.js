import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FastField } from 'formik';

const RadioFormItem = (props) => {
  const { name, schema, hint, errorMessage } = props;

  const { label, options } = schema[name];

  return (
    <FastField name={name}>
      {({ form }) => (
        <>
          <FormControl>
            <FormLabel id='demo-row-radio-buttons-group-label'>
              {label}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              onChange={(e) => {
                form.setFieldValue(name, e.target.value);
                form.setFieldTouched(name);
              }}
              value={form.values[name] || ''}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <div className='invalid-feedback'>
            {FormErrors.displayableError(form, name, errorMessage)}
          </div>

          {!!hint && <small className='form-text text-muted'>{hint}</small>}
        </>
      )}
    </FastField>
  );
};

RadioFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default RadioFormItem;
