import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import css from './SearchBar.module.scss';

import { Store } from '../../models/store';

import { addCSSClassName } from '../../assets/scripts/functions';

// import searchIcon from '../../assets/icons/search.svg';
import { productsActions } from '../../store/products-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchActions } from '../../store/search-slice';

const SearchBar = () => {
  // Router hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.dir('router', pathname);

  // Redux hooks
  const dispatch = useDispatch();
  const query = useSelector((state: Store) => state.search.text);

  // Local Query State
  // const [query, setQuery] = useState<string>('');

  // Dispatch 'filterProducts' action on every keystrokes
  const searchChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const curQuery = e.currentTarget.value;
    // setQuery(curQuery);

    dispatch(searchActions.setSearch(curQuery));
    dispatch(productsActions.filterProducts(curQuery));

    if (pathname !== '/') navigate('/');
  };

  // To prevent page reload on 'Enter' clicked
  const formSubmitHandler = (e: React.FormEvent) => e.preventDefault();

  return (
    <form
      className={addCSSClassName(css, 'search-form')}
      onSubmit={formSubmitHandler}
    >
      <input
        className={addCSSClassName(css, 'search-bar')}
        type="text"
        placeholder="Search our products"
        value={query}
        onChange={searchChangeHandler}
      />
      {/* <img
        className={addCSSClassName(css, 'search-bar__icon', 'icon')}
        src={searchIcon}
        alt="Search icon"
        onClick={searchSubmitHandler}
      /> */}
    </form>
  );
};

export default SearchBar;
