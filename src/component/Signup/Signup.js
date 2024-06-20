import React, { Component } from "react";
import Service from "../Services/Service";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    role: "client",
    errorMessage: "",
  };

  service = new Service();

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.id });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password, role } = this.state;

    try {
      const response = await this.service.signUp(username, email, password, role);
      console.log("User registered successfully:", response);
      // Handle successful sign-up, e.g., redirect to login page or display a success message
    } catch (error) {
      console.error("Sign-up failed:", error);
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    return (
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Sign</span> Up
        </h1>

        <form id="signupForm" onSubmit={this.handleSubmit}>
          <div className="inputBox" style={{ height: "2em", marginBottom: "4em", marginLeft: "25em" }}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputBox" style={{ height: "2em", marginBottom: "4em", marginLeft: "25em" }}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputBox" style={{ height: "2em", marginBottom: "4em", marginLeft: "25em" }}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div style={{ marginLeft: "5em", marginBottom: "2em" }}>
            <input
              type="radio"
              id="client"
              name="role"
              checked={this.state.role === "client"}
              onChange={this.handleRoleChange}
            />
            <label className="status" htmlFor="client">Client</label>

            <input
              type="radio"
              id="organizer"
              name="role"
              style={{ marginLeft: "1em" }}
              checked={this.state.role === "organizer"}
              onChange={this.handleRoleChange}
            />
            <label className="status" htmlFor="organizer">Organizer</label>
          </div>

          {this.state.errorMessage && (
            <div style={{ color: "red", marginLeft: "25em", marginBottom: "2em" }}>
              {this.state.errorMessage}
            </div>
          )}

          <div style={{ marginLeft: "25em" }}>
            <input type="submit" value="Sign up" className="btn" />
          </div>
        </form>
      </section>
    );
  }
}

export default SignUp;