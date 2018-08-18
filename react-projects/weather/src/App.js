import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from 'react-router-dom'; 
import queryString from 'query-string';
import Test from './test.js';
import Home from './home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/test/:name/:lastName?' component={Test}/>
      </Switch>
      </BrowserRouter>
     
    );
  }
}
export default App;
