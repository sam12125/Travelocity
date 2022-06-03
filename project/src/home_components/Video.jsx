import React from 'react'
import styles from "./Navbar.module.css"
const Video = () => {
  return (
    <>
    <div className={styles.video}>
        <iframe width="1176" height="420" src="https://www.youtube.com/embed/ItS8X0SjT4s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <h1 style={{width:"90%",margin:"auto",marginTop:"30px"}}>Here to help keep you on the move</h1>
    <div className={styles.belowvideo}>
        <div>
            <h3>Change or cancel the plan</h3>
            <p>Make updates to your itinerary or cancel a booking</p>
        </div>
        <div>
            <h3>Use a credit or coupon</h3>
            <p>Aplly a coupon or credit to a new trip</p>
        </div>
        <div>
            <h3>Track your refund</h3>
            <p>Check the status of a refunded currently in progress</p>
        </div>
    </div>
    </>
  )
}

export default Video