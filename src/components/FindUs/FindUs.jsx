import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./find-us.scss";

const FindUs = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAkJTESuAIN3p16GxMlglzIpLl6BYUWLgY",
    });

    const center = useMemo(
        () => ({ lat: 55.95341924477354, lng: -3.197819931188319 }),
        []
    );

    

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
                    
                    <Marker position={center} />
                </GoogleMap>
            )}
        </section>
    );
};

export default FindUs;