import { createSlice } from "@reduxjs/toolkit";
//evry feature is a slice in redux, it will contain all the reducers of cart

const cartSlice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addItem: (state,action)=>{
            state.push(action.payload);
        },
    }
});

export const {addItem}=cartSlice.actions;
//you want to export actions, to dispatch them with events
export default cartSlice.reducer;