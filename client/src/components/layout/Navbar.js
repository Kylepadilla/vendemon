import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Vendi-README_image.png'





class Navbar extends Component {


  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link to="/" style={{fontFamily: "monospace"}}className="col s5 brand-logo left-align black-text">
                  <img src={logo} alt="unavailable"/>
            </Link>
          </div>
        </nav>
      </div> 
    );
  }
}
export default Navbar;