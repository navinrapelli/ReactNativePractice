import { configureStore } from "@reduxjs/toolkit";
import popRedcuer from "./SlicePop";
export const storePop=configureStore({
    reducer:{
     PopMain:popRedcuer,
    }
})