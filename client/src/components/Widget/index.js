import React, { Component } from 'react';
import './styles.css'
class ZillowWidget extends Component{
    state={
        location:'',
        Price:'',
        Beds:'',
        Baths:'',
    }

componentDidMount(){

}
handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
};
submit = e =>{
    
}


render(){
    return(
        
        <div id="zillow-large-search-box-widget-container">
        <h2 id="findhomes">Find Homes</h2>
        <div id="one">
        <a href="https://www.zillow.com/" target="_blank" rel="nofollow">
        <img alt="Zillow Real Estate Information" id="two" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/images/powered-by-zillow.gif"/>
        </a>
        </div>
        <iframe scrolling="no" src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=Seattle+WA&shvi=yes" width="430" frameborder="0" height="400" title="title"/>
        
        <table id="zillow-tnc-widget-footer-links" width="100%">
        
        <tbody>
        <tr>
        <td id="yike">QUICK LINKS:</td>
        </tr>
        <tr >
        <td>
        <span id="widgetFooterLink" className="regionBasedLink"><a href="https://www.zillow.com/seattle-wa/" id="yep" target="_blank" rel="nofollow" ><span className="region">Seattle</span> Real Estate Listing</a></span></td>
        <td>
        <span id="widgetFooterLink"><a id="yep" href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow">Mortgage Rates</a></span>
        </td>
        <td>
        <span id="widgetFooterLink"><a id ="yep" href="https://www.zillow.com/refinance/" target="_blank" rel="nofollow">Refinancing</a></span>
        </td>
        </tr>

        <tr>
        <td>
        <span id="widgetFooterLink" className="regionBasedLink">
        <a id="yep" href="https://www.zillow.com/seattle-wa/foreclosures/" target="_blank" rel="nofollow">
        <span className="region">Seattle</span>
        Foreclosures
        </a>
         </span>
        </td>
        <td>
            <span><a id="yep" href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="nofollow" >Mortgage Calculators</a></span>
            </td>
        <td>
            <span id="widgetFooterLink"><a id="yep" href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow">Purchase Loans</a></span>
            </td>
        </tr>
        </tbody>
        </table>
        </div>
    )
}
}
export default ZillowWidget