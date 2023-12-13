import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from './Slices-Create'
export const storeRed=configureStore({
    reducer:{
        dataEmployeee:employeeReducer,
    },
})

