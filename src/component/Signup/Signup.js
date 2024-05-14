import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <h1 className="heading"><span>Sign</span> Up</h1>

        <form id="signupForm">
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input type="text" id="username" placeholder="username" />
          </div>
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input type="email" id="email" placeholder="email" />
          </div>
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input type="password" id="password" placeholder="password" />
          </div>

          <input type="radio" id="client" name="option" />
          <label className="status" htmlFor="client">client</label>

          <input className="radio" type="radio" id="Organizer" name="option" />
          <label className="status" htmlFor="Organizer">Organizer</label><br /><br />

          <input type="submit" value="Sign up" className="btn" />
        </form>
        <br></br><br></br><br></br><br></br>
      </section>
    );
  }
}

export default SignUp;