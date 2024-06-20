import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm); // Call the onSearch function passed as prop
  };

  render() {
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;