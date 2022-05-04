import { ProductType } from './product';

// Creating a separate type Cart in order to quickly change its content
// in case the cart will not only contain ProductType[] in future
export type Cart = {
  products: ProductType[];
  itemsNumber: number;
};

/**
 * The Redux store of this app.
 */
export interface Store {
  search: {
    text: string;
  };
  products: ProductType[];
  cart: Cart;
}

// export interface RootState: store;
