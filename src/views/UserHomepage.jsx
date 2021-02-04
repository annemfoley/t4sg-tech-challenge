import React from "react";
import { useState }  from "react";
import map from "../assests/Example-Map.PNG"
import { useAuth0 } from '@auth0/auth0-react';

import "./Homepages.css"




export default function GeneralHomepage() {

  const { login, isAuthenticated } =useAuth0();

  return (
    isAuthenticated &&( 

    <div className="screen-background">
      <div className="intro-background">
        
        <div className = "intro-item">
          <div classname = "intro-item">
            WORLD HEALTH ORGANIZATION VACCINE TRACKING WEBPAGE
          </div>
          <div className="intro-item">
            See the vaccine distribution status in your local area.
          </div>

          <div>
                ENTER ZIPCODE:
          </div>
          <input
              type = "text"
          />
          <div>
              Displaying your current zipcode:
          </div>

          <img src = {map} />

        </div>
        
      </div>
    
    </div>
      
    )
      
  );
}

