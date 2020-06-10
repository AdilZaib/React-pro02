import './light.css';
import React, { useState } from 'react';

let temp=22;
function calTemp(x) 
{
    if(x===true)
    {
        return temp++;
    }
    else if(x===false)
    {
        return temp--;
    }
    else 
    {
        return temp;
    }
}
function Light() {
    let [isLit, setLit] = useState(null);
   
return(
  <div className={`room ${isLit ? "lit" : "dark"}`}>
      <div className="data-con">
      <div className="instructions">
          <h2>Instructions to use this App.</h2>
          <ol>
              <li>Click 'ON" button to turn on the light</li>
              <li>Click 'OFF" button to turn off the light</li>
              <li>To increament in temprature first Turn OFF the light and click on "+" button then turn on the light</li>
              <li>To decreament in temprature first Turn OFF the light and click on "-" button then turn on the light</li>
          </ol>
      </div>
      <div className="app-con">
            <h1>The Room is {isLit ? "Lit" : "Dark"}</h1>
             <h1>The Room Tempratue is {isLit  ? calTemp() : "0"}</h1>
            <br />
            <button className="btn" onClick={() => setLit(true)}>
            ON 
            </button>
            <button className="btn" onClick={() => setLit(false)}>
            OFF
            </button>
            <button className="btn" onClick={() => calTemp(true)}>
            +
            </button>
            <button className="btn" onClick={() => calTemp(false)}>
            -
            </button>
    </div>
    </div>
    <div><p>Created by: Adil Zaib <br/> Email: adil.zaib418@gmail.com</p></div>
    </div>
  
    
);
}

export default Light;
