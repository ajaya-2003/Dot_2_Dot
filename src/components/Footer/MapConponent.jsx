import React, { useRef, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MapConponent() {
  const mapRef = useRef();
  const center = {
    // 13.003527644949093, 77.47896633541544
    lat:13.003527644949093,
    lng:77.47896633541544
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
        height: "300px",
      }}
      center={center}
      zoom={20}
      onLoad={mapLoad}
    >
        <Marker position={center} />
    </GoogleMap>
  );
}

export default MapConponent;
