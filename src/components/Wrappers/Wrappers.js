import React from "react";
import { withStyles, withTheme, Badge as BadgeBase, Typography as TypographyBase } from "@material-ui/core";
import classnames from "classnames";

const getColor = (color, theme, brigtness = 'main') => {
  if (color && theme.palette[color] && theme.palette[color][brigtness]) {
   return theme.palette[color][brigtness];
  }
};

const getFontWeight = (style) => {
  switch (style) {
    case 'light':
      return 300;
    case 'medium':
      return 500;
    case 'bold':
      return 600;
    default:
      return 400;
  }
};

const getFontSize = (size, variant = '', theme) => {
  let multiplier;

  switch (size) {
    case 'sm':
      multiplier = .8;
      break;
    case 'md':
      multiplier = 1.5;
      break;
    case 'xl':
      multiplier = 2;
      break;
    case 'xxl':
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  const defaultSize = variant && theme.typography[variant] ? theme.typography[variant].fontSize : theme.typography.fontSize + 'px';

  return `calc(${defaultSize} * ${multiplier})`;
} 

const createStyled = (styles, options) => {
  const Styled = props => {
    const { children, ...other } = props;
    return children(other);
  }
  
  return withStyles(styles, options)(Styled);
}

const BadgeExtended = ({ classes, theme, children, ...props }) => {
  const Styled = createStyled({
    badge: {
      backgroundColor: getColor(props.color, theme, props.colorBrightness) 
    },
  });

  return (
    <Styled>
      {(styledProps) => <BadgeBase
        classes={{ badge: classnames(classes.badge, styledProps.classes.badge) }}
        {...props}
      >
        {children}
      </BadgeBase>}
    </Styled>
  );
}

export const Badge = withStyles(theme => ({
  badge: {
    fontWeight: 600,
    height: 16,
    minWidth: 16, 
  },
}), { withTheme: true })(BadgeExtended);

const TypographyExtended = ({ theme, children, weight, size, ...props }) => (
  <TypographyBase
    style={{
      color: getColor(props.color, theme, props.colorBrightness),
      fontWeight: getFontWeight(weight),
      fontSize: getFontSize(size, props.variant, theme),
    }}
    {...props}
  >
    {children}
  </TypographyBase>
);

export const Typography = withTheme()(TypographyExtended);