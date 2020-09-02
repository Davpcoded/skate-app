import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

export default MarkerClusterer = () => {
  return (
    <MarkerClusterer options={options}>
      {(clusterer) =>
        markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            clusterer={clusterer}
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
        ))
      }
    </MarkerClusterer>
  );
};
