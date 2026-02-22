import { makeStyles } from "styles/mui";

export default makeStyles(theme => ({
  mapContainer: {
    height: "calc(100vh - 170px)",
    minHeight: 480,
    borderRadius: 8,
    overflow: "hidden",
  },
  vectorContainer: {
    height: "calc(100vh - 170px)",
    minHeight: 480,
    borderRadius: 8,
    overflow: "hidden",
  },
  leafletMap: {
    height: "100%",
    width: "100%",
    background: theme.palette.background.default,
  },
}));
