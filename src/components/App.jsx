import React from 'react';
import TopNav from './TopNav';
import Browse from './Browse';
import SignIn from './SignIn';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
  var bodybackground = {
    backgroundColor: 'black'
  };
  return (
    <div style={bodybackground}>
      <TopNav/>
      <Switch>
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/sign_in' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;