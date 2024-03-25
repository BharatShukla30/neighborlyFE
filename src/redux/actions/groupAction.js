import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";


// router.route("/remove-user").post(isAuthenticated, removeUser);
// router.route("/make-group-permanent").put(isAuthenticated, makeGroupPermanent);
// router.route("/fetch-nearby-users").get(isAuthenticated, nearbyUsers);
// router.route("/add-user").post(isAuthenticated, addUser);
// router.route("/nearest-group").get(isAuthenticated, nearestGroup);
// router.route("/create").post(isAuthenticated,createGroup);
// router.route("/fetch-group-messages/:groupId").get(isAuthenticated, fetchLastMessages);
// router.route("/fetch-group-details/:groupId").get(isAuthenticated, fetchGroupDetails);
// router.route("/update-group-details").put(isAuthenticated, updateGroupDetails);


export const createGroup = createAsyncThunk(
    "group/create",
    async (groupDetails, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.post("/group/create", groupDetails);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchGroupDetails = createAsyncThunk(
    "group/fetch-group-details",
    async (groupId, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.get(`/group/fetch-group-details/${groupId}`);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchGroupMessages = createAsyncThunk( 
  "group/fetch-group-messages",
  async (groupId, {rejectWithValue}) => {
    try{
      const request = await axiosInstance.get(`/group/fetch-group-messages/${groupId}?page=1&limit=5`);
      const response = await request.data;
      return response;
    }
    catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
)


export const updateGroupDetails = createAsyncThunk(
    "group/update-group-details",
    async (groupDetails, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.put("/group/update-group-details", groupDetails);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const nearestGroup = createAsyncThunk(
    "group/nearest-group",
    async (_, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.get("/group/nearest-group");
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)


export const addUser = createAsyncThunk(
    "group/add-user",
    async (userDetails, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.post("/group/add-user", userDetails);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)


export const removeUser = createAsyncThunk(
    "group/remove-user",
    async (userDetails, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.post("/group/remove-user", userDetails);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const makeGroupPermanent = createAsyncThunk(
    "group/make-group-permanent",
    async (groupId, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.put("/group/make-group-permanent", groupId);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchNearbyUsers = createAsyncThunk(
    "group/fetch-nearby-users",
    async (_, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.get("/group/fetch-nearby-users");
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
) 


