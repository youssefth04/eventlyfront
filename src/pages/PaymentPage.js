import React, { Component } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import "./pages.css";

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
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.calculateTotal(), // Total amount to be paid
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          // Capture the transaction
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            // Clear selected cards from local storage after successful payment
            localStorage.removeItem("selectedCards");
            this.setState({ selectedCards: [] });
          });
        },
        onError: (err) => {
          // Handle errors
          console.error("PayPal Checkout onError", err);
        },
      }).render(".paypal-button-container");
    }
  }

  calculateTotal = () => {
    const { selectedCards } = this.state;
    return selectedCards.reduce((total, card) => total + card.price, 0).toFixed(2);
  };

  render() {
    const { selectedCards } = this.state;

    return (
      <div>
        <Navbar
          f="none"
          g="none"
          quantity="none"
        />
        <div className="container">
          {selectedCards.length > 0 ? (
            <div>
              {selectedCards.map((card, index) => (
                <div key={index} className="card">
                  <img src={card.img} alt={card.name} />
                  <div className="card-content">
                    <h2 className="card-title">{card.name}</h2>
                    <p className="card-info">Date: {card.date}</p>
                    <p className="card-info">Place: {card.place}</p>
                    <p className="card-info">Price: {card.price} MAD</p>
                  </div>
                </div>
              ))}
              <div className="paypal-button-container"></div>
            </div>
          ) : (
            <p>No cards selected.</p>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default PaymentPage;