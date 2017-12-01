import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AudienceLogin from '../containers/AudienceLoginContainer';

const AudienceRoute = () => (
  <Switch>
    <Route exact path="/audience/" component={AudienceLogin}/>
    <Route exact path="/audience/login" component={AudienceLogin}/>
    <Route path="/audience/room" component={AudienceLogin} />
  </Switch>
);

export default AudienceRoute;
