import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const res = await axios.get('http://localhost:3000/products')
        return res.data
    }
)
export const deleteProduct = createAsyncThunk(
    'deleteProduct',
    async ({id}) => {
        await axios.delete('http://localhost:3000/products/' + id)
        return id
    }
)

export const editProduct = createAsyncThunk(
    'editProduct',
    async ({id, data}) => {
        await axios.put(`http://localhost:3000/products/${id}`, data);
        const res = await axios.get('http://localhost:3000/products');
        return res.data;
    }
)

export const createProduct = createAsyncThunk(
    'createProduct',
    async ({formValues}) => {
        await axios.post('http://localhost:3000/products', formValues)
        const res = await axios.get('http://localhost:3000/products')
        return res.data
    }
)

export const findById = createAsyncThunk(
    'findById',
    async ({id}) => {
        const res = await axios.get('http://localhost:3000/products/' + id)
        return res.data
    }
)