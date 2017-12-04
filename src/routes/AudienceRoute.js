import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AudienceLogin from '../containers/AudienceLoginContainer';
import AudienceRoom from '../containers/AudienceRoomContainer';

const AudienceRoute = () => (
  <Switch>
    <Route exact path="/audience/login" component={AudienceLogin}/>
    <Route path="/audience/room" component={AudienceRoom} />
  </Switch>
);

export default AudienceRoute;
