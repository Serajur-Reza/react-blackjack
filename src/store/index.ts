import { configureStore } from "@reduxjs/toolkit";
import blackJack from "./blackJack";


export const store = configureStore({
    reducer: {blackJack}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch