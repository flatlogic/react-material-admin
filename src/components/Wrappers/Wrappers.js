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
  Radio as RadioBase,
  InputBase,
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
  defaultColor,
  color,
  block,
  uppercase,
  ...props
}) {
  const theme = useTheme();

  return (
    <TypographyBase
      style={{
        color:
          !defaultColor && color
            ? getTextColor(color, theme)
            : getBackgroundColor(defaultColor, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, props.variant, theme),
        textTransform: uppercase ? "uppercase" : "none",
      }}
      component={block ? "div" : "p"}
      {...props}
    >
      {children}
    </TypographyBase>
  );
}

function Button({ children, color, ...props }) {
  const useStyles = makeStyles(theme => ({
    root: {
      color: getBackgroundColor(color, theme),
    },
    contained: {
      backgroundColor: getBackgroundColor(color, theme),
      boxShadow: theme.customShadows.widget,
      color: `${color ? "white" : theme.palette.text.primary} !important`,
      "&:hover": {
        backgroundColor: getBackgroundColor(color, theme, "light"),
        boxShadow: theme.customShadows.widgetWide,
      },
      "&:active": {
        boxShadow: theme.customShadows.widgetWide,
      },
    },
    outlined: {
      color: getBackgroundColor(color, theme),
      borderColor: getBackgroundColor(color, theme),
      "&:hover": {
        backgroundColor: getCustomBackgroundColor(color),
      },
    },
    select: {
      backgroundColor: theme.palette.text.hint,
      "&:hover": {
        backgroundColor: theme.palette.text.hint,
      },
    },
  }));
  const classes = useStyles();

  return (
    <ButtonBase
      classes={{
        contained: classes.contained,
        root: classes.root,
        outlined: classes.outlined,
      }}
      {...props}
      className={classnames({
        [classes.select]: props.select,
        [props.className]: true,
      })}
    >
      {children}
    </ButtonBase>
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
  const useStyles = makeStyles(theme => ({
    root: {
      color: color
        ? `${getBackgroundColor(color, theme)} !important`
        : theme.palette.text.primary,
    },
  }));

  const classes = useStyles();

  return (
    <LinkBase classes={{ root: classes.root }} {...props}>
      {children}
    </LinkBase>
  );
}

function CircularProgress({ children, color, ...props }) {
  const useStyles = makeStyles(theme => ({
    root: {
      color: color
        ? `${getBackgroundColor(color, theme)} !important`
        : theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  return (
    <CircularProgressBase classes={{ root: classes.root }} {...props}>
      {children}
    </CircularProgressBase>
  );
}

function LinearProgress({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    root: {
      backgroundColor: getCustomBackgroundColor(color),
    },
    bar: {
      backgroundColor: color
        ? `${getBackgroundColor(color, theme)} !important`
        : theme.palette.primary.main,
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <LinearProgressBase
          classes={{ root: classes.root, bar: classes.bar }}
          {...props}
        >
          {children}
        </LinearProgressBase>
      )}
    </Styled>
  );
}

function Radio({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    root: {
      color: 'green',
      '&$checked': {
        color: 'green',
      },
    },
    checked: {},
    // '&.Mui-checked': {
    // color: theme.palette[color].main
    // },
    // '&:hover': {
    //   backgroundColor: `${theme.palette[color].main} !important`,
    //   opacity: .1
    // }
  });

  return (
    <Styled>
      {({ classes }) => (
        <RadioBase
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
          {...props}
        />
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
  Radio,
};

// ########################################################################

function getBackgroundColor(color, theme, brigtness = "main") {
  if (color && theme.palette[color] && theme.palette[color][brigtness]) {
    return theme.palette[color][brigtness];
  } else if (color) {
    return theme.palette.text[color];
  }
}

function getTextColor(color, theme) {
  if (color) {
    return theme.palette.text[color];
  }
}

function getCustomBackgroundColor(color) {
  switch (color) {
    case "primary":
      return "rgba(83, 109, 254, .3)";
    case "secondary":
      return "rgba(255, 198, 208, 0.3)";
    case "warning":
      return "rgba(255, 219, 198, 0.3)";
    case "success":
      return "rgba(147, 212, 185, 0.3)";
    case "info":
      return "rgba(214, 172, 254, 0.3)";
    default:
      return "#C4D4FE";
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
