import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, date, place, price, img, onAddToBasket } = this.props;

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
              <button className="buy-btn" onClick={onAddToBasket}>
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