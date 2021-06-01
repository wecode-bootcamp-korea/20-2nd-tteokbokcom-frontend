import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Join from './pages/Join/Join';
import CreateAccount from './pages/Join/CreateAccount';
import ProjectStart from './pages/ProjectStart/ProjectStart';
import User from './pages/User/User';
import Detail from './pages/Detail/Detail';
import Footer from './components/AccountContainer/components/Footer';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Join} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/createAccount" component={CreateAccount} />
        <Route exact path="/project-start" component={ProjectStart} />
        <Route exact path="/profile" component={User} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
