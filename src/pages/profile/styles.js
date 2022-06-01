import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  root: {}, 
  visualProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
  profileImage: {
    padding: 5,
    border: `3px dotted ${theme.palette.primary.main}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      maxWidth: 200
    }
  },
  profileDescription: {
    marginTop: 24,
    paddingLeft: 20
  },
  profileTitle: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 600,
    display: 'block'
  },
  profileSubtitle: {
    color: theme.palette.text.primary,
    opacity: 0.5,
    fontSize: 12,
    marginTop: 20,
    display: 'block',
    fontWeight: 500,
  },
  profileExternalRes: {
    fontSize: 16,
    margin: '12px 0 25px',
    color: theme.palette.primary.main,
    display: 'block',
    marginTop: 4,
    textDecoration: 'none',
  },
  chipMargin: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: 20,
    fontWeight: 700,
    fontSize: 11,
    width: 48,
    height: 26,
  },
  socials: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    maxWidth: 180,
  },
  mediaBlockPadding: {
    padding: '0 24px 12px 24px',
  },
  widgetBody: {
    padding: 0,
  },
  updateWidget: {
    background: theme.palette.primary.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 24px',
    height: 90,
    color: '#fff',
    borderRadius: 4,
  },
  updateWidgetFlexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  updateLabel: {
    display: 'inline-block',
    fontSize: '20px',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  spacer: {
    flexGrow: 1,
  },
  detailsBtn: {
    color: '#fff',
    borderColor: '#fff',
  },
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
  },
  progressSection: {
    marginBottom: theme.spacing(1)
  },
  progressTitle: {
    marginBottom: theme.spacing(2)
  },
  progress: {
    marginBottom: theme.spacing(1),
    backgroundColor: 'rgb(236, 236, 236)',
  },
  pieChartLegendWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: theme.spacing(1)
  },
  legendItemContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    justifyContent: "space-between",
    width: "100%"
  },
  fullHeightBody: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  alignStandaloneElement: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  tableWidget: {
    overflowX: "auto"
  },
  progressBar: {
    backgroundColor: theme.palette.warning.main
  },
  progressBarPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  progressBarWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  performanceLegendWrapper: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    marginBottom: theme.spacing(1)
  },
  legendElement: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2)
  },
  legendElementText: {
    marginLeft: theme.spacing(1)
  },
  serverOverviewElement: {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%"
  },
  serverOverviewElementText: {
    minWidth: 149,
    paddingRight: theme.spacing(2)
  },
  serverOverviewElementChartWrapper: {
    width: "100%"
  },
  mainChartBody: {
    overflowX: "auto"
  },
  mainChartHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      flexWrap: "wrap"
    }
  },
  mainChartHeaderLabels: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      order: 3,
      width: "100%",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    }
  },
  mainChartHeaderLabel: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3)
  },
  mainChartSelectRoot: {
    borderColor: theme.palette.text.hint + "80 !important"
  },
  mainChartSelect: {
    padding: 10,
    paddingRight: 25
  },
  mainChartLegentElement: {
    fontSize: "14px !important",
    marginLeft: theme.spacing(1)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  fixIconRight: {
    "& .MuiSelect-icon": {
      right: 4
    }
  },
  actionsIcon: {
    color: "#76767B"
  },
  adjustHeight: {
    height: '100%',
    '@media (max-width: 1280px)': {
        height: 'auto'
    }
  },
}));
