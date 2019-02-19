import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <footer>
  <div className="container">
    <div className="row">
      {/* bootstrap row */}
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 footer-left"> {/* NEW WRAPPER*/}
        {/* Footer Social Icons (mobile only) */}
        <div className="col-xs-12 visible-xs-block">
          <ul className="list-inline social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
            <li><a className="google" href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a className="youtube" href="#"><i className="fa fa-youtube-play" /></a></li>
          </ul>
        </div>
        {/* ./Footer Social Icons (mobile only) */}
        {/* Footer Navigation (mobile only) */}
        <div className="col-xs-12 visible-xs-block">
          <nav className="footer-navigation clearfix">
            <h2><a href="#">Products</a></h2>
            <ul className="list-unstyled pull-left">
              <li><a href="#">Wireless</a></li>
              <li><a href="#">Server Storage</a></li>
              <li><a href="#">Telecomm and Data Center Networks</a></li>
              <li><a href="#">Fiber Optics</a></li>
              <li><a href="#">Industrial Fiber Optics</a></li>
            </ul>
            <ul className="list-unstyled pull-right">
              <li><a href="#">LEDs and Displays</a></li>
              <li><a href="#">Motion Control Encoders</a></li>
              <li><a href="#">Optocouplers</a></li>
              <li><a href="#">Optical Sensors</a></li>
              <li><a href="#">Hard Disk Drives</a></li>
            </ul>
          </nav>
        </div>
        {/* ./Footer Navigation (mobile only) */}
        {/* Footer Navigation (mobile only) */}
        <div className="col-xs-12 visible-xs-block">
          <nav className="footer-navigation clearfix">
            <h2><a href="#">Applications</a></h2>
            <ul className="list-unstyled pull-left">
              <li><a href="#">Datacenters</a></li>
              <li><a href="#">Wireless and Mobile Phones</a></li>
              <li><a href="#">Telecomm and Wired Networks</a></li>
            </ul>
            <ul className="list-unstyled pull-right">
              <li><a href="#">Storage</a></li>
              <li><a href="#">Industrial</a></li>
              <li><a href="#">Automotive</a></li>
              <li><a href="#">Military and Aerospace</a></li>
            </ul>
          </nav>
        </div>
        {/* ./Footer Navigation (mobile only) */}
        {/* Footer Navigation (mobile only) */}
        <div className="col-xs-12 visible-xs-block">
          <nav className="footer-navigation clearfix">
            <h2><a href="#">Support</a></h2>
            <ul className="list-unstyled pull-left">
              <li><a href="#">Find Help</a></li>
              <li><a href="#">Find Warranty Information</a></li>
              <li><a href="#">Get Help</a></li>
            </ul>
            <ul className="list-unstyled pull-right">
              <li><a href="#">Website Help</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Product Resources</a></li>
            </ul>
          </nav>
        </div>
        {/* ./Footer Navigation (mobile only) */}
        {/* Footer Navigation (mobile only) */}
        <div className="col-xs-12 visible-xs-block">
          <nav className="footer-navigation clearfix">
            <h2><a href="#">Company</a></h2>
            <ul className="list-unstyled pull-left">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Citizenship/Corporate Responsibility</a></li>
              <li><a href="#">Quality</a></li>
              <li><a href="#">Investor Center</a></li>
            </ul>
            <ul className="list-unstyled pull-right">
              <li><a href="#">News</a></li>
              <li><a href="#">Tradeshows &amp; Events</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
        </div>
        {/* ./Footer Navigation (mobile only) */}
        {/* Footer Navigation (mobile only) */}
        <div className="col-xs-12 visible-xs-block">
          <nav className="footer-navigation clearfix">
            <h2><a href="#">How to Buy</a></h2>
            <ul className="list-unstyled pull-left">
              <li><a href="#">Sales</a></li>
              <li><a href="#">Distributors</a></li>
              <li><a href="#">eSamples</a></li>
            </ul>
            <ul className="list-unstyled pull-right">
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Order Online</a></li>
            </ul>
          </nav>
        </div>
        {/* ./Footer Navigation (mobile only) */}
        {/* Footer Copyright */}
        {/* THIS IS NEW ADDED NAVIGATION */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
          <ul className="list-inline copyright-list hidden-xs primar">
            <li><a href="#">Products</a></li>
            <li><a href="#">Applications</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">How to buy</a></li>
          </ul>
          {/* DEVELOPERS THIS IS A NEW DIV sopyright is taken away from nav below*/}
          <div className="copyright-text"> Copyright © 2005 - 2017 Broadcom. All rights reserved. The term "Broadcom" refers to Broadcom Limited and/or subsidiaries.</div>  
          <ul className="list-inline copyright-list secondar">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Cookies and your Privacy</a></li>
            <li><a href="#">SiteMap</a></li>
          </ul>
        </div> 
        {/* THIS IS NEW ADDED NAVIGATION ENDS */} 
        {/* ./Footer Copyright */}
        {/* ./Footer Social Icons (desktop only) */}
      </div>{/* col-lg-8 ends*/}
      <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12 footer-right">{/* NEW WRAPPER*/}
        {/* Footer Social Icons (desktop only) */}
        <div className="hidden-xs">
          <ul className="list-inline social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
            <li><a className="google" href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a className="youtube" href="#"><i className="fa fa-youtube-play" /></a></li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</footer>

        );
    }
}

export default Footer;