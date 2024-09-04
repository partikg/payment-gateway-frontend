import { configureStore } from '@reduxjs/toolkit'
import countercart from '../slices/cartslices'

export const store = configureStore({
    reducer: {
        cart: countercart,
    },
})