'use client';

import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { css } from 'ds/css';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
};

const center = {
  lat: -34.874079283169465,
  lng: -54.769312695336176,
};

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
  console.error('Google Maps API key is missing');
  throw new Error('Google Maps API key is required');
}

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div className={css({ w: 'full', h: '400px', bgColor: 'slate8', rounded: 'card' })} />;
  }

  return (
    <div className={css({ w: 'full', bgColor: 'slate8', rounded: 'card', overflow: 'hidden', position: 'relative', zIndex: 1 })}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }}
      >
      </GoogleMap>
    </div>
  );
};

export default MapComponent; 