import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routeWrapper';

import Login from '../pages/login';
import CreateUser from '../pages/createUser';
import Home from '../pages/home';
import UserUpdate from '../pages/userUpdate';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create-user" exact component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/" exact isPrivate component={Home} />
        <Route path="/user-update" exact isPrivate component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  );
}
