import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    // we add the articleApi reducer to the store
    // so we can use it in our components
    // and we add the articleApi middleware to the store
    // we are using reducer to store the exact data that we want and middleware to handle the api requests
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});