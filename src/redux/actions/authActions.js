import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import { formUserCoordinatesObject } from "../../utils/helpers";

axios.defaults.withCredentials = true;

export const loginUser = createAsyncThunk(
  "authentication/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log("auth action", userCredentials)
      const request = await axios.post("/authentication/login", userCredentials);//changed
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "authentication/register",
  async (userDetails, { rejectWithValue }) => {
    try {
      console.log(userDetails)
      const request = await axios.post("/authentication/register", userDetails);//changed
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserLocation = createAsyncThunk(
  "user/update-user-location",
  async (locationDetails, { rejectWithValue }) => {
    try {
      const request = await axios.put(
        "/user/update-user-location",
        locationDetails
      );
      const response = await request.data;
      response.locationDetails = formUserCoordinatesObject(
        locationDetails,
        response.user_coordinates
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    await axios
      .get("/authentication/logout")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return rejectWithValue(error.response.data.message);
      });
  }
);

export const loadUser = createAsyncThunk(
  "user/load",
  async (_, { rejectWithValue }) => {
    try {
      const request = await axios.get("/user/me");
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchCitiesList = createAsyncThunk(
  "user/fetch-cities",
  async (_, { rejectWithValue }) => {
    try {
      const request = await axios.get("/user/fetch-cities");
      const response = await request.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
