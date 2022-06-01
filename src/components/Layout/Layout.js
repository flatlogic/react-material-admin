import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import SettingsIcon from '@mui/icons-material/Settings';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Fab, IconButton } from '@mui/material';
import { connect } from 'react-redux';
// styles
import useStyles from './styles';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Link } from '../Wrappers';
import ColorChangeThemePopper from './components/ColorChangeThemePopper';

import EditUser from '../../pages/user/EditUser';
import AddUser from '../../pages/CRUD/Users/form/UsersForm';

// pages
import Dashboard from '../../pages/dashboard';
import Profile from '../../pages/profile'
import TypographyPage from '../../pages/typography'
import ColorsPage from '../../pages/colors'
import GridPage from '../../pages/grid'

import StaticTablesPage from '../../pages/tables'
import DynamicTablesPage from '../../pages/tables/dynamic'

import IconsPage from '../../pages/icons'
import BadgesPage from '../../pages/badge'
import CarouselsPage from '../../pages/carousel'
import CardsPage from '../../pages/cards'
import ModalsPage from '../../pages/modal'
import NotificationsPage from '../../pages/notifications'
import NavbarsPage from '../../pages/nav'
import TooltipsPage from '../../pages/tooltips'
import TabsPage from '../../pages/tabs'
import ProgressPage from '../../pages/progress'
import WidgetsPage from '../../pages/widget'

import Ecommerce from '../../pages/ecommerce'
import Product from '../../pages/ecommerce/Products'
import ProductsGrid from '../../pages/ecommerce/ProductsGrid'
import CreateProduct from '../../pages/ecommerce/CreateProduct'

import FormsElements from '../../pages/forms/elements'
import FormValidation from '../../pages/forms/validation'

import Charts from '../../pages/charts'
import LineCharts from '../../pages/charts/LineCharts'
import BarCharts from '../../pages/charts/BarCharts'
import PieCharts from '../../pages/charts/PieCharts'

import DraggableGrid from '../../pages/draggablegrid'

import MapsGoogle from '../../pages/maps'
import VectorMaps from '../../pages/maps/VectorMap'

import Timeline from '../../pages/timeline'
import Search from '../../pages/search'
import Gallery from '../../pages/gallery'
import Invoice from '../../pages/invoice'
import Calendar from '../../pages/calendar'

import BreadCrumbs from '../../components/BreadCrumbs';

// context
import { useLayoutState } from '../../context/LayoutContext';
import { ProductsProvider } from '../../context/ProductContext'

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';

//Sidebar structure
import structure from '../Sidebar/SidebarStructure'

const Redirect = (props) => {
  useEffect(() => window.location.replace(props.url));
  return <span>Redirecting...</span>;
};

