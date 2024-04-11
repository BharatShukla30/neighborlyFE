import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import chatSlice from "./slices/chatSlice";
import groupSlice from "./slices/groupSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        chats: chatSlice,
        groups: groupSlice
    }
});

export default store;

