import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormErrors from 'components/FormItems/formErrors';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function MultipleSelectChip({
  form,
  name,
  mapper,
  schema,
  hint,
  errorMessage,
  multiple,
  items,
}) {
  const theme = useTheme();
  const { label } = schema[name];

  const selected = useMemo(() => {
    if (form.values[name]) {
      return multiple
        ? form.values[name].map((value) => mapper.intoSelect(value))
        : mapper.intoSelect(form.values[name]);
    }
    return multiple ? [] : '';
  }, [multiple, form.values]);

  const handleChange = (event, value) => {
    if (!value) {
      form.setFieldValue(name, multiple ? [] : null);
      return;
    }
    form.setFieldValue(name, value);
  };

  return (
    <FormControl fullWidth>
      <Autocomplete
        fullWidth
        multiple={multiple}
        id='tags-outlined'
        options={items || []}
        value={selected}
        onChange={handleChange}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => {
          if (option) {
            return option.id === value.id;
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label={label} placeholder={label} />
        )}
        ListboxProps={{
          style: {
            maxHeight: '250px',
          },
        }}
      />
      <div className='invalid-feedback'>
        {FormErrors.displayableError(form, name, errorMessage)}
      </div>
      {!!hint && <small className='form-text text-muted'>{hint}</small>}
    </FormControl>
  );
}
