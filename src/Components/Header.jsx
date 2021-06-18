import React from "react";
import '../Deign/Home.css';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className="header">
            <div className="logo">
            <h1>D</h1><h1>p</h1><h1>o</h1><h1>s</h1><h1>t</h1>
            </div>

            <div className="a">
              <span>    <NavLink className="NavLink" exact to="/" >Home</NavLink> </span>
              <span>    <NavLink className="NavLink" exact to="/images" >Image</NavLink>  </span>
              <span>    <NavLink className="NavLink" exact to="/about" >About Us</NavLink> </span>
              <span>    <NavLink className="NavLink" exact to="/contact" >Contact Us</NavLink> </span>
            </div>

          </div>
        </>
    )
}

export default Header;