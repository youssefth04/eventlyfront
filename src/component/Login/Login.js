import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <h1 className="heading"><span>Log</span> In</h1>

        <form action="">
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input type="text" id="username" placeholder="username" />
          </div>
          <div className="inputBox" style={{ height: "2em", marginBottom: "6em", marginLeft: "25em" }}>
            <input type="password" id="password" placeholder="password" />
          </div>

          <input type="submit" value="Log in" className="btn" />
        </form>
        <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </section>
      
    );
  }
}

export default Login;