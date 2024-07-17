import { createSlice } from "@reduxjs/toolkit";
import { getChatMessages, getUserChats } from "../actions/chatActions";

const chatSlice = createSlice({
    name: "chats",
    initialState: {
        loading: false,
        chats: [],
        chatMessages: {},
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Fethcing User's Chat List
        .addCase(getUserChats.pending, (state) => {
            state.loading = true;
            state.chats = [];
            state.error = null;
        })
        .addCase(getUserChats.fulfilled, (state, action) => {
            state.loading = false;

            state.chats = action.payload.chats.groups;
            state.chatMessages = action.payload.chatMessages;

            state.error = null;
        })
        .addCase(getUserChats.rejected, (state, action) => {
            state.loading = false;
            state.chats = null;
            state.error = action.payload;
        })

        // Fetching Messages of a chat
        .addCase(getChatMessages.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getChatMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.chatMessages[action.payload.groupId] = action.payload.messages;
            state.error = null;
        })
        .addCase(getChatMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})


export default chatSlice.reducer;