import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Button from "@material-ui/core/Button";
import styles from "../components/MapStyles/styles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "100vw",
};
const options = {
  styles: styles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 47.6061,
  lng: -122.3321,
};

export default function ShareSpot() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC8DUc5piT5BTqIsONJKHMOyT9-LLtAVwg",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      //this brings old state as a value and spreads to a new state
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `https://visualpharm.com/assets/968/Skateboard-595b40b65ba036ed117d337e.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      </GoogleMap>
      <Locate panTo={panTo} />
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <Button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </Button>
  );
}
