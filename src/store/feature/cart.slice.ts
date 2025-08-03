import { CartState } from "@/types/cart.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState: CartState = {
cart : null,
cartInfo: null
}

export const addProductToCart = createAsyncThunk('cart/addToCart', async (productId:string)=>{
    const token = localStorage.getItem('token')
    
    
const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
let {data} = await axios.request(options)
return data
})

export const getCartInfo = createAsyncThunk('cart/cartInfo', async ()=>{
    const token = localStorage.getItem('token')
    
    
const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
       
      };
let {data} = await axios.request(options)
return data
})

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async (productId:string)=>{
    const token = localStorage.getItem('token')
    const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        method: "DELETE",
        headers: {
          token,
        },
    }

    let {data} = await axios.request(options)
    return data
})

export const clearCart = createAsyncThunk('cart/clearCart', async ()=>{
    const token = localStorage.getItem('token')
    const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/cart',
        method:'DELETE',
        headers: {
            token,
        }
    }

    let {data} = await axios.request(options)
    return data
})



const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(addProductToCart.fulfilled, (state, action)=>{
            if (action.payload.message === "Product added successfully to your cart") {
                toast.success(action.payload.message)
                state.cart = action.payload
                
            }
            getCartInfo()
        })
        builder.addCase(addProductToCart.rejected, (state, action)=>{
            console.log({state,action});
            
        })

         builder.addCase(getCartInfo.fulfilled, (state, action)=>{
state.cartInfo = action.payload          
            
        })
        builder.addCase(getCartInfo.rejected, (state, action)=>{
            console.log({state,action});
            
        })

         builder.addCase(removeItemFromCart.fulfilled, (state, action)=>{
console.log({state,action});
if (action.payload.status === 'success') {
    toast.success('Product removed Successfully')
    getCartInfo()
}
         
            
        })
        builder.addCase(removeItemFromCart.rejected, (state, action)=>{
            console.log({state,action});
            
        })
         builder.addCase(clearCart.fulfilled, (state, action)=>{
if (action.payload.message === 'success') {
    toast.success('Your cart is now empty')
}
         
            
        })
        builder.addCase(clearCart.rejected, (state, action)=>{
            console.log({state,action});
            
        })
    }
})

export const cartReducer = cartSlice.reducer;