import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import './sidebar.css';



class Sidebar extends Component{
  render(){
    return(
      <div className="sidebar">
      <div className="logo">
      <a href="#">
      <div className="logo-img">
      <img src={require("../../images/iapp_logo.png")} className="user-avatar" />
      </div>
      </a>
      <a href="#" className="simple-text">
        Company Name
      </a>
      </div>
          <div className="sidebar-wrapper" ref="sidebar">
              <Nav >
                  <ul className="nav">
                    <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i> User listing</a></li>
                  
                  </ul>

              </Nav>
          </div>
      </div>
    );
  }
}

export default Sidebar;
