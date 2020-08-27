import React from "react";
/* import ReactDOM from "react-dom"; */
import Button from "@material-ui/core/Button";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function ShareSpot() {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 47.6061, lng: -122.3321 }}
      >
        <Marker position={{ lat: 47.6061, lng: -122.3321 }} />
      </GoogleMap>
    ))
  );
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8DUc5piT5BTqIsONJKHMOyT9-LLtAVwg&callback=initMap"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default ShareSpot;
