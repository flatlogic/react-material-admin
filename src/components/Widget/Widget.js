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

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  widgetWithDropdown,
  ...props
}) {
  var classes = useStyles(props);

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  const [date, setDate] = React.useState('');

  const handleDate = (event) => {
    setDate(event.target.value);
  };

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
          <>
            {!widgetWithDropdown && (
              <div className={classes.widgetHeader}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Box display={"flex"} style={{ width: "calc(100% - 20px)" }}>
                    <Typography
                      variant="h5"
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
          </>
        )}
     
        {widgetWithDropdown && (
          <Box>
            <div className={classes.topPart}>
              <Typography variant="h5">{title}</Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel classes={{ root: classes.inputPosition }} id="demo-simple-select-outlined-label">Date</InputLabel>
                <Select
                  classes={{ root: classes.selectPadding }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={date}
                  onChange={handleDate}
                  label="Date"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Daily</MenuItem>
                  <MenuItem value={20}>Weekly</MenuItem>
                  <MenuItem value={30}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>          
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
