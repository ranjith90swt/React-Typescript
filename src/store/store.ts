import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlices";
import themeReducer from "./slices/themeSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        theme: themeReducer,

        [baseApi.reducerPath]: baseApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
