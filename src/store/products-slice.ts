import { createSlice } from '@reduxjs/toolkit';
import allProducts from '../assets/scripts/products';
import { ProductType } from '../models/product';

const initialProductsState: ProductType[] = [...allProducts];

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addToCart() {},

    filterProducts(_, action) {
      const searchQuery: string = action.payload.toLowerCase();

      console.log(searchQuery);

      if (searchQuery.length > 0) {
        const filtered = allProducts.filter(prod =>
          prod.title.toLowerCase().includes(searchQuery)
        );

        return filtered;
      } else {
        console.log(allProducts);
        return [...allProducts];
      }
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
