import { ProductsState } from "@/types/products.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState:ProductsState = {
    product : null
}
export const getProducts = createAsyncThunk('products/getProducts', async ()=>{
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/products`,
        method: 'GET'
    }
    let {data} = await axios.request(options)
    return data.data
})



const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: function (builder) {
        builder.addCase(getProducts.fulfilled,(state, action)=>{
            state.product = action.payload
            
        })
 builder.addCase(getProducts.rejected,(state, action)=>{
            console.log({state,action});
            
        })        
    }

})

export const productsReducer = productsSlice.reducer;