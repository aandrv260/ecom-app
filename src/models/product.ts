import Image from './image';

/**
 * The type of each product in this app
 */
export interface ProductType {
  title: string;
  id: string;
  description: string;
  category: string;
  price: number;
  comparePrice?: number;
  image: Image;
}

export interface CartProduct extends ProductType {
  quantity: number;
}
