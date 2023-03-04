import axios from "axios";
import { origin } from "../../constants/env_constants";

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_LOADING = 'SIGN_UP_LOADING';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const registerUser = (requestBody) => function (dispatch) {
    const API_URL = `${origin}/register`;

    const axiosConfig = {
        url: API_URL,
        method: 'POST',
        data: requestBody,
        withCredentials: true
    };

    dispatch({type: SIGN_UP_LOADING});

    axios({ ...axiosConfig, })
        .then((response) => {
            console.log("Response => ", response);
            if (response.status === 200 && response?.data?.message === "Registration successful") {
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: response?.data?.message
                })
            } else {
                dispatch({
                    type: SIGN_UP_ERROR,
                    payload: response?.data?.message
                })
            }
        })
        .catch((error) => {
            console.log("Error => ", error)
            dispatch({
                type: SIGN_UP_ERROR,
                payload: error?.response?.data?.message
            })
        })
};