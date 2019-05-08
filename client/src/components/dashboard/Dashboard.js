import React, { Component } from "react";
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import  {logoutUser}  from "../../actions/authActions";
import  MapContainer  from '../Maps'
import Chat from '../Chat/Chat'
import  Alerts  from '../layout/Alerts'
import { Button, Row, Col, Modal, Parallax, Collapsible, CollapsibleItem } from 'react-materialize';
import SendAlert from "../SendAlert"
import WeatherContainer from "../Weather"


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


{/* ============TRUE========================================= */}
{/* ================SHOW DASH=============== */}

{this.state.start ? (
  <div>
<Row>
{/* Col-start */}
<Col s={6} className="teal white-text">
<WeatherContainer/>

{/* ===================SEND ALERT BUTTON & MODAL=================== */}
        <Modal header="Modal Header" fixedFooter trigger={<Button>Send Alert</Button>}>
                <SendAlert></SendAlert>
        </Modal>  
</Col>


{/* Col-start */}
<Col s={6} className="teal white-text">

{/* =========================WELCOME....(name)==================== */}

          <div className="landing-copy col s12 center-align">
            <h4><b>Welcome Back, </b> {user.name.split(" ")[0]}</h4>

          </div>
{/* ============================LOG OUT BUTTON====================== */}
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >Logout</button>



{/* ================================WEATHER======================= */}




{/* ============================CHAT & MODAL======================== */}
    <Modal header="Modal Header" trigger={<Button>Chat!</Button>}>
    <p>Chat below</p>
    <Chat/>
    </Modal> 


</Col>
</Row>

  <Row>

{/* Col-start */}
<Col s={12} className="teal white-text">
{/* =======================ALERTS================ */}

<Collapsible popout>
<CollapsibleItem header="Saved Properties" icon="place">
<Alerts/>
</CollapsibleItem>
</Collapsible>

{/* ================================= */}
</Col> 
</Row>
<Row>
{/* Col-start */}
<Col s={4} className="teal white-text">
{/* ======================GOOGLE Maps Container=================== */}
 <MapContainer/>
 {/* ================================ */}
 </Col>



{/* ==========================EMPTY COLUMN======================== */}
    <Col s={4} className="teal white-text">
    
    
    </Col>

  </Row>
  </div>
) : (

<div>
<Parallax image={<img src="https://wallpaperplay.com/walls/full/5/2/6/99911.jpg" alt="unavailable" />} />
<div className="section white">
<div className="row container">
<h2 className="header">
<b>Welcome Back,</b> {user.name.split(" ")[0]}
</h2>
<p className="landing-copy col s12 center-align">
Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
</p>
<h3>Company Announcements:</h3>
<p>
Social media market equity investor innovator non-disclosure agreement founders conversion user experience. Entrepreneur virality responsive web design gen-z. IPhone paradigm shift research & development bootstrapping infographic. Return on investment A/B testing ramen.

Angel investor seed money direct mailing business plan social proof facebook stealth backing scrum project vesting period holy grail churn rate partnership low hanging fruit. Business model canvas android angel investor metrics traction startup research & development business-to-consumer influencer bandwidth. IPad monetization non-disclosure agreement business plan partnership disruptive validation early adopters low hanging fruit paradigm shift angel investor research & development facebook. Success venture creative handshake monetization mass market advisor infrastructure equity client.
</p>
<button type="button" className="btn btn-large waves-effect waves-light hoverable blue accent-3" onClick={this.onstart}>Dashboard</button>
</div>
</div>
<Parallax image={<img src="https://wallpaperplay.com/walls/full/5/2/6/99911.jpg" alt="unavailable" />} />
</div>

)
}

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