import axios from "axios";
import { origin } from "../../constants/env_constants";

export const registerUser = (requestBody, setGlobalState) => {
    const API_URL = `${origin}/register`;

    const axiosConfig = {
        url: API_URL,
        method: 'POST',
        data: requestBody,
        withCredentials: true
    };

    axios({ ...axiosConfig, })
        .then((response) => {
            console.log("Response => ", response);
            if (response.status === 200 && response?.data?.message === "Registration successful") {
                setGlobalState((globalState) => {
                    return {
                        ...globalState,
                        registrationResult: {
                            success: true,
                            error: false,
                            message: response?.data?.message
                        }
                    }
                });
            } else {
                setGlobalState((globalState) => {
                    return {
                        ...globalState,
                        registrationResult: {
                            success: false,
                            error: true,
                            message: response?.data?.message
                        }
                    }
                });
            }
        })
        .catch((error) => {
            console.log("Error => ", error)
            setGlobalState((globalState) => {
                return {
                    ...globalState,
                    registrationResult: {
                        success: false,
                        error: true,
                        message: error?.response?.data?.message
                    }
                }
            });
        })
};