import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map: React.FC = () => {
    const [markers, setMarkers] = useState<{ lat: number | undefined; lng: number | undefined; id: number }[]>([]);
    const [markerCount, setMarkerCount] = useState<number>(0);

    const handleMapClick = (e: google.maps.MapMouseEvent) => {
        const newMarker = {
            lat: e.latLng?.lat(),
            lng: e.latLng?.lng(),
            id: markerCount + 1,
        };
        setMarkers([...markers, newMarker]);
        setMarkerCount(markerCount + 1);
    };

    const handleMarkerDelete = (markerId: number) => {
        const updatedMarkers = markers.filter(marker => marker.id !== markerId);
        setMarkers(updatedMarkers);
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBvSbPw0kTkcLrbl_wWqs8Swdj1xYrFJYc"
        >
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                center={{ lat: -34.397, lng: 150.644 }}
                zoom={8}
                onClick={handleMapClick}
            >
                {/*{markers.map(marker => (*/}
                {/*    <Marker*/}
                {/*        key={marker.id}*/}
                {/*        position={{ lat: marker.lat, lng: marker.lng }}*/}
                {/*        onClick={() => handleMarkerDelete(marker.id)}*/}
                {/*    />*/}
                {/*))}*/}
            </GoogleMap>
        </LoadScript>
    );
};

export {Map};
