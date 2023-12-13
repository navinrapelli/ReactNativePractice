import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        add:(state)=>{
            console.log(state)
           state.value +=1
        },
        remove:(state)=>{
           state.value -=1
        },
        incrementByValue:(state,action)=>{
            console.log(state,action);
            state.value +=action.payload.value
        }
    }
})

export const {add,remove,incrementByValue}=CounterSlice.actions;
export default CounterSlice.reducer