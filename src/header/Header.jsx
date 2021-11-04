import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Komut Tekno</span>
      </div>
      <div className = "head-text">
      <img
        className="headerImg"
        src="https://www.ikea.com/gb/en/images/products/ektorp-3-seat-sofa-remmarn-light-grey__0924993_pe788685_s5.jpg?f=s  "
        alt=""
      />

      </div>
      <div class='text-on-image'>
      <span> Work <br/>
       Smarter Save </span>
      <span> Smarter </span>
      <p>Get 10% off every month</p>
      <button >Know More</button>
   </div>
    </div>
  );
}

export default Header;
