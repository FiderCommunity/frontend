import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route path="/login" exact component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/settings" component={Settings} isPrivate />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
