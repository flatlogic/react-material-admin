import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { MenuItem, IconButton, Menu } from '@mui/material';
import { MoreVert as MoreIcon } from '@mui/icons-material';
import Dot from '../../../components/Dot/Dot';

const styles = (theme) => ({
  todoItemWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0px',
    cursor: 'pointer',
    borderBottom: `1px solid rgba(185, 185, 185, 0.3)`,
    margin: '0 24px',
  },
  itemIsDone: {
    color: theme.palette.text.hint,
    textDecoration: 'line-through',
    'div > div': {
      background: '#9B9B9B !important'
    }
  },
  taskText: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 30,
    '& p': {
      margin: 0,
      fontSize: 15,
      fontWeight: theme.typography.fontWeightMedium,
      width: 210,
      overflow: 'hidden',
    }
  },
  time: {
    fontSize: 10,
    fontWeight: 500,
  },
  menuItem: {
    color: theme.palette.text.hint,
  }
})

const ToDoItem = ({ classes, time, title, color, backgroundColor}) => {
  const [moreButtonRef, setMoreButtonRef] = useState(null);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [itemStatus, setItemStatus] = useState(false);

  return (
    <div className={`${classes.todoItemWrap} ${itemStatus && classes.itemIsDone}`} onClick={() => setItemStatus(!itemStatus)} style={{ backgroundColor: backgroundColor }}>
      <span className={classes.time}>{time}</span>
      <div className={classes.taskText}>
        <Dot size="medium" color={color} style={{ marginRight: 5 }} />
        <p>{title}</p>
      </div>
      <div>
        <IconButton
          className={classes.moreButton}
          aria-owns="widget-menu"
          aria-haspopup="true"
          onClick={() => setMoreMenuOpen(true)}
          ref={setMoreButtonRef}
        >
          <MoreIcon className={classes.menuItem} />
        </IconButton>
        <Menu
          id="widget-menu"
          open={isMoreMenuOpen}
          anchorEl={moreButtonRef}
          onClose={() => setMoreMenuOpen(false)}
          disableAutoFocusItem
        >
          <MenuItem>
            <Typography>Edit</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Copy</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Delete</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Print</Typography>
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default withStyles(styles)(ToDoItem);