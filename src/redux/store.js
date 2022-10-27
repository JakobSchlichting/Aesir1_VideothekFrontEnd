import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import filmReducer from "./filmSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        film: filmReducer,
    }
})