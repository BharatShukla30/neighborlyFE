import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

export const getUserChats = createAsyncThunk(
    "user/chats",
    async (_, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.get(`/user/get-user-groups`);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    } 
)

export const getChatMessages = createAsyncThunk(
    "chat/messages",
    async ({groupId, page}, {rejectWithValue}) => {
        try {
            const request = await axiosInstance.get(`/group/fetch-group-messages/${groupId}?page=${page}&limit=30`);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

