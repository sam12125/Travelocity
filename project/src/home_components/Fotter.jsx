import React from 'react'
import styles from "./Navbar.module.css"


const Fotter = () => {
  return (
    <>
    <div className={styles.footer}>
       <div>
         <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"/>
       </div>
       <div>
           <h3>Company</h3>
           <p>About</p>
           <p>Jobs</p>
           <p>List your property</p>
           <p>Patnerships</p>
           <p>Newsroom</p>
           <p>Investor Relastions</p>
           <p>Roaming Grome Store</p>
           <p>Advertising</p>
       </div>
       <div>
           <h3>Explore</h3>
           <p>Hotels in United States</p>
           <p>Vacation Rentals in United States</p>
           <p>Vacation Package in United State</p>
           <p>Domestic Flights</p>
           <p>Car Rentals in United states</p>
           <p>Travelocity Reviews</p>
           <p>Travelocity Coupons</p>
           <p>Unique Places to Stay</p>
           <p>Travel Blog</p>
       </div>
       <div>
           <h3>Policies</h3>
           <p>Privacy Policy</p>
           <p>Term of Use</p>
           <p>Vrbo tem and conditions</p>
           <p>Accessibility</p>
           <p>Do not sell my personal information</p>
       </div>
       <div>
           <h3>Help</h3>
           <p>Supports</p>
           <p>Cancel your hotels or vacation rental booking</p>
           <p>Cancel your flight</p>
           <p>Refund timelines, policies & processses</p>
           <p>Use a Travelocity coupon</p>
       </div>
    </div>
    <div style={{width:"90%", margin:"auto",textAlign:"center",fontSize:"13px",color:"grey"}}>
        <p>© 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.</p>
        <p>Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.</p>
    </div>
    </>
  )
}

export default Fotter