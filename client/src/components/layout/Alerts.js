import React, { Component }from 'react';
import axios from 'axios'
import AlertContainer from './AlertContainer';

class Alerts extends Component {
    state = {
        alerts:[],
    }


componentDidMount(){
    axios.get("/api/alerts/create")
    .then(res => this.setState({alerts: res.data}))
}

loadSaved(){
    axios.get("/api/alerts/create")
    .then(res => this.setState({alerts: res.data}))
}

removeAlert = i =>{

    const property =  this.state.alerts[i]._id
            
    console.log(property)
    axios.get("/api/alerts/create/" + property)
      .then( res => this.loadSaved())
      .catch(err => console.log(err));

}

render() {
    return(
        <div>
            {this.state.alerts[0] ? ( 
                <div>
                {this.state.alerts.map((alert, i) => {
            return (
                  <AlertContainer
                      id= {i}
                      key={alert._id}
                      Property_ID={alert.Property_ID}
                      Type={alert.Type}
                      Address={alert.Address}
                      City={alert.City}
                      Bedroom={alert.Bedrooms}
                      Bath={alert.Bath}
                      Pool={alert.Pool}
                      sqft={alert.sqft}
                      realtor={alert.realtor}
                      phone={alert.phone}
                      price={alert.price}
                      post_date={alert.post_date}
                      onclick={this.removeAlert}
                      />);})}
                      </div>):(<h4>No Results To Display</h4>)}
       
        </div>

    )
}


}

export default Alerts

