import React from 'react'


function WelcomeMsg() {
  return(
      <div className="container justify-content-center">
        <div className="d-flex justify-content-center">
          <h1 className="display-4" style={{color: "#ffffff"}}>Welcome to ABC Corp's IT homepage</h1>
        </div>
        <div className="d-flex mt-4 justify-content-center">
          <p style={{fontSize:"20px", color: "#ffffff"}}>Please login below with your corporate email and password to continue.</p>
        </div>
      </div>

  )
}


export default WelcomeMsg
