import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import chatSlice from "./slices/chatSlice";
import groupSlice from "./slices/groupSlice";
import groupDetailsSlice from "./slices/groupDetailsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        chats: chatSlice,
        groups: groupSlice,
        singleGroup: groupDetailsSlice
    }
});

export default store;

