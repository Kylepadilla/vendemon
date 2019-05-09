import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row,Col,Slide, Caption,Slider } from "react-materialize";
import NavbarLanding from "./NavbarLanding";
import img1 from '../../assets/images/Capture.PNG'
import img2 from '../../assets/images/Capture 2.PNG'
import img3 from '../../assets/images/Capture 3.PNG'
import Footer from "react-materialize/lib/Footer";

class Landing extends Component {
  render() {
    return (
      <div className = "landing">
      <NavbarLanding></NavbarLanding>
      <Row>
      <Col s={12} className="white black-text">

      </Col>
      </Row>
      <Row>
<Slider>
<Slide image={<img alt="Register Now" src="https://images.pexels.com/photos/1112096/pexels-photo-1112096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />}>
<Caption>
<h3 style={{ fontSize:"80px"} }>
Welcome to Vendi
</h3>
<h5>
Powerful Real Estate Data
</h5>
</Caption>
</Slide>
<Slide image={<img alt="Upload" src="https://images.pexels.com/photos/1569003/pexels-photo-1569003.jpeg?cs=srgb&dl=architecture-chimney-cloudy-skies-1569003.jpg&fm=jpg" />}>
<Caption placement="left">
<h3>
Find Your Next Investment Property
</h3>
</Caption>
</Slide>
<Slide image={<img alt="Commission" src="https://images.pexels.com/photos/1516704/pexels-photo-1516704.jpeg?cs=srgb&dl=adult-analysis-chart-1516704.jpg&fm=jpg" />}>
<Caption placement="left">
<h3>
Analyze Deals the Right Way
</h3>
</Caption>
</Slide>
</Slider>
      </Row>
      <div style={{ height: "30vh", marginLeft:"auto", marignRight:"auto", }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align" style={{marginLeft:"110px"}}>
          <br />
          <Link to="/register"
        
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable darkslategray accent-3"
          >
            Register
          
          </Link>
          <Link to="login"
            style={{
              marginLeft: "2rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect white hoverable black-text"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
    <div className='row' >
      <p style={{fontSize:"34px", marginLeft:" 100px "}}>New Listings in Orlando, Fl</p>
    </div>
    <div style={{marginLeft:"30px"}}>
      <img src={img1} alt="none"/>
      <img src={img2} alt="none"/>
      <img src={img3} alt="none"/>
      <img src={img1} alt="none"/>
    </div>
<div className='row' style={{marginTop:"30px"}}>
<div className="col s4">
<h4>Analyze</h4>
<p>
Direct mailing graphical user interface long tail ramen deployment. Vesting period gen-z stock. Non-disclosure agreement crowdfunding gen-z. Research & development equity ownership crowdfunding growth hacking venture responsive web design paradigm shift direct mailing prototype. Stock deployment conversion disruptive rockstar direct mailing analytics. Business-to-consumer conversion investor influencer founders A/B testing prototype partnership entrepreneur startup deployment. Stock angel investor branding bootstrapping validation disruptive creative user experience focus series A financing entrepreneur release twitter. Crowdsource stock hackathon venture infographic bandwidth entrepreneur creative hypotheses. Business-to-consumer mass market business model canvas. MVP client social media partner network metrics validation interaction design niche market success non-disclosure agreement infrastructure business-to-consumer accelerator technology.
</p>
</div>
<div className="col s4">
<h4>Invest</h4>
<p>
Metrics stealth A/B testing interaction design hypotheses deployment first mover advantage facebook business-to-business analytics. Startup creative marketing gamification crowdfunding user experience supply chain. Value proposition early adopters graphical user interface learning curve startup lean startup pivot accelerator business-to-consumer. Angel investor first mover advantage startup virality funding. Virality startup paradigm shift conversion marketing innovator A/B testing iteration return on investment MVP user experience. Direct mailing backing influencer early adopters growth hacking user experience partnership churn rate. Responsive web design partner network twitter android iteration metrics bandwidth pivot launch party product management. Product management incubator gamification advisor social media android funding termsheet infographic partnership. Pitch freemium partnership channels creative non-disclosure agreement entrepreneur seed money bootstrapping lean startup. Business plan launch party gen-z graphical user interface innovator sales rockstar responsive web design network effects bootstrapping.
</p>

</div>
<div className="col s4">
<h4>Data</h4>
<p>
Social proof metrics conversion accelerator return on investment success hypotheses angel investor. Buyer iPad network effects ramen learning curve graphical user interface virality twitter partnership first mover advantage. Innovator series A financing partner network technology ramen marketing. Network effects traction burn rate creative focus ecosystem business-to-business channels market direct mailing stealth buzz. Seed money graphical user interface return on investment bandwidth client long tail. Client virality twitter startup product management hypotheses. Marketing client burn rate freemium android infographic vesting period. Creative bootstrapping monetization network effects ecosystem facebook. Investor facebook partnership termsheet success leverage creative freemium. Market equity MVP.
</p>
</div>
    </div>
    <div style={{marginBottom:"40px", visibility:"hidden"}}>
sertgsergsdrgsergserlbnhjiuklbnhjiuklbnhjiuklbnhjiuklbnhjiuklbnhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiuklbhjiukk
</div>
<div className='row' style={{marginBottom: "40px"}}>
<h2>Data Analytics</h2>
<p>
Ownership series A financing ramen social media bandwidth funding technology metrics burn rate advisor business-to-consumer prototype. Social proof investor virality beta startup user experience branding early adopters value proposition advisor series A financing. Mass market technology advisor supply chain traction virality facebook strategy value proposition business-to-business business plan business-to-consumer gen-z iPhone. Metrics sales churn rate validation. Crowdfunding release ownership. Monetization leverage vesting period scrum project handshake. Infrastructure virality business model canvas low hanging fruit burn rate. Holy grail market branding direct mailing. Metrics focus launch party interaction design infographic research & development. Branding sales accelerator venture entrepreneur prototype investor learning curve metrics interaction design stock partnership responsive web design.

Metrics stealth A/B testing interaction design hypotheses deployment first mover advantage facebook business-to-business analytics. Startup creative marketing gamification crowdfunding user experience supply chain. Value proposition early adopters graphical user interface learning curve startup lean startup pivot accelerator business-to-consumer. Angel investor first mover advantage startup virality funding. Virality startup paradigm shift conversion marketing innovator A/B testing iteration return on investment MVP user experience. Direct mailing backing influencer early adopters growth hacking user experience partnership churn rate. Responsive web design partner network twitter android iteration metrics bandwidth pivot launch party product management. Product management incubator gamification advisor social media android funding termsheet infographic partnership. Pitch freemium partnership channels creative non-disclosure agreement entrepreneur seed money bootstrapping lean startup. Business plan launch party gen-z graphical user interface innovator sales rockstar responsive web design network effects bootstrapping.
</p>
</div>


<div className='row'>

</div>
    <Footer
  copyrights="&copy 2015 Copyright Text"
  className="example"
>
<h5 className="white-text">
Follow us on Facebook
</h5>
<p className="grey-text text-lighten-4">
We make post daily on the latest deals in your area. Register you Vendi account to day to recieve news and updates for your market.
</p>

</Footer>

      </div>
     
    );
  }
}
export default Landing;

