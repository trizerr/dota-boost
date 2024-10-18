'use client';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const center = {
  lat: 49.83544,
  lng: 24.01442,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '685px',
      }}
      center={center}
      zoom={16}
      // onLoad={onLoad}
    />
  );
};

export default Map;
