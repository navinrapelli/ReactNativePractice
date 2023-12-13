import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from './Slices'
export const store=configureStore({

    reducer:{
        counter:CounterSlice,
    },
})