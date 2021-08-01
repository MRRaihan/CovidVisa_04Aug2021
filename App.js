
import React from 'react';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {BrowserRouter, Route, Switch} from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
