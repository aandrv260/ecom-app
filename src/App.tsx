// Packages
import React, { Fragment, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

// Types and interfaces
import RouteType from './models/routes';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';

// Pages (lazy-loading)
const CategoriesPage = React.lazy(
  () => import('./pages/CategoriesPage/CategoriesPage')
);
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = React.lazy(
  () => import('./pages/ContactsPage/ContactsPage')
);

// Defined routes
const routes: RouteType[] = [
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/categories',
    element: <CategoriesPage />,
  },

  {
    path: '/contact-us',
    element: <ContactsPage />,
  },

  {
    path: '/product/:productName',
    element: <ProductPage />,
  },

  {
    path: '/cart',
    element: <CartPage />,
  },

  {
    path: '*',
    element: <p>Not found</p>,
  },
];

const App = () => {
  const generateRoutes = (routes: RouteType[]) => {
    return routes.map(route => (
      <Route path={route.path} element={route.element} key={Math.random()} />
    ));
  };

  return (
    <Fragment>
      <Header />
      <main id="main-content">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>{generateRoutes(routes)}</Routes>
        </Suspense>
      </main>
    </Fragment>
  );
};

export default App;
