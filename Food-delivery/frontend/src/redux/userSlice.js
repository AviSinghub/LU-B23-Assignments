import { createSlice } from "@reduxjs/toolkit";


const initialState ={}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginRedux: (state,action)=>{
            console.log(action.payload.authToken)
        },
        logoutRedux : (state,action) => state.authToken
    }
})

export const {loginRedux,logoutRedux}  = userSlice.actions
export default userSlice.reducer