import { configureStore } from "@reduxjs/toolkit";
import user from "../slices/userSlice";
import server from "../slices/serverSlice";

const store = configureStore({
    reducer: {user, server},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;