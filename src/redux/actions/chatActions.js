import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

export const getUserChats = createAsyncThunk(
    "user/chats",
    async (_, {rejectWithValue}) => {
        try{
            const request = await axiosInstance.get(`/user/get-user-groups`);
            const response = await request.data;

            // Object for storing both chatMessages and chats
            const responseObject = {};
            
            // chatMessages object will store all groupIDs of a user's chat
            const chatMessages = {};
            response.groups.forEach(chat => {
                chatMessages[chat.group_id];
            });

            /*{
                responseObject = {
                    chats = response 
                    chatMessages = chatMessages
                }
            }*/

            responseObject[chats] = response;
            responseObject[chatMessages] = chatMessages;

            return responseObject;
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

            const responseObject = {};
            responseObject[messages] = response;
            responseObject[groupId] = groupId;
            
            return responseObject;
        }
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

