import React, { Component } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import "./payment.css";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    const storedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
    this.state = {
      selectedCards: storedCards,
    };
  }

  componentDidMount() {
    // Initialize PayPal button
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.calculateTotal(),
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              localStorage.removeItem("selectedCards");
              this.setState({ selectedCards: [] });
            });
          },
          onError: (err) => {
            console.error("PayPal Checkout onError", err);
          },
        })
        .render(".paypal-button-container");
    }
  }

  calculateTotal = () => {
    const { selectedCards } = this.state;
    return selectedCards.reduce((total, card) => total + card.price*0.1, 0).toFixed(2);
  };

  handleRemoveCard = (index) => {
    const updatedSelectedCards = [...this.state.selectedCards];
    updatedSelectedCards.splice(index, 1);
    this.setState({ selectedCards: updatedSelectedCards }, () => {
      // Update local storage after removing a card
      localStorage.setItem("selectedCards", JSON.stringify(updatedSelectedCards));
    });
  };

  render() {
    const { selectedCards } = this.state;

    return (
      <div>
        <Navbar f="none" g="none" quantity="none" />
        <br></br><br></br>

        <div className="container">
          {selectedCards.length > 0 ? (
            <div className="cards">
              {selectedCards.map((card, index) => (
                <div key={index} className="card">
                  <img src={card.img} alt={card.name} />
                  <div className="card-content">
                    <h2 className="card-title">{card.name}</h2>
                    <p className="card-info">Date: {card.date}</p>
                    <p className="card-info">Place: {card.place}</p>
                    <p className="card-info">Price: {card.price} MAD</p>
                    <button onClick={() => this.handleRemoveCard(index)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="paypal-button-container"></div>
            </div>
          ) : (
            <div className="empty-basket">Empty Basket</div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default PaymentPage;