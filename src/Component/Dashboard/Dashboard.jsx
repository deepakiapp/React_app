
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Userlist from '../User-listing/Userlist';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Dashboard extends Component{
  render(){
  return(
    <div className="wrapper">
    <Sidebar/>
    <div className="main-panel">
    <Header/>
    <Userlist/>
    </div>
    </div>
  );
  }
}
export default Dashboard;
