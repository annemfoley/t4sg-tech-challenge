import React from "react";
import { useState }  from "react";
import graph from "../assests/US-Vaccines.PNG"
import { useAuth0 } from '@auth0/auth0-react';

import "./Homepages.css"




export default function GeneralHomepage() {
  const [faq1Display, setFaq1Display] = useState("");
  const [faq2Display, setFaq2Display] = useState("");
  const [faq3Display, setFaq3Display] = useState("");

  const { login, isAuthenticated } =useAuth0();

  return (
    !isAuthenticated &&( 

    <div className="screen-background">
      <div className="intro-background">
        
        <div className = "intro-item">
          <div classname = "intro-item">
            WORLD HEALTH ORGANIZATION VACCINE TRACKING WEBPAGE
          </div>
          <div className="intro-item">
            This site is an informative webpage to track vaccine distribution.
          </div>
          <img src = {graph} />
        </div>
        
      </div>

      

      <div classname = "intro-item">
            FAQ's:
        </div>

      <div 
        className = "faq-header"
        onClick = {() => {
          if (faq1Display == "")
            setFaq1Display( 
              <div className="faq-item"> (Information about vaccine priorities) </div>);
          else
            setFaq1Display("");
        }}>
          WHO IS ABLE TO GET VACCINATED?
          <div className = "faq-items">
            {faq1Display}
          </div>
      </div>


      <div 
        className = "faq-header"
        onClick = {() => {
          if (faq2Display == "")
            setFaq2Display( 
              <div className="faq-item"> (Information about vaccine safety/trials) </div>);
          else
            setFaq2Display("");
        }}>
          HOW DO I KNOW THE VACCINE IS SAFE?
          <div className = "faq-items">
            {faq2Display}
          </div>
      </div>
    
      <div 
        className = "faq-header"
        onClick = {() => {
          if (faq3Display == "")
            setFaq3Display( 
              <div className="faq-item"> (Information about how/when to get vaccinated) </div>);
          else
            setFaq3Display("");
        }}>
          WHEN AND WHERE WILL I EVENTUALLY GET MY VACCINE?
          <div className = "faq-items">
            {faq3Display}
          </div>
      </div>
    
    </div>
      
    )
      
  );
}

