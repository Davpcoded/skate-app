import React from "react";
import API from "../utils/API";
import styles from "../components/MapStyles/styles";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

const options = {
  styles: styles,
  disableDefaultUI: false,
  zoomControl: true,
};
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const clustererOptions = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};
const center = {
  lat: 47.6061,
  lng: -122.3321,
};

export default function Spots() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [spots, setSpots] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    loadSpots();
  }, []);

  function loadSpots() {
    API.getSpots()
      .then((res) => setSpots(res.data))
      .catch((err) => console.log(err));
  }

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        Skate-app <span role="img" aria-label="skateboard"></span>
      </h1>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {console.log(spots)}
        <MarkerClusterer options={clustererOptions}>
          {(clusterer) =>
            spots.map((spot) => (
              <Marker
                key={`${spot.location[0]}-${spot.location[1]}`}
                position={{ lat: spot.location[0], lng: spot.location[1] }}
                clusterer={clusterer}
                icon={{
                  url: `https://visualpharm.com/assets/968/Skateboard-595b40b65ba036ed117d337e.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            ))
          }
        </MarkerClusterer>

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>{" "}
                Alert
              </h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
