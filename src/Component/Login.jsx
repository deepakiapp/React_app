import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './login.css';

class Login extends Component{

render(){
  return(
    <section className="login-page">
    <div className="row">
      <div className="col-md-4 col-lg-4 offset-md-4 offset-lg-4">
      <div className="main-login-sec">
      <div className="login-header">

      <h1>LOGIN</h1>
      </div>
    <form >
    <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email"
        name="email"
        id="exampleEmail"
        placeholder="Example@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password"
        name="password"
        id="examplePassword"
        placeholder="******" />
      </FormGroup>
      <FormGroup check>
        <Label check>
        <Input type="checkbox" />{' '}
        Remember Password
        </Label>
      </FormGroup>
      <Button className="submit-btn">Login</Button>
    </form>
    <div className="register"><p>Do't have account <a href="/Register">Register here</a></p></div>
    </div>
    </div>
    </div>
    </section>
  );
}
}


export default Login;
