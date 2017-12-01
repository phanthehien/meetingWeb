import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Admin from '../containers/Admin/AdminContainer';
import Login from '../containers/Admin/LoginContainer';

const MainRoute = () => (
  <Switch>
    <Route exact path="/admin/" component={Login}/>
    <Route exact path="/admin/login" component={Login}/>
    <Route path="/admin/manage" component={Admin} />
  </Switch>
);

export default MainRoute;
