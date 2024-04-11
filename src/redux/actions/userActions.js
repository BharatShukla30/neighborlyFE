import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

// router.route("/get-user-groups").get(isAuthenticated, getUserGroups);

export const getUserGroups = createAsyncThunk(
  "user/get-user-groups",
  async (_, {rejectWithValue}) => {
    try{
      const request = await axiosInstance.get("/user/get-user-groups");
      const response = await request.data;
      return response;
    }
    catch(error) {
      return rejectWithValue(error.response.data.message);
    }
  }
)
