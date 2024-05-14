import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#"> <i className="fas fa-envelope"></i> eventlty@gmail.com </a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i className="fab fa-linkedin-in"></i> linkedin </a>
          </div>
        </div>
        <div className="credit">
          Copyright © 2024 | all rights reserved
        </div>
      </section>
    );
  }
}

export default Footer;