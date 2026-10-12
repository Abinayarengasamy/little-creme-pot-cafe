import React from 'react';
import d from "../images/d.png";
import insta from "../images/insta.png";
import twitter from"../images/twitter.png";
import facebook from"../images/facebook.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer1">
         
          <ul>
            <li>
              <span>quick links</span>
            </li>
            <li><a href="/">home</a></li>
            <li><a href="/menu">menu</a></li>
            <li><a href="/customization">customization</a></li>
            <li><a href="/order">order</a></li>
            <li><a href="/about">about</a></li>    
             <li><a href="/cartpage">cartpage</a></li>     
 

            
          </ul>
        </div>

        <div className="footer2">
          <ul>
            <li>
              <span>help</span>
            </li>
            <li>order status</li>
            <li>shipping</li>
            <li>faqs</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>

      <div className="footerbox">
        <div className="img1">
          <p>follow us on</p>
          
            <img 
          src={insta}
          alt="insta"
          height="50px"
          width="50px"
          />

           <img 
          src={facebook}
          alt="fb"
          height="50px"
          width="50px"
          />

           <img 
          src={twitter}
          alt="twitter"
          height="50px"
          width="50px"
          />

        </div>

        <div className="name">
          
          <p>little creme pot</p>
          
          <h5>2026 - all rights reserved</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;