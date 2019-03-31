import React from "react"
import "../../CSS/AllPages/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'


/*
This function creates the homescreen footer
 */
function footer() {

  // Variables for the links and Icons that will be concatinated with the
  // text displays
  const bootLink = <a href="https://getbootstrap.com/">Bootstrap</a>
  const fontAwLink = <a href="https://fontawesome.com/">Font Awsome</a>
  const reactLink = <a href="https://reactjs.org/">React</a>
  const javaIcon = <FontAwesomeIcon icon={faCoffee} />
  const heartIcon = <FontAwesomeIcon icon={faHeart} />

  return(
    <div className="d-flex justify-content-center">
      <div className="footer m-2">
        <p>Developed with {heartIcon} and {javaIcon} using {bootLink}, {reactLink}, and {fontAwLink}</p>
      </div>
    </div>
  )
}

export default footer;
