import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import LinkA from './containers/LinkA';
import LinkB from './containers/LinkB';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/linkA" component={LinkA}/>
    <Route path="/linkB" component={LinkB}/>
  </Route>
);

export default routes;
