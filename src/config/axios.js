import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://neighborly.in",
    withCredentials: true
});


export default axiosInstance;
