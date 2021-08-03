
import React from 'react';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import MobileOTP from './screens/MobileOTP';
import NIDScan from "./screens/NIDScan";
import FaceScan from "./screens/FaceScan";
import {StyleSheet} from 'react-native';
import {BrowserRouter, Route, Switch} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter style={styles.container}>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/otp" component={MobileOTP}/>
          <Route exact path="/nidscan" component={NIDScan}/>
          <Route exact path="/facescan" component={FaceScan}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
