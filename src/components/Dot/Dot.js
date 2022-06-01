import React from 'react';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

let useStyles = makeStyles((theme) => ({
  dotBase: {
    width: 6,
    height: 6,
    backgroundColor: theme.palette.text.hint,
    borderRadius: '50%',
    transition: theme.transitions.create('background-color'),
  },
  dotMedium: {
    width: 8,
    height: 8,
  },
  dotLarge: {
    width: 14,
    height: 14,
  },
}));

export default function Dot({ size = 'small', color, style }) {
  let classes = useStyles();
  let theme = useTheme();

  return (
    <div
      className={classnames(classes.dotBase, {
        [classes.dotBase]: size === 'small',
        [classes.dotMedium]: size === 'medium',
        [classes.dotLarge]: size === 'large',
      })}
      style={{
        backgroundColor:
          (color && theme.palette.text[color] && theme.palette.text[color]) ||
          color,
        ...style,
      }}
    />
  );
}
