import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Vendi-README_image.png'
import './Styles/navLanding.css'




class NavbarLanding extends Component {



  render() {
    return (
      <nav>
      <div className="nav-wrapper" style={{"height": "165px", "backgroundColor": "white"}}>
        <Link to="/" className="brand-logo"><img src={logo} alt="unavailable"/></Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down" style={{"height": "165px"}}>
         <Link to='login' className='left'> <li className="navLand">Buy</li></Link>
         <Link to='login' className='left'> <li className="navLand">Sell</li></Link>
         <Link to='login' className='left'> <li className="navLand">Find Listing</li></Link>
         <Link to='login' className='left'> <li className="navLand">News & Insights</li></Link>
         <Link to='login' className='right'> <li className="navLand">Login</li></Link>
         <Link to='login' className='right'> <li className="navLand">Sign-Up</li></Link>
        </ul>
      </div>
    </nav>


    );
  }
}
export default NavbarLanding;