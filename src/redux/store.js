import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        chats: chatSlice
    }
});

export default store;

