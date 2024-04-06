import { createSlice } from "@reduxjs/toolkit";
import { getUserGroups, nearestGroup } from "../actions/groupActions";

const groupSlice = createSlice({
  name :"groups",
  initialState: {
    grps: [],
    loading: false,
    nearbyGrps: [],
    error: null
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
    }
    )
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



//---------------------------------createGroup---------------------------------
   

    
  }
})

export default groupSlice.reducer;