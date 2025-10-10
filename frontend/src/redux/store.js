import {configureStore} from "@reduxjs/toolkit";
import cartReducers from "./reducer/cartReducer";

const store=configureStore({
    reducer:{
        cart:cartReducers,
    }
});
    
export default store;