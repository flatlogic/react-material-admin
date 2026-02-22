import { useState } from 'react';
import { Typography, Grid, Tabs, Tab, Paper } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArticleIcon from '@mui/icons-material/Article';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterListIcon from '@mui/icons-material/FilterList';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LightModeIcon from '@mui/icons-material/LightMode';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import MapIcon from '@mui/icons-material/Map';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';
import Widget from '../../components/Widget';
import useStyles from './styles';

const MATERIAL_ICONS = [
  { name: 'AccessAlarm', Component: AccessAlarmIcon },
  { name: 'AccountCircle', Component: AccountCircleIcon },
  { name: 'AddShoppingCart', Component: AddShoppingCartIcon },
  { name: 'Analytics', Component: AnalyticsIcon },
  { name: 'Article', Component: ArticleIcon },
  { name: 'AttachMoney', Component: AttachMoneyIcon },
  { name: 'AutoGraph', Component: AutoGraphIcon },
  { name: 'CalendarMonth', Component: CalendarMonthIcon },
  { name: 'Chat', Component: ChatIcon },
  { name: 'CheckCircle', Component: CheckCircleIcon },
  { name: 'CloudDone', Component: CloudDoneIcon },
  { name: 'Dashboard', Component: DashboardIcon },
  { name: 'Delete', Component: DeleteIcon },
  { name: 'Edit', Component: EditIcon },
  { name: 'Favorite', Component: FavoriteIcon },
  { name: 'FilterList', Component: FilterListIcon },
  { name: 'FolderOpen', Component: FolderOpenIcon },
  { name: 'Home', Component: HomeIcon },
  { name: 'Insights', Component: InsightsIcon },
  { name: 'Inventory2', Component: Inventory2Icon },
  { name: 'LightMode', Component: LightModeIcon },
  { name: 'Lock', Component: LockIcon },
  { name: 'Mail', Component: MailIcon },
  { name: 'Map', Component: MapIcon },
  { name: 'Notifications', Component: NotificationsIcon },
  { name: 'Person', Component: PersonIcon },
  { name: 'Settings', Component: SettingsIcon },
  { name: 'ShoppingCart', Component: ShoppingCartIcon },
  { name: 'Timeline', Component: TimelineIcon },
  { name: 'TrendingUp', Component: TrendingUpIcon },
  { name: 'Visibility', Component: VisibilityIcon },
  { name: 'Work', Component: WorkIcon },
];

const BRAND_ICONS = [
  { name: 'Facebook', Component: FacebookIcon },
  { name: 'Instagram', Component: InstagramIcon },
  { name: 'Twitter', Component: TwitterIcon },
  { name: 'LinkedIn', Component: LinkedInIcon },
  { name: 'GitHub', Component: GitHubIcon },
  { name: 'YouTube', Component: YouTubeIcon },
  { name: 'Reddit', Component: RedditIcon },
  { name: 'Telegram', Component: TelegramIcon },
  { name: 'WhatsApp', Component: WhatsAppIcon },
  { name: 'Apple', Component: AppleIcon },
  { name: 'Android', Component: AndroidIcon },
  { name: 'Public', Component: PublicIcon },
  { name: 'Language', Component: LanguageIcon },
  { name: 'TravelExplore', Component: TravelExploreIcon },
  { name: 'RocketLaunch', Component: RocketLaunchIcon },
  { name: 'SupportAgent', Component: SupportAgentIcon },
  { name: 'WorkspacePremium', Component: WorkspacePremiumIcon },
  { name: 'Storefront', Component: StorefrontIcon },
  { name: 'Security', Component: SecurityIcon },
  { name: 'Email', Component: EmailIcon },
];

function IconGrid({ classes, icons }) {
  return (
    <Widget>
      <Grid container spacing={2} className={classes.iconList}>
        {icons.map(({ name, Component }) => (
          <Grid
            key={name}
            className={classes.materailIcon}
            size={{ xs: 12, sm: 4, md: 3, lg: 2 }}
          >
            <Component />
            <Typography className={classes.materialIconText}>{name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Widget>
  );
}

export default function IconsPage() {
  const classes = useStyles();
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <Paper className={classes.iconsContainer}>
      <Tabs
        indicatorColor='primary'
        textColor='primary'
        value={activeTabId}
        onChange={(e, id) => setActiveTabId(id)}
        className={classes.iconsBar}
      >
        <Tab label='Material Icons' classes={{ root: classes.tab }} />
        <Tab label='MUI Brand Icons' classes={{ root: classes.tab }} />
      </Tabs>

      {activeTabId === 0 && <IconGrid classes={classes} icons={MATERIAL_ICONS} />}
      {activeTabId === 1 && <IconGrid classes={classes} icons={BRAND_ICONS} />}
    </Paper>
  );
}
