// utils/setAuthToken.js
import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // Set the Authorization header with the token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // Remove the Authorization header when no token is provided
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
