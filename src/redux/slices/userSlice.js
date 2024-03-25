import { createSlice } from "@reduxjs/toolkit";
import { getUserGroups } from "../actions/userAction";


const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUserGroups.pending, (state) => {
            state.loading = true;
            state.users = [];
            state.error = null;
        })
        .addCase(getUserGroups.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
        })
        .addCase(getUserGroups.rejected, (state, action) => {
            state.loading = false;
            state.users = null;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;