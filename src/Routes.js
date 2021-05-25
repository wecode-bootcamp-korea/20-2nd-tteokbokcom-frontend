import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};
export default Routes;
