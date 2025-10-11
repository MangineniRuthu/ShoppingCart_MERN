import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

const cartReducers = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        existItem.qty += 1;
      
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      state.totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const existItem = state.cartItems.find((x) => x._id === id);
      if (existItem) existItem.qty = qty;

      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      state.totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
    },
    removeItem:(state,action)=>{
        const id=action.payload;
        state.cartItems=state.cartItems.filter((x)=>x._id!==id);

         state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      state.totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
    },

   clearCart: (state,action) => {
      state.cartItems = [];
      state.totalQty = 0;
      state.totalAmount = 0;
    },
  },
});
export const { addCartItem,updateQty,removeItem,clearCart } = cartReducers.actions;
export default cartReducers.reducer;
