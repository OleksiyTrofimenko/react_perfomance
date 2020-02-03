import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import CheckoutPage from './pages/checkout';

import Header from './components/header'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
    </Switch>
  </div>
);

export default App;
