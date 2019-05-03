import React, {Component} from 'react'
import { OpenWeatherMap } from 'react-weather';
import axios from 'axios'

class Weather extends Component {
state = {
    lon: '',
    lat: '',
    city: '',
    country:''
}

Geocode(){
let api = 'AIzaSyDcjOBGMGmfQdfQ5odnm2azxH11GQ_YMZo'
    axios.get("https://www.googleapis.com/geolocation/v1/geolocate?key=" + api).then(res=>{
        console.log(res.data)
        this.setState({
            lon: res.data.lon,
            lat: res.data.lat
        })
        }).then(
            axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.state.lat+","+this.state.lon+"&key="+api).then(res=>{
                console.log(res.data)
                this.setState({
                    city: res.data.city,
                    country: res.data.country
                })
            })
        )
}

render(){
return(
<div className="weather">
<OpenWeatherMap city={this.state.city} country={this.state.country} appid="35784240997be91f92a57a40329788d1" />
</div>
)}

}
export default Weather;