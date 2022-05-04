import { addCSSClassName } from '../../assets/scripts/functions';

import { ProductType } from '../../models/product';

import css from './CartItem.module.scss';

type Props = {
  product: ProductType;
};

const CartItem: React.FC<Props> = props => {
  const { title, price, comparePrice, image } = props.product;

  return (
    <div className={addCSSClassName(css, 'cart-item')}>
      <img
        className={addCSSClassName(css, 'cart-item__img')}
        src={image.src}
        alt={image.alt}
      />
      <h3 className={addCSSClassName(css, 'cart-item__title')}>{title}</h3>
      <div className={addCSSClassName(css, 'cart-item__prices')}>
        <span className={addCSSClassName(css, 'cart-item__main-price')}>
          {price}
        </span>

        {comparePrice && (
          <span className={addCSSClassName(css, 'cart-item__com-price')}>
            {comparePrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
