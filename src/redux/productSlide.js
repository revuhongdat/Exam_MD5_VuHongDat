import {createSlice} from "@reduxjs/toolkit";
import {createProduct, deleteProduct, editProduct, findById, getProducts} from "../services/productServices";


const initialState =  {
    products: [],
    curProduct : {},
    status: 'none'
}
const productsSlide = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.products = action.payload;
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const products = state.products.filter((blog) => blog.id !== action.payload)
            state.status = 'Deleted';
            state.products = products;
        })
        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.status = 'Edited';
            state.products = action.payload;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.status = 'Created';
            state.products = action.payload;
        })
        builder.addCase(findById.fulfilled, (state, action) => {
            state.status = 'FindById';
            state.curProduct = action.payload;
        })
    }
})

export default productsSlide.reducer;