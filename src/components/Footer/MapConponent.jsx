import React, { useRef, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MapConponent() {
  const mapRef = useRef();
  const center = {
    lat:12.9220,
    lng:77.5671
  }
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWcSL56Edij5MTdS1oQuK7RxgTHZWLyiE",
  });
  const mapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "error";
  if (!isLoaded) return "maps";
  return (
    <GoogleMap
      mapContainerStyle={{
        height: "250px",
      }}
      center={center}
      zoom={15}
      onLoad={mapLoad}
    >
        <Marker position={center} />
    </GoogleMap>
  );
}

export default MapConponent;
