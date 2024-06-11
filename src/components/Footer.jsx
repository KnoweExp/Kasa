import React from 'react'
import "./Footer.sass"

function Footer() {
  return (
    <div className="footer">
            <div className="footer__logo">
            <img src="LOGO_transparent.png" alt="logo" width="122px" height="39.44px"/>        
            </div>
            <div className="footer__text">
            © 2020 Kasa. All rights reserved
            </div>
    </div>
  )
}

export default Footer