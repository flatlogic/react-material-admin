import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import FolderBlue from '../Icons/FolderBlue';
import FolderBlueDark from '../Icons/FolderBlueDark';
import FolderRed from '../Icons/FolderRed';
import FolderRedDark from '../Icons/FolderRedDark';
import FolderGreen from '../Icons/FolderGreen';
import FolderGreenDark from '../Icons/FolderGreenDark';
import FolderYellow from '../Icons/FolderYellow';
import FolderYellowDark from '../Icons/FolderYellowDark';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: '1px solid rgba(185, 185, 185, 0.3)',
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 72,
  fontSize: 14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.text.primary,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: theme.palette.text.primary,
  },
}));

const tabsConfig = [
  {
    id: 'work',
    label: 'Work',
    files: [
      { kind: 'blue', title: 'UI/UX', value: 178, label: 'files' },
      { kind: 'red', title: 'Design', value: 154, label: 'files' },
      { kind: 'green', title: 'Mobile', value: 98, label: 'files' },
      { kind: 'yellow', title: 'Illustration', value: 154, label: 'files' },
      { kind: 'blue', title: 'Branding', value: 73, label: 'files' },
      { kind: 'red', title: 'Web', value: 127, label: 'files' },
      { kind: 'green', title: 'Research', value: 46, label: 'files' },
      { kind: 'yellow', title: 'Prototype', value: 59, label: 'files' },
    ],
  },
  {
    id: 'private',
    label: 'Private',
    files: [
      { kind: 'blue', title: 'Family', value: 42, label: 'files' },
      { kind: 'red', title: 'Travel', value: 27, label: 'files' },
      { kind: 'green', title: 'Finance', value: 16, label: 'files' },
      { kind: 'yellow', title: 'Personal', value: 39, label: 'files' },
      { kind: 'blue', title: 'Health', value: 31, label: 'files' },
      { kind: 'red', title: 'Home', value: 22, label: 'files' },
      { kind: 'green', title: 'Education', value: 18, label: 'files' },
      { kind: 'yellow', title: 'Archive', value: 64, label: 'files' },
    ],
  },
  {
    id: 'social',
    label: 'Social',
    files: [
      { kind: 'blue', title: 'Instagram', value: 84, label: 'files' },
      { kind: 'red', title: 'Dribbble', value: 21, label: 'files' },
      { kind: 'green', title: 'Behance', value: 18, label: 'files' },
      { kind: 'yellow', title: 'Medium', value: 13, label: 'files' },
      { kind: 'blue', title: 'LinkedIn', value: 33, label: 'files' },
      { kind: 'red', title: 'X/Twitter', value: 47, label: 'files' },
      { kind: 'green', title: 'GitHub', value: 24, label: 'files' },
      { kind: 'yellow', title: 'YouTube', value: 19, label: 'files' },
    ],
  },
];

function renderFolder({ kind, title, value, label, isDark }) {
  switch (kind) {
    case 'blue':
      return isDark ? (
        <FolderBlueDark title={title} label={label} value={value} />
      ) : (
        <FolderBlue title={title} label={label} value={value} />
      );
    case 'red':
      return isDark ? (
        <FolderRedDark title={title} label={label} value={value} />
      ) : (
        <FolderRed title={title} label={label} value={value} />
      );
    case 'green':
      return isDark ? (
        <FolderGreenDark title={title} label={label} value={value} />
      ) : (
        <FolderGreen title={title} label={label} value={value} />
      );
    default:
      return isDark ? (
        <FolderYellowDark title={title} label={label} value={value} />
      ) : (
        <FolderYellow title={title} label={label} value={value} />
      );
  }
}

export default function ProfileFilesTabs() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState(0);
  const current = tabsConfig[activeTab];
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ flexGrow: 1, pb: 0 }}>
      <StyledTabs value={activeTab} onChange={(_, nextValue) => setActiveTab(nextValue)}>
        {tabsConfig.map((tab, index) => (
          <StyledTab key={tab.id} label={tab.label} value={index} disableRipple />
        ))}
      </StyledTabs>

      <Box sx={{ pt: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 0.75,
            overflowX: 'auto',
            overflowY: 'hidden',
            pb: 1,
            scrollBehavior: 'smooth',
            '& > *': {
              flex: '0 0 auto',
            },
            '&::-webkit-scrollbar': {
              height: 6,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: 6,
              backgroundColor: theme.palette.mode === 'dark' ? '#4A4A53' : '#C4C4CC',
            },
          }}
        >
          {current.files.map((file) => (
            <Box key={`${current.id}-${file.kind}-${file.title}`}>{renderFolder({ ...file, isDark })}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