function Layout(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'add-section-popover' : undefined;
  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  // global
  let layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <Header history={props.history} />
      <Sidebar structure={structure}/>
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <BreadCrumbs />
        <Switch>
          <Route path='/app/dashboard' component={Dashboard} />
          <Route path="/app/profile" component={Profile} />
          <Route path='/app/user/edit' component={EditUser} />

          <Route exact path="/app/core" render={() => <Redirect to="/app/core/typography" />} />
          <Route path="/app/core/typography" component={TypographyPage} />
          <Route path="/app/core/colors" component={ColorsPage} />
          <Route path="/app/core/grid" component={GridPage} />

          <Route exact path="/app/tables" render={() => <Redirect to={'/app/tables/static'} />} />
          <Route path="/app/tables/static" component={StaticTablesPage} />
          <Route path="/app/tables/dynamic" component={DynamicTablesPage} />

          <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />} />
          <Route path="/app/ui/icons" component={IconsPage} />
          <Route path="/app/ui/badge" component={BadgesPage} />
          <Route path="/app/ui/carousel" component={CarouselsPage} />
          <Route path="/app/ui/modal" component={ModalsPage} />
          <Route path="/app/ui/navbar" component={NavbarsPage} />
          <Route path="/app/ui/tooltips" component={TooltipsPage} />
          <Route path="/app/ui/tabs" component={TabsPage} />
          <Route path="/app/ui/cards" component={CardsPage} />
          <Route path="/app/ui/widget" component={WidgetsPage} />
          <Route path="/app/ui/progress" component={ProgressPage} />
          <Route path="/app/ui/notifications" component={NotificationsPage} />

          <Route exact path="/app/forms" render={() => <Redirect to="/app/forms/elements" />} />
          <Route path="/app/forms/elements" component={FormsElements} />
          <Route path="/app/forms/validation" component={FormValidation} />

          <Route exact path="/app/charts" render={() => <Redirect to={'/app/charts/overview'} />} />
          <Route path="/app/charts/overview" component={Charts} />
          <Route path="/app/charts/line" component={LineCharts} />
          <Route path="/app/charts/bar" component={BarCharts} />
          <Route path="/app/charts/pie" component={PieCharts} />

          <Route path="/app/grid" component={DraggableGrid} />

          <Route exact path="/app/maps" render={() => <Redirect to="/app/maps/google" />} />
          <Route path="/app/maps/google" component={MapsGoogle} />
          <Route path="/app/maps/vector" component={VectorMaps} />

          <Route exact path="/app/extra" render={() => <Redirect to="/app/extra/timeline" />}/>
          <Route path="/app/extra/timeline" component={Timeline} />
          <Route path="/app/extra/search" component={Search} />
          <Route path="/app/extra/gallery" component={Gallery} />
          <Route path="/app/extra/invoice" component={Invoice} />
          <Route path="/app/extra/calendar" component={Calendar} />

          <Route path="/app/ecommerce/management" exact>
            <ProductsProvider>
              <Ecommerce />
            </ProductsProvider>
          </Route>
          <Route path="/app/ecommerce/management/edit/:id" exact>
            <ProductsProvider>
              <CreateProduct />
            </ProductsProvider>
          </Route>
          <Route path="/app/ecommerce/management/create">
            <ProductsProvider>
              <CreateProduct />
            </ProductsProvider>
          </Route>
          <Route path="/app/ecommerce/product/:id" component={Product}/>
          <Route path="/app/ecommerce/product" component={Product} />
          <Route path="/app/ecommerce/gridproducts" component={ProductsGrid}/>

          />

          <Route path={'/app/users'} exact component={UsersTablePage} />
          <Route path={'/app/user/new'} exact component={AddUser} />
          <Route
            path={'/app/users/:id/edit'}
            exact
            component={UsersFormPage}
          />
        </Switch>
        <Fab
          color='primary'
          aria-label='settings'
          onClick={(e) => handleClick(e)}
          className={classes.changeThemeFab}
          style={{ zIndex: 100 }}
        >
          <SettingsIcon style={{ color: '#fff' }} />
        </Fab>
        <ColorChangeThemePopper id={id} open={open} anchorEl={anchorEl} />
        <Footer>
          <div>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/'}
              target={'_blank'}
              className={classes.link}
            >
              Flatlogic
            </Link>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/about'}
              target={'_blank'}
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              color={'primary'}
              href={'https://flatlogic.com/blog'}
              target={'_blank'}
              className={classes.link}
            >
              Blog
            </Link>
          </div>
          <div>
            <Link href={'https://www.facebook.com/flatlogic'} target={'_blank'}>
              <IconButton aria-label='facebook'>
                <FacebookIcon style={{ color: '#6E6E6E99' }} />
              </IconButton>
            </Link>
            <Link href={'https://twitter.com/flatlogic'} target={'_blank'}>
              <IconButton aria-label='twitter'>
                <TwitterIcon style={{ color: '#6E6E6E99' }} />
              </IconButton>
            </Link>
            <Link href={'https://github.com/flatlogic'} target={'_blank'}>
              <IconButton
                aria-label='github'
                style={{ padding: '12px 0 12px 12px' }}
              >
                <GithubIcon style={{ color: '#6E6E6E99' }} />
              </IconButton>
            </Link>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default withRouter(connect()(Layout));
