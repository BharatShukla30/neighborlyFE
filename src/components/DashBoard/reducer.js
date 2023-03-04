import { CLEAR_ALL_USER, NEAREST_USER_ERROR, NEAREST_USER_LOADING, NEAREST_USER_SUCCESS, USER_DETAILS_ERROR, USER_DETAILS_LOADING, USER_DETAILS_SUCCESS } from "./actions";

let initialUserState = {
    self: {
        error: true,
        payload: 'Invalid token'
    }
};

export const userReducer = (state = initialUserState, action) => {
    const { payload, type } = action

    switch (type) {
        case CLEAR_ALL_USER:
            return {
                self: {
                    error: true,
                    payload: 'Invalid token'
                }
            }

        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                self: {
                    success: true,
                    loading: false,
                    error: false,
                    payload: payload
                }
            };

        case USER_DETAILS_LOADING:
            return {
                ...state,
                self: {
                    success: false,
                    loading: true,
                    error: false,
                    payload: null
                }
            };

        case USER_DETAILS_ERROR:
            return {
                ...state,
                self: {
                    success: false,
                    loading: false,
                    error: true,
                    payload: payload
                }
            };

        case NEAREST_USER_SUCCESS:
            return {
                ...state,
                nearest: {
                    success: true,
                    loading: false,
                    error: false,
                    payload: payload
                }
            };

        case NEAREST_USER_LOADING:
            return {
                ...state,
                nearest: {
                    success: false,
                    loading: true,
                    error: false,
                    payload: null
                }
            };

        case NEAREST_USER_ERROR:
            return {
                ...state,
                nearest: {
                    success: false,
                    loading: false,
                    error: true,
                    payload: payload
                }
            };

        default:
            return state;
    }
}