import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartIds:[]
    },
    reducers: {
        addCart(state,action){
            state.cartIds = [action.payload,...state.cartIds];
        },
        removeCart(state,action){
            const indexOfId = state.cartIds.indexOf(action.payload);
            state.cartIds.splice(indexOfId,1);
        },
        clearCart(state){
            state.cartIds = []
        }
    }
})

export let {addCart,removeCart,clearCart} = cartSlice.actions;
export default cartSlice;