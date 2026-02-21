import React from 'react';
import {
  AppBar,
  Box,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from '@mui/material';
import {
  DashboardRounded as DashboardIcon,
  ExpandLess,
  ExpandMore,
  PeopleAltRounded as PeopleIcon,
  ShoppingCartRounded as ShoppingCartIcon,
} from '@mui/icons-material';

// components
import Widget from '../../../Widget';
import { Typography } from '../../../Wrappers';
import Code from '../../../Code';
import useStyles from '../../styles';

const sidebarStructureExample = [
  { id: 'dashboard', label: 'Dashboard', link: '/app/dashboard' },
  { id: 'ecommerce', label: 'E-Commerce', link: '/app/ecommerce' },
  {
    id: 'users',
    label: 'Users',
    children: [
      { id: 'users-list', label: 'Users List', link: '/app/users' },
      { id: 'users-create', label: 'Create User', link: '/app/user/new' },
    ],
  },
];

const SidebarPage = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const [activeLink, setActiveLink] = React.useState('/app/users');
  const [usersOpen, setUsersOpen] = React.useState(true);

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  const TabPanel = ({ children, index, value, className = classes.tabPanel }) => {
    if (index !== value) {
      return null;
    }

    return <section className={className}>{children}</section>;
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Widget title={'Sidebar'} disableWidgetMenu>
            <Typography variant={'body2'} style={{ marginBottom: 16 }}>
              Sidebar navigation is built from a <Code inline>structure</Code>{' '}
              array. Use it to describe top-level links and nested sections.
            </Typography>

            <AppBar position='static' className={classes.tabsAppBar}>
              <Tabs
                className={classes.tabs}
                value={tab}
                onChange={handleTabChange}
                aria-label='sidebar docs tabs'
              >
                <Tab className={classes.tab} label='Example' />
                <Tab className={classes.tab} label='Code' />
              </Tabs>
            </AppBar>

            <TabPanel index={0} value={tab}>
              <Box
                sx={{
                  maxWidth: 300,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'background.paper',
                }}
              >
                <Box
                  sx={{
                    px: 2,
                    py: 1.25,
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    fontWeight: 600,
                  }}
                >
                  Sidebar Preview
                </Box>

                <List disablePadding>
                  <ListItemButton
                    selected={activeLink === '/app/dashboard'}
                    onClick={() => setActiveLink('/app/dashboard')}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <DashboardIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                  </ListItemButton>

                  <ListItemButton
                    selected={activeLink === '/app/ecommerce'}
                    onClick={() => setActiveLink('/app/ecommerce')}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <ShoppingCartIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='E-Commerce' />
                  </ListItemButton>

                  <ListItemButton onClick={() => setUsersOpen((prev) => !prev)}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <PeopleIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Users' />
                    {usersOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={usersOpen} timeout='auto' unmountOnExit>
                    <List disablePadding>
                      <ListItemButton
                        sx={{ pl: 6 }}
                        selected={activeLink === '/app/users'}
                        onClick={() => setActiveLink('/app/users')}
                      >
                        <ListItemText primary='Users List' />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 6 }}
                        selected={activeLink === '/app/user/new'}
                        onClick={() => setActiveLink('/app/user/new')}
                      >
                        <ListItemText primary='Create User' />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Box>
            </TabPanel>

            <TabPanel index={1} value={tab}>
              <Code>{`
const sidebarStructure = [
  { id: 'dashboard', label: 'Dashboard', link: '/app/dashboard' },
  { id: 'ecommerce', label: 'E-Commerce', link: '/app/ecommerce' },
  {
    id: 'users',
    label: 'Users',
    children: [
      { id: 'users-list', label: 'Users List', link: '/app/users' },
      { id: 'users-create', label: 'Create User', link: '/app/user/new' },
    ],
  },
];

<Sidebar structure={sidebarStructure} />
              `}</Code>
              <Typography variant={'body2'} style={{ marginTop: 12 }}>
                In this project, navigation structure is defined in{' '}
                <Code inline>src/components/Sidebar/SidebarStructure.js</Code>.
              </Typography>
            </TabPanel>

            <Typography variant={'body2'} style={{ marginTop: 12 }}>
              Total items in this example structure:{' '}
              <Code inline>{String(sidebarStructureExample.length)}</Code>
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default SidebarPage;
