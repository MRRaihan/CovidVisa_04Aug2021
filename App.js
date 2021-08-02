
import React from 'react';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import MobileOTP from './screens/MobileOTP';
import {BrowserRouter, Route, Switch} from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/otp" component={MobileOTP}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
