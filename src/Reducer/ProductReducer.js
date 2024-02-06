import { createProduct, deleteProduct, readProduct, updateProduct } from '../Action/ProductAction'

import { createSlice } from '@reduxjs/toolkit'

// initial state

// slice (reducer)

// const Slice = createSlice({name, state, slice controller})
const ProductSlice = createSlice({
    name: "product",
    initialState: [],
    extraReducers: (builder) => {
        // addCase(action,reducer)
         builder.addCase(createProduct.fulfilled, (state,action) => {})
                .addCase(createProduct.rejected, ()=> {})
                .addCase(readProduct.fulfilled, (state,action) => {})
                .addCase(readProduct.rejected, () => {})
                .addCase(updateProduct.fulfilled, (state,action)=> {})
                .addCase(updateProduct.rejected, () => {})
                .addCase(deleteProduct.fulfilled, (state,action) => {})
                .addCase(deleteProduct.rejected, () => {})
    }
})

export default ProductSlice