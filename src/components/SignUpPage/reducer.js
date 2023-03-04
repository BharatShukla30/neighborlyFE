import { SIGN_UP_ERROR, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "./actions";

let initialState = {};

export const signUpReducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                error: false,
                payload: payload
            };

        case SIGN_UP_LOADING:
            return {
                ...state,
                success: false,
                loading: true,
                error: false,
                payload: null
            };

        case SIGN_UP_ERROR:
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