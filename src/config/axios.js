import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://neighborly.in/api",
    withCredentials: true
});


export default axiosInstance;
