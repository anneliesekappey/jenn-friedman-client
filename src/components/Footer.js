import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item1"></div>

        <div className="item2">
          <span style={{ paddingRight: 5 }}>Copyright </span>
          <FontAwesomeIcon icon={faCopyright} />{' '}
          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} Jenn Friedman. All Rights Reserved.
          </span>
        </div>
        <a href="#top" target="_blank" className="item3">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#top" target="_blank" className="item4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#top" target="_blank" className="item5">
          <FontAwesomeIcon icon={faYoutube} />
        </a>

        {/* {false && <PrivacyModal click={true} />} */}
      </div>
    </footer>
  )
}

export default Footer
