import axios from "axios";
import { origin } from "../../constants/env_constants";

export const loginWithCredentials = (requestBody, setGlobalState) => {
    const API_URL = `${origin}/login`;

    const axiosConfig = {
        url: API_URL,
        method: 'POST',
        data: requestBody,
        withCredentials: true
    };

    axios({...axiosConfig,})
        .then((response) => {
            console.log("Response => ", response);
            if (response.status === 200 && response?.data?.token) {
                setGlobalState((globalState) => {
                    return {
                        ...globalState,
                        signInResult: {
                            success: true,
                            error: false,
                            token: response?.data?.token
                        }
                    }
                });
            } else {
                setGlobalState((globalState) => {
                    return {
                        ...globalState,
                        signInResult: {
                            success: false,
                            error: true,
                            message: response?.data?.error
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
                    signInResult: {
                        success: false,
                        error: true,
                        message: error?.response?.data?.error
                    }
                }
            });
        })
};