import { createSlice } from "@reduxjs/toolkit";
import { fetchGroupDetails } from "../actions/groupActions";

const groupDetailsSlice = createSlice({
  name: "groupDetails",
  initialState: {
    groupDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Get Group Details Reducers
      .addCase(fetchGroupDetails.pending, (state, action) => {
        state.groupDetails = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGroupDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.groupDetails = action.payload;
        state.error = null;
      })
      .addCase(fetchGroupDetails.rejected, (state, action) => {
        state.loading = false;
        state.groupDetails = null;
        state.error = action.payload;
      });
  },
});

export default groupDetailsSlice.reducer;
