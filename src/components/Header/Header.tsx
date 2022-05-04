// Packages
import { NavLink } from 'react-router-dom';

// TypeScript Assets
import { headerNav, NavMenu } from '../../assets/scripts/navigation';
import { addCSSClassName } from '../../assets/scripts/functions';

// Icons
import cartIcon from '../../assets/icons/cart.svg';
import accountIcon from '../../assets/icons/user.svg';

// Styles
import css from './Header.module.scss';

// Componentse
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Store } from '../../models/store';

const Header = () => {
  // Redux hooks
  const cartItemsNumber = useSelector((state: Store) => state.cart.itemsNumber);

  const renderMenuItems = (menu: NavMenu) => {
    return menu.map(item => (
      <li
        className={addCSSClassName(css, 'header__nav-item')}
        key={Math.random()}
      >
        <NavLink
          className={addCSSClassName(css, 'header__nav-link')}
          to={item.link}
        >
          {item.itemName}
        </NavLink>
      </li>
    ));
  };

  return (
    <header className={addCSSClassName(css, 'header')}>
      {/* Navigation */}
      <nav>
        <ul className={addCSSClassName(css, 'header__nav-list')}>
          {renderMenuItems(headerNav)}
        </ul>
      </nav>
      <SearchBar />

      {/* Account icons */}
      <div className={addCSSClassName(css, 'header__icons')}>
        <Link className={addCSSClassName(css, 'header__cart-link')} to="/cart">
          <img className="icon" src={cartIcon} alt="Cart icon" />
          {cartItemsNumber > 0 && (
            <span className={addCSSClassName(css, 'header__cart-items-num')}>
              {cartItemsNumber}
            </span>
          )}
        </Link>
        <Link to="/account">
          <img className="icon" src={accountIcon} alt="Cart icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
