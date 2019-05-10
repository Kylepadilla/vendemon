import React, { Component } from "react";
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import  {logoutUser}  from "../../actions/authActions";
import  MapContainer  from '../Maps';
import Chat from '../Chat/Chat';
import  Alerts  from '../layout/Alerts';
import { Button, Row, Col, Modal, Parallax, Collapsible, CollapsibleItem } from 'react-materialize';
import SendAlert from "../SendAlert";
// import WeatherContainer from "../Weather";
import Calendar from "../../components/Calendar";
import "./styles.css";
import ZillowWidget from "../Widget";
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Vendi-README_image.png'
import icon from '../../assets/images/Vendi-Icon_Big.png'

class Dashboard extends Component {

    state = {
        alerts:[],
        start: false
}

// Logs out the current user and sends them back to the home page
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


//this click handler is assigned to the weather component ternary operator
  clickHandler = e => {
    this.state.showWeather ?  
    (this.setState({showWeather: false})) : (this.setState({showWeather: true}))
}

  onstart = e => {
    this.state.start ? 
    (this.setState({start: false})) : (this.setState({start: true}))
}

render() {
    const { user } = this.props.auth;

return(
<div className = "Dashboard-Container">

{/* =============TERNARY OPERATOR START ? (TRUE: SHOW DASH):(FALSE: SHOW PARALLAX)=========== */}

{/* ================================SHOW DASH=============================================== */}
{/* ======================================================================================== */}
{this.state.start ? (
  <div>
          <nav style={{backgroundColor:"white"}}>
      {/* <div className="nav-wrapper" style={{"height": "165px", "backgroundColor": "white"}}> */}
        <Link to="/" className="brand-logo"><img src={icon} alt="unavailable"/><div>
        <div className="landing-copy col s12 left-align" style={{marginTop:"100px"}}>
      <h4><b>Welcome Back, </b> {user.name.split(" ")[0]}</h4>
    </div>
          </div></Link>

</nav>
{/* New Row */}
<Row>

{/* Col-start */}
<Col s={12} className="white black-text">


{/* =====================================WELCOME============================================= */}


{/* ================================================================================== */}

{/* ================================Weather======================================= */}
                                {/* <WeatherContainer/> */}
{/* ========================================================================================= */}
<div className="center-align all-features">
{/* =============================Calendar & Modal================================ */}
          <Modal header="Calendar" fixedFooter trigger={<Button>Calendar</Button>}>
                      <Calendar></Calendar>
        </Modal>  
{/* ============================================================================== */}
  
  
  





{/* ============================CHAT & MODAL======================== */}
        <Modal header="Chat" trigger={<Button>Chat!</Button>}>
                      <Chat/>
        </Modal> 
{/* ============================================================== */}




{/* ===================SEND ALERT BUTTON & MODAL=================== */}
        <Modal header="Alerts" fixedFooter trigger={<Button>Send Alert</Button>}>
                              <SendAlert></SendAlert>
        </Modal>  
{/* ========================================================== */}



{/* ============================LOG OUT BUTTON====================== */}
        <Button onClick={this.onLogoutClick}>Log Out</Button>           
{/* ===================================================================== */}
</div>



</Col>



</Row>


{/* New Row */}
  <Row>
{/* Col-start */}
<Col s={12} className="white black-text">



{/* =======================ALERTS================ */}

          <Collapsible popout>
              <CollapsibleItem header="Saved Properties" icon="place">
                          <Alerts/>
            </CollapsibleItem>
          </Collapsible>
{/* ========================================================= */}
</Col> 
</Row>


{/* Row Start */}
<Row>
{/* Col-start */}
<Col s={6} className="white black-text">




{/* ======================GOOGLE Maps Container=================== */}
                              <MapContainer/>
 {/* ========================================================= */}

 </Col>
<Col>


{/* ================================Zillow Widget======================================= */}
                                <ZillowWidget></ZillowWidget>
{/* ========================================================================================= */}



</Col>


        
</Row>
  </div>

) : (
  // =====================================Announcements Render============================
  // =================================================================================

// This is what renders on load and is the announcements page for the user
<div>
<Parallax image={<img src="https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="unavailable" />} />
<div className="section white">
<div className="row container" style={{marginLeft:"auto" }}>
<h2 className="header">
<b>Welcome Back,</b> {user.name.split(" ")[0]}
</h2>
<p className="landing-copy col s12 center-align">
</p>
<h3 className='row' styles={"margin-top: 35px"}>Company Announcements:</h3>

<p>
Social media market equity investor innovator non-disclosure agreement founders conversion user experience. Entrepreneur virality responsive web design gen-z. IPhone paradigm shift research & development bootstrapping infographic. Return on investment A/B testing ramen.

Angel investor seed money direct mailing business plan social proof facebook stealth backing scrum project vesting period holy grail churn rate partnership low hanging fruit. Business model canvas android angel investor metrics traction startup research & development business-to-consumer influencer bandwidth. IPad monetization non-disclosure agreement business plan partnership disruptive validation early adopters low hanging fruit paradigm shift angel investor research & development facebook. Success venture creative handshake monetization mass market advisor infrastructure equity client.
</p>
<button type="button" className="btn btn-large waves-effect waves-light hoverable darkslategray  accent-2" onClick={this.onstart}>Dashboard</button>
</div>
</div>
<Parallax image={<img src="https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="unavailable" />} />
</div>

)
}

{/* divwraper */}
</div>
    );
  }


}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});



export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);