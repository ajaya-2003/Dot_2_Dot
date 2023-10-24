import React, { useRef, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MapConponent() {
  const mapRef = useRef();
  const center = {
    lat:13.003679778717466,
    lng:77.47894394232888
  }
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
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
