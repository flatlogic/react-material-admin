import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

// styles
import useStyles from "./styles";

export default function Maps() {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        scrollWheelZoom
        className={classes.leafletMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={[40.7128, -74.006]} radius={8} pathOptions={{ color: "#536DFE" }}>
          <Popup>New York</Popup>
        </CircleMarker>
        <CircleMarker center={[34.0522, -118.2437]} radius={8} pathOptions={{ color: "#3CD4A0" }}>
          <Popup>Los Angeles</Popup>
        </CircleMarker>
        <CircleMarker center={[41.8781, -87.6298]} radius={8} pathOptions={{ color: "#FF5C93" }}>
          <Popup>Chicago</Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
