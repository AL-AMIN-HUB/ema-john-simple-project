import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      <img className="header-logo" src={logo} alt="" />

      <nav className="nav mt-2">
        <a href="/shop">Shop</a>
        <a href="/order review">Order Review</a>
        <a href="/manage inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
