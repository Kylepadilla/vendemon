import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './styles.css'


require('dotenv').config()

 
export class MapContainer extends Component {
  
  render() {
    return (
      
      <Map style={style}  id="map" google={this.props.google} zoom={14}>      
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
      
    );
  }
}

const style = {
  maxWidth: '45%',
  height: '40vh',
  marginLeft: "25px"

}


 

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)