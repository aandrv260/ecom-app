import { useDispatch, useSelector } from 'react-redux';
import { addCSSClassName } from '../../assets/scripts/functions';

import { ProductType } from '../../models/product';
import { Store } from '../../models/store';
import { cartActions } from '../../store/cart-slice';

import css from './CartItem.module.scss';

type Props = {
  product: ProductType;
};

const CartItem: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const allCartProducts = useSelector((state: Store) => state.cart.products);

  const {
    title,
    price: prodPrice,
    quantity,
    id,
    comparePrice,
    image,
  } = props.product;

  const curCartItem = allCartProducts.find(item => item.id === id);
  const price = (prodPrice * quantity).toFixed(2);

  const increaseQtyHandler = () => {
    if (curCartItem) {
      dispatch(cartActions.updateQuantity({ updateType: 'increase', id }));
    }
  };

  const decreaseQtyHandler = () => {
    if (quantity - 1 === 0) {
      dispatch(cartActions.removeFromCart(id));
    }

    dispatch(cartActions.updateQuantity({ updateType: 'decrease', id }));
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
          {quantity}
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
            &#36;{comparePrice.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
