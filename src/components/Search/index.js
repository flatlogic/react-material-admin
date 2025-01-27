import React, { useState } from 'react';
import classNames from 'classnames';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { withStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  search: {
    position: 'relative',
    borderRadius: 25,
    paddingLeft: theme.spacing(2.5),
    width: 36,
    backgroundColor: alpha(theme.palette.common.black, 0),
    transition: theme.transitions.create(['background-color', 'width']),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  searchFocused: {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create('right'),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  searchIconOpened: {
    right: theme.spacing(1.25),
  },
  headerIcon: {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.35)',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: '100%',
  },
});

const Search = ({ classes }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div
        className={classNames(classes.search, {
          [classes.searchFocused]: isSearchOpen,
        })}
      >
        <div
          className={classNames(classes.searchIcon, {
            [classes.searchIconOpened]: isSearchOpen,
          })}
          onClick={() => setSearchOpen(!isSearchOpen)}
        >
          <SearchIcon classes={{ root: classes.headerIcon }} />
        </div>
        <InputBase
          placeholder='Search...'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Search);
