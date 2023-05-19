import {configureStore} from '@reduxjs/toolkit'
import cartSlice ,{ userReducer}  from './CartSlice';

const store = configureStore({
reducer : {
    cart : cartSlice,
    user : userReducer
}
})

export default store;