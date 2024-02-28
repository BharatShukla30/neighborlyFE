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
    async (chatId, {rejectWithValue}) => {
        try {
            const request = await axiosInstance.get(`/group/fetch-group-messages/${chatId}?page=1&limit=5`);
            const response = await request.data;
            return response;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)