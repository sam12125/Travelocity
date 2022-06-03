import React from 'react'
import SecurityIcon from '@mui/icons-material/Security';
import GppMaybeRoundedIcon from '@mui/icons-material/GppMaybeRounded';
import styles from "./Payment.module.css"

const Protect = () => {
  return (
    <div className={styles.protectbox}>
        <div className={styles.protecticon}>
           <SecurityIcon/>
           <h2>Protect your hotel</h2>
           <h4>Recommended</h4>
        </div>
        <div className={styles.important}>
                <p><GppMaybeRoundedIcon style={{fontSize:"20px"}}/><span style={{color:"grey",fontWeight:"500"}}>Important: </span> Trip cancellation due to government travel advisories, fear of travel, or change of mind is not covered
               Travel insurance may provide coverage for COVID-19 diagnosed illness. COVID-19 is a foreseen event and certain other coverages will not apply. <span style={{color:"#0a438b",textDecoration:"underline"}}>Learn more</span></p>
        </div>
        <div className={styles.points}>
            <p><span style={{fontWeight:"600"}}>Note: </span>If you are a resident of WASHINGTON state, please <span style={{color:"#0a438b",textDecoration:"underline"}}>click here</span> to view products that you are eligible to purchase.</p>
            <p style={{fontWeight:"700",fontSize:"18px",marginBottom:"25px"}}>4 reasons you might need travel protection</p>
            <p >1. You get delayed for covered reasons and miss a night of your hotel stay</p>
            <p>2. You're sick and don't use all your hotel nights</p>
            <p>3. You need to extend your trip due to the illness of a travel companion</p>
            <p>4. You need up to $10,000 for covered medical expenses while on your trip</p>
        </div>
        <div className={styles.selectprotect}>
           <p style={{fontWeight:500,color:"grey"}}>Select Yes or No to continue booking<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
           <div className={styles.saferadio}>
               <div><input type="radio" /><label>Yes, I want Hotel Booking Protection Plus for my trip</label></div>
               <h2>$12.91 <span style={{fontSize:"14px"}}>per person</span></h2>
           </div>
           <div><input type="radio" /><label>No, I'm willing to risk my $469.40 trip</label></div>
           <p>“ Things happened outside of my control which caused the trip to be canceled. The Travel Protection was valuable in reducing the losses to me when we had to cancel the trip. ” - Mr. Rodman</p>
        </div>
    </div>
  )
}

export default Protect