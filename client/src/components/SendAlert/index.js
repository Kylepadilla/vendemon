import React, { Component } from "react";
import API from "../../utils/API";



class SendAlert extends Component{
        state = {
            Team_ID: '',
            Type: '',
            Address:'',
            City:'',
            Description:'',
        };


    handleInputChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        };
    
    handleCheck = (e) => {
            let jobType = e.target.value

            console.log(jobType)
            this.setState({
                Type: jobType
            })
        }
    sendAlert = e => {
            API.saveAlert({
                Team_ID: this.state.Team_ID.toString(),
                Type: this.state.Type,
                Address: this.state.Address,
                City: this.state.City,
                Description: this.state.Description
            })
            .then( res => alert(this.state.Team_ID +" has been posted "+ res.data ))
            .catch( err => console.log( err ))
        }
    

 render(){
    return (   
        // FORM FOR SUBMITTING AN ALERT
        <div className="row">
        <form className="col s12">
        {/* Team_ID input */}
          <div className="row">
            <div className="input-field col s6">
              <input 
              placeholder="Team_ID" 
              id="Team_ID" 
              type="text" 
              className="validate"
              onChange={this.handleInputChange}
              name="Team_ID"
              value={this.state.Team_ID}/>
              <span className="helper-text" data-error="wrong" data-success="right">ask your superviser if unsure</span>
            </div>
            </div>

              {/* =====CHECK BOXES===== */}
{/* LawnMaintenance */}
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in" 
        value="Lawn Maintenance"
        onChange={this.handleCheck}
         />
        <span>Lawn Maintenance</span>
      </label>
    </p>
{/* LandscapeImprovements */}
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in" 
        name="Type"
        value="Landscape Impropvements"
        onChange={this.handleCheck} />
        <span>Landscape Improvments</span>
      </label>
    </p>
{/* Tree Work */}
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in"
        name="Type" 
        value="Tree Work"
        onChange={this.handleCheck} />
        <span>Tree Work</span>
      </label>
    </p>
{/* Irrigation */}
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in"
        name="Type" 
        value="Irrigation"
        onChange={this.handleCheck} />
        <span>Irrigation</span>
      </label>
    </p>
             {/* ======INPUT AREA===== */}
{/* Address */}
    <div className="row">
            <div className="input-field col s6">
              <input 
              placeholder="123 Main St." 
              id="Address" 
              type="text" 
              className="validate"
              onChange={this.handleInputChange}
              name="Address"
              value={this.state.Address}/>
              <span className="helper-text" data-error="wrong" data-success="right">Address</span>
            </div>
{/* City */}
            <div className="input-field col s6">
              <input 
              placeholder="Orlando" 
              id="City" 
              type="text" 
              className="validate"
              onChange={this.handleInputChange}
              name="City"
              value={this.state.City}/>
              <span className="helper-text" data-error="wrong" data-success="right">City</span>
            </div>
            </div>
{/* Description */}
            <div className="row">
            <div className="input-field col s12">
              <input 
              placeholder="Please be as descriptive as possible..." 
              id="Description" 
              type="text" 
              className="validate"
              onChange={this.handleInputChange}
              name="Description"
              value={this.state.Description}/>
            </div>
            </div>
            <button onClick={this.sendAlert} className="btn btn-outline-secondary">Submit</button>
</form>
</div>
      
)
}
}

export default SendAlert


