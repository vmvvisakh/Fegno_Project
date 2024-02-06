import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers:{
        addtoCart : (state,action) => {
            state.cart.push(action.payload)
        },
        removefromCart: (state,action) =>{
            state.cart = state.cart.filter(x=> x.id !== action.payload.id)
        }
    }
})


export default CartSlice.reducer
export const {addtoCart,removefromCart} = CartSlice.actions