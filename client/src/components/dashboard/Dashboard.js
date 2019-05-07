import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import MapContainer from '../Maps/index'
import Chat from '../Chat/Chat'
import Alerts from '../layout/Alerts'
import { Button, Row, Col, Modal } from 'react-materialize';
import API from "../../utils/API";
import SendAlert from "../SendAlert"



class Dashboard extends Component {

  state = {
    alerts: [],
  }

// Logs out the current user and sends them back to the home page
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


// loads and refreshes the alerts to  the dash board
  alert_Refresh = i =>{
      API.getAlerts()
        .then(res=>{
          console.log(res.data)
          this.setState({
            alerts: res.data
          })
          .catch(err=>console.log(err))
        })
  }

  render() {
    const { user } = this.props.auth;

    return (

<div className = "Dashboard">
        <Row>
          <Col style={{ width:"100"}} s={6} className="white black-text">
          <h5>Please fill the information about the area that you spot a task for the company to fulfill.</h5>
          <br></br>
              <Modal header="Modal Header" fixedFooter trigger={<Button>Spot Something</Button>} >
                      <SendAlert></SendAlert>
              </Modal>  

              <Modal header="Modal Header" trigger={<Button>Chat!</Button>}>
              <p>Chat below</p>
              <Chat/>
              </Modal> 
              </Col>
          <Col s={6} className="white black-text" style={{textAlign:"center"}}>
                <div className="landing-copy col s12 center-align">
                  <h4><b>Hey there,</b> {user.name.split(" ")[0]}</h4>
                </div>
                <button
                    style={{
                      
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      marginRight: "10px",
                      marginBottom:"10px",
                      textAlign: "center"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >Logout</button>
         
          </Col>
         </Row>

        <Row>
          {/* Alerts Container */}
          <Col s={4} className="green white-text">
          {/* button that loads the alerts bar */}
          <Button onClick={this.alert_Refresh}>Refresh</Button>
          {/* maps over the alerts and displays the alerts */}
                     {this.state.alerts.map((alert, i) => {
                       return (
                      <Alerts
                    id= {alert._id}
                    Team_ID={alert.Team_ID}
                    Type={alert.Type}
                    Address={alert.Address}
                    City={alert.City}
                    Description={alert.Description}
                    post_date={alert.post_date}
                    />);
                    }
                    )}</Col> 
            {/* Map container */}
          <Col s={4} className="teal white-text"><MapContainer/></Col>

          {/* Chat Modal */}
          <Col s={4} className="teal white-text">Hello</Col>

        </Row>
</div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);