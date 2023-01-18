import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import { productsApi } from "./slices/productsApi";
import cartReducer from "./slices/cartSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
    });




