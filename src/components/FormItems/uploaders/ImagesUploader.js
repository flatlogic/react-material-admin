import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import FileUploader from 'components/FormItems/uploaders/UploadService';
import Errors from '../../../components/FormItems/error/errors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  actionButtonsWrapper: {
    position: 'relative',
  },
  previewContent: {
    padding: '0px !important',
  },
  imageItem: {
    '&.MuiGrid-root': {
      margin: 10,
      boxShadow: '2px 2px 8px 0 rgb(0 0 0 / 40%)',
      borderRadius: 10,
    },
    height: '100px',
  },
  actionButtons: {
    position: 'absolute',
    bottom: 5,
    right: 4,
  },
  previewContainer: {
    '& button': {
      position: 'absolute',
      top: 10,
      right: 10,
      '& svg': {
        height: 50,
        width: 50,
        fill: '#FFF',
        stroke: '#909090',
        strokeWidth: 0.5,
      },
    },
  },
  button: {
    padding: '0px !important',
    minWidth: '45px !important',
    '& svg': {
      height: 36,
      width: 36,
      fill: '#FFF',
      stroke: '#909090',
      strokeWidth: 0.5,
    },
  },
});

const ImagesUploader = (props) => {
  const classes = useStyles();
  const { value, onChange, schema, path, max, readonly } = props;

  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [imageMeta, setImageMeta] = useState({
    imageSrc: null,
    imageAlt: null,
  });
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

  const doPreviewImage = (image) => {
    setImageMeta({
      imageSrc: image.publicUrl,
      imageAlt: image.name,
    });
    setShowPreview(true);
  };

  const doCloseImageModal = () => {
    setImageMeta({
      imageSrc: null,
      imageAlt: null,
    });
    setShowPreview(false);
  };

  const uploadButton = (
    <Box>
      <label htmlFor='button-file' style={{ cursor: 'pointer' }}>
        <input
          id='button-file'
          style={{ display: 'none' }}
          disabled={loading || readonly}
          accept='image/*'
          type='file'
          onChange={handleChange}
          ref={inputElement}
        />
        <Button variant='contained' component='span'>
          Upload an Image
        </Button>{' '}
      </label>
    </Box>
  );

  return (
    <Box>
      {readonly || (max && fileList().length >= max) ? null : uploadButton}

      {valuesArr() && valuesArr().length ? (
        <Grid container>
          {valuesArr().map((item) => {
            return (
              <Grid item className={classes.imageItem} key={item.id}>
                <img
                  alt={item.name}
                  src={item.publicUrl}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: 10,
                  }}
                />

                <div className={classes.actionButtonsWrapper}>
                  <div className={classes.actionButtons}>
                    <Button
                      classes={{ root: classes.button }}
                      variant='text'
                      onClick={() => doPreviewImage(item)}
                    >
                      <SearchIcon />
                    </Button>
                    {!readonly && (
                      <Button
                        classes={{ root: classes.button }}
                        variant='text'
                        onClick={() => handleRemove(item.id)}
                      >
                        <CloseIcon />
                      </Button>
                    )}
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      ) : null}
      <Dialog
        open={showPreview}
        onClose={doCloseImageModal}
        classes={{ root: classes.previewContainer }}
      >
        <Button variant='text' onClick={() => doCloseImageModal()}>
          <CloseIcon />
        </Button>
        <img src={imageMeta.imageSrc} alt={imageMeta.imageAlt} />
      </Dialog>
    </Box>
  );
};

ImagesUploader.propTypes = {
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

export default ImagesUploader;
