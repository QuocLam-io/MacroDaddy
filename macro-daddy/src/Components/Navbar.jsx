import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={require(`../images/IconButton (1).png`)} alt="" />
        <p>MACRO DADDY</p>
      </div>
      <input className="nav-input" type="text" name="" id="" placeholder="Search" />
      <p className="user-butt">MY MACROS</p>
    </div>
  );
};

export default Navbar;
