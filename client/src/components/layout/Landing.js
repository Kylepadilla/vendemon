import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row,Col,Slide, Caption,Slider } from "react-materialize";

class Landing extends Component {
  render() {
    return (
      <div className = "landing">
      <Row>
      <Col s={12} className="white black-text" style={{ }}>
      <div style={{ height: "30vh", marginLeft:"auto", marignRight:"auto", }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align" style={{marginLeft:"110px"}}>
          <h4>
            Make Money Fast with the{" "}
              <b>Vendemon</b> App
          </h4>
          <p className="flow-text grey-text text-darken-1">

          </p>
          <br />
          <Link to="/register"
        
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Register
          
          </Link>
          <Link to="login"
            style={{
              marginLeft: "2rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect white hoverable black-text"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
      </Col>
      </Row>
      <Row>
      <Col s={12} className="white black-text">
      
<Slider>
<Slide image={<img alt="Register Now" src="https://images.pexels.com/photos/935870/pexels-photo-935870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />}>
<Caption>
<h3 style={{ fontSize:"80px"  } }>
Register Now 
</h3>
<h5 className="light grey-text text-lighten-3">
Lets Make Business!
</h5>
</Caption>
</Slide>
<Slide image={<img alt="Upload" src="https://images.pexels.com/photos/2223042/pexels-photo-2223042.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />}>
<Caption placement="left">
<h3>
Upload a Photo Now
</h3>
</Caption>
</Slide>
<Slide image={<img alt="Commission" src="https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />}>
<Caption placement="left">
<h3>
Get Rewards
</h3>
</Caption>
</Slide>
</Slider>
      </Col>
      </Row>
      </div>
     
    );
  }
}
export default Landing;

