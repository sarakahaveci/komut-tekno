import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="top">
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">Motors</li>
            <li className="topListItem">Electronics</li>
            <li className="topListItem"> Real Estate</li>
            <li className="topListItem"> Furniture</li>
            <li className="topListItem"> Fitness</li>
            <li className="topListItem"> Books</li>
            <li className="topListItem"> Hand Tools</li>
            <li className="topListItem"> Books</li>
            <li className="topListItem"> Fashion</li>
            <li className="topListItem"> Sports</li>
          
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://image.shutterstock.com/image-vector/female-silhoutte-avatar-default-profile-260nw-1219366543.jpg"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
