// Packages
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main id="main-content"></main>
    </Fragment>
  );
};

export default App;
