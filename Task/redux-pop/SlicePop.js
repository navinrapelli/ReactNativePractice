import { createSlice, current } from "@reduxjs/toolkit";


export const initialState=[];

const slicePop=createSlice({
    name:"pop",
    initialState,
    reducers:{
        addPop (state,action){
           state.push(action.payload)
        },
         deletePop(state,action){
            console.log(action.payload.id)
           state.splice((pre)=>pre['ID State']!==action.payload.id,1);
           console.log( current(state));
        }
        
    }
})



export const addPop=slicePop.actions.addPop;
export const deletePop=slicePop.actions.deletePop;
export default slicePop.reducer;