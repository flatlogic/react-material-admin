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
  Chat as ChatIcon,
  Add as AddSectionIcon,
  FolderOpen as FolderIcon,
  Description as DocumentationIcon,
  Person as PersonIcon,
  AccountCircle as ProfileIcon,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

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
];

export default structure;
