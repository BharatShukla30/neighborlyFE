import { createSlice } from "@reduxjs/toolkit";
import { authUserWithPhoneOtp, fetchCitiesList, googleAuth, loadUser, loginUser, logoutUser, registerUser, sendOtpToPhone, updateUserLocation } from "../actions/authActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
        isAuthenticated: false,
        error: null,
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
        // Login User
        .addCase(loginUser.pending, (state, action) => {
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
        .addCase(registerUser.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })

        //Update User Location
        .addCase(updateUserLocation.pending, (state, action) => {
            console.log(action)
            state.loading = true;
        })
        .addCase(updateUserLocation.fulfilled, (state, action) => {
            console.log(action)
            state.loading = false;
            state.user = {...state.user, ...action.payload.locationDetails};
            state.isAuthenticated = true;
            state.error = null;
        })

        //Load User
        .addCase(loadUser.pending, (state, action) => {
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

        //Fetch Cities List
        .addCase(fetchCitiesList.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCitiesList.fulfilled, (state, action) => {
            state.loading = false;
            state.availableCities = action.payload.cities
            state.error = null;
        })
        .addCase(fetchCitiesList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //Logout User
        .addCase(logoutUser.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })



        //otp sending
        .addCase(sendOtpToPhone.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(sendOtpToPhone.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(sendOtpToPhone.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })

        //User Authentication With OTP
        .addCase(authUserWithPhoneOtp.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(authUserWithPhoneOtp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(authUserWithPhoneOtp.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        
        //User Authentication With OTP
        .addCase(googleAuth.pending, (state, action) => {
            state.loading = true;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(googleAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(googleAuth.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })

    } 
});

export default authSlice.reducer;
