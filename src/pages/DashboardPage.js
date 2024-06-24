import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Card from "../component/Card/Card";
import Search from "../component/Search/Search";
import "./payment.css";


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      cards: [
        { name: "METRO BOOMIN", date: "22/06/2024", place: "Rabat", price: 150, img: "/img/metro.png" },
        { name: "SCH", date: "24/06/2024", place: "Rabat", price: 250, img: "/img/schh.png" },
        { name: "CAMILA CABELLO", date: "25/06/2024", place: "Rabat", price: 200, img: "/img/cam.png" },
        { name: "ELGRANDETOTO", date: "26/06/2024", place: "Rabat", price: 1, img: "/img/toto.jpeg" },
        { name: "CENTRAL CEE", date: "27/06/2024", place: "Rabat", price: 300, img: "/img/cee.png" },
        { name: "LARTISTE", date: "28/06/2024", place: "Rabat", price: 150, img: "/img/lartiste-.jpg" },
        
      ],
      filteredCards: [],
      basketQuantity: 0,
      selectedCards: [],
    };
  }

  componentDidMount() {
    const storedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
    this.setState({ selectedCards: storedCards, basketQuantity: storedCards.length });
  }

  handleSortChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  handleAddToBasket = (card) => {
    this.setState((prevState) => {
      const updatedSelectedCards = [...prevState.selectedCards, card];
      localStorage.setItem("selectedCards", JSON.stringify(updatedSelectedCards));
      return {
        basketQuantity: prevState.basketQuantity + 1,
        selectedCards: updatedSelectedCards,
      };
    });
  };

  handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredCards = this.state.cards.filter((card) => {
      const lowerCaseCardName = card.name.toLowerCase();
      return lowerCaseCardName.includes(lowerCaseSearchTerm);
    });
    this.setState({ filteredCards });
  };

  render() {
    const { sortBy, cards, filteredCards, basketQuantity } = this.state;
    const cardsToDisplay = filteredCards.length > 0 ? filteredCards : cards;
    const sortedCards = [...cardsToDisplay].sort((a, b) => {
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
        <Navbar
          f="none"
          g="logout"
          quantity={basketQuantity}
          svg={
            <Link to="/payment">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-handbag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
              </svg>
            </Link>
          }
        />
        <Search onSearch={this.handleSearch} />
        <div className="sort-by">
          <span>Sort By:</span>
          <label>
            <input
              type="radio"
              name="sort"
              value="name"
              checked={sortBy === "name"}
              onChange={this.handleSortChange}
            />{" "}
            Name
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="date"
              checked={sortBy === "date"}
              onChange={this.handleSortChange}
            />{" "}
            Date
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="price"
              checked={sortBy === "price"}
              onChange={this.handleSortChange}
            />{" "}
            Price
          </label>
        </div>
        <div className="container">
          {sortedCards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              date={card.date}
              place={card.place}
              price={card.price}
              img={card.img}
              onAddToBasket={() => this.handleAddToBasket(card)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;