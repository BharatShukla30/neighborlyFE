import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import chatSlice from "./slices/chatSlice";
import userSlice from "./slices/groupSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        chats: chatSlice,
        user: userSlice,
    }
});

export default store;

