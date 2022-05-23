import React from 'react';
import Button from '@mui/material/Button';
import MaterialDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Dialog = ({ open, title, onClose, contentText, onSubmit }) => (
  <MaterialDialog
    open={open}
    TransitionComponent={Transition}
    onClose={onClose}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-slide-description'>
        {contentText}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onClose()}>Disagree</Button>
      <Button color='error' onClick={() => onSubmit()}>
        Agree
      </Button>
    </DialogActions>
  </MaterialDialog>
);

export default Dialog;
