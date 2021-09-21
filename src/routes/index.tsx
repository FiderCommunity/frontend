import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Settings from '../pages/Settings';
import Features from '../pages/Features';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route path="/login" exact component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/settings" component={Settings} isPrivate />
    <Route path="/features" component={Features} isPrivate/>
    <Route path="/requests" component={Features} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
