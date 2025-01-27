import React from 'react';
import { useHistory } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Actions = ({ classes, id, openModal, entity }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id={id} key={id}>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={classes}
      >
        <MenuItem
          classes={classes}
          onClick={() => {
            history.push(`/admin/${entity}/${id}/edit`);
            handleClose();
          }}
        >
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem
          classes={classes}
          onClick={(event) => {
            openModal(event, id);
            handleClose();
          }}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Actions;
