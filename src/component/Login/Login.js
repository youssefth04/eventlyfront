import React, { Component } from "react";
import Service from "../Services/Service";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };

    this.service = new Service();
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignInButton = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await this.service.signIn(username, password);
      if (response.message === "Login successful" ) {
        // Redirect to dashboard upon successful login
        window.location.href = "/dashboard";
      } else {
        this.setState({ errorMessage: "Incorrect username or password" });
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      this.setState({ errorMessage: "Sign-in failed. Please try again." });
    }
  };

  render() {
    const { username, password, errorMessage } = this.state;

    return (
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Log</span> In
        </h1>

        {errorMessage && (
          <div style={{ color: "red", marginBottom: "1em" }}>{errorMessage}</div>
        )}

        <form onSubmit={this.handleSignInButton}>
          <div className="inputBox">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={this.handleInput}
              value={username}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInput}
              value={password}
              required
            />
          </div>
          <input type="submit" value="Log in" className="btn" />
        </form>
      </section>
    );
  }
}

export default Login;