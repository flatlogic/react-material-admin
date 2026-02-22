import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import classnames from 'classnames';

import SettingsIcon from '@mui/icons-material/Settings';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Fab, IconButton } from '@mui/material';
// styles
import useStyles from './styles';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Link } from '../Wrappers';
import ColorChangeThemePopper from './components/ColorChangeThemePopper';

import EditUser from '../../pages/user/EditUser';

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

function Layout() {
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
      <Header />
      <Sidebar structure={structure}/>
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <BreadCrumbs />
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='user/edit' element={<EditUser />} />

          <Route
            path='core'
            element={<Navigate to='/app/core/typography' replace />}
          />
          <Route path='core/typography' element={<TypographyPage />} />
          <Route path='core/colors' element={<ColorsPage />} />
          <Route path='core/grid' element={<GridPage />} />

          <Route
            path='tables'
            element={<Navigate to='/app/tables/static' replace />}
          />
          <Route path='tables/static' element={<StaticTablesPage />} />
          <Route path='tables/dynamic' element={<DynamicTablesPage />} />

          <Route path='ui' element={<Navigate to='/app/ui/icons' replace />} />
          <Route path='ui/icons' element={<IconsPage />} />
          <Route path='ui/badge' element={<BadgesPage />} />
          <Route path='ui/carousel' element={<CarouselsPage />} />
          <Route path='ui/modal' element={<ModalsPage />} />
          <Route path='ui/navbar' element={<NavbarsPage />} />
          <Route path='ui/tooltips' element={<TooltipsPage />} />
          <Route path='ui/tabs' element={<TabsPage />} />
          <Route path='ui/cards' element={<CardsPage />} />
          <Route path='ui/widget' element={<WidgetsPage />} />
          <Route path='ui/progress' element={<ProgressPage />} />
          <Route path='ui/notifications' element={<NotificationsPage />} />

          <Route
            path='forms'
            element={<Navigate to='/app/forms/elements' replace />}
          />
          <Route path='forms/elements' element={<FormsElements />} />
          <Route path='forms/validation' element={<FormValidation />} />

          <Route
            path='charts'
            element={<Navigate to='/app/charts/overview' replace />}
          />
          <Route path='charts/overview' element={<Charts />} />
          <Route path='charts/line' element={<LineCharts />} />
          <Route path='charts/bar' element={<BarCharts />} />
          <Route path='charts/pie' element={<PieCharts />} />

          <Route path='grid' element={<DraggableGrid />} />

          <Route
            path='maps'
            element={<Navigate to='/app/maps/google' replace />}
          />
          <Route path='maps/google' element={<MapsGoogle />} />
          <Route path='maps/vector' element={<VectorMaps />} />

          <Route
            path='extra'
            element={<Navigate to='/app/extra/timeline' replace />}
          />
          <Route path='extra/timeline' element={<Timeline />} />
          <Route path='extra/search' element={<Search />} />
          <Route path='extra/gallery' element={<Gallery />} />
          <Route path='extra/invoice' element={<Invoice />} />
          <Route path='extra/calendar' element={<Calendar />} />

          <Route
            path='ecommerce/management'
            element={
              <ProductsProvider>
                <Ecommerce />
              </ProductsProvider>
            }
          />
          <Route
            path='ecommerce/management/edit/:id'
            element={
              <ProductsProvider>
                <CreateProduct />
              </ProductsProvider>
            }
          />
          <Route
            path='ecommerce/management/create'
            element={
              <ProductsProvider>
                <CreateProduct />
              </ProductsProvider>
            }
          />
          <Route path='ecommerce/product/:id' element={<Product />} />
          <Route path='ecommerce/product' element={<Product />} />
          <Route path='ecommerce/gridproducts' element={<ProductsGrid />} />

          <Route path='users' element={<UsersTablePage />} />
          <Route path='user/new' element={<UsersFormPage />} />
          <Route path='users/:id/edit' element={<UsersFormPage />} />
          <Route path='*' element={<Navigate to='/app/dashboard' replace />} />
        </Routes>
        <Fab
          color='primary'
          aria-label='settings'
          onClick={(e) => handleClick(e)}
          className={classes.changeThemeFab}
          style={{ zIndex: 2000 }}
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

export default Layout;
