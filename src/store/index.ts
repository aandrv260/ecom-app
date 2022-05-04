import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart-slice';
import { productsReducer } from './products-slice';
import { searchReducer } from './search-slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
