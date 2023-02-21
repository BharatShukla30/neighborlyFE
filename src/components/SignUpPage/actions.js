import axios from "axios";
import { origin } from "../../constants/env_constants";

export const registerUser = (requestBody) => {
    const API_URL = `${origin}/register`;

    const axiosConfig = {
        url: API_URL,
        method: 'POST',
        data: requestBody,
        withCredentials: true
    };

    axios({...axiosConfig,})
        .then((response) => {
            console.log("Response => ", response);
        })
        .catch((error) => {
            console.log("Error => ", error)
        })
};