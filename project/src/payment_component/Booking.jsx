import React from 'react'
import styles from "./Payment.module.css"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  let navigate= useNavigate()
  return (
    <div className={styles.booking}>
        <h3>Important information about your booking</h3>
    
        <div>
            <ul>
                <li>Cancellations or changes made after 2:00pm (property local time) on May 19, 2022 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</li>
                <li>The check-in location differs from the property location. To check in, go to In-room check-in To make arrangements for check-in please contact the property ahead of time using the information on the booking confirmation. If you are planning to arrive after midnight please contact the property in advance using the information on the booking confirmation. Guests planning to arrive outside of normal check-in hours must contact the property in advance for check-in instructions. Front desk staff will greet guests on arrival. At check-in, guests must provide a record of full COVID-19 vaccination. Guests providing vaccine records must have received complete COVID-19 vaccination at least 3 days prior to check-in. For more details, please contact the property using the information on the booking confirmation.</li>
                <li>To register at this property, guests who are Indian citizens must provide a valid photo identity card issued by the Government of India; travelers who are not citizens of India must present a valid passport and visa</li>
            </ul>
        </div>
        <p>By clicking on the button below, I acknowledge that I have reviewed the <span style={{color:"#0a438b"}} >Privacy Statement</span> Opens in a new window. and <span style={{color:"#0a438b"}} >Government Travel Advice</span> Opens in a new window. and have reviewed and accept the <span style={{color:"#0a438b",textDecoration:"underline"}} >Rules & Restrictions</span> Opens in a new window. and <span style={{color:"#0a438b",textDecoration:"underline"}} >Terms of Use</span> Opens in a new window..</p>
        <div className={styles.due} >
        <DoneOutlineIcon style={{ height:"max-content", fontSize:"18px",color:"green"}} />
        <span style={{color:"#0a438b",textDecoration:"underline",fontWeight:"500"}} >$0.00 due now</span>
        <DoneOutlineIcon style={{fontSize:"18px",color:"green",height:"max-content"}}/>
        <p style={{color:"darkgreen"}}>Change of plans? No problem. You can cancel for free before <span style={{color:"#0a438b",textDecoration:"underline",fontWeight:"500"}} >Thu. May 19</span></p>
        </div>
        <button onClick={()=>navigate("/paymentsucessful")}>Complete Booking</button>
        <p style={{color:"grey"}}><LockOutlinedIcon style={{height:"16px",weight:"16px"}}/>We use secure transmission and encrypted storage to protect your personal information. <br /> &nbsp; &nbsp;&nbsp;This payment will be processed in the U.S. This does not apply when the travel provider (airline/hotel/rail, etc.)<br/>&nbsp;&nbsp;&nbsp; processes your payment. </p>
      
    </div>
  )
}

export default Booking