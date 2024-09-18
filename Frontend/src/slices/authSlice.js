import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials: (state ,action)=>{
            state.userInfo = action.payload;//action we are gonna pass is the userdata
            localStorage.setItem('userInfo', JSON.stringify(action.payload))//set that to localstorage
        },
        logout: (state, action)=>{ //its not the actual logout but a function to kill the credentials in the localstorage
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    },
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;