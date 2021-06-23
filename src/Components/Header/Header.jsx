import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  state = {
    newMovieName: "",
  };

  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({
      newMovieName: value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      this.props.setMovies(this.state.newMovieName);
    }
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/sushberiwal/Dev_PP/master/Module3_React/movies/public/logo.svg" alt="" />
        </div>
        <div className="search-btn">
          <input
            className="search-movies"
            value={this.state.newMovieName}
            type="text"
            placeholder="Search"
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>

        <div className="header-links">
          <div className="header-link">
            <Link to="/">Home</Link>
          </div>

          <div className="header-link">
            <Link to="/fav">Favourites</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;