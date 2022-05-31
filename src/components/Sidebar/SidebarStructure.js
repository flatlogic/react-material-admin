import React from 'react';
import {
  Home as HomeIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  BarChart as ChartIcon,
  Map as MapIcon,
  Apps as CoreIcon,
  Description as DescriptionIcon,
  ShoppingCart as ShoppingCartIcon,
  StarBorder as ExtraIcon,
  AddCircle as AddSectionIcon,
  FolderOpen as FolderIcon,
  Description as DocumentationIcon,
  Person as PersonIcon,
  AccountCircle as ProfileIcon
} from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import ViewCompactRoundedIcon from '@mui/icons-material/ViewCompactRounded';

// components
import Dot from './components/Dot';

const structure = [
  { id: 100, label: 'Profile', link: '/app/profile', icon: <ProfileIcon /> },
  { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
  {
    id: 1,
    label: 'E-commerce',
    badge: 'NodeJS',
    badgeColor: 'success',
    link: '/app/ecommerce',
    icon: <ShoppingCartIcon />,
    children: [
      {
        label: 'Product Manage',
        link: '/app/ecommerce/management',
      },
      {
        label: 'Products Grid',
        link: '/app/ecommerce/gridproducts',
      },
      {
        label: 'Product Page',
        link: '/app/ecommerce/product',
      },
    ],
  },
  {
    id: 2,
    label: 'User',
    link: '/app/user',
    badge: 'New',
    badgeColor: 'secondary',
    icon: <PersonIcon />,
    children: [
      {
        label: 'User List',
        link: '/app/users',
      },
      {
        label: 'User Add',
        link: '/app/user/new',
      },
      {
        label: 'User Edit',
        link: '/app/user/edit',
      },
    ],
  },
  {
    id: 3,
    label: 'Documentation',
    link: '/documentation',
    icon: <DocumentationIcon />,
  },
  { id: 4, type: 'divider' },
  { id: 5, type: 'title', label: 'TEMPLATE' },
  {
    id: 6,
    label: 'Core',
    link: '/app/core',
    icon: <CoreIcon />,
    children: [
      {
        label: 'Typography',
        link: '/app/core/typography',
      },
      {
        label: 'Colors',
        link: '/app/core/colors',
      },
      {
        label: 'Grid',
        link: '/app/core/grid',
      },
    ],
  },
  {
    id: 7,
    label: 'Tables',
    link: '/app/tables',
    icon: <TableIcon />,
    children: [
      {   label: 'Tables Basic',
        link: '/app/tables/static'
      },
      {
        label: 'Tables Dynamic',
        link: '/app/tables/dynamic',
      },
    ],
  },
  {
    id: 8,
    label: 'UI Elements',
    link: '/app/ui',
    icon: <UIElementsIcon />,
    children: [
      { label: 'Icons', link: '/app/ui/icons' },
      { label: 'Badge', link: '/app/ui/badge' },
      { label: 'Carousel', link: '/app/ui/carousel' },
      { label: 'Cards', link: '/app/ui/cards' },
      { label: 'Modal', link: '/app/ui/modal' },
      {
        label: 'Notifications',
        link: '/app/ui/notifications',
      },
      { label: 'Navbar', link: '/app/ui/navbar' },
      { label: 'Tooltips', link: '/app/ui/tooltips' },
      { label: 'Tabs', link: '/app/ui/tabs' },
      { label: 'Pagination', link: '/app/tables/dynamic' },
      { label: 'Progress', link: '/app/ui/progress' },
      { label: 'Widget', link: '/app/ui/widget' },
    ],
  },
  {
    id: 9,
    label: 'Forms',
    link: '/app/forms',
    icon: <DescriptionIcon />,
    children: [
      { label: 'Form Elements', link: '/app/forms/elements' },
      { label: 'Form Validation', link: '/app/forms/validation' },
    ],
  },
  {
    id: 10,
    label: 'Charts',
    link: '/app/charts',
    icon: <ChartIcon />,
    children: [
      { label: 'Charts Overview', link: '/app/charts/overview' },
      { label: 'Line Charts', link: '/app/charts/line' },
      { label: 'Bar Charts', link: '/app/charts/bar' },
      { label: 'Pie Charts', link: '/app/charts/pie' },
    ],
  },
  {
    id: 200,
    label: 'Grid',
    link: '/app/grid',
    icon: <ViewCompactRoundedIcon />,
  },
  {
    id: 11,
    label: 'Maps',
    link: '/app/maps',
    icon: <MapIcon />,
    children: [
      { label: 'Google Maps', link: '/app/maps/google' },
      { label: 'Vector Map', link: '/app/maps/vector' },
    ],
  },
  {
    id: 12,
    label: 'Extra',
    link: '/app/extra',
    icon: <ExtraIcon />,
    children: [
      { label: 'Calendar', link: '/app/extra/calendar' },
      { label: 'Invoice', link: '/app/extra/invoice' },
      {
        label: 'Login Page',
        click: function(...rest) {
          const name = 'onLogin'
          rest.forEach(c => {
            if (c.clickName === name) {
              return c()
            }
            return false
          })
        },
      },
      { label: 'Error Page', link: '/404' },
      { label: 'Gallery', link: '/app/extra/gallery' },
      { label: 'Search Result', link: '/app/extra/search' },
      { label: 'Time Line', link: '/app/extra/timeline' },
    ],
  },
  {
    id: 13,
    label: 'Menu Levels',
    icon: <FolderIcon />,
    children: [
      { label: 'Level 1.1' },
      {
        label: 'Level 1.2',
        type: 'nested',
        children: [
          { label: 'Level 2.1' },
          {
            label: 'Level 2.2',
            children: [
              {
                label: 'Level 3.1',
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 14, type: 'divider' },
  { id: 15, type: 'title', label: 'HELP' },
  { id: 16, label: 'Library', link: 'https://flatlogic.com/templates/', icon: <LibraryIcon />, ext: true },
  { id: 17, label: 'Support', link: 'https://flatlogic.com/forum/', icon: <SupportIcon />, ext: true },
  { id: 18, label: 'FAQ', link: 'https://flatlogic.com/forum/', icon: <FAQIcon />, ext: true },
  { id: 19, type: 'divider' },
  { id: 20, type: 'title', label: 'PROJECTS' },
  {
    id: 21,
    label: 'My recent',
    link: '',
    icon: <Dot size="medium" color="secondary" />,
  },
  {
    id: 22,
    label: 'Starred',
    link: '',
    icon: <Dot size="medium" color="primary" />,
  },
  {
    id: 23,
    label: 'Background',
    link: '',
    icon: <Dot size="medium" color="secondary" />,
  },
  { id: 24, type: 'divider' },
  {
    id: 25,
    label: 'Add section',
    icon: <AddSectionIcon />,
    click: function(event, ...rest) {
      const name = 'addSectionClick'
      rest.forEach(c => {
        if (c.clickName === name) {
          return c(event)
        }
        return false
      })
    },
  },
  { id: 26, type: 'divider' },
  { id: 27, type: 'margin' },
  { id: 28, type: 'divider' },
  {
    id: 29,
    label: 'Chat',
    icon: <ChatIcon />,
    click: function(event, ...rest) {
      const name = 'chatSetOpen'
      rest.forEach(c => {
        if (c.clickName === name) {
          return c(event)
        }
        return false
      })
    },
  },
];

export default structure;
