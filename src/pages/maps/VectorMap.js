import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import useStyles from "./styles";
import map from "./map.json";

const markers = [
  {
    markerOffset: -25,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  }
];

function VectorMap() {
  const classes = useStyles();
  return (
    <div className={classes.vectorContainer}>
      <ComposableMap
        projectionConfig={{
          scale: 205,
          rotation: [-11, 0, 0]
        }}
        width={980}
        height={551}
        style={{
          width: "100%",
          height: "auto",
          overflow: "auto"
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        hover: {
                          fill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        pressed: {
                          fill: "#536DFE",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none"
                        }
                      }}
                    />
                  )
              )
            }
          </Geographies>
          <Markers>
            {markers.map((marker, i) => (
              <Marker
                key={i}
                marker={marker}
                style={{
                  default: { fill: "#536DFE" },
                  hover: { fill: "#FFFFFF" },
                  pressed: { fill: "#536DFE" }
                }}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={5}
                  style={{
                    stroke: "#536DFE",
                    strokeWidth: 3,
                    opacity: 0.9
                  }}
                />
                <text
                  textAnchor="middle"
                  y={marker.markerOffset}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fill: "#607D8B"
                  }}
                >
                  {marker.name}
                </text>
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default VectorMap;
