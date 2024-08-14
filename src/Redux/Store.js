import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";

const Store=configureStore({
    reducer:{
        carter:Cartslice
    }
})
export default Store