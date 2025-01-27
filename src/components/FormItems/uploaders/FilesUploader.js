import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'components/FormItems/uploaders/UploadService';
import Errors from '../../../components/FormItems/error/errors';

const FilesUploader = (props) => {
  const { value, onChange, schema, path, max, readonly } = props;

  const [loading, setLoading] = useState(false);
  const inputElement = useRef(null);

  const valuesArr = () => {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  };

  const fileList = () => {
    return valuesArr().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: 'done',
      url: item.publicUrl,
    }));
  };

  const handleRemove = (id) => {
    onChange(valuesArr().filter((item) => item.id !== id));
  };

  const handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, schema);

      setLoading(true);

      file = await FileUploader.upload(path, file, schema);

      inputElement.current.value = '';
      setLoading(false);
      onChange([...valuesArr(), file]);
    } catch (error) {
      inputElement.current.value = '';
      console.log('error', error);
      setLoading(false);
      Errors.showMessage(error);
    }
  };

  const formats = () => {
    if (schema && schema.formats) {
      return schema.formats.map((format) => `.${format}`).join(',');
    }
    return undefined;
  };

  const uploadButton = (
    <label
      className='btn btn-outline-secondary px-4 mb-2'
      style={{ cursor: 'pointer' }}
    >
      {'Upload a file'}
      <input
        style={{ display: 'none' }}
        disabled={loading || readonly}
        accept={formats()}
        type='file'
        onChange={handleChange}
        ref={inputElement}
      />
    </label>
  );

  return (
    <div>
      {readonly || (max && fileList().length >= max) ? null : uploadButton}

      {valuesArr() && valuesArr().length ? (
        <div>
          {valuesArr().map((item) => {
            return (
              <div key={item.id}>
                <i className='la la-link text-muted mr-2'></i>
                <a
                  href={item.publicUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  download
                >
                  {item.name}
                </a>

                {!readonly && (
                  <button
                    className='btn btn-link'
                    type='button'
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className='la la-times'></i>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

FilesUploader.propTypes = {
  readonly: PropTypes.bool,
  path: PropTypes.string,
  max: PropTypes.number,
  schema: PropTypes.shape({
    image: PropTypes.bool,
    size: PropTypes.number,
    formats: PropTypes.arrayOf(PropTypes.string),
  }),
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default FilesUploader;
