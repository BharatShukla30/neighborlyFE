import { createSlice } from "@reduxjs/toolkit";
import { createGroup , fetchGroupDetails, fetchGroupMessages , updateGroupDetails , nearestGroup ,
  addUser , removeUser , makeGroupPermanent , fetchNearbyUsers 
} from "../actions/groupAction";

const groupSlice = createSlice({
  name :"groups",
  initialState: {
    loading: false,
    groups: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(createGroup.pending, (state) => {
      state.loading = true;
      state.groups = [];
      state.error = null;
    }
    )
    .addCase(createGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.groups = action.payload;
      state.error = null;
    })
    .addCase(createGroup.rejected, (state, action) => {
      state.loading = false;
      state.groups = null;
      state.error = action.payload;
    })


  }
})

export default groupSlice.reducer;