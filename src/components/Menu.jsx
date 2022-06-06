import React from "react";
import Forms from "./Forms";

const Menu = () => {
  return (
    <>
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>Diogo Matias</h3>
          </div>
          <div className="item-menu">
            <a href="">Login</a>
          </div>
        </div>
        <Forms />
      </div>
    </>
  );
};

export default Menu;
