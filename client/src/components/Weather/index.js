import React, {Component} from 'react';
import axios from 'axios';
import "./styles.css";

class WeatherContainer extends Component {
    constructor () {
        super()
this.state = {
    forecast: '',
    tempMax: '',
    tempMin:'',
    sunset:''
}
}

componentDidMount(){
let api = '35784240997be91f92a57a40329788d1';
axios.get("http://api.openweathermap.org/data/2.5/weather?q=orlando,us&appid="+api)
            .then( res => {
                console.log(res.data);
                const forecast = res.data.weather.main;
                const tempMax = res.data.main.temp_max;
                const tempMin = res.data.main.temp_min;
                const sunset = res.data.sys.sunset;
                this.setState({
                    forecast: forecast,
                    tempMax: tempMax,
                    tempMin: tempMin,
                    sunset: sunset                
                });
            })
            .catch(err=> console.log(err))
        };

render(){

return(
<div className="weather" >

<div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Orlando, Fl</span>
                <ul>
                    <li><b>{this.state.forecast}</b></li>
                    <li>high: {this.state.tempMax}</li>
                    <li>Low: {this.state.tempMin}</li>
                    <li>Sunset: {this.state.sunset}</li>
                </ul>
        </div>
      </div>
    </div>
  </div>
            
</div>
)
};
}

export default WeatherContainer

