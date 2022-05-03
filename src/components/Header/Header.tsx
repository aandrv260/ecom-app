// Packages
import { NavLink } from "react-router-dom";

// TypeScript Assets
import { headerNav, NavMenu } from "../../assets/js/navigation";
import { addCSSClassName } from "../../assets/js/functions";

// Icons
import cartIcon from "../../assets/icons/cart.svg";
import accountIcon from "../../assets/icons/user.svg";

// Styles
import css from "./Header.module.scss";

// Componentse
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const renderMenuItems = (menu: NavMenu) => {
    return menu.map((item) => (
      <li
        className={addCSSClassName(css, "header__nav-item")}
        key={Math.random()}
      >
        <NavLink
          className={addCSSClassName(css, "header__nav-link")}
          to={item.link}
        >
          {item.itemName}
        </NavLink>
      </li>
    ));
  };

  return (
    <header className={addCSSClassName(css, "header")}>
      {/* Navigation */}
      <nav>
        <ul className={addCSSClassName(css, "header__nav-list")}>
          {renderMenuItems(headerNav)}
        </ul>
      </nav>
      <SearchBar />

      {/* Account icons */}
      <div className={addCSSClassName(css, "header__icons")}>
        <img className="icon" src={cartIcon} alt="Cart icon" />
        <img className="icon" src={accountIcon} alt="Cart icon" />
      </div>
    </header>
  );
};

export default Header;
