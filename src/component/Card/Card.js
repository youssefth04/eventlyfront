import React, { Component } from "react";

class Card extends Component {
  handleAddToBasket = () => {
    const { name, date, place, price, img, onAddToBasket } = this.props;
    // Pass relevant information to parent component
    onAddToBasket({ name, date, place, price, img });
  };

  render() {
    const { name, date, place, price, img } = this.props;

    return (
      <div>
        <div className="container">
          <div className="card">
            <img src={img} alt="Event 1"></img>
            <div className="card-content">
              <h2 className="card-title">{name}</h2>
              <p className="card-info">Date: {date}</p>
              <p className="card-info">Place: {place}</p>
              <p className="card-info">Price: {price} MAD</p>
              <button className="buy-btn" onClick={this.handleAddToBasket}>
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;