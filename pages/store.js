import {configureStore} from '@reduxjs/toolkit'
import  addToCartSlice  from './addToCart/cartReducer';
const store = configureStore({
    reducer:{
        addToCart:addToCartSlice
    }
})
export default store;