import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Cart } from './components/CartPage/Cart';
import { Footer } from './components/Footer/Footer';

type AppRoutesProps = {};
export const AppRoutes = (props: AppRoutesProps) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
