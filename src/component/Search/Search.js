import React,{Component} from "react";
import "./Search.css"

class Search extends Component{
    render(){
        return(
            <div>
                <div class="search-container">
  <input type="text" id="searchInput" placeholder="Search..."></input>
  <button type="button" onclick="search()">Search</button>
</div>

            </div>

        )
    }
}
export default Search;