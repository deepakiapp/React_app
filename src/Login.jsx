import React, {Component} from 'ract';

class Login extends Component{
  render(){
    return(
      <div className="login">
      <form>
        <label>User Name</label>
        <input type="text" data-test="username" placeholder="John Doe" />
      </form>
      </div>
    );
  }
}
export default Login;
