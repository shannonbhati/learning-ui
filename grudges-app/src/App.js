import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Application from './Application.js';
import Route from 'react-router-dom/Route';
const user=({match})=>{
  return(
    <h1>Hello user {match.params.username}</h1>
  )
}

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route path='/' component={Application}></Route>
        <Route path='/about' render={
          ()=>{
            return(<h1>welcome about</h1>);
        }
      }></Route>
      <Route path='/user/:username' component={user}/>
      </Router>
    )
  }
}
export default App;
