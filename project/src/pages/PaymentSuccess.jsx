import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const PaymentSuccess = () => {
  
  let style= {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding :"50px",
    textAlign:"center" 
  }
  return (

    <div style={style} >

      <h1 style={{color:"darkgreen",fontSize:"60px"}} >Booking Successful</h1>
      <DoneOutlineIcon style={{color:"red",fontSize:"80px"}} />
      <p style={{color:"grey",fontWeight:"600"}} >Your booking was successful, you will recive a confirmation email shortly.</p>
      <p style={{color:"grey",fontWeight:"600"}} >we hope you enjoy your journey.</p>
    </div>
  )
}

export default PaymentSuccess