import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProductSearch from '../pages/ProductSearch';
import ProductDetail from '../pages/ProductDetail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product-search" component={ProductSearch} />
      <Route path="/product-detail/:id" component={ProductDetail} />
    </Switch>
  );
};

export default Routes;
