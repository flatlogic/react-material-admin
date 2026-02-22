import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useTheme } from "@mui/material/styles";
import { feature } from "topojson-client";
import useStyles from "./styles";
import worldMap from "./map.json";

function VectorMap() {
  const theme = useTheme();
  const classes = useStyles();
  const worldGeoJson = React.useMemo(() => {
    if (!worldMap?.objects?.world) {
      return null;
    }

    return feature(worldMap, worldMap.objects.world);
  }, []);

  const countryStyle = React.useCallback(
    () => ({
      fillColor: theme.palette.mode === "dark" ? "#2D3B58" : "#C5D3F6",
      weight: 1,
      opacity: 1,
      color: theme.palette.mode === "dark" ? "#4C5D82" : "#8EA4D2",
      fillOpacity: 0.75,
    }),
    [theme.palette.mode],
  );

  const onEachCountry = React.useCallback((countryFeature, layer) => {
    const countryName = countryFeature?.properties?.name;
    if (countryName) {
      layer.bindTooltip(countryName, { sticky: true });
    }
  }, []);

  return (
    <div className={classes.vectorContainer}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        scrollWheelZoom
        className={classes.leafletMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {worldGeoJson && (
          <GeoJSON data={worldGeoJson} style={countryStyle} onEachFeature={onEachCountry} />
        )}
      </MapContainer>
    </div>
  );
}

export default VectorMap;
