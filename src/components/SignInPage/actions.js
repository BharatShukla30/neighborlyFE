import axios from "axios";
import { origin } from "../../constants/env_constants";

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_LOADING = 'SIGN_IN_LOADING';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const CLEAR_ALL_INFO = 'CLEAR_ALL_INFO';

export const loginWithCredentials = (requestBody, navigate) => function (dispatch) {
    const API_URL = `${origin}/login`;

    const axiosConfig = {
        url: API_URL,
        method: 'POST',
        data: requestBody,
        withCredentials: true
    };

    dispatch({ type: SIGN_IN_LOADING });

    axios({ ...axiosConfig, })
        .then((response) => {
            console.log("Response => ", response);
            if (response.status === 200 && response?.data?.data) {
                sessionStorage.removeItem('auth-token');
                sessionStorage.setItem('auth-token', response?.data?.data)
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: response?.data?.data
                })
                navigate('/dashboard')
            } else {
                dispatch({
                    type: SIGN_IN_ERROR,
                    payload: response?.data?.message
                })
            }
        })
        .catch((error) => {
            console.log("Error => ", error)
            dispatch({
                type: SIGN_IN_ERROR,
                payload: error?.response?.data?.message
            })
        })
};