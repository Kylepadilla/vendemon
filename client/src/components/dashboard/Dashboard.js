import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { fetchAlerts} from "../../actions/alertsActions";
import MapContainer from '../Maps/index'
import Chat from '../Chat/Chat'
import Alerts from '../layout/Alerts'
import { Button, Row, Col, Modal } from 'react-materialize';
import SendAlert from "../SendAlert"



class Dashboard extends Component {


// Logs out the current user and sends them back to the home page
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


// loads and refreshes the alerts to  the dash board
  alert_Refresh = e =>{
    this.props.dispatch(fetchAlerts());
  }

  render() {
    const { user } = this.props.auth;
    const { error, loading, alerts } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (

<div className = "Dashboard">
        <Row>
          <Col s={6} className="teal white-text">
              <Modal header="Modal Header" fixedFooter trigger={<Button>Spot Something</Button>}>
                      <SendAlert></SendAlert>
              </Modal>  
              </Col>
          <Col s={6} className="teal white-text">
                <div className="landing-copy col s12 center-align">
                  <h4><b>Hey there,</b> {user.name.split(" ")[0]}</h4>
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
                  >Logout</button>
          <Modal header="Modal Header" trigger={<Button>Chat!</Button>}>
          <p>Chat below</p>
          <Chat/>
          </Modal> 
          </Col>
         </Row>

        <Row>
          {/* Alerts Container */}
          <Col s={4} className="teal white-text">
          {/* button that loads the alerts bar */}
          <Button onClick={this.alert_Refresh}>Refresh</Button>
          {/* maps over the alerts and displays the alerts */}
                     {alerts.map((alert) => {
                       return (
                      <Alerts
                    id= {alert.id}
                    key={alert.id}
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
  auth: state.auth,
  alerts: state.alerts.alerts,
  loading: state.alerts.loading,
  error: state.alerts.error
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);