import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import MapContainer from '../Maps/index'
import Chat from '../Chat/Chat'
// import Weather from '../Weather/index'
import {Row , Col } from 'react-materialize'
// import { OpenWeatherMap } from 'react-weather';


class Dashboard extends Component {


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
    const { user } = this.props.auth;

    return (
<div>
<Row>
<Col s={4} className="teal white-text">
<div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              </h4>
              <div>
              {/* <OpenWeatherMap city="Jerusalem" country="IL" appid="35784240997be91f92a57a40329788d1" /> */}
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

          </div>
        </div>
      </div>
</Col>
<Col s={4} className="teal white-text">
<MapContainer></MapContainer>
</Col>
<Col s={3} className="teal white-text">
<Chat></Chat>
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