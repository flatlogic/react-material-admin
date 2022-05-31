import React from 'react';
import { withStyles } from '@mui/styles';
import { Button } from "../../../components/Wrappers";

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    padding: '48px',
  },
  header: {
    margin: 0,
    fontSize: '2.5rem',
    fontWeight: 400,
    color: '#fff',
    marginBottom: '0.5rem',
  },
  description: {
    marginTop: 0,
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#fff',
  },
  button: {
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
  },
})

const DraggableStory = ({ classes }) => {
  return (
      <div>
        <div className={classes.container}>
          <p className={classes.header}>Draggable story!</p>
          <p className={classes.description}><i>Build</i> your own interfaces! Sit back and relax.</p>
          <div>
            <Button
              className={classes.button}
              size="large"
              color="warning"
              variant="contained"
              style={{ boxShadow: 'none' }}>Fullscreen me!</Button>
          </div>
        </div>
      </div>
  )
}

export default withStyles(styles)(DraggableStory);