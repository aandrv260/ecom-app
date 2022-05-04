import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../models/store';

import products from '../assets/scripts/products';
import { ProductType } from '../models/product';

const initialState: Cart = {
  products: [],
  itemsNumber: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { payload: id } = action;
      const foundItem = products.find(item => item.id === id);

      if (foundItem) {
        state.products.push(foundItem);
        state.itemsNumber++;
      }
    },
    removeFromCart(state, action) {
      const { payload: id } = action;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
