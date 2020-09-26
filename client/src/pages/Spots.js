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
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const options = {
  styles: styles,
  disableDefaultUI: false,
  zoomControl: true,
};
const mapContainerStyle = {
  height: "100vh",
  width: "94vw",
};
const clustererOptions = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};
const center = {
  lat: 47.6061,
  lng: -122.3321,
};
const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "50px",
    marginTop: "60px",
  },
}));

export default function Spots() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7hLiEOK8m_BNgDU1eQHjAQYhn4D-V1_M",
  });

  const [spots, setSpots] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const classes = useStyles();

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
      <Container className={classes.root}>
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
      </Container>
    </div>
  );
}
