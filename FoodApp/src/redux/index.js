import { configureStore} from "@reduxjs/toolkit";
import userSlicerReducer from "./userSlice"

export const store = configureStore({
    reducer:{
        user: userSlicerReducer,
    }
});