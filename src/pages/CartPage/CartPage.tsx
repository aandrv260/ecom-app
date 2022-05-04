import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Container from '../../components/Helpers/Container/Container';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { Store } from '../../models/store';

const CartPage = () => {
  const cartItems = useSelector((state: Store) => state.cart.products);

  const renderCartItems = () => {
    return cartItems.map(item => (
      <CartItem key={Math.random() * 34} product={item} />
    ));
  };

  return (
    <Container>
      <SectionHeading
        className="u-center-text u-margin-bottom-big"
        heading="Your Cart"
      />
      {renderCartItems()}
    </Container>
  );
};

export default CartPage;
