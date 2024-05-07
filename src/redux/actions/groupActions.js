import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

export const getUserGroups = createAsyncThunk(
  "user/get-user-groups",
  async (_, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.get("/user/get-user-groups");
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createGroup = createAsyncThunk(
  "group/create",
  async (groupDetails, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.post("/group/create", groupDetails);
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchGroupDetails = createAsyncThunk(
  "group/fetch-group-details",
  async (groupId, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.get(
        `/group/fetch-group-details/${groupId}`
      );
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchGroupMessages = createAsyncThunk(
  "group/fetch-group-messages",
  async (groupId, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.get(
        `/group/fetch-group-messages/${groupId}?page=1&limit=50`
      );
      const response = await request.data;
      // console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateGroupDetails = createAsyncThunk(
  "group/update-group-details",
  async (groupDetails, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.put(
        "/group/update-group-details",
        groupDetails
      );
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const nearestGroup = createAsyncThunk(
  "group/nearest-group",
  async (coordinates, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.get(
        `/group/nearest-group?latitude=${coordinates[0]}&longitude=${coordinates[1]}`
      );
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addUser = createAsyncThunk(
  "group/add-user",
  async (userDetails, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.post("/group/add-user", userDetails);
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeUser = createAsyncThunk(
  "group/remove-user",
  async (userDetails, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.post(
        "/group/remove-user",
        userDetails
      );
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const makeGroupPermanent = createAsyncThunk(
  "group/make-group-permanent",
  async (groupId, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.put("/group/make-group-permanent", {
        groupId: groupId,
      });
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNearbyUsers = createAsyncThunk(
  "group/fetch-nearby-users",
  async (body, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.get(
        `/group/fetch-nearby-users?latitude=${body?.latitude}&longitude=${body?.longitude}&karma_need=${body?.karma}`
      );
      const response = await request.data;
      console.log("fetch ", response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const checkGroupNameUniqueness = createAsyncThunk(
  "group/is-group-unique",
  async (reqBody, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.get(
        `/group/is-group-unique?name=${reqBody.name}`
      );
      const response = await request.data;
      response.groupName = reqBody.name;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const leaveGroup = createAsyncThunk(
  "group/remove-user",
  async (reqBody, { rejectWithValue }) => {
    try {
      const request = await axiosInstance.post("group/remove-user", reqBody);
      const response = await request.data;
      response.groupName = reqBody.name;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
