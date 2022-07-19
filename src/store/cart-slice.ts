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
        console.log(state.products.includes(foundItem));
        const itemInCart = state.products.find(
          item => item.id === foundItem.id
        )!;

        if (itemInCart) {
          const indexOfItemInCart = state.products.indexOf(itemInCart);
          state.products[indexOfItemInCart].quantity++;
        } else {
          state.products.push(foundItem);
        }
        state.itemsNumber = state.products.length;
      }
    },

    removeFromCart(state, action) {
      const { payload: id } = action;
      const cartProducts = state.products;

      const itemToRemove = cartProducts.find(product => product.id === id);

      if (itemToRemove) {
        const indexOfItem = cartProducts.indexOf(itemToRemove);
        console.log('itemIn_Cart', indexOfItem);
        state.products.splice(indexOfItem, 1);
        state.itemsNumber = state.products.length;
      }
    },

    updateQuantity(state, action) {
      const { id, updateType } = action.payload;
      const itemToUpdate = state.products.find(item => item.id === id);

      if (itemToUpdate) {
        const indexOfItemToUpdate = state.products.indexOf(itemToUpdate);
        updateType === 'increase'
          ? state.products[indexOfItemToUpdate].quantity++
          : state.products[indexOfItemToUpdate].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
