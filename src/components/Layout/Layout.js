import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import classnames from 'classnames'
import Icon from '@mdi/react'
import {
    mdiSettings as SettingsIcon,
    mdiFacebookBox as FacebookIcon,
    mdiTwitterBox as TwitterIcon,
    mdiGithubBox as GithubIcon,
} from '@mdi/js'
import {
    Fab,
    IconButton,
} from '@material-ui/core'

// styles
import useStyles from './styles'

// components
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { Link } from '../../components/Wrappers'
import ColorChangeThemePopper from './components/ColorChangeThemePopper'

// pages
import Dashboard from '../../pages/dashboard'
import TypographyPage from '../../pages/typography'
import Notifications from '../../pages/notifications'
import Tables from '../../pages/tables'
import Icons from '../../pages/icons'
import Charts from '../../pages/charts'
import LineCharts from '../../pages/charts/LineCharts'
import BarCharts from '../../pages/charts/BarCharts'
import PieCharts from '../../pages/charts/PieCharts'
import Colors from '../../pages/colors'
import GridPage from '../../pages/grid'
import Badge from '../../pages/badge'
import Carousel from '../../pages/сarousel'
import Modal from '../../pages/modal'
import Navbar from '../../pages/nav/Navbar'
import Tooltips from '../../pages/tooltips'
import TabsPage from '../../pages/tabs'
import FormsElements from '../../pages/forms/elements'
import FormValidation from '../../pages/forms/validation'
import Cards from '../../pages/cards'
import DynamicTables from '../../pages/tables/dynamic'
import WidgetPage from '../../pages/widget'
import Progress from '../../pages/progress'
import Ecommerce from '../../pages/ecommerce'
import Product from '../../pages/ecommerce/Products'
import ProductsGrid from '../../pages/ecommerce/ProductsGrid'
import MapsGoogle from '../../pages/maps'
import VectorMaps from '../../pages/maps/VectorMap'
import Timeline from '../../pages/timeline'
import Search from '../../pages/search'
import Gallery from '../../pages/gallery'
import Invoice from '../../pages/invoice'
import CreateProduct from '../../pages/ecommerce/CreateProduct'
import Calendar from '../../pages/calendar'
import UserList from '../../pages/user'
import UserAdd from '../../pages/user/AddUser'
import UserEdit from '../../pages/user/EditUser'
import BreadCrumbs from '../../components/BreadCrumbs'
import Profile from '../../pages/profile'
import DraggableGrid from '../../pages/draggablegrid'

// context
import { useLayoutState } from '../../context/LayoutContext'
import { ProductsProvider } from '../../context/ProductContext'

//Sidebar structure
import structure from '../Sidebar/SidebarStructure'

function Layout(props) {
    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = React.useState(2)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'add-section-popover' : undefined
    const handleClick = event => {
        setAnchorEl(open ? null : event.currentTarget)
    }

    // global
    const layoutState = useLayoutState();

    // eslint-disable-next-line no-unused-vars
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // eslint-disable-next-line no-unused-vars
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    return (
        <div className={classes.root}>
            <Header history={props.history} />
            <Sidebar structure={structure} />
            <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
                <BreadCrumbs />
                <Switch>
                    <Route path="/app/profile" component={Profile} />
                    <Route path="/app/dashboard" component={Dashboard} />
                    <Route
                        path="/app/core/typography"
                        component={TypographyPage}
                    />
                    <Route path="/app/core/grid" component={GridPage} />
                    <Route
                        path="/app/ui/notifications"
                        component={Notifications}
                    />
                    <Route
                        path="/app/forms/elements"
                        component={FormsElements}
                    />
                    <Route
                        path="/app/forms/validation"
                        component={FormValidation}
                    />
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
                    <Route
                        path="/app/tables/dynamic"
                        component={DynamicTables}
                    />
                    <Route path="/app/grid" component={DraggableGrid} />
                    <Route path="/app/charts/overview" component={Charts} />
                    <Route path="/app/charts/line" component={LineCharts} />
                    <Route path="/app/charts/bar" component={BarCharts} />
                    <Route path="/app/charts/pie" component={PieCharts} />
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
                    <Route
                        path="/app/ecommerce/product/:id"
                        component={Product}
                    />
                    <Route path="/app/ecommerce/product" component={Product} />
                    <Route
                        path="/app/ecommerce/gridproducts"
                        component={ProductsGrid}
                    />
                    <Route
                        exact
                        path="/app/tables"
                        render={() => <Redirect to={'/app/tables/static'} />}
                    />
                    <Route
                        exact
                        path="/app/charts"
                        render={() => <Redirect to={'/app/charts/overview'} />}
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
                        render={() => (
                            <Redirect to="/app/ecommerce/management" />
                        )}
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
                    <Route path="/app/ui/icons" component={Icons} />
                    <Route path="/app/extra/timeline" component={Timeline} />
                    <Route path="/app/extra/search" component={Search} />
                    <Route path="/app/extra/gallery" component={Gallery} />
                    <Route path="/app/extra/invoice" component={Invoice} />
                    <Route path="/app/extra/calendar" component={Calendar} />
                    <Route path="/app/core/colors" component={Colors} />
                    <Route path="/app/maps/google" component={MapsGoogle} />
                    <Route path="/app/maps/vector" component={VectorMaps} />
                    <Route
                        exact
                        path="/app/user"
                        render={() => <Redirect to="/app/user/list" />}
                    />
                    <Route path="/app/user/list" component={UserList} />
                    <Route path="/app/user/add" component={UserAdd} />
                    <Route path="/app/user/:id/edit" component={UserEdit} />
                    <Route path="/app/user/:id" component={UserEdit} />
                </Switch>
                <Fab
                    color="primary"
                    aria-label="settings"
                    onClick={e => handleClick(e)}
                    className={classes.changeThemeFab}
                    style={{ zIndex: 100 }}
                >
                    <Icon path={SettingsIcon} size={1} color="#fff" />
                </Fab>
                <ColorChangeThemePopper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                />
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
                        <Link
                            href={'https://www.facebook.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton aria-label="facebook">
                                <Icon
                                    path={FacebookIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                        <Link
                            href={'https://twitter.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton aria-label="twitter">
                                <Icon
                                    path={TwitterIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                        <Link
                            href={'https://github.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton
                                aria-label="github"
                                style={{ padding: '12px 0 12px 12px' }}
                            >
                                <Icon
                                    path={GithubIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                    </div>
                </Footer>
            </div>
        </div>
    )
}

export default withRouter(Layout)
