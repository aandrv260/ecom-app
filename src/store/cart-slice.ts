import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../models/store';

import products from '../assets/scripts/products';

const initialState: Cart = {
  products: [products[0], products[3]],
  itemsNumber: 2,
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
        state.itemsNumber = state.products.length;
      }
    },
    removeFromCart(state, action) {
      const { payload: id } = action;
      const cartProducts = state.products;

      const item = cartProducts.find(item => item.id === id);

      if (item) {
        const indexOfItem = cartProducts.indexOf(item);
        console.log('itemIn_Cart', indexOfItem);
        state.products.splice(indexOfItem, 1);
        state.itemsNumber = state.products.length;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
