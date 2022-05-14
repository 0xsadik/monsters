import { Component } from "react";

import "./Search-box.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        // placeholder="search monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
