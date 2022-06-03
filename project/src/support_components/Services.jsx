import React from 'react'
import styles from "./Support.module.css"


const Services = () => {
  return (
    <div>
        <div className={styles.services}>
            <p>Vacation packages</p>
            <p>Stays</p>
            <p>Cars</p>
            <p>Flights</p>
            <p>Cruises</p>
            <p>Things to do</p>
            <p>Trips for me</p>
            <p>Discover</p>
            <p>Travel Deals</p>
            <p>Get Inspired</p>
            <p>Groups & meetings</p>
            <p>Mobile</p>
        </div>
        <div className={styles.imgservice}>
            <div>
                <h1>Custom Service</h1>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
    </div>
  )
}

export default Services