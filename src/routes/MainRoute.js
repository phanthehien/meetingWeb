import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Admin from './AdminRoute';
import Audience from './AudienceRoute';


const MainRoute = () => (
  <Switch>
    <Route path="/audience" component={Audience}/>
    <Route path="/admin" component={Admin} />
  </Switch>
)

export default MainRoute;
