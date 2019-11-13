import React from 'react';
import TopNav from './TopNav';
import Browse from './Browse';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
  return (
    <div>
      <TopNav/>
      <Switch>
        <Route exact path='/browse' component={Browse} />
        
      </Switch>
    </div>
  );
}

export default App;