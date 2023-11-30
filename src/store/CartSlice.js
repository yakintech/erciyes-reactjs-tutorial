import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            //cart product control
            const product = state.cart.find(item => item.id === action.payload.id)

            if (product) {
                product.quantity++
                return
            }
            else{
                let cartItem = {
                    ...action.payload,
                    quantity: 1
                }
                state.cart.push(cartItem)
            }

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        emptyCart: (state) => {
            state.cart = []
        }
    }
})


export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer