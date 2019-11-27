import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import Icon from "@mdi/react";
import {
  mdiSettings as SettingsIcon,
  mdiFacebookBox as FacebookIcon,
  mdiTwitterBox as TwitterIcon,
  mdiGithubBox as GithubIcon
} from "@mdi/js";
import {
  Fab,
  IconButton,
  Popper,
  FormControlLabel,
  RadioGroup,
  Box,
  Radio,
  Grid,
  Breadcrumbs,
  Tabs,
  Tab,
} from "@material-ui/core";
import {
  NavigateNext as NavigateNextIcon,
  CalendarToday as CalendarIcon,
  ChatBubbleOutline as ChatIcon,
  AddShoppingCart as AddIcon,
  StarBorder as StarIcon
} from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Widget from "../Widget";
import { Link, Typography, Button } from "../../components/Wrappers";

// pages
import Dashboard from "../../pages/dashboard";
import TypographyPage from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import LineCharts from "../../pages/charts/LineCharts";
import BarCharts from "../../pages/charts/BarCharts";
import PieCharts from "../../pages/charts/PieCharts";
import Colors from "../../pages/colors";
import GridPage from "../../pages/grid";
import Badge from "../../pages/badge";
import Carousel from "../../pages/сarousel";
import Modal from "../../pages/modal";
import Navbar from "../../pages/nav/Navbar";
import Tooltips from "../../pages/tooltips";
import TabsPage from "../../pages/tabs";
import FormsElements from "../../pages/forms/elements";
import FormValidation from "../../pages/forms/validation";
import Cards from "../../pages/cards";
import DynamicTables from "../../pages/tables/dynamic";
import WidgetPage from "../../pages/widget";
import Progress from "../../pages/progress";
import Ecommerce from "../../pages/ecommerce";
import Product from "../../pages/ecommerce/Products";
import ProductsGrid from "../../pages/ecommerce/ProductsGrid";
import MapsGoogle from "../../pages/maps";
import VectorMaps from "../../pages/maps/VectorMap";
import Timeline from "../../pages/timeline";
import Search from "../../pages/search";
import Gallery from "../../pages/gallery";
import Invoice from "../../pages/invoice";
import CreateProduct from "../../pages/ecommerce/CreateProduct";
import Calendar from "../../pages/calendar";

// context
import { useLayoutState } from "../../context/LayoutContext";
import { useThemeDispatch } from "../../context/ThemeContext";

//Sidebar structure
import structure from "../Sidebar/SidebarStructure";

// Tab styling

const CustomTab = withStyles(theme => ({
  root: {
    minWidth: 72
  }
}))(props => <Tab {...props} />);

