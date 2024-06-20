import React, { Component } from "react";
import Service from "../Services/Service";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.service = new Service();
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignInButton = (event) => {
    event.preventDefault(); 
    const { username, password } = this.state;
    const response = this.service.signIn(username, password);
    if (response === 'logged in') {
      window.location.href = '/dashboard';
    } else {
      console.log('error try again');
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <section className="contact" id="contact">
        <h1 className="heading"><span>Log</span> In</h1>

        <form onSubmit={this.handleSignInButton}>
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={this.handleInput}
              value={username}
            />
          </div>
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={this.handleInput}
              value={password}
            />
          </div>
          <input type="submit" value="Log in" className="btn" />
        </form>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </section>
    );
  }
}

export default Login;