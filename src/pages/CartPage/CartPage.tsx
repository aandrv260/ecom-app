// import { addCSSClassName } from '../../assets/scripts/functions';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Container from '../../components/Helpers/Container/Container';
import { Store } from '../../models/store';
// import css from './CartPage.module.scss';

const CartPage = () => {
  const cartItems = useSelector((state: Store) => state.cart.products);

  const renderCartItems = () => {
    return cartItems.map(item => (
      <CartItem key={Math.random() * 34} product={item} />
    ));
  };

  return <Container>{renderCartItems()}</Container>;
};

export default CartPage;
