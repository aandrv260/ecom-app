// Packages
import React from 'react';

// Styles
import css from './ProductCard.module.scss';

// Types and Interfaces
import { ProductType } from '../../models/product';

// TypeScript Assets
import { addCSSClassName } from '../../assets/scripts/functions';

// Components
import Card from '../Card/Card';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useNavigate } from 'react-router-dom';

type Props = {
  product: ProductType;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  // Router
  const navigateTo = useNavigate();

  // Redux Hooks
  const dispatch = useDispatch();

  const { title, description, price, comparePrice, image, id } = product;

  const addToCartHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(cartActions.addToCart(id));
    navigateTo('/cart');
  };

  return (
    <Card className={addCSSClassName(css, 'product-card')}>
      <img
        className={addCSSClassName(css, 'product-card__img')}
        src={image.src}
        alt={image.alt}
      />

      <div className={addCSSClassName(css, 'product-card__content')}>
        <h3 className={addCSSClassName(css, 'product-card__title')}>{title}</h3>

        <div className={addCSSClassName(css, 'product-card__prices')}>
          <span className={addCSSClassName(css, 'product-card__price')}>
            &#36;{price}
          </span>

          {comparePrice && (
            <span className={addCSSClassName(css, 'product-card__comp-price')}>
              &#36;{comparePrice}
            </span>
          )}
        </div>

        <p className={addCSSClassName(css, 'product-card__description')}>
          {description}
        </p>

        <Button onClick={addToCartHandler} full>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
