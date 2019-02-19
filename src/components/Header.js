import React from 'react';
class Header extends React.Component{


    render(){
        return(
           
  <div className="row header-desktop hidden-xs fordesktop" data-module="primary-nav-panel-removal">
    <div className="col-lg-2 col-sm-2">
      <img className="print-only" src="css/img/logo-broadcom-bw.png" title="Broadcom Logo" />
      <a className="navbar-brand text-hide" href="index.html">Broadcom</a>
    </div>
    <div className="col-lg-10 col-sm-10">
      <nav className="secondary-nav">
        <ul className="nav nav-stacked">
          <li className="dropdown login">
            <a data-target="#" href="#" data-toggle="dropdown" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Global Navigation', 'eventAct': 'Description', 'eventLbl': 'AFBR-57J9AMZ', 'eventVal': 0, 'index': 'Home Page', 'Section': 'Login'});">
              Login<span className="caret" />
            </a>
            <div className="dropdown-menu">
              {/* login form wrapper */}
              <section className="login-wrapper" data-module="avago-login">
                <h2>myBroadcom Account:</h2>
                <form className="login-myavago generic-form" role="form" action="../process-login.php" method="POST">
                  <div className="form-group ">
                    <input type="text" placeholder="Username..." name="ssousername" className="form-control grey" id="myAvagoUsername" />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Password..." name="password" className="form-control grey" id="myAvagoPassword" />
                  </div>
                  <button type="submit" className="btn btn-primary">Go</button>
                  <a href="#" className="btn btn-default">Register</a>
                  <a href="#" className="link-forgot">Forgot Username/Password?</a>
                </form>
              </section>
            </div>
          </li>
          <li className="dropdown">
            <a data-target="#" href="#" data-toggle="dropdown" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Global Navigation', 'eventAct': 'Description', 'eventLbl': 'AFBR-57J9AMZ', 'eventVal': 0, 'index': 'Home Page', 'Section': 'Language'});">
              English<span className="caret" />
            </a>
            <ul className="dropdown-menu language">{/* DEVELOPERS "class=languages" is NEW */}
              <li><a href="#">日本語</a></li>
              <li><a href="#">中文</a></li>
            </ul>
          </li>
        </ul>
      </nav>   
      <nav className="clearfix">
        <form className="navbar-form navbar-right" role="search" method="post" action="broadcom-search-page2.shtml">
          <div className="form-group has-feedback">
            <input type="text" placeholder="SEARCH" className="form-control predictive-search" autoComplete="off" data-module="predictive-search" data-swiftype-key="g-JSTWk-U_BB81L8Zcgx" data-filters-json="{'pages':{'AssetType':'AVG_Product_C','locale':'avg_en'}}" data-swiftype-documents="pages" />
            {/* ADDED DATA-URL to direc request to the JSON location */}
            <span className="fa fa-search form-control-feedback" />
            <input type="submit" id="search-button" defaultValue="Submit" />
            {/*  <button  id="search-button" type="submit" >Submit</button> */}
          </div>
        </form>
        {/* 
DEVELOPERS:  THIS SECTION IS TAKEN FROM PRODUCTION THE WAY IT IS TODAY 
THEN MODIFIED TO MAKE NEW NAVIGATIONAL CHANGES. IN SHTML WE WILL DISCONECT  
PRODUCTS section in separate SHTML becasue all changes will nbe done IN THAT small SHTML.
DONT BE LAZY AND SEE shtml-resources/main/primary-nav-products.shtml FOR ALL CHANGES DONE ON <br>
THIS PIECE. THANKS
NOTE:  DEVELOPERS: wrapper <div class="col-sm-12"> has been removed. Search for "DEVELOPERS: <div class="col-sm-12"> has been removed" to see where was removed 
NOTE:DEVELOPERS in drop-down-2 row wrapper has been rmoved along with col-lg-12 
NOTE:CHANGE MADE ON 08-15-2016 all top level links have class="primary-link"  class assigned to add onCLICK event of showing navigation andattribute  href has been removed
*/}
        <ul className="main-navigation">
          {/* NOTE: Level 1 nav links have class "navlink-primary" */}
          {/* NOTE: Level 1 nav links can have 5 different dropdown types/styles, identified with a class like "dropdown-type-1" */}
          {/* "dropdown-type-1" features: full page width, vertical tabs, 4 columns of content in each tab */}
          <li className="navlink-primary dropdown-type-1">
            <a className="primary-link" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 0', 'eventLbl': 'Products', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});">Products<i className="fa fa-caret-up" /></a>
            <div className="dropdown-wrapper">
              <div className="row">
                {/* DEVELOPERS: <div class="col-sm-12"> has been removed */} 
                <div className="tabbable tabs-left">
                  {/* vertical tabs */}
                  <ul className="nav nav-tabs dropdown-tabs">
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="broadcom-product-group-langing.shtml">Products Overiew</a>       
                    </li>
                    <li className>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-1">Wireless</a>      
                    </li>
                    <li>        
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Server Storage', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-2">Product Group 2</a>     
                    </li>
                    <li>        
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Server Storage', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-3">Broadcom Products</a>       
                    </li>
                    <li>        
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Server Storage', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-4">Server Storage</a>      
                    </li>
                    <li>        
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Server Storage', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-5">Ethernet Connectivity</a>       
                    </li>
                    <li className=" ">
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-5">PCIe Switches and Bridges</a>     
                    </li>
                    <li className=" ">
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-6">Fiber Optic</a>       
                    </li>
                    <li className=" ">
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-7">Industrial Fiber Optic</a>        
                    </li>
                    <li className=" ">
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-8">LED and Displays</a>      
                    </li>
                    <li className=" ">
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-9">Motion Control Encoders</a>       
                    </li>
                    <li className=" ">
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#products-10">Optocouplers</a>     
                    </li>
                  </ul>   
                  <div className="tab-content dropdown-content">
                    {/* PRODUCTS SECTION STARTS */}
                    {/*#include virtual="primary-nav-tab1.shtml" */}
                    {/* PRODUCTS SECTION ENDS */}
                  </div>{/* ./tabs content */}
                </div>{/* ./tabbable */}
              </div>{/* ./row */}
            </div>{/* ./dropdown-wrapper */} 
          </li>
          <li className="navlink-primary dropdown-type-2">
            <i className="left-bevel" />
            <a className="primary-link" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 0', 'eventLbl': 'Applications', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});">Applications <i className="fa fa-caret-up" /></a>
            <i className="right-bevel" />
            <div className="dropdown-wrapper">
              <div className="row">
                {/* DEVELOPERS: <div class="col-sm-12"> has been removed. */}
                <div className="tabbable tabs-left">
                  {/* vertical tabs */}
                  <ul className="nav nav-tabs dropdown-tabs">
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="broadcom-applications-landing.shtml">Applications Overview</a>       
                    </li>
                    <li className>{/* DEVELOPERS :REMOVE CLASS "active"*/}
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Applications - Data Centers', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#applications-1" aria-expanded="true">Data Centers</a>
                    </li>
                    <li className>       
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Applications - Enterprise Storage', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#applications-2" aria-expanded="false">Enterprise Storage</a>
                    </li>
                    <li className>       
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Applications - Wired Infrastructure', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#applications-3" aria-expanded="false">Wired Infrastructure</a>
                    </li>
                    <li>        
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Applications - Wireless Communications', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#applications-4">Wireless Communications</a>
                    </li>
                    <li>        
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Applications - Industrial', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#applications-5">Industrial</a>
                    </li>
                  </ul>   
                  <div className="tab-content dropdown-content">
                    {/* PRODUCTS SECTION STARTS */}
                    {/*#include virtual="primary-nav-applications.shtml" */}
                    {/* PRODUCTS SECTION ENDS */}
                  </div>{/* ./tabs content */}    
                </div></div></div></li>   
          <li className="navlink-primary dropdown-type-3">
            <i className="left-bevel" />
            <a className="primary-link" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 0', 'eventLbl': 'Support', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});">Support <i className="fa fa-caret-up" /></a>
            <i className="right-bevel" />
            <div className="dropdown-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="col-sm-4">
                    <div className="dropdown-link-group">
                      <h3>Find Help</h3>
                      <ul className="list-unstyled">
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Products - Wireless', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="broadcom-support-landing.shtml">Support Overview</a>     
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Support Documents and Downloads', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/download-search">Support Documents and Downloads</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Knowledgebase', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/knowledgebase">Knowledgebase</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Check Interoperability and Compatibility', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/interop-compatibility">Check Interoperability and Compatibility</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Cross Reference Search', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://partfinder.avagotech.com/Avago/">Cross Reference Search</a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-link-group">
                      <h3>Find Warranty Information</h3>
                      <ul className="list-unstyled">
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Warranty and Enhanced Support', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/warranty">Warranty and Enhanced Support</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Test Assured Program', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/warranty/test-assured">Test Assured Program</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="dropdown-link-group">
                      <h3>Get Support</h3>
                      <ul className="list-unstyled">
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Request Tech Support', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/request-tech-support">Request Tech Support</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Regional Tech Support Centers', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/regional-tech-response-centers/">Regional Tech Support Centers</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Email Us for Storage and PCIe Switches and Bridges Support', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/email/">Email Us for Storage and PCIe Switches and Bridges Support</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Call Us for Storage Support', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/call-us">Call Us for Storage Support</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Emulex Fibre Channel Support', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/emulex/">Emulex Fibre Channel Support</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Converged Network Adapters Support - UCNA', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/converged-network-adapters/">Converged Network Adapters Support - UCNA</a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-link-group">
                      <h3>Product Resources</h3>
                      <ul className="list-unstyled">
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Eval Kits & Demo Boards', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/evaluation-kits">Eval Kits &amp; Demo Boards</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Channel Partner Portal', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://channel.avagotech.com/">Channel Partner Portal</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Reference Designs', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/reference-design">Reference Designs</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'OEM Branded Products', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/oem-branded-products">OEM Branded Products</a>
                        </li>
                      </ul>
                    </div>
                  </div>  
                  <div className="col-sm-4">
                    <div className="dropdown-link-group">
                      <h3>Resources</h3>
                      <ul className="list-unstyled">
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Selection Guides', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/doc-libraryselection-guides">Selection Guides</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Document Library', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/doc-library">Document Library</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Video Library', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/video-webinar-library">Video Library</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Webinars', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/video-webinar-librarywebinars">Webinars</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'White Papers', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/support/resources/doc-librarywhite-papers">White Papers</a>
                        </li>
                        <li>
                          <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 3', 'eventLbl': 'Get the Newsletter', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/company/contact/newsletter-signup">Get the Newsletter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </li>
          <li className="navlink-primary dropdown-type-4">
            <a className="primary-link" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 0', 'eventLbl': 'Products', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});">Company<i className="fa fa-caret-up" /></a>
            <div className="dropdown-wrapper">
              <div className="row">
                {/* DEVELOPERS: <div class="col-sm-12"> has been removed */} 
                <div className="tabbable tabs-left">
                  {/* vertical tabs */}
                  <ul className="nav nav-tabs dropdown-tabs">
                    <li className>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'About Us', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-1">About Us</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Careers', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-2">Careers</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Citizenship', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-3">Citizenship</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Contact Us', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-4">Contact Us</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Blog', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="broadcom-blog.shtml">Blog</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Investor Center', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-6">Investor Center</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'News', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-7">News</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Quality ', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-8">Quality </a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Tradeshows & Events', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-9">Tradeshows &amp; Events</a>
                    </li>
                    <li>
                      <a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'OEM Partners', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" data-toggle="tab" href="#company-10">OEM Partners</a>
                    </li>                                                    
                  </ul>   
                  <div className="tab-content dropdown-content">
                    {/* PRODUCTS SECTION STARTS */}
                    {/*#include virtual="primary-nav-company.shtml" */}
                    {/* PRODUCTS SECTION ENDS */}
                  </div>{/* ./tabs content */}
                </div>{/* ./tabbable */}
              </div>{/* ./row */}
            </div>{/* ./dropdown-wrapper */} 
          </li>         
          <li className="navlink-primary dropdown-type-5">
            <i className="left-bevel" />
            <a className="primary-link" onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 0', 'eventLbl': 'How to Buy', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});">How to Buy<i className="fa fa-caret-up" /></a>
            <i className="right-bevel" />
            <div className="dropdown-wrapper">
              <div className="row">
                <div className="col-sm-12">   
                  <div className="dropdown-link-group">
                    <h3><a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Sales', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/how-to-buy/sales">Sales</a></h3>
                  </div>
                  <div className="dropdown-link-group">
                    <h3><a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Distributors', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/how-to-buy/distributors">Distributors</a></h3>
                  </div>
                  <div className="dropdown-link-group">
                    <h3><a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'eSamples', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/how-to-buy/esamples">eSamples</a></h3>
                  </div>
                  <div className="dropdown-link-group">
                    <h3><a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Portal Access', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/how-to-buy/portal-access">Portal Access</a></h3>
                  </div>
                  <div className="dropdown-link-group">
                    <h3><a onclick="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Top Navigation Menu', 'eventAct': 'Level 1', 'eventLbl': 'Terms and Conditions', 'eventVal': 0, 'TemplateName': 'ParametricSearch', 'Section': 'Header'});" href="http://www.avagotech.com/how-to-buy/terms-and-conditions">Terms and Conditions</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>


            
        );
    }
}

export default Header;