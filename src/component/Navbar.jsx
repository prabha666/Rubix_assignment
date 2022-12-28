import React from "react";
import './navbar.css'
// import logo from "../images/logo.jpg";
// import "../styles/Header.css";
// import background from "../images/background.jpg";
// import logo1 from "../images/logo1.png";

function Header() {
  return (
    <main className="main">
      <div className="header">
    <div className="img_content">
   <h5 className="title">Rubixe </h5>
   <div className="title_content">
   <img className="logo_img" src="logo.png" alt="logo" />
     </div> 
           </div> 
        <div className="side_bar">
          
          <h6 className="side_tags">HOME</h6>
          <h6 className="side_tags">SERVICES</h6>
          <h6 className="side_tags">PRODUCTS</h6>
          <h6 className="side_tags">AI INTERNSHIP</h6>
          <h6 className="side_tags">CAREER</h6>
          <h6 className="side_tags">BLOG</h6>
          <h6 className="side_tags">ABOUT US</h6>
          <h6 className="side_tags">CONTACT US</h6>
        </div>
      
      </div>
      
     <p className="line1"></p>
     
     
      <div className="background_img">
        <div className="background_title_content">
          <div className="bg_title_content">
           <h5 className="background_title">TECH          
          <img className="logo_img" src="logo.png" alt="logo" /><br /><sup className="sub">for</sup>TEEN</h5>
            <p className="background_subheading">
                <h4> CARVING FUTURE</h4>
              <h4>  TECHNOLOGY PROFESSIONALS </h4>
               <h4> OUT OF YOUNG MINDS</h4>
            </p>
            
          </div>
         
        </div>
        
      </div>
    </main>
  );
}

export default Header;