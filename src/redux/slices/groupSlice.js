import { createSlice } from "@reduxjs/toolkit";
import {
  checkGroupNameUniqueness,
  fetchNearbyUsers,
  getUserGroups,
  nearestGroup,
} from "../actions/groupActions";

const groupSlice = createSlice({
  name: "groups",
  initialState: {
    grps: [],
    loading: false,
    nearbyGrps: [],
    uniqueGroup: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      //---------------------------------getUserGroups---------------------------------
      .addCase(getUserGroups.pending, (state) => {
        state.loading = true;
        state.grps = [];
        state.error = null;
      })
      .addCase(getUserGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.grps = action.payload.groups;
        state.error = null;
      })
      .addCase(getUserGroups.rejected, (state, action) => {
        state.loading = false;
        state.grps = null;
        state.error = action.payload;
      })

      //---------------------------------nearestGroup---------------------------------
      .addCase(nearestGroup.pending, (state) => {
        state.loading = true;
        state.nearbyGrps = [];
        state.error = null;
      })
      .addCase(nearestGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.nearbyGrps = action.payload;
        state.error = null;
      })
      .addCase(nearestGroup.rejected, (state, action) => {
        state.loading = false;
        state.nearbyGrps = null;
        state.error = action.payload;
      })

      //---------------------------------is-group-unique---------------------------------
      .addCase(checkGroupNameUniqueness.pending, (state) => {
        state.uniqueGroup.loading = true;
        state.error = null;
      })
      .addCase(checkGroupNameUniqueness.fulfilled, (state, action) => {
        state.uniqueGroup.loading = false;
        state.uniqueGroup = {
          ...state.uniqueGroup,
          ...action.payload,
          error: false
        };
        state.error = null;
      })
      .addCase(checkGroupNameUniqueness.rejected, (state, action) => {
        state.uniqueGroup.loading = false;
        state.uniqueGroup = {
          ...state.uniqueGroup,
          ...action.payload,
          success: false,
          error: true,
        };
      })

      //---------------------------------Fetch Nearby Users---------------------------------
      .addCase(fetchNearbyUsers.pending, (state) => {
        state.loading = true;
        state.nearbyUsers = [];
        state.error = null;
      })
      .addCase(fetchNearbyUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.nearbyUsers = action.payload.list;
        state.error = null;
      })
      .addCase(fetchNearbyUsers.rejected, (state, action) => {
        state.loading = false;
        state.nearbyUsers = null;
        state.error = action.payload;
      });

    //---------------------------------createGroup---------------------------------
  },
});








export default groupSlice.reducer;
