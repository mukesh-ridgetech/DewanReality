import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Example addresses with latitude and longitude
const addresses = [
    { id: 1, name: "Great India Place Mall", lat: 28.5672, lng: 77.3260 },
    { id: 2, name: "Noida City Center Metro Station", lat: 28.5744, lng: 77.3544 },
    { id: 3, name: "Amity University Noida", lat: 28.5469, lng: 77.3347 },
];

const googleMapApiKey = import.meta.env.google_map;

const MapWithMultipleMarkers = () => {
  // Default center of the map
  const center = { lat: 28.5672, lng: 77.3260 };

  return (
    <LoadScript googleMapsApiKey={googleMapApiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={12} // Adjust zoom to fit all markers
      >
        {/* Render a marker for each address */}
        {addresses.map((address) => (
          <Marker
            key={address.id}
            position={{ lat: address.lat, lng: address.lng }}
            title={address.name} // Tooltip on hover
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithMultipleMarkers;
