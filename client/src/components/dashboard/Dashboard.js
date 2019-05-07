import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import MapContainer from '../Maps/index'
import Chat from '../Chat/Chat'
import Alerts from '../layout/Alerts'
import { Button, Row, Col, Modal, TextInput, Checkbox } from 'react-materialize';
import API from "../../utils/API";



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

      <div>
        <Row>
          <Col s={4} className="teal white-text">
          <Modal header="Modal Header" fixedFooter trigger={<Button>Spot Something</Button>}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
<TextInput placeholder="Name" />
<TextInput placeholder="Address" />
<TextInput placeholder="Description" />
<TextInput placeholder="Estimated Cost" />
<TextInput placeholder="Materials Needed (optional)" />
<Checkbox
  value="Red"
  label="Landscape"
  filledIn
  checked
/>
<Checkbox
  value="Red"
  label="Tree"
  filledIn
  checked
/>
<Checkbox
  value="Red"
  label="irrigation"
  filledIn
  checked
/>
<Checkbox
  value="Red"
  label="other"
  filledIn
  checked
/>
 <Button>Submit</Button>
</Modal>
</Col>
          <Col s={4} className="teal white-text">

</Col>
          <Col s={3} className="teal white-text">
         
              
                <div className="landing-copy col s12 center-align">
                  <h4>
                    <b>Hey there,</b> {user.name.split(" ")[0]}
                  </h4>
                </div>
                <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
          </button>
          <Modal header="Modal Header" trigger={<Button>Chat!</Button>}>
          <p>Chat below</p>
          <Chat></Chat>
          </Modal>
           
</Col>
        </Row>

        <Row>
          {/* Alerts Container */}
          <Col s={4} className="teal white-text">
          {/* button that loads the alerts bar */}
          <Button onClick={this.alert_Refresh()}></Button>

          {/* maps over the alerts and displays the alerts */}
                     {this.state.alerts.map((alert, i) => {
                       return (
                      <Alerts
                    id= {alert._id}
                    team_id={alert.team_id}
                    location={alert.location}
                    est_Cost={alert.est_Cost}
                    job_Type={alert.job_Type}
                    job_Description={alert.job_Description}
                    post_date={alert.post_date}
                    />);
                    }
                    )}
                                        
          </Col> 
            {/* Map container */}
          <Col s={7} className="teal white-text">
            <MapContainer></MapContainer>
          </Col>

          

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