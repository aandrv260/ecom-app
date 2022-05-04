// Packages
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import css from './HomePage.module.scss';

import { ProductType } from '../../models/product';

import { addCSSClassName } from '../../assets/scripts/functions';

import ProductCard from '../../components/ProductCard/ProductCard';
import { Store } from '../../models/store';

const HomePage = () => {
  const products = useSelector<Store>(state => state.products) as ProductType[];

  const renderProducts = (prods: ProductType[]) => {
    return prods.map(prod => (
      <ProductCard key={Math.random() * 34} product={prod} />
    ));
  };

  return (
    <Fragment>
      <div className={addCSSClassName(css, 'products-grid')}>
        {renderProducts(products)}
      </div>
    </Fragment>
  );
};

export default HomePage;
