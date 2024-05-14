import React, { Component } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Card from "../component/Card/Card";
import Search from "../component/Search/Search";
import "./pages.css"; 

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Navbar f="none" g="none" quantity={0} svg={<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' fill='currentColor' className='bi bi-handbag-fill' viewBox='0 0 16 16'>
  <path d='M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z'/>
</svg>}/>
        <Search />
        <div class="sort-by">
  <span>Sort By:</span>
  <label><input type="radio" name="sort" value="name" checked /> Name</label>
  <label><input type="radio" name="sort" value="date" /> Date</label>
  <label><input type="radio" name="sort" value="price" /> Price</label>
</div>
        <div className="container">
        <Card name="MERTO BOOMIN" date="22/06/2024" place="Rabat" price={150} img="/img/metro.png"  />
          <Card  name="SCH" date="24/06/2024" place="Rabat" price={150} img="/img/schh.png"  />
          <Card  name="CAMILA CABELLO" date="25/06/2024" place="Rabat" price={150} img="/img/cam.png"  />
          <Card name="ELGRANDETOTO" date="26/06/2024" place="Rabat" price={150} img="/img/toto.jpeg" />    
          <Card name="CANTRAL CEE" date="27/06/2024" place="Rabat" price={150} img="/img/cee.png"  />
          <Card name="LARTISTE" date="28/06/2024" place="Rabat" price={150} img="/img/lartiste-.jpg"  />
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;