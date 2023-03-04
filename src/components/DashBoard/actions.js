import axios from "axios";
import { origin } from "../../constants/env_constants";

export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_LOADING = 'USER_DETAILS_LOADING'
export const USER_DETAILS_ERROR = 'USER_DETAILS_ERROR'
export const CLEAR_ALL_USER = 'CLEAR_ALL_USER'

export const NEAREST_USER_SUCCESS = 'NEAREST_USER_SUCCESS'
export const NEAREST_USER_LOADING = 'NEAREST_USER_LOADING'
export const NEAREST_USER_ERROR = 'NEAREST_USER_ERROR'

export const getUserDetails = (authToken) => function (dispatch) {
    authToken = authToken || sessionStorage.getItem('auth-token');

    dispatch({ type: USER_DETAILS_LOADING });

    if (authToken) {
        const API_URL = `${origin}/get_user_details`;

        const axiosConfig = {
            url: API_URL,
            method: 'GET',
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        };

        axios(axiosConfig)
            .then((response) => {
                console.log("Response => ", response);
                if (response.status === 200 && response?.data?.data) {
                    dispatch({
                        type: USER_DETAILS_SUCCESS,
                        payload: response?.data?.data
                    })
                } else {
                    dispatch({
                        type: USER_DETAILS_ERROR,
                        payload: response?.data?.data
                    })
                }
            })
            .catch((error) => {
                console.log("Error => ", error)
                dispatch({
                    type: USER_DETAILS_ERROR,
                    payload: error?.response?.data?.message
                })
            })

    } else {
        dispatch({ type: USER_DETAILS_ERROR, payload: 'Invalid token' });
    }
}

export const getNearestDonors = (authToken, distance) => function(dispatch) {
    authToken = authToken || sessionStorage.getItem('auth-token');

    dispatch({ type: NEAREST_USER_LOADING });
    if (authToken) {
        const API_URL = `${origin}/nearest_users/${distance}`;

        const axiosConfig = {
            url: API_URL,
            method: 'GET',
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        };

        axios(axiosConfig)
            .then((response) => {
                console.log("Response => ", response);
                if (response.status === 200 && response?.data?.data) {
                    dispatch({
                        type: NEAREST_USER_SUCCESS,
                        payload: response?.data?.data
                    })
                } else {
                    dispatch({
                        type: NEAREST_USER_ERROR,
                        payload: response?.data?.data
                    })
                }
            })
            .catch((error) => {
                console.log("Error => ", error)
                dispatch({
                    type: NEAREST_USER_ERROR,
                    payload: error?.response?.data?.message
                })
            })
    } else {

    }
}