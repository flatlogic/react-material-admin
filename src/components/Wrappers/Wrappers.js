import React from "react";
import {
  withStyles,
  Badge as BadgeBase,
  Typography as TypographyBase,
  Button as ButtonBase,
  Chip as ChipBase,
  Tooltip as TooltipBase,
  Avatar as AvatarBase,
  Paper as PaperBase,
  AppBar as AppBarBase,
  Link as LinkBase,
  CircularProgress as CircularProgressBase,
  LinearProgress as LinearProgressBase,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import classnames from "classnames";

// styles
const useStyles = makeStyles(theme => ({
  badge: {
    fontWeight: 600,
    height: props => {
      if (!props.variant) return 16;
    },
    minWidth: props => {
      if (!props.variant) return 16;
    },
  },
}));

function Badge({ children, colorBrightness, color, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const Styled = createStyled({
    badge: {
      backgroundColor: getBackgroundColor(color, theme, colorBrightness),
      color: "white",
    },
  });

  return (
    <Styled>
      {styledProps => (
        <BadgeBase
          classes={{
            badge: classnames(classes.badge, styledProps.classes.badge),
          }}
          {...props}
        >
          {children}
        </BadgeBase>
      )}
    </Styled>
  );
}

function Chip({ colorBrightness, color, ...props }) {
  const theme = useTheme();
  const Styled = createStyled({
    root: {
      backgroundColor: getBackgroundColor(color, theme, colorBrightness),
      color: "white",
    },
  });

  return (
    <Styled>
      {styledProps => (
        <ChipBase
          classes={{
            root: classnames(styledProps.classes.root),
          }}
          {...props}
        />
      )}
    </Styled>
  );
}

function Typography({
  children,
  weight,
  size,
  colorBrightness,
  color,
  block,
  ...props
}) {
  const theme = useTheme();

  return (
    <TypographyBase
      style={{
        color: getBackgroundColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, props.variant, theme),
      }}
      component={block ? "div" : "p"}
      {...props}
    >
      {children}
    </TypographyBase>
  );
}

function Button({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    contained: {
      backgroundColor: getBackgroundColor(color, theme),
      boxShadow: theme.customShadows.widget,
      color: `${color ? "white" : theme.palette.text.primary} !important`,
      "&:hover": {
        backgroundColor: getBackgroundColor(color, theme, "light"),
        boxShadow: theme.customShadows.widgetWide,
      },
    },
    root: {
      color: getBackgroundColor(color, theme),
    },
    outlined: {
      color: getBackgroundColor(color, theme),
      borderColor: getBackgroundColor(color, theme),
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <ButtonBase
          classes={{
            contained: classes.contained,
            root: classes.root,
            outlined: classes.outlined,
          }}
          {...props}
        >
          {children}
        </ButtonBase>
      )}
    </Styled>
  );
}

function Avatar({ children, color, colorBrightness, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    colorDefault: {
      backgroundColor: getBackgroundColor(color, theme, colorBrightness),
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <AvatarBase classes={{ colorDefault: classes.colorDefault }} {...props}>
          {children}
        </AvatarBase>
      )}
    </Styled>
  );
}

function Tooltip({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    tooltip: {
      backgroundColor: getBackgroundColor(color, theme),
      color: "white",
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <TooltipBase classes={{ tooltip: classes.tooltip }} {...props}>
          {children}
        </TooltipBase>
      )}
    </Styled>
  );
}

function Paper({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    root: {
      backgroundColor: getBackgroundColor(color, theme),
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <PaperBase classes={{ root: classes.root }} {...props}>
          {children}
        </PaperBase>
      )}
    </Styled>
  );
}

function AppBar({ children, color, ...props }) {
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: getBackgroundColor(color, theme),
    },
  }));

  const classes = useStyles();

  return (
    <AppBarBase classes={{ root: classes.root }} {...props}>
      {children}
    </AppBarBase>
  );
}

function Link({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    root: {
      color: color
        ? `${getBackgroundColor(color, theme)} !important`
        : theme.palette.text.primary,
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <LinkBase classes={{ root: classes.root }} {...props}>
          {children}
        </LinkBase>
      )}
    </Styled>
  );
}

function CircularProgress({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    root: {
      color: color
        ? `${getBackgroundColor(color, theme)} !important`
        : theme.palette.primary.main,
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <CircularProgressBase classes={{ root: classes.root }} {...props}>
          {children}
        </CircularProgressBase>
      )}
    </Styled>
  );
}

function LinearProgress({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    colorPrimary: {
      backgroundColor: color
        ? `${getBackgroundColor(color, theme)} !important`
        : theme.palette.primary.main,
    },
    bar: {
      backgroundColor: color
        ? `${getBackgroundColor(color, theme)}`
        : theme.palette.primary.main,
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <LinearProgressBase
          classes={{ bar: classes.bar, colorPrimary: classes.colorPrimary }}
          {...props}
        >
          {children}
        </LinearProgressBase>
      )}
    </Styled>
  );
}

export {
  Badge,
  Typography,
  Button,
  Chip,
  Tooltip,
  Avatar,
  Paper,
  AppBar,
  Link,
  CircularProgress,
  LinearProgress,
};

// ########################################################################

function getBackgroundColor(color, theme, brigtness = "main") {
  if (color && theme.palette[color] && theme.palette[color][brigtness]) {
    return theme.palette[color][brigtness];
  }
}

function getFontWeight(style) {
  switch (style) {
    case "light":
      return 300;
    case "medium":
      return 500;
    case "bold":
      return 600;
    default:
      return 400;
  }
}

function getFontSize(size, variant = "", theme) {
  let multiplier;

  switch (size) {
    case "sm":
      multiplier = 0.8;
      break;
    case "md":
      multiplier = 1.5;
      break;
    case "xl":
      multiplier = 2;
      break;
    case "xxl":
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  const defaultSize =
    variant && theme.typography[variant]
      ? theme.typography[variant].fontSize
      : theme.typography.fontStyle + "px";

  return `calc(${defaultSize} * ${multiplier})`;
}

function createStyled(styles, options) {
  const Styled = function(props) {
    const { children, ...other } = props;
    return children(other);
  };

  return withStyles(styles, options)(Styled);
}
