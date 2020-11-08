import React from "react";

const NavBar1 = () => {
  return (
    <div className="header">
      <div className="panel-header">
        <div className="menu-section" onClick="openNav()"></div>
        <div className="logo">
          <img
            src="https://www.jiomart.com/assets/version1604079743/smartweb/images/jiomart_logo_beta.svg"
            alt="JioMart, Online Groceries Shop"
          ></img>
        </div>
        <div className="search-bar">
          <div className="block-search"></div>
        </div>
        <div className="login"></div>
        <div className="cart"></div>
      </div>
    </div>
  );
};

export default NavBar1;
