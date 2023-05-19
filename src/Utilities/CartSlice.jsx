import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => { 
        state.item.push(action.payload)
    },
    clearCart: (state)=>{
    state = []
    }
  },
});

const user = createSlice({
  name: "user",
  initialState: {
    user: true,
  },
  reducers: {
    updateStatus: (state, action) => { 
        state.user = action.payload
    },
    
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export const { updateStatus } = user.actions;
export default cartSlice.reducer;
export const userReducer =  user.reducer;