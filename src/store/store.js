import {configureStore} from "@reduxjs/toolkit";
import productSlide from "../redux/productSlide";

export const store = configureStore({
    reducer: {
        productReducer: productSlide
    }
})