
import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import WishlistSlice from "./WishlistSlice";

export const store = configureStore({

    // creates and exports Redux store instance
    reducer: {
        cart: Cartslice,
        wishlist: WishlistSlice,
    },

    devTools: true,
    // extension tool for debugging
});
