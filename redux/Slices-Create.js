import { createSlice, current, isActionCreator } from "@reduxjs/toolkit";

export const DUMMY_DATA=[{
       id:"1",
       name:"navin",
       age:"24",
       gender:"male",
       profession:"foront end dev"
},
{
    id:"2",
    name:"naveena",
    age:"24",
    gender:"female",
    profession:"foront end dev"
},
{
    id:"3",
    name:"pavan",
    age:"24",
    gender:"male",
    profession:"backend"
}]

const initialState=[{
    id:"1",
    name:"navin",
    age:"24",
    gender:"male",
    profession:"foront end dev"
},
{
 id:"2",
 name:"naveena",
 age:"24",
 gender:"female",
 profession:"foront end dev"
},
{
 id:"3",
 name:"pavan",
 age:"24",
 gender:"male",
 profession:"backend"
}]

 const dataSlice=createSlice({
     name:"employee",
     initialState,
     reducers:{
     addEmployee:(state,action)=>{
        state.push(action.payload);
     },
     deleteEmployee:(state,action)=>{
       state.splice(state.filter((pre)=>pre.id==action.payload.id),1);
     },
     updateEmployee:(state,action)=>{
       state.splice(state.filter((pre)=>pre.id==action.payload.id),1,action.payload);
     },

     }

})


export const addEmployee=dataSlice.actions.addEmployee;
export const deleteEmployee=dataSlice.actions.deleteEmployee;
export const updateEmployee=dataSlice.actions.updateEmployee;
export default dataSlice.reducer