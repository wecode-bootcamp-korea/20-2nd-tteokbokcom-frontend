import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProjectStart from './pages/ProjectStart/ProjectStart';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/project-start" component={ProjectStart} />
      </Switch>
    </Router>
  );
};
export default Routes;
