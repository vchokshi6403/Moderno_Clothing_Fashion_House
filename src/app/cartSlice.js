import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        user: [],
        wishlist: []

    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = { ...action.payload, quantity: 1 };
            const existingItem = state.data.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.data.push(newItem);
                console.log("Added to cart", newItem);
            } else {
                existingItem.quantity += newItem.quantity;
                console.log("Quantity Incremented in cart", action.payload)
            }
        },
        addtowishlist: (state, action) => {
            const wishItem = { ...action.payload, quantity: 1 };
            state.wishlist.push(wishItem);
            console.log("Added to wishlist", wishItem)
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
            console.log("Removed from wishlist")
        },
        removeWishlistId: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
            console.log("Removed from wishlist by id")
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
            console.log("Removed from cart")
        },
        loginUser: (state, action) => {
            console.log("Logged In", action.payload)
            state.user.push(action.payload)
            console.log(action.payload)
        },
        updateCartItemQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const itemToUpdate = state.data.find((item) => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
            console.log("Items updated", JSON.stringify(itemToUpdate))
        },
        updateWishlistQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const itemToUpdate = state.wishlist.find((item) => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
            console.log("Items updated", JSON.stringify(itemToUpdate))
        },

    }
});

export const { addToCart, removeFromCart, loginUser, updateCartItemQuantity, addtowishlist, removeFromWishlist, updateWishlistQuantity, removeWishlistId } = cartSlice.actions

export default cartSlice.reducer