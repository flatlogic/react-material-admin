import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField as Input,
  Box
} from "@material-ui/core";

// components
import { Button, Typography } from "../Wrappers";
import Dot from "../Sidebar/components/Dot";

export default function Chat({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="chat-title"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <div>Chat</div>
          <Box display={"flex"} alignItems={"center"}>
            <Dot color={"success"} size={"medium"} />
            &nbsp;13
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box pb={1}>
          <Typography weight={"bold"}>Jane Hew</Typography>
          <Typography>Hey! How it's going?</Typography>
        </Box>
        <Box pb={1}>
          <Typography weight={"bold"}>Axel Pittman</Typography>
          <Typography>I'll definitely buy this template</Typography>
        </Box>
        <Box>
          <Typography weight={"bold"}>Sophia Fernandez</Typography>
          <Typography>What's the font-family?</Typography>
        </Box>
      </DialogContent>
      <Box display={"flex"} alignItems={"center"} px={3} py={1}>
        <Input
          id="message-input"
          margin="normal"
          placeholder={"Type a message"}
          style={{ flexGrow: 1 }}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          style={{ marginLeft: 8 }}
        >
          Send
        </Button>
      </Box>
    </Dialog>
  );
}
