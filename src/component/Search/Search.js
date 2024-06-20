import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "", // State to store the search text
    };
  }

  // Function to handle input change
  handleInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  // Function to handle search button click
  handleSearch = () => {
    const { searchText } = this.state;
    // Call a function to perform the search action with searchText
    console.log(`Searching for: ${searchText}`);
    // You can implement the actual search logic here, such as filtering cards based on searchText
    // For now, let's assume you have a prop function to handle search in parent component
    this.props.onSearch(searchText); // Assuming onSearch is a prop function passed from parent
  };

  render() {
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Search..."
            value={this.state.searchText}
            onChange={this.handleInputChange} // Bind input value to state
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