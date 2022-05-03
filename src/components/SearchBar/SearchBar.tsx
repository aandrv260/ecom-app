import css from "./SearchBar.module.scss";

import { addCSSClassName } from "../../assets/scripts/functions";
import React, { useState } from "react";

import searchIcon from "../../assets/icons/search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");

  const searchSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("sent", query);
  };

  const searchChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <form
      className={addCSSClassName(css, "search-form")}
      onSubmit={searchSubmitHandler}
    >
      <input
        className={addCSSClassName(css, "search-bar")}
        type="text"
        placeholder="Search our products"
        value={query}
        onChange={searchChangeHandler}
      />
      <img
        className={addCSSClassName(css, "search-bar__icon", "icon")}
        src={searchIcon}
        alt="Search icon"
        onClick={searchSubmitHandler}
      />
    </form>
  );
};

export default SearchBar;
