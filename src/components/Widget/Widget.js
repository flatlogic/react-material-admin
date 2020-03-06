import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  TextField as Input,
  InputAdornment,
  Box
} from "@material-ui/core";
import { MoreVert as MoreIcon, Search as SearchIcon } from "@material-ui/icons";
import classnames from "classnames";

//components
import { Typography } from "../../components/Wrappers";

// styles
import useStyles from "./styles";

export default function Widget({
  children,
  title,
  subtitle,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  inheritHeight,
  searchField,
  className,
  style,
  ...props
}) {
  var classes = useStyles(props);

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <div
      className={classnames(
        {
          [classes.inheritHeight]: inheritHeight,
          [classes.widgetWrapper]: !inheritHeight
        },
        className
      )}
      style={style}
    >
      <Paper
        className={classnames(classes.paper, {
          [props.paperClass]: props.paperClass
        })}
        classes={{ root: classes.widgetRoot }}
      >
        {!title ? (
          <>
            {header ? (
              <div className={classes.widgetHeader}>{header}</div>
            ) : null}
          </>
        ) : (
          <div className={classes.widgetHeader}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Box display={"flex"} style={{ width: "calc(100% - 20px)" }}>
                <Typography
                  variant="h6"
                  color="text"
                  colorBrightness={"secondary"}
                  noWrap
                >
                  {title}
                </Typography>
                <Box alignSelf="flex-end" ml={1}>
                  <Typography
                    color="text"
                    colorBrightness={"hint"}
                    variant={"caption"}
                  >
                    {subtitle}
                  </Typography>
                </Box>
              </Box>
              {searchField && (
                <Input
                  id="search-field"
                  className={classes.textField}
                  label="Search"
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className={classes.searchIcon} />
                      </InputAdornment>
                    )
                  }}
                />
              )}
              {!disableWidgetMenu && (
                <IconButton
                  color="primary"
                  className={classes.moreButton}
                  aria-owns="widget-menu"
                  aria-haspopup="true"
                  onClick={() => setMoreMenuOpen(true)}
                  buttonRef={setMoreButtonRef}
                >
                  <MoreIcon />
                </IconButton>
              )}
            </Box>
          </div>
        )}
        <div
          className={classnames(classes.widgetBody, {
            [classes.noPadding]: noBodyPadding,
            [classes.paddingTop]: !title && !noBodyPadding,
            [bodyClass]: bodyClass
          })}
        >
          {children}
        </div>
      </Paper>
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
  );
}
