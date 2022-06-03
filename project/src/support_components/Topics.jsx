import React from 'react'
import Shutter from '../home_components/Shutter'
import styles from "./Support.module.css"


const Topics = () => {
  return (
    <div className={styles.topicbox}>
        <div>
            <p>Browse Help Topics</p>
        </div>
        <div style={{textAlign:"center"}}>
            <p>Popular Topics</p>
        </div>
        <div className={styles.topics}>
            <div>
                <Shutter props="Flight"/>
                <Shutter props="Hotels"/>
                <Shutter props="Vaction Packages"/>
                <Shutter props="Rentals"/>
                <Shutter props="Cruises"/>
                <Shutter props="Thinngs to do"/>
                <Shutter props="Others"/>
                <Shutter props="Travel Alert"/>
            </div>
            <div>
            <Shutter props="Refund timelines,policies & process"/>
            <Shutter props="Book a flight using an airline credit"/>
            <Shutter props="Gift cardmscams"/>
            <Shutter props="Flight insurances"/>
            <Shutter props="Beware of emailsscams"/>
            <Shutter props="Cancelyour vacation package"/>
            <Shutter props="Hotel payment option"/>
            <Shutter props="Change your flights"/>
            <Shutter props="Low-cost airline bookings"/>
            <Shutter props="About unreal deal and package saving"/>
            </div>
        </div>
       <h3 className={styles.addproperty}>Add Your Property</h3>

    </div>
  )
}

export default Topics