import React, { Component } from 'react';
import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
      <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Register' component={Register}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      </Switch>
      </Router>
    );
  }
}
export default App;
