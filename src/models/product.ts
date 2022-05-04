import Image from './image';

/**
 * The type of each product in this app
 */
export interface ProductType {
  title: string;
  id: string;
  description: string;
  quantity: number;
  category: string;
  price: number;
  comparePrice?: number;
  image: Image;
}
