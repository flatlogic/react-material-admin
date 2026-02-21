import React, { useState } from "react";
import { Typography, Grid, Tabs, Tab, Paper } from "@mui/material";
import * as Icons from "@mui/icons-material";
import Widget from "../../components/Widget";
// styles
import useStyles from "./styles";

// icons sets
import "font-awesome/css/font-awesome.min.css";

export default function IconsPage() {
  let classes = useStyles();

  // local
  let [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <Paper className={classes.iconsContainer}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={activeTabId}
          onChange={(e, id) => setActiveTabId(id)}
          className={classes.iconsBar}>
          
          <Tab label="Material Icons" classes={{ root: classes.tab }} />
          <Tab label="Font Awesome" classes={{ root: classes.tab }} />
        </Tabs>
        {activeTabId === 0 &&
        <Widget>
            <Grid container spacing={2} className={classes.iconList}>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccessAlarm />
                <Typography className={classes.materialIconText}>
                  AccessAlarm
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccessAlarms />
                <Typography className={classes.materialIconText}>
                  AccessAlarms
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Accessibility />
                <Typography className={classes.materialIconText}>
                  Accessibility
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Accessible />
                <Typography className={classes.materialIconText}>
                  Accessible
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccessibleForward />
                <Typography className={classes.materialIconText}>
                  AccessibleForward
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccessTime />
                <Typography className={classes.materialIconText}>
                  AccessTime
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccountBalance />
                <Typography className={classes.materialIconText}>
                  AccountBalance
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccountBalanceWallet />
                <Typography className={classes.materialIconText}>
                  AccountBalanceWallet
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccountBox />
                <Typography className={classes.materialIconText}>
                  AccountBox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AccountCircle />
                <Typography className={classes.materialIconText}>
                  AccountCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AcUnit />
                <Typography className={classes.materialIconText}>
                  AcUnit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Adb />
                <Typography className={classes.materialIconText}>
                  Adb
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Adjust />
                <Typography className={classes.materialIconText}>
                  Adjust
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatFlat />
                <Typography className={classes.materialIconText}>
                  AirlineSeatFlat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatFlatAngled />
                <Typography className={classes.materialIconText}>
                  AirlineSeatFlatAngled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatIndividualSuite />
                <Typography className={classes.materialIconText}>
                  AirlineSeatIndividualSuite
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatLegroomExtra />
                <Typography className={classes.materialIconText}>
                  AirlineSeatLegroomExtra
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatLegroomNormal />
                <Typography className={classes.materialIconText}>
                  AirlineSeatLegroomNormal
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatLegroomReduced />
                <Typography className={classes.materialIconText}>
                  AirlineSeatLegroomReduced
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatReclineExtra />
                <Typography className={classes.materialIconText}>
                  AirlineSeatReclineExtra
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirlineSeatReclineNormal />
                <Typography className={classes.materialIconText}>
                  AirlineSeatReclineNormal
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirplanemodeActive />
                <Typography className={classes.materialIconText}>
                  AirplanemodeActive
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirplanemodeInactive />
                <Typography className={classes.materialIconText}>
                  AirplanemodeInactive
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Airplay />
                <Typography className={classes.materialIconText}>
                  Airplay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AirportShuttle />
                <Typography className={classes.materialIconText}>
                  AirportShuttle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Alarm />
                <Typography className={classes.materialIconText}>
                  Alarm
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Album />
                <Typography className={classes.materialIconText}>
                  Album
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AllInbox />
                <Typography className={classes.materialIconText}>
                  AllInbox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AllInclusive />
                <Typography className={classes.materialIconText}>
                  AllInclusive
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AllOut />
                <Typography className={classes.materialIconText}>
                  AllOut
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AlternateEmail />
                <Typography className={classes.materialIconText}>
                  AlternateEmail
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Android />
                <Typography className={classes.materialIconText}>
                  Android
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Announcement />
                <Typography className={classes.materialIconText}>
                  Announcement
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Apps />
                <Typography className={classes.materialIconText}>
                  Apps
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Archive />
                <Typography className={classes.materialIconText}>
                  Archive
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowBack />
                <Typography className={classes.materialIconText}>
                  ArrowBack
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowBackIos />
                <Typography className={classes.materialIconText}>
                  ArrowBackIos
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowDownward />
                <Typography className={classes.materialIconText}>
                  ArrowDownward
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowDropDown />
                <Typography className={classes.materialIconText}>
                  ArrowDropDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowDropDownCircle />
                <Typography className={classes.materialIconText}>
                  ArrowDropDownCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowDropUp />
                <Typography className={classes.materialIconText}>
                  ArrowDropUp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowForward />
                <Typography className={classes.materialIconText}>
                  ArrowForward
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowForwardIos />
                <Typography className={classes.materialIconText}>
                  ArrowForwardIos
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowLeft />
                <Typography className={classes.materialIconText}>
                  ArrowLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowRight />
                <Typography className={classes.materialIconText}>
                  ArrowRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowRightAlt />
                <Typography className={classes.materialIconText}>
                  ArrowRightAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArrowUpward />
                <Typography className={classes.materialIconText}>
                  ArrowUpward
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ArtTrack />
                <Typography className={classes.materialIconText}>
                  ArtTrack
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AspectRatio />
                <Typography className={classes.materialIconText}>
                  AspectRatio
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Assessment />
                <Typography className={classes.materialIconText}>
                  Assessment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Assignment />
                <Typography className={classes.materialIconText}>
                  Assignment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AssignmentInd />
                <Typography className={classes.materialIconText}>
                  AssignmentInd
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AssignmentLate />
                <Typography className={classes.materialIconText}>
                  AssignmentLate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AssignmentReturn />
                <Typography className={classes.materialIconText}>
                  AssignmentReturn
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AssignmentReturned />
                <Typography className={classes.materialIconText}>
                  AssignmentReturned
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AssignmentTurnedIn />
                <Typography className={classes.materialIconText}>
                  AssignmentTurnedIn
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Assistant />
                <Typography className={classes.materialIconText}>
                  Assistant
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AssistantPhoto />
                <Typography className={classes.materialIconText}>
                  AssistantPhoto
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Atm />
                <Typography className={classes.materialIconText}>
                  Atm
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AttachFile />
                <Typography className={classes.materialIconText}>
                  AttachFile
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Attachment />
                <Typography className={classes.materialIconText}>
                  Attachment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AttachMoney />
                <Typography className={classes.materialIconText}>
                  AttachMoney
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Audiotrack />
                <Typography className={classes.materialIconText}>
                  Audiotrack
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Autorenew />
                <Typography className={classes.materialIconText}>
                  Autorenew
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.AvTimer />
                <Typography className={classes.materialIconText}>
                  AvTimer
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Backspace />
                <Typography className={classes.materialIconText}>
                  Backspace
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Backup />
                <Typography className={classes.materialIconText}>
                  Backup
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Ballot />
                <Typography className={classes.materialIconText}>
                  Ballot
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BarChart />
                <Typography className={classes.materialIconText}>
                  BarChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Battery20 />
                <Typography className={classes.materialIconText}>
                  Battery20
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Battery30 />
                <Typography className={classes.materialIconText}>
                  Battery30
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Battery50 />
                <Typography className={classes.materialIconText}>
                  Battery50
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Battery60 />
                <Typography className={classes.materialIconText}>
                  Battery60
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Battery80 />
                <Typography className={classes.materialIconText}>
                  Battery80
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Battery90 />
                <Typography className={classes.materialIconText}>
                  Battery90
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryAlert />
                <Typography className={classes.materialIconText}>
                  BatteryAlert
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryCharging20 />
                <Typography className={classes.materialIconText}>
                  BatteryCharging20
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryCharging30 />
                <Typography className={classes.materialIconText}>
                  BatteryCharging30
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryCharging50 />
                <Typography className={classes.materialIconText}>
                  BatteryCharging50
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryCharging60 />
                <Typography className={classes.materialIconText}>
                  BatteryCharging60
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryCharging80 />
                <Typography className={classes.materialIconText}>
                  BatteryCharging80
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryCharging90 />
                <Typography className={classes.materialIconText}>
                  BatteryCharging90
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryChargingFull />
                <Typography className={classes.materialIconText}>
                  BatteryChargingFull
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryFull />
                <Typography className={classes.materialIconText}>
                  BatteryFull
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryStd />
                <Typography className={classes.materialIconText}>
                  BatteryStd
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BatteryUnknown />
                <Typography className={classes.materialIconText}>
                  BatteryUnknown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BeachAccess />
                <Typography className={classes.materialIconText}>
                  BeachAccess
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Beenhere />
                <Typography className={classes.materialIconText}>
                  Beenhere
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Block />
                <Typography className={classes.materialIconText}>
                  Block
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Bluetooth />
                <Typography className={classes.materialIconText}>
                  Bluetooth
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BluetoothAudio />
                <Typography className={classes.materialIconText}>
                  BluetoothAudio
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BluetoothConnected />
                <Typography className={classes.materialIconText}>
                  BluetoothConnected
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BluetoothDisabled />
                <Typography className={classes.materialIconText}>
                  BluetoothDisabled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BluetoothSearching />
                <Typography className={classes.materialIconText}>
                  BluetoothSearching
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BlurCircular />
                <Typography className={classes.materialIconText}>
                  BlurCircular
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BlurLinear />
                <Typography className={classes.materialIconText}>
                  BlurLinear
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Book />
                <Typography className={classes.materialIconText}>
                  Book
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Bookmark />
                <Typography className={classes.materialIconText}>
                  Bookmark
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BookmarkBorder />
                <Typography className={classes.materialIconText}>
                  BookmarkBorder
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Bookmarks />
                <Typography className={classes.materialIconText}>
                  Bookmarks
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderAll />
                <Typography className={classes.materialIconText}>
                  BorderAll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderBottom />
                <Typography className={classes.materialIconText}>
                  BorderBottom
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderClear />
                <Typography className={classes.materialIconText}>
                  BorderClear
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderColor />
                <Typography className={classes.materialIconText}>
                  BorderColor
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderHorizontal />
                <Typography className={classes.materialIconText}>
                  BorderHorizontal
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderInner />
                <Typography className={classes.materialIconText}>
                  BorderInner
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderLeft />
                <Typography className={classes.materialIconText}>
                  BorderLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderOuter />
                <Typography className={classes.materialIconText}>
                  BorderOuter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderRight />
                <Typography className={classes.materialIconText}>
                  BorderRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderStyle />
                <Typography className={classes.materialIconText}>
                  BorderStyle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderTop />
                <Typography className={classes.materialIconText}>
                  BorderTop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BorderVertical />
                <Typography className={classes.materialIconText}>
                  BorderVertical
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BrandingWatermark />
                <Typography className={classes.materialIconText}>
                  BrandingWatermark
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness1 />
                <Typography className={classes.materialIconText}>
                  Brightness1
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness2 />
                <Typography className={classes.materialIconText}>
                  Brightness2
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness3 />
                <Typography className={classes.materialIconText}>
                  Brightness3
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness4 />
                <Typography className={classes.materialIconText}>
                  Brightness4
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness5 />
                <Typography className={classes.materialIconText}>
                  Brightness5
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness6 />
                <Typography className={classes.materialIconText}>
                  Brightness6
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brightness7 />
                <Typography className={classes.materialIconText}>
                  Brightness7
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BrightnessAuto />
                <Typography className={classes.materialIconText}>
                  BrightnessAuto
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BrightnessHigh />
                <Typography className={classes.materialIconText}>
                  BrightnessHigh
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BrightnessLow />
                <Typography className={classes.materialIconText}>
                  BrightnessLow
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BrightnessMedium />
                <Typography className={classes.materialIconText}>
                  BrightnessMedium
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BrokenImage />
                <Typography className={classes.materialIconText}>
                  BrokenImage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Brush />
                <Typography className={classes.materialIconText}>
                  Brush
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BubbleChart />
                <Typography className={classes.materialIconText}>
                  BubbleChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BugReport />
                <Typography className={classes.materialIconText}>
                  BugReport
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Build />
                <Typography className={classes.materialIconText}>
                  Build
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BurstMode />
                <Typography className={classes.materialIconText}>
                  BurstMode
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Business />
                <Typography className={classes.materialIconText}>
                  Business
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.BusinessCenter />
                <Typography className={classes.materialIconText}>
                  BusinessCenter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Cached />
                <Typography className={classes.materialIconText}>
                  Cached
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Cake />
                <Typography className={classes.materialIconText}>
                  Cake
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CalendarToday />
                <Typography className={classes.materialIconText}>
                  CalendarToday
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CalendarViewDay />
                <Typography className={classes.materialIconText}>
                  CalendarViewDay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Call />
                <Typography className={classes.materialIconText}>
                  Call
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallEnd />
                <Typography className={classes.materialIconText}>
                  CallEnd
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallMade />
                <Typography className={classes.materialIconText}>
                  CallMade
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallMerge />
                <Typography className={classes.materialIconText}>
                  CallMerge
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallMissed />
                <Typography className={classes.materialIconText}>
                  CallMissed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallMissedOutgoing />
                <Typography className={classes.materialIconText}>
                  CallMissedOutgoing
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallReceived />
                <Typography className={classes.materialIconText}>
                  CallReceived
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallSplit />
                <Typography className={classes.materialIconText}>
                  CallSplit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CallToAction />
                <Typography className={classes.materialIconText}>
                  CallToAction
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Camera />
                <Typography className={classes.materialIconText}>
                  Camera
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CameraAlt />
                <Typography className={classes.materialIconText}>
                  CameraAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CameraEnhance />
                <Typography className={classes.materialIconText}>
                  CameraEnhance
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CameraFront />
                <Typography className={classes.materialIconText}>
                  CameraFront
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CameraRear />
                <Typography className={classes.materialIconText}>
                  CameraRear
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CameraRoll />
                <Typography className={classes.materialIconText}>
                  CameraRoll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Cancel />
                <Typography className={classes.materialIconText}>
                  Cancel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CancelPresentation />
                <Typography className={classes.materialIconText}>
                  CancelPresentation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CardGiftcard />
                <Typography className={classes.materialIconText}>
                  CardGiftcard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CardMembership />
                <Typography className={classes.materialIconText}>
                  CardMembership
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CardTravel />
                <Typography className={classes.materialIconText}>
                  CardTravel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Casino />
                <Typography className={classes.materialIconText}>
                  Casino
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Cast />
                <Typography className={classes.materialIconText}>
                  Cast
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CastConnected />
                <Typography className={classes.materialIconText}>
                  CastConnected
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CastForEducation />
                <Typography className={classes.materialIconText}>
                  CastForEducation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Category />
                <Typography className={classes.materialIconText}>
                  Category
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CellWifi />
                <Typography className={classes.materialIconText}>
                  CellWifi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CenterFocusStrong />
                <Typography className={classes.materialIconText}>
                  CenterFocusStrong
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CenterFocusWeak />
                <Typography className={classes.materialIconText}>
                  CenterFocusWeak
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChangeHistory />
                <Typography className={classes.materialIconText}>
                  ChangeHistory
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Chat />
                <Typography className={classes.materialIconText}>
                  Chat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChatBubble />
                <Typography className={classes.materialIconText}>
                  ChatBubble
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChatBubbleOutline />
                <Typography className={classes.materialIconText}>
                  ChatBubbleOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Check />
                <Typography className={classes.materialIconText}>
                  Check
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CheckBox />
                <Typography className={classes.materialIconText}>
                  CheckBox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CheckBoxOutlineBlank />
                <Typography className={classes.materialIconText}>
                  CheckBoxOutlineBlank
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CheckCircle />
                <Typography className={classes.materialIconText}>
                  CheckCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CheckCircleOutline />
                <Typography className={classes.materialIconText}>
                  CheckCircleOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChevronLeft />
                <Typography className={classes.materialIconText}>
                  ChevronLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChevronRight />
                <Typography className={classes.materialIconText}>
                  ChevronRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChildCare />
                <Typography className={classes.materialIconText}>
                  ChildCare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChildFriendly />
                <Typography className={classes.materialIconText}>
                  ChildFriendly
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ChromeReaderMode />
                <Typography className={classes.materialIconText}>
                  ChromeReaderMode
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Class />
                <Typography className={classes.materialIconText}>
                  Class
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Clear />
                <Typography className={classes.materialIconText}>
                  Clear
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ClearAll />
                <Typography className={classes.materialIconText}>
                  ClearAll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Close />
                <Typography className={classes.materialIconText}>
                  Close
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ClosedCaption />
                <Typography className={classes.materialIconText}>
                  ClosedCaption
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Cloud />
                <Typography className={classes.materialIconText}>
                  Cloud
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CloudCircle />
                <Typography className={classes.materialIconText}>
                  CloudCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CloudDone />
                <Typography className={classes.materialIconText}>
                  CloudDone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CloudDownload />
                <Typography className={classes.materialIconText}>
                  CloudDownload
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CloudQueue />
                <Typography className={classes.materialIconText}>
                  CloudQueue
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CloudUpload />
                <Typography className={classes.materialIconText}>
                  CloudUpload
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Code />
                <Typography className={classes.materialIconText}>
                  Code
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Collections />
                <Typography className={classes.materialIconText}>
                  Collections
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CollectionsBookmark />
                <Typography className={classes.materialIconText}>
                  CollectionsBookmark
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Colorize />
                <Typography className={classes.materialIconText}>
                  Colorize
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ColorLens />
                <Typography className={classes.materialIconText}>
                  ColorLens
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Comment />
                <Typography className={classes.materialIconText}>
                  Comment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Commute />
                <Typography className={classes.materialIconText}>
                  Commute
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Compare />
                <Typography className={classes.materialIconText}>
                  Compare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CompareArrows />
                <Typography className={classes.materialIconText}>
                  CompareArrows
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CompassCalibration />
                <Typography className={classes.materialIconText}>
                  CompassCalibration
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Computer />
                <Typography className={classes.materialIconText}>
                  Computer
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ConfirmationNumber />
                <Typography className={classes.materialIconText}>
                  ConfirmationNumber
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ContactMail />
                <Typography className={classes.materialIconText}>
                  ContactMail
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ContactPhone />
                <Typography className={classes.materialIconText}>
                  ContactPhone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Contacts />
                <Typography className={classes.materialIconText}>
                  Contacts
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ContactSupport />
                <Typography className={classes.materialIconText}>
                  ContactSupport
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ControlCamera />
                <Typography className={classes.materialIconText}>
                  ControlCamera
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ControlPoint />
                <Typography className={classes.materialIconText}>
                  ControlPoint
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ControlPointDuplicate />
                <Typography className={classes.materialIconText}>
                  ControlPointDuplicate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Copyright />
                <Typography className={classes.materialIconText}>
                  Copyright
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Create />
                <Typography className={classes.materialIconText}>
                  Create
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CreditCard />
                <Typography className={classes.materialIconText}>
                  CreditCard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Crop />
                <Typography className={classes.materialIconText}>
                  Crop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Crop169 />
                <Typography className={classes.materialIconText}>
                  Crop169
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Crop32 />
                <Typography className={classes.materialIconText}>
                  Crop32
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Crop54 />
                <Typography className={classes.materialIconText}>
                  Crop54
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Crop75 />
                <Typography className={classes.materialIconText}>
                  Crop75
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropDin />
                <Typography className={classes.materialIconText}>
                  CropDin
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropFree />
                <Typography className={classes.materialIconText}>
                  CropFree
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropLandscape />
                <Typography className={classes.materialIconText}>
                  CropLandscape
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropOriginal />
                <Typography className={classes.materialIconText}>
                  CropOriginal
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropPortrait />
                <Typography className={classes.materialIconText}>
                  CropPortrait
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropRotate />
                <Typography className={classes.materialIconText}>
                  CropRotate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.CropSquare />
                <Typography className={classes.materialIconText}>
                  CropSquare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Dashboard />
                <Typography className={classes.materialIconText}>
                  Dashboard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DataUsage />
                <Typography className={classes.materialIconText}>
                  DataUsage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DateRange />
                <Typography className={classes.materialIconText}>
                  DateRange
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Dehaze />
                <Typography className={classes.materialIconText}>
                  Dehaze
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Delete />
                <Typography className={classes.materialIconText}>
                  Delete
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeleteForever />
                <Typography className={classes.materialIconText}>
                  DeleteForever
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeleteOutline />
                <Typography className={classes.materialIconText}>
                  DeleteOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeleteSweep />
                <Typography className={classes.materialIconText}>
                  DeleteSweep
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DepartureBoard />
                <Typography className={classes.materialIconText}>
                  DepartureBoard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Description />
                <Typography className={classes.materialIconText}>
                  Description
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DesktopAccessDisabled />
                <Typography className={classes.materialIconText}>
                  DesktopAccessDisabled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DesktopMac />
                <Typography className={classes.materialIconText}>
                  DesktopMac
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DesktopWindows />
                <Typography className={classes.materialIconText}>
                  DesktopWindows
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Details />
                <Typography className={classes.materialIconText}>
                  Details
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeveloperBoard />
                <Typography className={classes.materialIconText}>
                  DeveloperBoard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeveloperMode />
                <Typography className={classes.materialIconText}>
                  DeveloperMode
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeviceHub />
                <Typography className={classes.materialIconText}>
                  DeviceHub
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Devices />
                <Typography className={classes.materialIconText}>
                  Devices
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DevicesOther />
                <Typography className={classes.materialIconText}>
                  DevicesOther
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DeviceUnknown />
                <Typography className={classes.materialIconText}>
                  DeviceUnknown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DialerSip />
                <Typography className={classes.materialIconText}>
                  DialerSip
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Dialpad />
                <Typography className={classes.materialIconText}>
                  Dialpad
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Directions />
                <Typography className={classes.materialIconText}>
                  Directions
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsBike />
                <Typography className={classes.materialIconText}>
                  DirectionsBike
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsBoat />
                <Typography className={classes.materialIconText}>
                  DirectionsBoat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsBus />
                <Typography className={classes.materialIconText}>
                  DirectionsBus
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsCar />
                <Typography className={classes.materialIconText}>
                  DirectionsCar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsRailway />
                <Typography className={classes.materialIconText}>
                  DirectionsRailway
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsRun />
                <Typography className={classes.materialIconText}>
                  DirectionsRun
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsSubway />
                <Typography className={classes.materialIconText}>
                  DirectionsSubway
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsTransit />
                <Typography className={classes.materialIconText}>
                  DirectionsTransit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DirectionsWalk />
                <Typography className={classes.materialIconText}>
                  DirectionsWalk
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DiscFull />
                <Typography className={classes.materialIconText}>
                  DiscFull
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Dns />
                <Typography className={classes.materialIconText}>
                  Dns
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Dock />
                <Typography className={classes.materialIconText}>
                  Dock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Domain />
                <Typography className={classes.materialIconText}>
                  Domain
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DomainDisabled />
                <Typography className={classes.materialIconText}>
                  DomainDisabled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Done />
                <Typography className={classes.materialIconText}>
                  Done
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DoneAll />
                <Typography className={classes.materialIconText}>
                  DoneAll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DoneOutline />
                <Typography className={classes.materialIconText}>
                  DoneOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DonutLarge />
                <Typography className={classes.materialIconText}>
                  DonutLarge
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DonutSmall />
                <Typography className={classes.materialIconText}>
                  DonutSmall
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Drafts />
                <Typography className={classes.materialIconText}>
                  Drafts
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DragHandle />
                <Typography className={classes.materialIconText}>
                  DragHandle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DragIndicator />
                <Typography className={classes.materialIconText}>
                  DragIndicator
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.DriveEta />
                <Typography className={classes.materialIconText}>
                  DriveEta
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Duo />
                <Typography className={classes.materialIconText}>
                  Duo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Dvr />
                <Typography className={classes.materialIconText}>
                  Dvr
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Edit />
                <Typography className={classes.materialIconText}>
                  Edit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EditAttributes />
                <Typography className={classes.materialIconText}>
                  EditAttributes
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EditLocation />
                <Typography className={classes.materialIconText}>
                  EditLocation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Eject />
                <Typography className={classes.materialIconText}>
                  Eject
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Email />
                <Typography className={classes.materialIconText}>
                  Email
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EnhancedEncryption />
                <Typography className={classes.materialIconText}>
                  EnhancedEncryption
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Equalizer />
                <Typography className={classes.materialIconText}>
                  Equalizer
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Error />
                <Typography className={classes.materialIconText}>
                  Error
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ErrorOutline />
                <Typography className={classes.materialIconText}>
                  ErrorOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EuroSymbol />
                <Typography className={classes.materialIconText}>
                  EuroSymbol
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Event />
                <Typography className={classes.materialIconText}>
                  Event
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EventAvailable />
                <Typography className={classes.materialIconText}>
                  EventAvailable
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EventBusy />
                <Typography className={classes.materialIconText}>
                  EventBusy
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EventNote />
                <Typography className={classes.materialIconText}>
                  EventNote
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EventSeat />
                <Typography className={classes.materialIconText}>
                  EventSeat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.EvStation />
                <Typography className={classes.materialIconText}>
                  EvStation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ExitToApp />
                <Typography className={classes.materialIconText}>
                  ExitToApp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ExpandLess />
                <Typography className={classes.materialIconText}>
                  ExpandLess
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ExpandMore />
                <Typography className={classes.materialIconText}>
                  ExpandMore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Explicit />
                <Typography className={classes.materialIconText}>
                  Explicit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Explore />
                <Typography className={classes.materialIconText}>
                  Explore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Exposure />
                <Typography className={classes.materialIconText}>
                  Exposure
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Extension />
                <Typography className={classes.materialIconText}>
                  Extension
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Face />
                <Typography className={classes.materialIconText}>
                  Face
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Fastfood />
                <Typography className={classes.materialIconText}>
                  Fastfood
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FastForward />
                <Typography className={classes.materialIconText}>
                  FastForward
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FastRewind />
                <Typography className={classes.materialIconText}>
                  FastRewind
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Favorite />
                <Typography className={classes.materialIconText}>
                  Favorite
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FavoriteBorder />
                <Typography className={classes.materialIconText}>
                  FavoriteBorder
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FeaturedPlayList />
                <Typography className={classes.materialIconText}>
                  FeaturedPlayList
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FeaturedVideo />
                <Typography className={classes.materialIconText}>
                  FeaturedVideo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Feedback />
                <Typography className={classes.materialIconText}>
                  Feedback
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FiberDvr />
                <Typography className={classes.materialIconText}>
                  FiberDvr
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FiberManualRecord />
                <Typography className={classes.materialIconText}>
                  FiberManualRecord
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FiberPin />
                <Typography className={classes.materialIconText}>
                  FiberPin
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FiberSmartRecord />
                <Typography className={classes.materialIconText}>
                  FiberSmartRecord
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FileCopy />
                <Typography className={classes.materialIconText}>
                  FileCopy
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter />
                <Typography className={classes.materialIconText}>
                  Filter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter1 />
                <Typography className={classes.materialIconText}>
                  Filter1
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter2 />
                <Typography className={classes.materialIconText}>
                  Filter2
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter3 />
                <Typography className={classes.materialIconText}>
                  Filter3
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter4 />
                <Typography className={classes.materialIconText}>
                  Filter4
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter5 />
                <Typography className={classes.materialIconText}>
                  Filter5
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter6 />
                <Typography className={classes.materialIconText}>
                  Filter6
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter7 />
                <Typography className={classes.materialIconText}>
                  Filter7
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter8 />
                <Typography className={classes.materialIconText}>
                  Filter8
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter9 />
                <Typography className={classes.materialIconText}>
                  Filter9
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Filter9Plus />
                <Typography className={classes.materialIconText}>
                  Filter9Plus
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterBAndW />
                <Typography className={classes.materialIconText}>
                  FilterBAndW
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterCenterFocus />
                <Typography className={classes.materialIconText}>
                  FilterCenterFocus
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterDrama />
                <Typography className={classes.materialIconText}>
                  FilterDrama
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterFrames />
                <Typography className={classes.materialIconText}>
                  FilterFrames
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterHdr />
                <Typography className={classes.materialIconText}>
                  FilterHdr
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterList />
                <Typography className={classes.materialIconText}>
                  FilterList
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterNone />
                <Typography className={classes.materialIconText}>
                  FilterNone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterTiltShift />
                <Typography className={classes.materialIconText}>
                  FilterTiltShift
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FilterVintage />
                <Typography className={classes.materialIconText}>
                  FilterVintage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FindInPage />
                <Typography className={classes.materialIconText}>
                  FindInPage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FindReplace />
                <Typography className={classes.materialIconText}>
                  FindReplace
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Fingerprint />
                <Typography className={classes.materialIconText}>
                  Fingerprint
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FirstPage />
                <Typography className={classes.materialIconText}>
                  FirstPage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FitnessCenter />
                <Typography className={classes.materialIconText}>
                  FitnessCenter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Flag />
                <Typography className={classes.materialIconText}>
                  Flag
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Flare />
                <Typography className={classes.materialIconText}>
                  Flare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FlashAuto />
                <Typography className={classes.materialIconText}>
                  FlashAuto
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Flight />
                <Typography className={classes.materialIconText}>
                  Flight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FlightLand />
                <Typography className={classes.materialIconText}>
                  FlightLand
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FlightTakeoff />
                <Typography className={classes.materialIconText}>
                  FlightTakeoff
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Flip />
                <Typography className={classes.materialIconText}>
                  Flip
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FlipToBack />
                <Typography className={classes.materialIconText}>
                  FlipToBack
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FlipToFront />
                <Typography className={classes.materialIconText}>
                  FlipToFront
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Folder />
                <Typography className={classes.materialIconText}>
                  Folder
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FolderOpen />
                <Typography className={classes.materialIconText}>
                  FolderOpen
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FolderShared />
                <Typography className={classes.materialIconText}>
                  FolderShared
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FolderSpecial />
                <Typography className={classes.materialIconText}>
                  FolderSpecial
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FontDownload />
                <Typography className={classes.materialIconText}>
                  FontDownload
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatAlignCenter />
                <Typography className={classes.materialIconText}>
                  FormatAlignCenter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatAlignJustify />
                <Typography className={classes.materialIconText}>
                  FormatAlignJustify
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatAlignLeft />
                <Typography className={classes.materialIconText}>
                  FormatAlignLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatAlignRight />
                <Typography className={classes.materialIconText}>
                  FormatAlignRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatBold />
                <Typography className={classes.materialIconText}>
                  FormatBold
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatClear />
                <Typography className={classes.materialIconText}>
                  FormatClear
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatColorFill />
                <Typography className={classes.materialIconText}>
                  FormatColorFill
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatColorReset />
                <Typography className={classes.materialIconText}>
                  FormatColorReset
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatColorText />
                <Typography className={classes.materialIconText}>
                  FormatColorText
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatIndentDecrease />
                <Typography className={classes.materialIconText}>
                  FormatIndentDecrease
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatIndentIncrease />
                <Typography className={classes.materialIconText}>
                  FormatIndentIncrease
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatItalic />
                <Typography className={classes.materialIconText}>
                  FormatItalic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatLineSpacing />
                <Typography className={classes.materialIconText}>
                  FormatLineSpacing
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatListBulleted />
                <Typography className={classes.materialIconText}>
                  FormatListBulleted
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatListNumbered />
                <Typography className={classes.materialIconText}>
                  FormatListNumbered
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatListNumberedRtl />
                <Typography className={classes.materialIconText}>
                  FormatListNumberedRtl
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatPaint />
                <Typography className={classes.materialIconText}>
                  FormatPaint
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatQuote />
                <Typography className={classes.materialIconText}>
                  FormatQuote
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatShapes />
                <Typography className={classes.materialIconText}>
                  FormatShapes
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatSize />
                <Typography className={classes.materialIconText}>
                  FormatSize
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatStrikethrough />
                <Typography className={classes.materialIconText}>
                  FormatStrikethrough
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatTextdirectionLToR />
                <Typography className={classes.materialIconText}>
                  FormatTextdirectionLToR
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatTextdirectionRToL />
                <Typography className={classes.materialIconText}>
                  FormatTextdirectionRToL
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FormatUnderlined />
                <Typography className={classes.materialIconText}>
                  FormatUnderlined
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Forum />
                <Typography className={classes.materialIconText}>
                  Forum
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Forward />
                <Typography className={classes.materialIconText}>
                  Forward
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Forward10 />
                <Typography className={classes.materialIconText}>
                  Forward10
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Forward30 />
                <Typography className={classes.materialIconText}>
                  Forward30
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Forward5 />
                <Typography className={classes.materialIconText}>
                  Forward5
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FourK />
                <Typography className={classes.materialIconText}>
                  FourK
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FreeBreakfast />
                <Typography className={classes.materialIconText}>
                  FreeBreakfast
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Fullscreen />
                <Typography className={classes.materialIconText}>
                  Fullscreen
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.FullscreenExit />
                <Typography className={classes.materialIconText}>
                  FullscreenExit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Functions />
                <Typography className={classes.materialIconText}>
                  Functions
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Gamepad />
                <Typography className={classes.materialIconText}>
                  Gamepad
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Games />
                <Typography className={classes.materialIconText}>
                  Games
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Gavel />
                <Typography className={classes.materialIconText}>
                  Gavel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Gesture />
                <Typography className={classes.materialIconText}>
                  Gesture
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GetApp />
                <Typography className={classes.materialIconText}>
                  GetApp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Gif />
                <Typography className={classes.materialIconText}>
                  Gif
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GolfCourse />
                <Typography className={classes.materialIconText}>
                  GolfCourse
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GpsFixed />
                <Typography className={classes.materialIconText}>
                  GpsFixed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GpsNotFixed />
                <Typography className={classes.materialIconText}>
                  GpsNotFixed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Grade />
                <Typography className={classes.materialIconText}>
                  Grade
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Gradient />
                <Typography className={classes.materialIconText}>
                  Gradient
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Grain />
                <Typography className={classes.materialIconText}>
                  Grain
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GraphicEq />
                <Typography className={classes.materialIconText}>
                  GraphicEq
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Group />
                <Typography className={classes.materialIconText}>
                  Group
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GroupWork />
                <Typography className={classes.materialIconText}>
                  GroupWork
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.GTranslate />
                <Typography className={classes.materialIconText}>
                  GTranslate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Hd />
                <Typography className={classes.materialIconText}>Hd</Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HdrStrong />
                <Typography className={classes.materialIconText}>
                  HdrStrong
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HdrWeak />
                <Typography className={classes.materialIconText}>
                  HdrWeak
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Headset />
                <Typography className={classes.materialIconText}>
                  Headset
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HeadsetMic />
                <Typography className={classes.materialIconText}>
                  HeadsetMic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Healing />
                <Typography className={classes.materialIconText}>
                  Healing
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Hearing />
                <Typography className={classes.materialIconText}>
                  Hearing
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Help />
                <Typography className={classes.materialIconText}>
                  Help
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HelpOutline />
                <Typography className={classes.materialIconText}>
                  HelpOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Highlight />
                <Typography className={classes.materialIconText}>
                  Highlight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HighQuality />
                <Typography className={classes.materialIconText}>
                  HighQuality
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.History />
                <Typography className={classes.materialIconText}>
                  History
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Home />
                <Typography className={classes.materialIconText}>
                  Home
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HorizontalSplit />
                <Typography className={classes.materialIconText}>
                  HorizontalSplit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Hotel />
                <Typography className={classes.materialIconText}>
                  Hotel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HotTub />
                <Typography className={classes.materialIconText}>
                  HotTub
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HourglassEmpty />
                <Typography className={classes.materialIconText}>
                  HourglassEmpty
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HourglassFull />
                <Typography className={classes.materialIconText}>
                  HourglassFull
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HowToReg />
                <Typography className={classes.materialIconText}>
                  HowToReg
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.HowToVote />
                <Typography className={classes.materialIconText}>
                  HowToVote
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Http />
                <Typography className={classes.materialIconText}>
                  Http
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Https />
                <Typography className={classes.materialIconText}>
                  Https
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Image />
                <Typography className={classes.materialIconText}>
                  Image
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ImageAspectRatio />
                <Typography className={classes.materialIconText}>
                  ImageAspectRatio
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ImageSearch />
                <Typography className={classes.materialIconText}>
                  ImageSearch
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ImportantDevices />
                <Typography className={classes.materialIconText}>
                  ImportantDevices
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ImportContacts />
                <Typography className={classes.materialIconText}>
                  ImportContacts
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ImportExport />
                <Typography className={classes.materialIconText}>
                  ImportExport
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Inbox />
                <Typography className={classes.materialIconText}>
                  Inbox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.IndeterminateCheckBox />
                <Typography className={classes.materialIconText}>
                  IndeterminateCheckBox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Info />
                <Typography className={classes.materialIconText}>
                  Info
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Input />
                <Typography className={classes.materialIconText}>
                  Input
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertChart />
                <Typography className={classes.materialIconText}>
                  InsertChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertComment />
                <Typography className={classes.materialIconText}>
                  InsertComment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertDriveFile />
                <Typography className={classes.materialIconText}>
                  InsertDriveFile
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertEmoticon />
                <Typography className={classes.materialIconText}>
                  InsertEmoticon
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertInvitation />
                <Typography className={classes.materialIconText}>
                  InsertInvitation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertLink />
                <Typography className={classes.materialIconText}>
                  InsertLink
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InsertPhoto />
                <Typography className={classes.materialIconText}>
                  InsertPhoto
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.InvertColors />
                <Typography className={classes.materialIconText}>
                  InvertColors
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Iso />
                <Typography className={classes.materialIconText}>
                  Iso
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Keyboard />
                <Typography className={classes.materialIconText}>
                  Keyboard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardArrowDown />
                <Typography className={classes.materialIconText}>
                  KeyboardArrowDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardArrowLeft />
                <Typography className={classes.materialIconText}>
                  KeyboardArrowLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardArrowRight />
                <Typography className={classes.materialIconText}>
                  KeyboardArrowRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardArrowUp />
                <Typography className={classes.materialIconText}>
                  KeyboardArrowUp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardBackspace />
                <Typography className={classes.materialIconText}>
                  KeyboardBackspace
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardCapslock />
                <Typography className={classes.materialIconText}>
                  KeyboardCapslock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardHide />
                <Typography className={classes.materialIconText}>
                  KeyboardHide
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardReturn />
                <Typography className={classes.materialIconText}>
                  KeyboardReturn
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardTab />
                <Typography className={classes.materialIconText}>
                  KeyboardTab
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.KeyboardVoice />
                <Typography className={classes.materialIconText}>
                  KeyboardVoice
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Kitchen />
                <Typography className={classes.materialIconText}>
                  Kitchen
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Label />
                <Typography className={classes.materialIconText}>
                  Label
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LabelImportant />
                <Typography className={classes.materialIconText}>
                  LabelImportant
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Landscape />
                <Typography className={classes.materialIconText}>
                  Landscape
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Language />
                <Typography className={classes.materialIconText}>
                  Language
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Laptop />
                <Typography className={classes.materialIconText}>
                  Laptop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LaptopChromebook />
                <Typography className={classes.materialIconText}>
                  LaptopChromebook
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LaptopMac />
                <Typography className={classes.materialIconText}>
                  LaptopMac
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LaptopWindows />
                <Typography className={classes.materialIconText}>
                  LaptopWindows
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LastPage />
                <Typography className={classes.materialIconText}>
                  LastPage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Launch />
                <Typography className={classes.materialIconText}>
                  Launch
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Layers />
                <Typography className={classes.materialIconText}>
                  Layers
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LayersClear />
                <Typography className={classes.materialIconText}>
                  LayersClear
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LeakRemove />
                <Typography className={classes.materialIconText}>
                  LeakRemove
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Lens />
                <Typography className={classes.materialIconText}>
                  Lens
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LibraryBooks />
                <Typography className={classes.materialIconText}>
                  LibraryBooks
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LibraryMusic />
                <Typography className={classes.materialIconText}>
                  LibraryMusic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LinearScale />
                <Typography className={classes.materialIconText}>
                  LinearScale
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LineStyle />
                <Typography className={classes.materialIconText}>
                  LineStyle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LineWeight />
                <Typography className={classes.materialIconText}>
                  LineWeight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Link />
                <Typography className={classes.materialIconText}>
                  Link
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LinkedCamera />
                <Typography className={classes.materialIconText}>
                  LinkedCamera
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.List />
                <Typography className={classes.materialIconText}>
                  List
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ListAlt />
                <Typography className={classes.materialIconText}>
                  ListAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LiveHelp />
                <Typography className={classes.materialIconText}>
                  LiveHelp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LiveTv />
                <Typography className={classes.materialIconText}>
                  LiveTv
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalActivity />
                <Typography className={classes.materialIconText}>
                  LocalActivity
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalAirport />
                <Typography className={classes.materialIconText}>
                  LocalAirport
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalAtm />
                <Typography className={classes.materialIconText}>
                  LocalAtm
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalBar />
                <Typography className={classes.materialIconText}>
                  LocalBar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalCafe />
                <Typography className={classes.materialIconText}>
                  LocalCafe
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalCarWash />
                <Typography className={classes.materialIconText}>
                  LocalCarWash
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalConvenienceStore />
                <Typography className={classes.materialIconText}>
                  LocalConvenienceStore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalDining />
                <Typography className={classes.materialIconText}>
                  LocalDining
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalDrink />
                <Typography className={classes.materialIconText}>
                  LocalDrink
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalFlorist />
                <Typography className={classes.materialIconText}>
                  LocalFlorist
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalGasStation />
                <Typography className={classes.materialIconText}>
                  LocalGasStation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalGroceryStore />
                <Typography className={classes.materialIconText}>
                  LocalGroceryStore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalHospital />
                <Typography className={classes.materialIconText}>
                  LocalHospital
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalHotel />
                <Typography className={classes.materialIconText}>
                  LocalHotel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalLaundryService />
                <Typography className={classes.materialIconText}>
                  LocalLaundryService
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalLibrary />
                <Typography className={classes.materialIconText}>
                  LocalLibrary
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalMall />
                <Typography className={classes.materialIconText}>
                  LocalMall
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalMovies />
                <Typography className={classes.materialIconText}>
                  LocalMovies
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalParking />
                <Typography className={classes.materialIconText}>
                  LocalParking
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalPharmacy />
                <Typography className={classes.materialIconText}>
                  LocalPharmacy
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalPhone />
                <Typography className={classes.materialIconText}>
                  LocalPhone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalPizza />
                <Typography className={classes.materialIconText}>
                  LocalPizza
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalPlay />
                <Typography className={classes.materialIconText}>
                  LocalPlay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalPrintshop />
                <Typography className={classes.materialIconText}>
                  LocalPrintshop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalSee />
                <Typography className={classes.materialIconText}>
                  LocalSee
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalShipping />
                <Typography className={classes.materialIconText}>
                  LocalShipping
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocalTaxi />
                <Typography className={classes.materialIconText}>
                  LocalTaxi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocationCity />
                <Typography className={classes.materialIconText}>
                  LocationCity
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocationDisabled />
                <Typography className={classes.materialIconText}>
                  LocationDisabled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LocationSearching />
                <Typography className={classes.materialIconText}>
                  LocationSearching
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Lock />
                <Typography className={classes.materialIconText}>
                  Lock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LockOpen />
                <Typography className={classes.materialIconText}>
                  LockOpen
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Looks />
                <Typography className={classes.materialIconText}>
                  Looks
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Looks3 />
                <Typography className={classes.materialIconText}>
                  Looks3
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Looks4 />
                <Typography className={classes.materialIconText}>
                  Looks4
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Looks5 />
                <Typography className={classes.materialIconText}>
                  Looks5
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Looks6 />
                <Typography className={classes.materialIconText}>
                  Looks6
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LooksTwo />
                <Typography className={classes.materialIconText}>
                  LooksTwo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Loop />
                <Typography className={classes.materialIconText}>
                  Loop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Loupe />
                <Typography className={classes.materialIconText}>
                  Loupe
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.LowPriority />
                <Typography className={classes.materialIconText}>
                  LowPriority
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Loyalty />
                <Typography className={classes.materialIconText}>
                  Loyalty
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Mail />
                <Typography className={classes.materialIconText}>
                  Mail
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MailOutline />
                <Typography className={classes.materialIconText}>
                  MailOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Map />
                <Typography className={classes.materialIconText}>
                  Map
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Markunread />
                <Typography className={classes.materialIconText}>
                  Markunread
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MarkunreadMailbox />
                <Typography className={classes.materialIconText}>
                  MarkunreadMailbox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Maximize />
                <Typography className={classes.materialIconText}>
                  Maximize
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MeetingRoom />
                <Typography className={classes.materialIconText}>
                  MeetingRoom
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Memory />
                <Typography className={classes.materialIconText}>
                  Memory
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Menu />
                <Typography className={classes.materialIconText}>
                  Menu
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MergeType />
                <Typography className={classes.materialIconText}>
                  MergeType
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Message />
                <Typography className={classes.materialIconText}>
                  Message
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Mic />
                <Typography className={classes.materialIconText}>
                  Mic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MicNone />
                <Typography className={classes.materialIconText}>
                  MicNone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Minimize />
                <Typography className={classes.materialIconText}>
                  Minimize
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MissedVideoCall />
                <Typography className={classes.materialIconText}>
                  MissedVideoCall
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Mms />
                <Typography className={classes.materialIconText}>
                  Mms
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MobileFriendly />
                <Typography className={classes.materialIconText}>
                  MobileFriendly
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MobileScreenShare />
                <Typography className={classes.materialIconText}>
                  MobileScreenShare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ModeComment />
                <Typography className={classes.materialIconText}>
                  ModeComment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Money />
                <Typography className={classes.materialIconText}>
                  Money
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MonochromePhotos />
                <Typography className={classes.materialIconText}>
                  MonochromePhotos
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Mood />
                <Typography className={classes.materialIconText}>
                  Mood
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MoodBad />
                <Typography className={classes.materialIconText}>
                  MoodBad
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.More />
                <Typography className={classes.materialIconText}>
                  More
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MoreHoriz />
                <Typography className={classes.materialIconText}>
                  MoreHoriz
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MoreVert />
                <Typography className={classes.materialIconText}>
                  MoreVert
                </Typography>
              </Grid>

              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Mouse />
                <Typography className={classes.materialIconText}>
                  Mouse
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MoveToInbox />
                <Typography className={classes.materialIconText}>
                  MoveToInbox
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Movie />
                <Typography className={classes.materialIconText}>
                  Movie
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MovieCreation />
                <Typography className={classes.materialIconText}>
                  MovieCreation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MovieFilter />
                <Typography className={classes.materialIconText}>
                  MovieFilter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MultilineChart />
                <Typography className={classes.materialIconText}>
                  MultilineChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MusicNote />
                <Typography className={classes.materialIconText}>
                  MusicNote
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MusicVideo />
                <Typography className={classes.materialIconText}>
                  MusicVideo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.MyLocation />
                <Typography className={classes.materialIconText}>
                  MyLocation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Nature />
                <Typography className={classes.materialIconText}>
                  Nature
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NaturePeople />
                <Typography className={classes.materialIconText}>
                  NaturePeople
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NavigateBefore />
                <Typography className={classes.materialIconText}>
                  NavigateBefore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NavigateNext />
                <Typography className={classes.materialIconText}>
                  NavigateNext
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Navigation />
                <Typography className={classes.materialIconText}>
                  Navigation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NearMe />
                <Typography className={classes.materialIconText}>
                  NearMe
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NetworkCell />
                <Typography className={classes.materialIconText}>
                  NetworkCell
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NetworkCheck />
                <Typography className={classes.materialIconText}>
                  NetworkCheck
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NetworkLocked />
                <Typography className={classes.materialIconText}>
                  NetworkLocked
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NetworkWifi />
                <Typography className={classes.materialIconText}>
                  NetworkWifi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NextWeek />
                <Typography className={classes.materialIconText}>
                  NextWeek
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Nfc />
                <Typography className={classes.materialIconText}>
                  Nfc
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NoEncryption />
                <Typography className={classes.materialIconText}>
                  NoEncryption
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NoMeetingRoom />
                <Typography className={classes.materialIconText}>
                  NoMeetingRoom
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NoSim />
                <Typography className={classes.materialIconText}>
                  NoSim
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Note />
                <Typography className={classes.materialIconText}>
                  Note
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Notes />
                <Typography className={classes.materialIconText}>
                  Notes
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NotificationImportant />
                <Typography className={classes.materialIconText}>
                  NotificationImportant
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Notifications />
                <Typography className={classes.materialIconText}>
                  Notifications
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NotificationsActive />
                <Typography className={classes.materialIconText}>
                  NotificationsActive
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NotificationsNone />
                <Typography className={classes.materialIconText}>
                  NotificationsNone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NotificationsPaused />
                <Typography className={classes.materialIconText}>
                  NotificationsPaused
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NotInterested />
                <Typography className={classes.materialIconText}>
                  NotInterested
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.NotListedLocation />
                <Typography className={classes.materialIconText}>
                  NotListedLocation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Opacity />
                <Typography className={classes.materialIconText}>
                  Opacity
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.OpenInBrowser />
                <Typography className={classes.materialIconText}>
                  OpenInBrowser
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.OpenWith />
                <Typography className={classes.materialIconText}>
                  OpenWith
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Pages />
                <Typography className={classes.materialIconText}>
                  Pages
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Pageview />
                <Typography className={classes.materialIconText}>
                  Pageview
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Palette />
                <Typography className={classes.materialIconText}>
                  Palette
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Panorama />
                <Typography className={classes.materialIconText}>
                  Panorama
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PanoramaFishEye />
                <Typography className={classes.materialIconText}>
                  PanoramaFishEye
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PanoramaHorizontal />
                <Typography className={classes.materialIconText}>
                  PanoramaHorizontal
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PanoramaVertical />
                <Typography className={classes.materialIconText}>
                  PanoramaVertical
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PanoramaWideAngle />
                <Typography className={classes.materialIconText}>
                  PanoramaWideAngle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PanTool />
                <Typography className={classes.materialIconText}>
                  PanTool
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PartyMode />
                <Typography className={classes.materialIconText}>
                  PartyMode
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Pause />
                <Typography className={classes.materialIconText}>
                  Pause
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PauseCircleFilled />
                <Typography className={classes.materialIconText}>
                  PauseCircleFilled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PauseCircleOutline />
                <Typography className={classes.materialIconText}>
                  PauseCircleOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PausePresentation />
                <Typography className={classes.materialIconText}>
                  PausePresentation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Payment />
                <Typography className={classes.materialIconText}>
                  Payment
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.People />
                <Typography className={classes.materialIconText}>
                  People
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PeopleOutline />
                <Typography className={classes.materialIconText}>
                  PeopleOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermCameraMic />
                <Typography className={classes.materialIconText}>
                  PermCameraMic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermContactCalendar />
                <Typography className={classes.materialIconText}>
                  PermContactCalendar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermDataSetting />
                <Typography className={classes.materialIconText}>
                  PermDataSetting
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermDeviceInformation />
                <Typography className={classes.materialIconText}>
                  PermDeviceInformation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermIdentity />
                <Typography className={classes.materialIconText}>
                  PermIdentity
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermMedia />
                <Typography className={classes.materialIconText}>
                  PermMedia
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermPhoneMsg />
                <Typography className={classes.materialIconText}>
                  PermPhoneMsg
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PermScanWifi />
                <Typography className={classes.materialIconText}>
                  PermScanWifi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Person />
                <Typography className={classes.materialIconText}>
                  Person
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PersonalVideo />
                <Typography className={classes.materialIconText}>
                  PersonalVideo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PersonOutline />
                <Typography className={classes.materialIconText}>
                  PersonOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PersonPin />
                <Typography className={classes.materialIconText}>
                  PersonPin
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PersonPinCircle />
                <Typography className={classes.materialIconText}>
                  PersonPinCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Pets />
                <Typography className={classes.materialIconText}>
                  Pets
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Phone />
                <Typography className={classes.materialIconText}>
                  Phone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneAndroid />
                <Typography className={classes.materialIconText}>
                  PhoneAndroid
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneBluetoothSpeaker />
                <Typography className={classes.materialIconText}>
                  PhoneBluetoothSpeaker
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneCallback />
                <Typography className={classes.materialIconText}>
                  PhoneCallback
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneForwarded />
                <Typography className={classes.materialIconText}>
                  PhoneForwarded
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneInTalk />
                <Typography className={classes.materialIconText}>
                  PhoneInTalk
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneIphone />
                <Typography className={classes.materialIconText}>
                  PhoneIphone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Phonelink />
                <Typography className={classes.materialIconText}>
                  Phonelink
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhonelinkErase />
                <Typography className={classes.materialIconText}>
                  PhonelinkErase
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhonelinkLock />
                <Typography className={classes.materialIconText}>
                  PhonelinkLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhonelinkRing />
                <Typography className={classes.materialIconText}>
                  PhonelinkRing
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhonelinkSetup />
                <Typography className={classes.materialIconText}>
                  PhonelinkSetup
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneLocked />
                <Typography className={classes.materialIconText}>
                  PhoneLocked
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhoneMissed />
                <Typography className={classes.materialIconText}>
                  PhoneMissed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhonePaused />
                <Typography className={classes.materialIconText}>
                  PhonePaused
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Photo />
                <Typography className={classes.materialIconText}>
                  Photo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoAlbum />
                <Typography className={classes.materialIconText}>
                  PhotoAlbum
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoCamera />
                <Typography className={classes.materialIconText}>
                  PhotoCamera
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoFilter />
                <Typography className={classes.materialIconText}>
                  PhotoFilter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoLibrary />
                <Typography className={classes.materialIconText}>
                  PhotoLibrary
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoSizeSelectActual />
                <Typography className={classes.materialIconText}>
                  PhotoSizeSelectActual
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoSizeSelectLarge />
                <Typography className={classes.materialIconText}>
                  PhotoSizeSelectLarge
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PhotoSizeSelectSmall />
                <Typography className={classes.materialIconText}>
                  PhotoSizeSelectSmall
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PictureAsPdf />
                <Typography className={classes.materialIconText}>
                  PictureAsPdf
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PictureInPicture />
                <Typography className={classes.materialIconText}>
                  PictureInPicture
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PictureInPictureAlt />
                <Typography className={classes.materialIconText}>
                  PictureInPictureAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PieChart />
                <Typography className={classes.materialIconText}>
                  PieChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PinDrop />
                <Typography className={classes.materialIconText}>
                  PinDrop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Place />
                <Typography className={classes.materialIconText}>
                  Place
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PlayArrow />
                <Typography className={classes.materialIconText}>
                  PlayArrow
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PlayCircleFilled />
                <Typography className={classes.materialIconText}>
                  PlayCircleFilled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PlayCircleFilledWhite />
                <Typography className={classes.materialIconText}>
                  PlayCircleFilledWhite
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PlayCircleOutline />
                <Typography className={classes.materialIconText}>
                  PlayCircleOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PlayForWork />
                <Typography className={classes.materialIconText}>
                  PlayForWork
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PlaylistPlay />
                <Typography className={classes.materialIconText}>
                  PlaylistPlay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Poll />
                <Typography className={classes.materialIconText}>
                  Poll
                </Typography>
              </Grid>

              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Pool />
                <Typography className={classes.materialIconText}>
                  Pool
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Portrait />
                <Typography className={classes.materialIconText}>
                  Portrait
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Power />
                <Typography className={classes.materialIconText}>
                  Power
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PowerInput />
                <Typography className={classes.materialIconText}>
                  PowerInput
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PregnantWoman />
                <Typography className={classes.materialIconText}>
                  PregnantWoman
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PresentToAll />
                <Typography className={classes.materialIconText}>
                  PresentToAll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Print />
                <Typography className={classes.materialIconText}>
                  Print
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PrintDisabled />
                <Typography className={classes.materialIconText}>
                  PrintDisabled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.PriorityHigh />
                <Typography className={classes.materialIconText}>
                  PriorityHigh
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Public />
                <Typography className={classes.materialIconText}>
                  Public
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Publish />
                <Typography className={classes.materialIconText}>
                  Publish
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.QueryBuilder />
                <Typography className={classes.materialIconText}>
                  QueryBuilder
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.QuestionAnswer />
                <Typography className={classes.materialIconText}>
                  QuestionAnswer
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Queue />
                <Typography className={classes.materialIconText}>
                  Queue
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.QueueMusic />
                <Typography className={classes.materialIconText}>
                  QueueMusic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.QueuePlayNext />
                <Typography className={classes.materialIconText}>
                  QueuePlayNext
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Radio />
                <Typography className={classes.materialIconText}>
                  Radio
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RadioButtonChecked />
                <Typography className={classes.materialIconText}>
                  RadioButtonChecked
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RadioButtonUnchecked />
                <Typography className={classes.materialIconText}>
                  RadioButtonUnchecked
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RateReview />
                <Typography className={classes.materialIconText}>
                  RateReview
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Receipt />
                <Typography className={classes.materialIconText}>
                  Receipt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RecentActors />
                <Typography className={classes.materialIconText}>
                  RecentActors
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RecordVoiceOver />
                <Typography className={classes.materialIconText}>
                  RecordVoiceOver
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Redeem />
                <Typography className={classes.materialIconText}>
                  Redeem
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Redo />
                <Typography className={classes.materialIconText}>
                  Redo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Refresh />
                <Typography className={classes.materialIconText}>
                  Refresh
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Remove />
                <Typography className={classes.materialIconText}>
                  Remove
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RemoveCircle />
                <Typography className={classes.materialIconText}>
                  RemoveCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RemoveCircleOutline />
                <Typography className={classes.materialIconText}>
                  RemoveCircleOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RemoveFromQueue />
                <Typography className={classes.materialIconText}>
                  RemoveFromQueue
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RemoveRedEye />
                <Typography className={classes.materialIconText}>
                  RemoveRedEye
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RemoveShoppingCart />
                <Typography className={classes.materialIconText}>
                  RemoveShoppingCart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Reorder />
                <Typography className={classes.materialIconText}>
                  Reorder
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Repeat />
                <Typography className={classes.materialIconText}>
                  Repeat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Replay />
                <Typography className={classes.materialIconText}>
                  Replay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Replay10 />
                <Typography className={classes.materialIconText}>
                  Replay10
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Replay30 />
                <Typography className={classes.materialIconText}>
                  Replay30
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Replay5 />
                <Typography className={classes.materialIconText}>
                  Replay5
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Reply />
                <Typography className={classes.materialIconText}>
                  Reply
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ReplyAll />
                <Typography className={classes.materialIconText}>
                  ReplyAll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Report />
                <Typography className={classes.materialIconText}>
                  Report
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ReportProblem />
                <Typography className={classes.materialIconText}>
                  ReportProblem
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Restaurant />
                <Typography className={classes.materialIconText}>
                  Restaurant
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RestaurantMenu />
                <Typography className={classes.materialIconText}>
                  RestaurantMenu
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Restore />
                <Typography className={classes.materialIconText}>
                  Restore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RestoreFromTrash />
                <Typography className={classes.materialIconText}>
                  RestoreFromTrash
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RestorePage />
                <Typography className={classes.materialIconText}>
                  RestorePage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RingVolume />
                <Typography className={classes.materialIconText}>
                  RingVolume
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Room />
                <Typography className={classes.materialIconText}>
                  Room
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RoomService />
                <Typography className={classes.materialIconText}>
                  RoomService
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Rotate90DegreesCcw />
                <Typography className={classes.materialIconText}>
                  Rotate90DegreesCcw
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RotateLeft />
                <Typography className={classes.materialIconText}>
                  RotateLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RotateRight />
                <Typography className={classes.materialIconText}>
                  RotateRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Router />
                <Typography className={classes.materialIconText}>
                  Router
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Rowing />
                <Typography className={classes.materialIconText}>
                  Rowing
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RssFeed />
                <Typography className={classes.materialIconText}>
                  RssFeed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.RvHookup />
                <Typography className={classes.materialIconText}>
                  RvHookup
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Satellite />
                <Typography className={classes.materialIconText}>
                  Satellite
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Save />
                <Typography className={classes.materialIconText}>
                  Save
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SaveAlt />
                <Typography className={classes.materialIconText}>
                  SaveAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Scanner />
                <Typography className={classes.materialIconText}>
                  Scanner
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ScatterPlot />
                <Typography className={classes.materialIconText}>
                  ScatterPlot
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Schedule />
                <Typography className={classes.materialIconText}>
                  Schedule
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.School />
                <Typography className={classes.materialIconText}>
                  School
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Score />
                <Typography className={classes.materialIconText}>
                  Score
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ScreenLockLandscape />
                <Typography className={classes.materialIconText}>
                  ScreenLockLandscape
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ScreenLockPortrait />
                <Typography className={classes.materialIconText}>
                  ScreenLockPortrait
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ScreenLockRotation />
                <Typography className={classes.materialIconText}>
                  ScreenLockRotation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ScreenRotation />
                <Typography className={classes.materialIconText}>
                  ScreenRotation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ScreenShare />
                <Typography className={classes.materialIconText}>
                  ScreenShare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SdCard />
                <Typography className={classes.materialIconText}>
                  SdCard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SdStorage />
                <Typography className={classes.materialIconText}>
                  SdStorage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Search />
                <Typography className={classes.materialIconText}>
                  Search
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Security />
                <Typography className={classes.materialIconText}>
                  Security
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SelectAll />
                <Typography className={classes.materialIconText}>
                  SelectAll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Send />
                <Typography className={classes.materialIconText}>
                  Send
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SentimentDissatisfied />
                <Typography className={classes.materialIconText}>
                  SentimentDissatisfied
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SentimentSatisfied />
                <Typography className={classes.materialIconText}>
                  SentimentSatisfied
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SentimentSatisfiedAlt />
                <Typography className={classes.materialIconText}>
                  SentimentSatisfiedAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SentimentVeryDissatisfied />
                <Typography className={classes.materialIconText}>
                  SentimentVeryDissatisfied
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SentimentVerySatisfied />
                <Typography className={classes.materialIconText}>
                  SentimentVerySatisfied
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Settings />
                <Typography className={classes.materialIconText}>
                  Settings
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsApplications />
                <Typography className={classes.materialIconText}>
                  SettingsApplications
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsBackupRestore />
                <Typography className={classes.materialIconText}>
                  SettingsBackupRestore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsBluetooth />
                <Typography className={classes.materialIconText}>
                  SettingsBluetooth
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsBrightness />
                <Typography className={classes.materialIconText}>
                  SettingsBrightness
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsCell />
                <Typography className={classes.materialIconText}>
                  SettingsCell
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsEthernet />
                <Typography className={classes.materialIconText}>
                  SettingsEthernet
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsInputAntenna />
                <Typography className={classes.materialIconText}>
                  SettingsInputAntenna
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsInputComponent />
                <Typography className={classes.materialIconText}>
                  SettingsInputComponent
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsInputComposite />
                <Typography className={classes.materialIconText}>
                  SettingsInputComposite
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsInputHdmi />
                <Typography className={classes.materialIconText}>
                  SettingsInputHdmi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsInputSvideo />
                <Typography className={classes.materialIconText}>
                  SettingsInputSvideo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsOverscan />
                <Typography className={classes.materialIconText}>
                  SettingsOverscan
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsPhone />
                <Typography className={classes.materialIconText}>
                  SettingsPhone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsPower />
                <Typography className={classes.materialIconText}>
                  SettingsPower
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsRemote />
                <Typography className={classes.materialIconText}>
                  SettingsRemote
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsSystemDaydream />
                <Typography className={classes.materialIconText}>
                  SettingsSystemDaydream
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SettingsVoice />
                <Typography className={classes.materialIconText}>
                  SettingsVoice
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Share />
                <Typography className={classes.materialIconText}>
                  Share
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Shop />
                <Typography className={classes.materialIconText}>
                  Shop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ShoppingBasket />
                <Typography className={classes.materialIconText}>
                  ShoppingBasket
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ShoppingCart />
                <Typography className={classes.materialIconText}>
                  ShoppingCart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ShopTwo />
                <Typography className={classes.materialIconText}>
                  ShopTwo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ShortText />
                <Typography className={classes.materialIconText}>
                  ShortText
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ShowChart />
                <Typography className={classes.materialIconText}>
                  ShowChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Shuffle />
                <Typography className={classes.materialIconText}>
                  Shuffle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ShutterSpeed />
                <Typography className={classes.materialIconText}>
                  ShutterSpeed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellular0Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellular0Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellular1Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellular1Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellular2Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellular2Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellular3Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellular3Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellular4Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellular4Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularAlt />
                <Typography className={classes.materialIconText}>
                  SignalCellularAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularConnectedNoInternet0Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellularConnectedNoInternet0Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularConnectedNoInternet1Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellularConnectedNoInternet1Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularConnectedNoInternet2Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellularConnectedNoInternet2Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularConnectedNoInternet3Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellularConnectedNoInternet3Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularConnectedNoInternet4Bar />
                <Typography className={classes.materialIconText}>
                  SignalCellularConnectedNoInternet4Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularNoSim />
                <Typography className={classes.materialIconText}>
                  SignalCellularNoSim
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalCellularNull />
                <Typography className={classes.materialIconText}>
                  SignalCellularNull
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi0Bar />
                <Typography className={classes.materialIconText}>
                  SignalWifi0Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi1Bar />
                <Typography className={classes.materialIconText}>
                  SignalWifi1Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi1BarLock />
                <Typography className={classes.materialIconText}>
                  SignalWifi1BarLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi2Bar />
                <Typography className={classes.materialIconText}>
                  SignalWifi2Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi2BarLock />
                <Typography className={classes.materialIconText}>
                  SignalWifi2BarLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi3Bar />
                <Typography className={classes.materialIconText}>
                  SignalWifi3Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi3BarLock />
                <Typography className={classes.materialIconText}>
                  SignalWifi3BarLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi4Bar />
                <Typography className={classes.materialIconText}>
                  SignalWifi4Bar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SignalWifi4BarLock />
                <Typography className={classes.materialIconText}>
                  SignalWifi4BarLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SimCard />
                <Typography className={classes.materialIconText}>
                  SimCard
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SkipNext />
                <Typography className={classes.materialIconText}>
                  SkipNext
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SkipPrevious />
                <Typography className={classes.materialIconText}>
                  SkipPrevious
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Slideshow />
                <Typography className={classes.materialIconText}>
                  Slideshow
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SlowMotionVideo />
                <Typography className={classes.materialIconText}>
                  SlowMotionVideo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Smartphone />
                <Typography className={classes.materialIconText}>
                  Smartphone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SmokeFree />
                <Typography className={classes.materialIconText}>
                  SmokeFree
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SmokingRooms />
                <Typography className={classes.materialIconText}>
                  SmokingRooms
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Sms />
                <Typography className={classes.materialIconText}>
                  Sms
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SmsFailed />
                <Typography className={classes.materialIconText}>
                  SmsFailed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Snooze />
                <Typography className={classes.materialIconText}>
                  Snooze
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Sort />
                <Typography className={classes.materialIconText}>
                  Sort
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SortByAlpha />
                <Typography className={classes.materialIconText}>
                  SortByAlpha
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Spa />
                <Typography className={classes.materialIconText}>
                  Spa
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SpaceBar />
                <Typography className={classes.materialIconText}>
                  SpaceBar
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Speaker />
                <Typography className={classes.materialIconText}>
                  Speaker
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SpeakerGroup />
                <Typography className={classes.materialIconText}>
                  SpeakerGroup
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SpeakerNotes />
                <Typography className={classes.materialIconText}>
                  SpeakerNotes
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SpeakerPhone />
                <Typography className={classes.materialIconText}>
                  SpeakerPhone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Spellcheck />
                <Typography className={classes.materialIconText}>
                  Spellcheck
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Star />
                <Typography className={classes.materialIconText}>
                  Star
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StarBorder />
                <Typography className={classes.materialIconText}>
                  StarBorder
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StarHalf />
                <Typography className={classes.materialIconText}>
                  StarHalf
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StarRate />
                <Typography className={classes.materialIconText}>
                  StarRate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Stars />
                <Typography className={classes.materialIconText}>
                  Stars
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StayCurrentLandscape />
                <Typography className={classes.materialIconText}>
                  StayCurrentLandscape
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StayCurrentPortrait />
                <Typography className={classes.materialIconText}>
                  StayCurrentPortrait
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StayPrimaryLandscape />
                <Typography className={classes.materialIconText}>
                  StayPrimaryLandscape
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StayPrimaryPortrait />
                <Typography className={classes.materialIconText}>
                  StayPrimaryPortrait
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Stop />
                <Typography className={classes.materialIconText}>
                  Stop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StopScreenShare />
                <Typography className={classes.materialIconText}>
                  StopScreenShare
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Storage />
                <Typography className={classes.materialIconText}>
                  Storage
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Store />
                <Typography className={classes.materialIconText}>
                  Store
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StoreMallDirectory />
                <Typography className={classes.materialIconText}>
                  StoreMallDirectory
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Straighten />
                <Typography className={classes.materialIconText}>
                  Straighten
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Streetview />
                <Typography className={classes.materialIconText}>
                  Streetview
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.StrikethroughS />
                <Typography className={classes.materialIconText}>
                  StrikethroughS
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Style />
                <Typography className={classes.materialIconText}>
                  Style
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SubdirectoryArrowLeft />
                <Typography className={classes.materialIconText}>
                  SubdirectoryArrowLeft
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SubdirectoryArrowRight />
                <Typography className={classes.materialIconText}>
                  SubdirectoryArrowRight
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Subject />
                <Typography className={classes.materialIconText}>
                  Subject
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Subscriptions />
                <Typography className={classes.materialIconText}>
                  Subscriptions
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Subtitles />
                <Typography className={classes.materialIconText}>
                  Subtitles
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Subway />
                <Typography className={classes.materialIconText}>
                  Subway
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SupervisedUserCircle />
                <Typography className={classes.materialIconText}>
                  SupervisedUserCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SupervisorAccount />
                <Typography className={classes.materialIconText}>
                  SupervisorAccount
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SurroundSound />
                <Typography className={classes.materialIconText}>
                  SurroundSound
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwapCalls />
                <Typography className={classes.materialIconText}>
                  SwapCalls
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwapHoriz />
                <Typography className={classes.materialIconText}>
                  SwapHoriz
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwapHorizontalCircle />
                <Typography className={classes.materialIconText}>
                  SwapHorizontalCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwapVert />
                <Typography className={classes.materialIconText}>
                  SwapVert
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwapVerticalCircle />
                <Typography className={classes.materialIconText}>
                  SwapVerticalCircle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwitchCamera />
                <Typography className={classes.materialIconText}>
                  SwitchCamera
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SwitchVideo />
                <Typography className={classes.materialIconText}>
                  SwitchVideo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Sync />
                <Typography className={classes.materialIconText}>
                  Sync
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SyncDisabled />
                <Typography className={classes.materialIconText}>
                  SyncDisabled
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SyncProblem />
                <Typography className={classes.materialIconText}>
                  SyncProblem
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.SystemUpdate />
                <Typography className={classes.materialIconText}>
                  SystemUpdate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Tab />
                <Typography className={classes.materialIconText}>
                  Tab
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TableChart />
                <Typography className={classes.materialIconText}>
                  TableChart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Tablet />
                <Typography className={classes.materialIconText}>
                  Tablet
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TabletAndroid />
                <Typography className={classes.materialIconText}>
                  TabletAndroid
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TabletMac />
                <Typography className={classes.materialIconText}>
                  TabletMac
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TabUnselected />
                <Typography className={classes.materialIconText}>
                  TabUnselected
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TagFaces />
                <Typography className={classes.materialIconText}>
                  TagFaces
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TapAndPlay />
                <Typography className={classes.materialIconText}>
                  TapAndPlay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Terrain />
                <Typography className={classes.materialIconText}>
                  Terrain
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TextFields />
                <Typography className={classes.materialIconText}>
                  TextFields
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TextFormat />
                <Typography className={classes.materialIconText}>
                  TextFormat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TextRotateUp />
                <Typography className={classes.materialIconText}>
                  TextRotateUp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TextRotateVertical />
                <Typography className={classes.materialIconText}>
                  TextRotateVertical
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TextRotationDown />
                <Typography className={classes.materialIconText}>
                  TextRotationDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TextRotationNone />
                <Typography className={classes.materialIconText}>
                  TextRotationNone
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Textsms />
                <Typography className={classes.materialIconText}>
                  Textsms
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Texture />
                <Typography className={classes.materialIconText}>
                  Texture
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Theaters />
                <Typography className={classes.materialIconText}>
                  Theaters
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThreeDRotation />
                <Typography className={classes.materialIconText}>
                  ThreeDRotation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThreeSixty />
                <Typography className={classes.materialIconText}>
                  ThreeSixty
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThumbDown />
                <Typography className={classes.materialIconText}>
                  ThumbDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThumbDownAlt />
                <Typography className={classes.materialIconText}>
                  ThumbDownAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThumbsUpDown />
                <Typography className={classes.materialIconText}>
                  ThumbsUpDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThumbUp />
                <Typography className={classes.materialIconText}>
                  ThumbUp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ThumbUpAlt />
                <Typography className={classes.materialIconText}>
                  ThumbUpAlt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Timelapse />
                <Typography className={classes.materialIconText}>
                  Timelapse
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Timeline />
                <Typography className={classes.materialIconText}>
                  Timeline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Timer />
                <Typography className={classes.materialIconText}>
                  Timer
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Timer10 />
                <Typography className={classes.materialIconText}>
                  Timer10
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Timer3 />
                <Typography className={classes.materialIconText}>
                  Timer3
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TimeToLeave />
                <Typography className={classes.materialIconText}>
                  TimeToLeave
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Title />
                <Typography className={classes.materialIconText}>
                  Title
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Toc />
                <Typography className={classes.materialIconText}>
                  Toc
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Today />
                <Typography className={classes.materialIconText}>
                  Today
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Toll />
                <Typography className={classes.materialIconText}>
                  Toll
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Tonality />
                <Typography className={classes.materialIconText}>
                  Tonality
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TouchApp />
                <Typography className={classes.materialIconText}>
                  TouchApp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Toys />
                <Typography className={classes.materialIconText}>
                  Toys
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TrackChanges />
                <Typography className={classes.materialIconText}>
                  TrackChanges
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Traffic />
                <Typography className={classes.materialIconText}>
                  Traffic
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Train />
                <Typography className={classes.materialIconText}>
                  Train
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Tram />
                <Typography className={classes.materialIconText}>
                  Tram
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TransferWithinAStation />
                <Typography className={classes.materialIconText}>
                  TransferWithinAStation
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Transform />
                <Typography className={classes.materialIconText}>
                  Transform
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TransitEnterexit />
                <Typography className={classes.materialIconText}>
                  TransitEnterexit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Translate />
                <Typography className={classes.materialIconText}>
                  Translate
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TrendingDown />
                <Typography className={classes.materialIconText}>
                  TrendingDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TrendingFlat />
                <Typography className={classes.materialIconText}>
                  TrendingFlat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TrendingUp />
                <Typography className={classes.materialIconText}>
                  TrendingUp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TripOrigin />
                <Typography className={classes.materialIconText}>
                  TripOrigin
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Tune />
                <Typography className={classes.materialIconText}>
                  Tune
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TurnedIn />
                <Typography className={classes.materialIconText}>
                  TurnedIn
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.TurnedInNot />
                <Typography className={classes.materialIconText}>
                  TurnedInNot
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Tv />
                <Typography className={classes.materialIconText}>Tv</Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Unarchive />
                <Typography className={classes.materialIconText}>
                  Unarchive
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Undo />
                <Typography className={classes.materialIconText}>
                  Undo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.UnfoldLess />
                <Typography className={classes.materialIconText}>
                  UnfoldLess
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.UnfoldMore />
                <Typography className={classes.materialIconText}>
                  UnfoldMore
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Unsubscribe />
                <Typography className={classes.materialIconText}>
                  Unsubscribe
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Update />
                <Typography className={classes.materialIconText}>
                  Update
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Usb />
                <Typography className={classes.materialIconText}>
                  Usb
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VerifiedUser />
                <Typography className={classes.materialIconText}>
                  VerifiedUser
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VerticalAlignBottom />
                <Typography className={classes.materialIconText}>
                  VerticalAlignBottom
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VerticalAlignCenter />
                <Typography className={classes.materialIconText}>
                  VerticalAlignCenter
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VerticalAlignTop />
                <Typography className={classes.materialIconText}>
                  VerticalAlignTop
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VerticalSplit />
                <Typography className={classes.materialIconText}>
                  VerticalSplit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Vibration />
                <Typography className={classes.materialIconText}>
                  Vibration
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VideoCall />
                <Typography className={classes.materialIconText}>
                  VideoCall
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Videocam />
                <Typography className={classes.materialIconText}>
                  Videocam
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VideogameAsset />
                <Typography className={classes.materialIconText}>
                  VideogameAsset
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VideoLabel />
                <Typography className={classes.materialIconText}>
                  VideoLabel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VideoLibrary />
                <Typography className={classes.materialIconText}>
                  VideoLibrary
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewAgenda />
                <Typography className={classes.materialIconText}>
                  ViewAgenda
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewArray />
                <Typography className={classes.materialIconText}>
                  ViewArray
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewCarousel />
                <Typography className={classes.materialIconText}>
                  ViewCarousel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewColumn />
                <Typography className={classes.materialIconText}>
                  ViewColumn
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewComfy />
                <Typography className={classes.materialIconText}>
                  ViewComfy
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewCompact />
                <Typography className={classes.materialIconText}>
                  ViewCompact
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewDay />
                <Typography className={classes.materialIconText}>
                  ViewDay
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewHeadline />
                <Typography className={classes.materialIconText}>
                  ViewHeadline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewList />
                <Typography className={classes.materialIconText}>
                  ViewList
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewModule />
                <Typography className={classes.materialIconText}>
                  ViewModule
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewQuilt />
                <Typography className={classes.materialIconText}>
                  ViewQuilt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewStream />
                <Typography className={classes.materialIconText}>
                  ViewStream
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ViewWeek />
                <Typography className={classes.materialIconText}>
                  ViewWeek
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Vignette />
                <Typography className={classes.materialIconText}>
                  Vignette
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Visibility />
                <Typography className={classes.materialIconText}>
                  Visibility
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VoiceChat />
                <Typography className={classes.materialIconText}>
                  VoiceChat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Voicemail />
                <Typography className={classes.materialIconText}>
                  Voicemail
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VolumeDown />
                <Typography className={classes.materialIconText}>
                  VolumeDown
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VolumeMute />
                <Typography className={classes.materialIconText}>
                  VolumeMute
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VolumeUp />
                <Typography className={classes.materialIconText}>
                  VolumeUp
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VpnKey />
                <Typography className={classes.materialIconText}>
                  VpnKey
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.VpnLock />
                <Typography className={classes.materialIconText}>
                  VpnLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Wallpaper />
                <Typography className={classes.materialIconText}>
                  Wallpaper
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Warning />
                <Typography className={classes.materialIconText}>
                  Warning
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Watch />
                <Typography className={classes.materialIconText}>
                  Watch
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WatchLater />
                <Typography className={classes.materialIconText}>
                  WatchLater
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Waves />
                <Typography className={classes.materialIconText}>
                  Waves
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WbAuto />
                <Typography className={classes.materialIconText}>
                  WbAuto
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WbCloudy />
                <Typography className={classes.materialIconText}>
                  WbCloudy
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WbIncandescent />
                <Typography className={classes.materialIconText}>
                  WbIncandescent
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WbIridescent />
                <Typography className={classes.materialIconText}>
                  WbIridescent
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WbSunny />
                <Typography className={classes.materialIconText}>
                  WbSunny
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Wc />
                <Typography className={classes.materialIconText}>Wc</Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Web />
                <Typography className={classes.materialIconText}>
                  Web
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WebAsset />
                <Typography className={classes.materialIconText}>
                  WebAsset
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Weekend />
                <Typography className={classes.materialIconText}>
                  Weekend
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Whatshot />
                <Typography className={classes.materialIconText}>
                  Whatshot
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WhereToVote />
                <Typography className={classes.materialIconText}>
                  WhereToVote
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Widgets />
                <Typography className={classes.materialIconText}>
                  Widgets
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Wifi />
                <Typography className={classes.materialIconText}>
                  Wifi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WifiLock />
                <Typography className={classes.materialIconText}>
                  WifiLock
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WifiTethering />
                <Typography className={classes.materialIconText}>
                  WifiTethering
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.Work />
                <Typography className={classes.materialIconText}>
                  Work
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WorkOutline />
                <Typography className={classes.materialIconText}>
                  WorkOutline
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.WrapText />
                <Typography className={classes.materialIconText}>
                  WrapText
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.YoutubeSearchedFor />
                <Typography className={classes.materialIconText}>
                  YoutubeSearchedFor
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ZoomIn />
                <Typography className={classes.materialIconText}>
                  ZoomIn
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ZoomOut />
                <Typography className={classes.materialIconText}>
                  ZoomOut
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <Icons.ZoomOutMap />
                <Typography className={classes.materialIconText}>
                  ZoomOutMap
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        }

        {activeTabId === 1 &&
        <Widget>
            <Grid container spacing={2} className={classes.iconList}>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-bed" />
                <Typography className={classes.materialIconText}>
                  Bed
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-bank" />
                <Typography className={classes.materialIconText}>
                  Bank
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-behance" />
                <Typography className={classes.materialIconText}>
                  Behance
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-behance-square" />
                <Typography className={classes.materialIconText}>
                  Behance-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-bomb" />
                <Typography className={classes.materialIconText}>
                  Bomb
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-building" />
                <Typography className={classes.materialIconText}>
                  Building
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-cab" />
                <Typography className={classes.materialIconText}>
                  Cab
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-car" />
                <Typography className={classes.materialIconText}>
                  Car
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-child" />
                <Typography className={classes.materialIconText}>
                  Child
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-circle-o-notch" />
                <Typography className={classes.materialIconText}>
                  Circle-o-notch
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-circle-thin" />
                <Typography className={classes.materialIconText}>
                  Circle-thin
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-codepen" />
                <Typography className={classes.materialIconText}>
                  Codepen
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-cube" />
                <Typography className={classes.materialIconText}>
                  Cube
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-cubes" />
                <Typography className={classes.materialIconText}>
                  Cubes
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-database" />
                <Typography className={classes.materialIconText}>
                  Database
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-delicious" />
                <Typography className={classes.materialIconText}>
                  Delicious
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-deviantart" />
                <Typography className={classes.materialIconText}>
                  Deviantart
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-digg" />
                <Typography className={classes.materialIconText}>
                  Digg
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-drupal" />
                <Typography className={classes.materialIconText}>
                  Drupal
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-empire" />
                <Typography className={classes.materialIconText}>
                  Empire
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-envelope-square" />
                <Typography className={classes.materialIconText}>
                  Envelope-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-fax" />
                <Typography className={classes.materialIconText}>
                  Fax
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-archive-o" />
                <Typography className={classes.materialIconText}>
                  File-archive-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-audio-o" />
                <Typography className={classes.materialIconText}>
                  File-audio-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-code-o" />
                <Typography className={classes.materialIconText}>
                  Аile-code-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-excel-o" />
                <Typography className={classes.materialIconText}>
                  Аile-excel-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-image-o" />
                <Typography className={classes.materialIconText}>
                  File-image-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-movie-o" />
                <Typography className={classes.materialIconText}>
                  Аile-movie-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-pdf-o" />
                <Typography className={classes.materialIconText}>
                  File-pdf-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-photo-o" />
                <Typography className={classes.materialIconText}>
                  File-photo-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-picture-o" />
                <Typography className={classes.materialIconText}>
                  File-picture-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-powerpoint-o" />
                <Typography className={classes.materialIconText}>
                  File-powerpoint-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-sound-o" />
                <Typography className={classes.materialIconText}>
                  File-sound-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-video-o" />
                <Typography className={classes.materialIconText}>
                  File-video-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-word-o" />
                <Typography className={classes.materialIconText}>
                  File-word-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-file-zip-o" />
                <Typography className={classes.materialIconText}>
                  File-zip-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-ge" />
                <Typography className={classes.materialIconText}>Ge</Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-git" />
                <Typography className={classes.materialIconText}>
                  Git
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-git-square" />
                <Typography className={classes.materialIconText}>
                  Git-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-google" />
                <Typography className={classes.materialIconText}>
                  Google
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-graduation-cap" />
                <Typography className={classes.materialIconText}>
                  Graduation-cap
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-hacker-news" />
                <Typography className={classes.materialIconText}>
                  Hacker-news
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-header" />
                <Typography className={classes.materialIconText}>
                  Header
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-history" />
                <Typography className={classes.materialIconText}>
                  History
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-institution" />
                <Typography className={classes.materialIconText}>
                  Institution
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-joomla" />
                <Typography className={classes.materialIconText}>
                  Joomla
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-jsfiddle" />
                <Typography className={classes.materialIconText}>
                  Jsfiddle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-language" />
                <Typography className={classes.materialIconText}>
                  Language
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-life-bouy" />
                <Typography className={classes.materialIconText}>
                  Life-bouy
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-life-ring" />
                <Typography className={classes.materialIconText}>
                  Life-ring
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-life-saver" />
                <Typography className={classes.materialIconText}>
                  Life-saver
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-mortar-board" />
                <Typography className={classes.materialIconText}>
                  Mortar-board
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-openid" />
                <Typography className={classes.materialIconText}>
                  Openid
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-paper-plane" />
                <Typography className={classes.materialIconText}>
                  Paper-plane
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-paper-plane-o" />
                <Typography className={classes.materialIconText}>
                  paper-plane-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-paragraph" />
                <Typography className={classes.materialIconText}>
                  Paragraph
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-paw" />
                <Typography className={classes.materialIconText}>
                  Paw
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-pied-piper" />
                <Typography className={classes.materialIconText}>
                  Pied-piper
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-pied-piper-alt" />
                <Typography className={classes.materialIconText}>
                  Pied-piper-alt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-pied-piper-square" />
                <Typography className={classes.materialIconText}>
                  Pied-piper-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-qq" />
                <Typography className={classes.materialIconText}>Qq</Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-ra" />
                <Typography className={classes.materialIconText}>Ra</Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-rebel" />
                <Typography className={classes.materialIconText}>
                  Rebel
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-recycle" />
                <Typography className={classes.materialIconText}>
                  Recycle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-reddit" />
                <Typography className={classes.materialIconText}>
                  Reddit
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-reddit-square" />
                <Typography className={classes.materialIconText}>
                  Reddit-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-send" />
                <Typography className={classes.materialIconText}>
                  Send
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-send-o" />
                <Typography className={classes.materialIconText}>
                  Send-o
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-share-alt" />
                <Typography className={classes.materialIconText}>
                  Share-alt
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-share-alt-square" />
                <Typography className={classes.materialIconText}>
                  Share-alt-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-slack" />
                <Typography className={classes.materialIconText}>
                  Slack
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-sliders" />
                <Typography className={classes.materialIconText}>
                  Sliders
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-soundcloud" />
                <Typography className={classes.materialIconText}>
                  Soundcloud
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-space-shuttle" />
                <Typography className={classes.materialIconText}>
                  Space-shuttle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-spoon" />
                <Typography className={classes.materialIconText}>
                  Spoon
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-spotify" />
                <Typography className={classes.materialIconText}>
                  Spotify
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-steam" />
                <Typography className={classes.materialIconText}>
                  Steam
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-steam-square" />
                <Typography className={classes.materialIconText}>
                  Steam-square
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-stumbleupon" />
                <Typography className={classes.materialIconText}>
                  Stumbleupon
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-stumbleupon-circle" />
                <Typography className={classes.materialIconText}>
                  Stumbleupon-circle
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-support" />
                <Typography className={classes.materialIconText}>
                  Support
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-taxi" />
                <Typography className={classes.materialIconText}>
                  Taxi
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-tencent-weibo" />
                <Typography className={classes.materialIconText}>
                  Tencent-weibo
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-tree" />
                <Typography className={classes.materialIconText}>
                  Tree
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-university" />
                <Typography className={classes.materialIconText}>
                  University
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-vine" />
                <Typography className={classes.materialIconText}>
                  Vine
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-wechat" />
                <Typography className={classes.materialIconText}>
                  Wechat
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-weixin" />
                <Typography className={classes.materialIconText}>
                  Weixin
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-wordpress" />
                <Typography className={classes.materialIconText}>
                  Wordpress
                </Typography>
              </Grid>
              <Grid
              className={classes.materailIcon} size={{ xs:




                12, sm: 4, md: 3, lg: 2 }}>
              
                <i className="fa fa-yahoo" />
                <Typography className={classes.materialIconText}>
                  Yahoo
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        }
      </Paper>
    </>);

}