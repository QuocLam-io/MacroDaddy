import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
<Link to="/">
      <div className="icon">
        <img src={require(`../images/IconButton (1).png`)} alt="" />
        <p>MACRO DADDY</p>
      </div>
</Link>
      <form className="nav-input" action="">
        <input
          //   className="nav-input"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <button className="mag-butt" type="submit">
          <img
            className="magnify"
            src={require(`../images/magnify.png`)}
            alt=""
          />
        </button>
      </form>

      <Link to="/userpage">
        <p className="user-butt">MY MACROS</p>
      </Link>
    </div>
  );
};

export default Navbar;
