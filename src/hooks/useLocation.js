
import {useEffect, useState} from "react";

const Status = 'empty' | 'pending' | 'success' | 'error';

const useLocation = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        status: 'empty'
    });

    useEffect(() => {
        // Helper function to update location state
        const updateLocation = (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                status: 'success'
            });
        };

        // Helper function to handle errors
        const handleError = (error) => {
            setLocation(prevState => ({
                ...prevState,
                status: 'error'
            }));
            console.error(`Error occurred: ${error.message}`);
        };

        // Request the current location
        if (navigator.geolocation) {
            setLocation(prevState => ({ ...prevState, status: 'pending' }));
            navigator.geolocation.getCurrentPosition(updateLocation, handleError);
        } else {
            setLocation(prevState => ({ ...prevState, status: 'error' }));
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return location;
};

export default useLocation

