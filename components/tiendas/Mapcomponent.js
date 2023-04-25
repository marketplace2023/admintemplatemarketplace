import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDkAJA-uOdmLgb0WSrMePZp4pvA4s6fT7w",
  });

  const center = { lat: 37.7749, lng: -122.4194 };

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    )
  );
}

export default MapComponent;
