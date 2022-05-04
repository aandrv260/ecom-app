import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCSSClassName } from '../../assets/scripts/functions';

import { ProductType } from '../../models/product';
import { cartActions } from '../../store/cart-slice';

import css from './CartItem.module.scss';

type Props = {
  product: ProductType;
};

const CartItem: React.FC<Props> = props => {
  const dispatch = useDispatch();

  const {
    title,
    price: prodPrice,
    quantity,
    id,
    comparePrice,
    image,
  } = props.product;
  const [curQuantity, setCurQuantity] = useState<number>(quantity);

  const price = prodPrice * curQuantity;

  const increaseQtyHandler = () => {
    setCurQuantity(curQty => curQty + 1);
  };

  const decreaseQtyHandler = () => {
    if (curQuantity - 1 <= 0) {
      dispatch(cartActions.removeFromCart(id));
    }

    setCurQuantity(curQty => curQty - 1);
  };

  return (
    <div className={addCSSClassName(css, 'cart-item')}>
      <img
        className={addCSSClassName(css, 'cart-item__img')}
        src={image.src}
        alt={image.alt}
      />
      <h3 className={addCSSClassName(css, 'cart-item__title')}>{title}</h3>
      <div className={addCSSClassName(css, 'cart-item__qty-cont')}>
        <div
          className={addCSSClassName(css, 'cart-item__qty-update-btn')}
          onClick={decreaseQtyHandler}
        >
          &ndash;
        </div>

        <span className={addCSSClassName(css, 'cart-item__qty')}>
          {curQuantity}
        </span>

        <div
          className={addCSSClassName(css, 'cart-item__qty-update-btn')}
          onClick={increaseQtyHandler}
        >
          &#43;
        </div>
      </div>
      <div className={addCSSClassName(css, 'cart-item__prices')}>
        <span className={addCSSClassName(css, 'cart-item__main-price')}>
          &#36;{price}
        </span>

        {comparePrice && (
          <span className={addCSSClassName(css, 'cart-item__comp-price')}>
            &#36;{comparePrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
