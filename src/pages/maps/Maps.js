import React from "react";

// styles
import useStyles from "./styles";

// const BasicMap = withScriptjs(
//     withGoogleMap(() => (
//         <GoogleMap
//             defaultZoom={12}
//             defaultCenter={{
//                 lat: parseFloat(-37.813179),
//                 lng: parseFloat(144.950259),
//             }}
//         >
//             <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
//         </GoogleMap>
//     )),
// );

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>

    </div>
  );
}
