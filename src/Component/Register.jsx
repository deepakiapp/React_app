import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './login.css';

class Register extends Component{

render(){
  return(
    <section className="login-page">
    <div className="row">
      <div className="col-md-4 col-lg-4 offset-md-4 offset-lg-4">
      <div className="main-login-sec">
      <div className="login-header">

      <h1>Sign Up</h1>
      
      </div>
    <form >
    <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input type="email"
        name="email"
        id="exampleEmail"
        placeholder="John" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Last Name</Label>
        <Input type="email"
        name="email"
        id="exampleEmail"
        placeholder="Doe" />
      </FormGroup>
      <FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email address</Label>
        <Input type="email"
        name="email"
        id="exampleEmail"
        placeholder="example@gmail.com" />
      </FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password"
        name="password"
        id="examplePassword"
        placeholder="******" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input type="password"
        name="password"
        id="examplePassword"
        placeholder="******" />
      </FormGroup>

      <Button className="submit-btn">Sign Up</Button>
    </form>
    <div className="register"><p>Already have an account <a href="/Login">Login here</a></p></div>
    </div>
    </div>
    </div>
    </section>
  );
}
}

export default Register;
