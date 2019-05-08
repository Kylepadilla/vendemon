import React, { Component } from "react";

import { sendAlert } from "../../actions/alertsActions"



class SendAlert extends Component{
constructor(){
  super()
       this.state = {
            Type: '',
            Address:'',
            City:'',
            Bath: '',
            Bedrooms: '',
            Pool: '',
            sqft: '',
            realtor: '',
            phone: '',
            price: '',
        };
      }

    handleInputChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        };
    
    handleCheck = (e) => {
            let property = e.target.value

            console.log(property)
            this.setState({
                Type: property
            })
        }

    submitAlert = e => {

      e.preventDefault();

      const alertData = {
        Type: this.state.Type,
        Address:this.state.Address,
        City:this.state.City,
        Bath: this.state.Bath,
        Bedrooms: this.state.Bedrooms,
        Pool: this.state.Pool,
        sqft: this.state.sqft,
        realtor: this.state.realtor,
        phone: this.state.phone,
        price: this.state.price
      };

     sendAlert(alertData);
     console.log(alertData)
    }
    

 render(){

    return (   
        // FORM FOR SUBMITTING AN ALERT
        <div className="row">
        <form className="col s12">
              {/* =====CHECK BOXES===== */}
{/* FOR SALE */}
        <div className="row">
        <div className="col s6">
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in"
        name="Type"
        value="For Sale"
        onChange={this.handleCheck}
        disabled={this.state.Type === "For Rent" || "Potential Lead" ? ("True") : ("false")} />
        <span>For sale</span>
      </label>
    </p>
{/* FOR RENT*/}
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in" 
        name="Type"
        value="For Rent"
        onChange={this.handleCheck}
        disabled={this.state.Type === "For Sale" || "Potential Lead" ? ("True") : ("false")} />
        <span>For Rent</span>
      </label>
    </p>
{/* POTENTIAL LEAD */}
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in"
        name="Type" 
        value="Potential Lead"
        onChange={this.handleCheck}
        disabled={this.state.Type === "For Rent" || "For Sale" ? ("True") : ("false")} />
        <span>Potential Lead</span>
      </label>
    </p>
    </div>
    </div>
             {/* ======INPUT AREA===== */}
{/* Address */}
    <div className="row">
            <div className="input-field col s6">
              <input 
              placeholder="123 Main St." 
              id="Address" 
              type="text" 
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
              onChange={this.handleInputChange}
              name="City"
              value={this.state.City}/>
              <span className="helper-text" data-error="wrong" data-success="right">City</span>
            </div>
            </div>

{/* Bedrooms */}
            <div className="row">
            <div className="input-field col s3">
              <input 
              placeholder="Bedrooms" 
              id="Bedrooms" 
              type="text" 
              onChange={this.handleInputChange}
              name="Bedrooms"
              value={this.state.Bedrooms}/>
            </div>
{/* Bath */}
            <div className="input-field col s3">
              <input 
              placeholder="Bath" 
              id="Bath" 
              type="text" 
              onChange={this.handleInputChange}
              name="Bath"
              value={this.state.Bath}/>
              </div>

            {/* Sqft */}
            <div className="input-field col s3">
              <input 
              placeholder="SqFt" 
              id="sqft" 
              type="text" 
              onChange={this.handleInputChange}
              name="sqft"
              value={this.state.sqft}/>
            </div>
            </div>

{/* Pool */}
<div className="row">
    <p>
      <label>
        <input 
        type="checkbox" 
        className="filled-in"
        name="Pool" 
        value="YES"
        onChange={this.handleCheck} />
        <span>Pool</span>
      </label>
    </p>
    </div>
{/* Realtor */}
    <div className="row">
            <div className="input-field col s6">
              <input 
              placeholder="Realtor" 
              id="Realtor" 
              type="text" 
              onChange={this.handleInputChange}
              name="realtor"
              value={this.state.Address}/>
              <span className="helper-text" data-error="wrong" data-success="right">Realtor</span>
            </div>
            </div>
{/* Price */}
            <div className="row">
            <div className="input-field col s3">
              <input 
              placeholder="List Price" 
              id="ListPrice" 
              type="text" 
              onChange={this.handleInputChange}
              name="price"
              value={this.state.price}/>
            </div>
            </div>
            <button onClick={this.submitAlert} className="btn btn-outline-secondary">Submit</button>
</form>
</div>
      
)
}
}


export default SendAlert



