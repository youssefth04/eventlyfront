import React, { Component } from "react";

class Navbar extends Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/authentification"; // Redirect to home page after logout
  };
  render() {
  
    const{a,b,c,d,e,f,g,svg,quantity}=this.props
    return (
      <header className="header">
        <a href="#" className="logo"><span>E</span>vently</a>

        <nav className="navbar">
          <a href="#home">{a}</a>
          <a href="#about">{b}</a>
          <a href="#gallery">{c}</a>
          <a href="#review">{d}</a>
          <a href="#contact">{e}</a>
          {f !== "none" && <a href="inscription" className="btn" >{f}</a>}
         {g!=="none" && <a href="authentification" className="btn" onClick={this.handleLogout}>{g}</a>}
         <a>{svg}</a>
         {quantity!=="none" &&  <span className="bag-quantity">
          <span>{quantity}</span>
         </span>}
        
        </nav>

        <div id="menu-bars" className="fas fa-bars"></div>
      </header>
    );
  }
}

export default Navbar;