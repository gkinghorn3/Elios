import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import dotenv from "dotenv";
import "./find-us.scss";

// 'AIzaSyAkJTESuAIN3p16GxMlglzIpLl6BYUWLgY'
const API_TOKEN = process.env.MAPS_API_TOKEN;

const FindUs = () => {
    const API_TOKEN = process.env.MAPS_API_TOKEN;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: API_TOKEN,
    });

    const center = useMemo(
        () => ({ lat: 55.95341924477354, lng: -3.197819931188319 }),
        []
    );

    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    const handleInfoWindowClose = () => {
        setSelectedMarker(null);
    };


    return (
        <section className="find-us-container">
            <div className="section-titles">
                <h3>Find Us</h3>
                <h2>- opening times -</h2>
            </div>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={18}
                >
                    
                    <Marker position={center} onClick={() => handleMarkerClick(center)} />
                    {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker}
                            onCloseClick={handleInfoWindowClose}
                        >
                            <div>
                                <h3>Your Info Window Title</h3>
                                <p>Your Info Window Content</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </section>
    );
};

export default FindUs;