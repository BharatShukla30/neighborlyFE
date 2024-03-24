import { createSlice } from "@reduxjs/toolkit";
import { loadUser, loginUser, logoutUser, registerUser } from "../actions/authActions";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: true,
        user: null,
        isAuthenticated: false,
        error: null,
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })

        // Register User 
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })

        //Load User
        .addCase(loadUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(loadUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.error = null;
        })

        //Logout User
        .addCase(logoutUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    } 
});

export default authSlice.reducer;
