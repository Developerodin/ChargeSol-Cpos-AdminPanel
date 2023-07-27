// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkIcon from './IconM.png'
const Maps = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 26.9124,
    lng: 75.7873,
  };
const iconUrl=MarkIcon;
const locations = [
    { lat: 26.9124, lng: 75.7873, image: iconUrl },
    { lat: 26.9855, lng: 75.8513, image: iconUrl },
    { lat: 26.9239, lng: 75.8267, image: iconUrl },
    { lat: 26.9242, lng: 75.8236, image: iconUrl },
    { lat: 26.9257, lng: 75.8237, image: iconUrl },
    { lat: 26.9530, lng: 75.8257, image: iconUrl },
    { lat: 26.9533, lng: 75.8464, image: iconUrl },
    { lat: 26.9120, lng: 75.8101, image: iconUrl },
    { lat: 26.9857, lng: 75.8462, image: iconUrl },
    { lat: 26.8901, lng: 75.7957, image: iconUrl },
  ];

  return (
    
      <LoadScript googleMapsApiKey="AIzaSyBKPYoMWGdRfZsZlYwwFC00xx0LAr8snyo">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: location.image,
              scaledSize: { width: 40, height: 40 }
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
