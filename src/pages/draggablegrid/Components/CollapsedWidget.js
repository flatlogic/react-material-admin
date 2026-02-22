import { Typography, useTheme } from '@mui/material';

function CollapsedWidget() {
  const theme = useTheme();
  const highlightedStyle = {
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
  };

  return (
    <Typography component="div">
      <blockquote style={{ fontStyle: 'italic', margin: '1rem' }}>
        "There are no limits. There are plateaus, but you must not stay there, you must go beyond
        them. If it kills you, it kills you. A man must constantly exceed his level."
        <footer style={{ fontSize: '0.85rem', fontStyle: 'normal' }}>
        — Bruce Lee
        </footer>
      </blockquote>
      <p>
        To make a widget initially collapsed just add <code style={highlightedStyle}>collapsed</code>{' '}
        property to <code style={highlightedStyle}>.widget</code>.
      </p>
      <p>
        To make it locked (prevent dragging) add <code style={highlightedStyle}>.locked</code>{' '}
        class.
      </p>
    </Typography>
  );
}

export default CollapsedWidget;
