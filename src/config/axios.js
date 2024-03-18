import axios from "axios";

const axiosInstance = axios.create({
    //Uncomment the local host for local testing purposes
    // baseURL: "http://localhost:5000",
    // baseURL: "http://52.71.254.31:5000",
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    withCredentials: true
});

export default axiosInstance;