import { createSlice } from "@reduxjs/toolkit";

const changeValueSlice = createSlice({
    name :"ChangingValue",
    initialState:{
        value : {},
        status : "",

    },
    reducers :{
        changeMyComp : (state , {payload}) => {
            state.value = payload
        }
    },
    extraReducers :(builder)=>{

    }
}) 

export const {changeMyComp} = changeValueSlice.actions;

export default changeValueSlice;



