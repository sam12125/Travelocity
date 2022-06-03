import React from 'react'
import styles from "./Navbar.module.css"
import Shutter from "./Shutter"

const Destination = () => {
  return (
    <div className={styles.desbox}>
        <div>
            <img src="https://s0.2mdn.net/10257150/GetIt_TheArubaEffect_babybeach_970x90_100k.jpg" alt="" />
        </div>
        <div className={styles.destination}>
            <div>
            <Shutter props="Hotels"/>
            <Shutter props="Vacation Packages"/>
            <Shutter props="Crises"/>
            <Shutter props="Travel deals"/>
            </div>
            <div>
            <Shutter props="Flights"/>
            <Shutter props="Cars"/>
            <Shutter props="All inclussive resorts"/>
            <Shutter props="Beach"/>
            </div>
           
        </div>
    </div>
  )
}

export default Destination