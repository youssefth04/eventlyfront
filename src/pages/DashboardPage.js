import React, { Component } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Card from "../component/Card/Card";
import Search from "../component/Search/Search";
import "./pages.css";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      cards: [
        { name: "MERTO BOOMIN", date: "22/06/2024", place: "Rabat", price: 150, img: "/img/metro.png" },
        { name: "SCH", date: "24/06/2024", place: "Rabat", price: 250, img: "/img/schh.png" },
        { name: "CAMILA CABELLO", date: "25/06/2024", place: "Rabat", price: 200, img: "/img/cam.png" },
        { name: "ELGRANDETOTO", date: "26/06/2024", place: "Rabat", price: 1, img: "/img/toto.jpeg" },
        { name: "CANTRAL CEE", date: "27/06/2024", place: "Rabat", price: 300, img: "/img/cee.png" },
        { name: "LARTISTE", date: "28/06/2024", place: "Rabat", price: 150, img: "/img/lartiste-.jpg" }
      ],
      basketQuantity: 0
    };
  }

  handleSortChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  handleAddToBasket = () => {
    this.setState((prevState) => ({
      basketQuantity: prevState.basketQuantity + 1
    }));
  };

  render() {
    const { sortBy, cards, basketQuantity } = this.state;
    const sortedCards = [...cards].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "price") {
        return a.price - b.price;
      }
      return 0;
    });

    return (
      <div>
        <Navbar f="none" g="none" quantity={basketQuantity}  svg={<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' fill='currentColor' className='bi bi-handbag-fill' viewBox='0 0 16 16'>
          <path d='M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z'/>
        </svg>} />
        <Search />
        <div className="sort-by">
          <span>Sort By:</span>
          <label>
            <input type="radio" name="sort" value="name" checked={sortBy === "name"} onChange={this.handleSortChange} /> Name
          </label>
          <label>
            <input type="radio" name="sort" value="date" checked={sortBy === "date"} onChange={this.handleSortChange} /> Date
          </label>
          <label>
            <input type="radio" name="sort" value="price" checked={sortBy === "price"} onChange={this.handleSortChange} /> Price
          </label>
        </div>
        <div className="container">
          {sortedCards.map((card, index) => (
            <Card key={index} name={card.name} date={card.date} place={card.place} price={card.price} img={card.img} onAddToBasket={this.handleAddToBasket} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;