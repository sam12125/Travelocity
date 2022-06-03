import React from 'react'
import styles from "./Payment.module.css"
const HotelDetail = () => {
  let hotel=JSON.parse(localStorage.getItem("singleHotel"));
  let travel=JSON.parse(localStorage.getItem("travel"))
  return (
      <>
    <div className={styles.cart}>
       <img src={hotel.url} alt="" />
       <h3>{hotel.Name}</h3>
       <p><span style={{fontWeight:"600"}}>{hotel.Rating}/5 </span> Wonderful({hotel.Review} reviews)</p>
       <p>Guest rated this property {hotel.Rating}/5 for clealiness</p>
        <p><span style={{fontWeight:"500",color:"grey"}} >1 Room </span> Luxury Grande Room City View</p>
        <p><span style={{fontWeight:"500",color:"grey"}} >Check-in:</span>  {travel.checkin}</p>
        <p><span style={{fontWeight:"500",color:"grey"}} >Check-out</span>  {travel.checkout}</p>
    </div>
    <div className={styles.bill} >
        <h2>Price details</h2>
        <div>
            <p>1 room x 1 night</p>
            <p>${hotel.Cost}.00</p>
        </div>
        <p>You saved 10% ! </p>
        <div style={{borderBottom:"1px solid lightgrey"}}>
            <p>Taxes</p>
            <p>$71.00</p>
        </div>
        <div>
            <h3>Total</h3>
            <h3>${hotel.Cost+71}.00</h3>
        </div>
        <div style={{color:"darkgreen",fontWeight:"600"}}>
            <p>Pay Now</p>
            <p> $0.00</p>
        </div>
        <div style={{color:"grey",fontWeight:500}} >
            <p>Pay at property</p>
            <p>${hotel.Cost+71}.00</p>
        </div>
    </div>
    </>
  )
}

export default HotelDetail