function Layout(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTheme = e => {
    localStorage.setItem("theme", e.target.value);
    themeDispatch({ type: "TOGGLE_COLOR_THEME", theme: e.target.value });
  };
  const open = Boolean(anchorEl);
  const id = open ? "add-section-popover" : undefined;
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // global
  var layoutState = useLayoutState();
  var themeDispatch = useThemeDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }

  return (
    <div className={classes.root}>
      <Header history={props.history} />
      <Sidebar structure={structure} />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened
        })}
      >
        <div className={classes.fakeToolbar} />
        <Widget disableWidgetMenu inheritHeight className={classes.margin}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            wrap={"nowrap"}
            style={{ overflow: "auto" }}
          >
            {structure.map(c => {
              if (
                !c.children &&
                window.location.hash.includes(c.link) &&
                c.link
              ) {
                return (
                  <Box display="flex" alignItems="center" key={c.id}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Typography variant="h4">{c.label}</Typography>
                    </Breadcrumbs>
                    {window.location.hash.includes("/app/dashboard") && (
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                        style={{ marginLeft: 38 }}
                      >
                        <CustomTab label="Today" {...a11yProps(0)} />
                        <CustomTab label="This week" {...a11yProps(1)} />
                        <CustomTab label="This month" {...a11yProps(2)} />
                        <CustomTab label="This year" {...a11yProps(3)} />
                      </Tabs>
                    )}
                  </Box>
                );
              } else if (c.children) {
                return c.children.map(currentInner => {
                  if (window.location.hash.includes(currentInner.link)) {
                    return (
                      <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        key={c.id}
                      >
                        <Typography variant={"h6"}>{c.label}</Typography>
                        <Typography variant={"h6"} color="primary">
                          {currentInner.label}
                        </Typography>
                      </Breadcrumbs>
                    );
                  } else {
                    return null;
                  }
                });
              } else {
                return null;
              }
            })}
            {window.location.hash.includes("/app/dashboard") && (
              <Box display="flex" alignItems="center">
                <CalendarIcon className={classes.calendarIcon} />
                <Typography style={{ marginRight: 38 }}>
                  29 Oct 2019, Tuesday
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Latest Reports
                </Button>
              </Box>
            )}
            {window.location.hash.includes("/app/ecommerce") && (
              <Box display="flex" alignItems="center">
                <Box>
                  <IconButton aria-label="chat">
                    <ChatIcon className={classes.ecommerceIcon} />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton aria-label="add_to_cart">
                    <AddIcon className={classes.ecommerceIcon} />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton aria-label="rate">
                    <StarIcon className={classes.ecommerceIcon} />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Grid>
        </Widget>
        <Switch>
          <Route path="/app/dashboard" component={Dashboard} />
          <Route path="/app/core/typography" component={TypographyPage} />
          <Route path="/app/core/grid" component={GridPage} />
          <Route path="/app/ui/notifications" component={Notifications} />
          <Route path="/app/forms/elements" component={FormsElements} />
          <Route path="/app/forms/validation" component={FormValidation} />
          <Route path="/app/ui/badge" component={Badge} />
          <Route path="/app/ui/carousel" component={Carousel} />
          <Route path="/app/ui/modal" component={Modal} />
          <Route path="/app/ui/navbar" component={Navbar} />
          <Route path="/app/ui/tooltips" component={Tooltips} />
          <Route path="/app/ui/tabs" component={TabsPage} />
          <Route path="/app/ui/cards" component={Cards} />
          <Route path="/app/ui/widget" component={WidgetPage} />
          <Route path="/app/ui/progress" component={Progress} />
          <Route path="/app/tables/static" component={Tables} />
          <Route path="/app/tables/dynamic" component={DynamicTables} />
          <Route path="/app/charts/overview" component={Charts} />
          <Route path="/app/charts/line" component={LineCharts} />
          <Route path="/app/charts/bar" component={BarCharts} />
          <Route path="/app/charts/pie" component={PieCharts} />
          <Route exact path="/app/ecommerce/management" component={Ecommerce} />
          <Route
            path="/app/ecommerce/management/create"
            component={CreateProduct}
          />
          <Route path="/app/ecommerce/product/:id" component={Product} />
          <Route path="/app/ecommerce/product" component={Product} />
          <Route path="/app/ecommerce/gridproducts" component={ProductsGrid} />
          <Route
            exact
            path="/app/tables"
            render={() => <Redirect to={"/app/tables/static"} />}
          />
          <Route
            exact
            path="/app/charts"
            render={() => <Redirect to={"/app/charts/overview"} />}
          />
          <Route
            exact
            path="/app/ui"
            render={() => <Redirect to="/app/ui/icons" />}
          />
          <Route
            exact
            path="/app/core"
            render={() => <Redirect to="/app/core/typography" />}
          />
          <Route
            exact
            path="/app/forms"
            render={() => <Redirect to="/app/forms/elements" />}
          />
          <Route
            exact
            path="/app/ecommerce"
            render={() => <Redirect to="/app/ecommerce/management" />}
          />
          <Route
            exact
            path="/app/extra"
            render={() => <Redirect to="/app/extra/timeline" />}
          />
          <Route
            exact
            path="/app/maps"
            render={() => <Redirect to="/app/maps/google" />}
          />
          <Route path="/app/extra/timeline" component={Timeline} />
          <Route path="/app/extra/search" component={Search} />
          <Route path="/app/extra/gallery" component={Gallery} />
          <Route path="/app/extra/invoice" component={Invoice} />
          <Route path="/app/extra/calendar" component={Calendar} />
          <Route path="/app/core/colors" component={Colors} />
          <Route path="/app/maps/google" component={MapsGoogle} />
          <Route path="/app/maps/vector" component={VectorMaps} />
          <Route path="/app/ui/icons" component={Icons} />
        </Switch>
        <Fab
          color="primary"
          aria-label="settings"
          onClick={e => handleClick(e)}
          className={classes.changeThemeFab}
        >
          <Icon path={SettingsIcon} size={1} color="#fff" />
        </Fab>
        <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement={"left-start"}
        >
          <Widget disableWidgetMenu>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
            >
              <Typography variant="body2" weight={"bold"}>
                COLOR THEME
              </Typography>
              <RadioGroup
                  aria-label="theme"
                  value={localStorage.getItem("theme")}
                  onChange={e => handleChangeTheme(e)}
              >
                <Box display="flex" justifyContent="space-between">
                  <FormControlLabel
                      className={classes.noMargin}
                      value="default"
                      control={<Radio className={classes.defaultRadio}/>}
                  />
                  <FormControlLabel
                      className={classes.noMargin}
                      value="secondary"
                      control={<Radio className={classes.secondaryRadio}/>}
                  />
                  <FormControlLabel
                      className={classes.noMargin}
                      value="success"
                      control={<Radio className={classes.successRadio}/>}
                  />
                </Box>
              </RadioGroup>
            </Box>
          </Widget>
        </Popper>
        <Footer>
          <div>
            <Link
              color={"primary"}
              href={"https://flatlogic.com/"}
              target={"_blank"}
              className={classes.link}
            >
              Flatlogic
            </Link>
            <Link
              color={"primary"}
              href={"https://flatlogic.com/about"}
              target={"_blank"}
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              color={"primary"}
              href={"https://flatlogic.com/blog"}
              target={"_blank"}
              className={classes.link}
            >
              Blog
            </Link>
          </div>
          <div>
            <Link href={"https://www.facebook.com/flatlogic"} target={"_blank"}>
              <IconButton aria-label="facebook">
                <Icon path={FacebookIcon} size={1} color="#6E6E6E99" />
              </IconButton>
            </Link>
            <Link href={"https://twitter.com/flatlogic"} target={"_blank"}>
              <IconButton aria-label="twitter">
                <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
              </IconButton>
            </Link>
            <Link href={"https://github.com/flatlogic"} target={"_blank"}>
              <IconButton
                aria-label="github"
                style={{ padding: "12px 0 12px 12px" }}
              >
                <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
              </IconButton>
            </Link>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default withRouter(Layout);
