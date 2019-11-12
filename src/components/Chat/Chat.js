import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//styles
import useStyles from "./styles";

//components
import { Button } from "../Wrappers";

export default function Chat({ open, chatClose, ...rest }) {
  console.log(rest);
  return (
    <Dialog
      open={open}
      onClose={chatClose}
      aria-labelledby="chat-title"
      {...rest}
    >
      <DialogTitle id="chat-title">Chat</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button>new message</Button>
      </DialogActions>
    </Dialog>
  );
}
