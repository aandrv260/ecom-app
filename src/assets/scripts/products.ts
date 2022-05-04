import { ProductType } from '../../models/product';
import productImg1 from '../images/products/headphones-1/h1.jpg';
import { generateId } from './functions';

const products: ProductType[] = [
  {
    title: 'Headphones producing high quality music',
    id: generateId(),
    quantity: 1,
    description: 'Listen music during exercise or walk in nature',
    category: 'Headphones',
    price: 39.99,
    comparePrice: 59.99,
    image: {
      src: productImg1,
      alt: '',
    },
  },

  {
    title: 'Headsets for good music',
    id: generateId(),
    quantity: 1,
    description: 'Listen music during exercise or walk in nature',
    category: 'Headphones',
    price: 39.99,
    comparePrice: 59.99,
    image: {
      src: productImg1,
      alt: '',
    },
  },

  {
    title: 'Golf stick',
    id: generateId(),
    quantity: 1,
    description: 'Listen music during exercise or walk in nature',
    category: 'Headphones',
    price: 39.99,
    comparePrice: 59.99,
    image: {
      src: productImg1,
      alt: '',
    },
  },

  {
    title: 'Soccer ball for proffesionals',
    id: generateId(),
    quantity: 1,
    description: 'Listen music during exercise or walk in nature',
    category: 'Headphones',
    price: 39.99,
    comparePrice: 59.99,
    image: {
      src: productImg1,
      alt: '',
    },
  },
];

export default products;
