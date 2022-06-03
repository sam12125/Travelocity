import React from 'react'
import styles from "./Navbar.module.css"

const Scanner = () => {
  return (
    <div className={styles.scannerbox} >
        <div>
          <img src="https://a.travel-assets.com/mad-service/footer/marquee/TVLY_App_Footer_v1.jpg"/>
        </div>
        <div>
            <h1>Wander Wisely with the Travelocity app</h1>
            <ul>
                <li>Get helpful alerts about flight status and gate numbers</li>
                <li>Access all your travel details, even when offline</li>
                <li>Easily contact your hotel by messaging them right in the app</li>
            </ul>
            <h3>Text yourself a download link</h3>
            <div className={styles.scannerinput}>
               <input type="number" placeholder='Country Code' />
               <input type="number"  placeholder='Phone Number'/>
               <button>Get the app</button>
            </div>
            <p>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
        </div>
        <div>
            <img src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_travelocity.png" alt="" />
            <h4 style={{textAlign:"center"}}>Scan the QR code</h4>
        </div>
    </div> 
  )
}

export default Scanner