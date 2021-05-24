import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
// import Detail from './pages/Detail/Detail';
// import ProjectStart from './pages/ProjectStart/ProjectStart';
// import User from './pages/User/User';
// import Login from './pages/Login/Login';
// import Join from './pages/Join/Join';

const Routes = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/project-start" component={ProjectStart} />
        <Route exact path="/user" component={User} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} /> */}
      </Switch>
    </Router>
  );
};
export default Routes;
