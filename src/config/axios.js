import axios from "axios";

const axiosInstance = axios.create({
    //Uncomment the local host for local testing purposes

    baseURL: "http://localhost:5000",
    // baseURL: "https://neighborly.in",
    withCredentials: true
});


export default axiosInstance;
