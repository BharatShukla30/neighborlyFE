import { CLEAR_ALL_INFO, SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "./actions";

let initialState = {};

export const signInReducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case CLEAR_ALL_INFO:
            return {};

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                error: false,
                payload: payload
            };

        case SIGN_IN_LOADING:
            return {
                ...state,
                success: false,
                loading: true,
                error: false,
                payload: null
            };

        case SIGN_IN_ERROR:
            return {
                ...state,
                success: false,
                loading: false,
                error: true,
                payload: payload
            };

        default:
            return state;
    }
}