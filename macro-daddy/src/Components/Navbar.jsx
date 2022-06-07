import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchResults, searchResults, callAxios }) => {
  const searchResultsHandler = (e) => {
    setSearchResults(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    callAxios();
    setSearchResults("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitHandler(event);
      console.log("Enter key pressed ✅");
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="icon">
          <img src={require(`../images/IconButton (1).png`)} alt="" />
          <p>MACRO DADDY</p>
        </div>
      </Link>

      <div className="nav-input" action="">
        <input
          //   className="nav-input"
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={searchResults}
          onChange={searchResultsHandler}
          onKeyDown={handleKeyDown}
        />

        <button className="mag-butt" type="submit" onClick={submitHandler}>
          <img
            className="magnify"
            src={require(`../images/magnify.png`)}
            alt=""
          />
        </button>
      </div>

      <Link to="/userpage">
        <p className="user-butt">MY MACROS</p>
      </Link>
    </div>
  );
};

export default Navbar;
