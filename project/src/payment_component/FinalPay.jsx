import React from 'react'
import styles from "./Payment.module.css"
import PaymentIcon from '@mui/icons-material/Payment';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import SideSelect2 from './SideSelect2';
import {nanoid} from"nanoid"
const FinalPay = () => {
    let arr=["January","february","March","april","May","June","July","August","September","October","November","December"]
    let year =[2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032]
  return (
    <div  className={styles.finalpay}>

        <div className={styles.payiconbox}>
            <PaymentIcon style={{fontSize:"35px"}}/>
            <DoneOutlineIcon style={{fontSize:"18px",color:"green"}}/>
            <p>We use secure transmission</p>
            <DoneOutlineIcon style={{fontSize:"18px",color:"green"}}/>
            <p> We protect your personal information</p>
        </div>
        <div style={{borderBottom:"1px solid grey"}}>
            <SideSelect2/>
        </div>
        <div className={styles.logobox}>
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg" alt="" />
            <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="" />
        </div>
        <div className={styles.paymentform}>
          <p>Name on Card<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
          <input className={styles.firstname} type="text" />
          <p>Debit/Credit card number<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
          <input type="text" />
          <p>Expiry date<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
          <select>
            {arr.map((el)=>{
                return(<option key={nanoid()} >{el}</option>)
            })}
          </select>
          <select>
            {year.map((el)=>{
                return(<option key={nanoid()}>{el}</option>)
            })}
          </select>
          <div className={styles.codebox}>
             <div>
               <p>Security code<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
               <input type="number"/>
             </div>
             <div className={styles.zip} >
             <p>Billing ZIP code<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
             <input type="number" />
             </div>
         </div>
         <div>
                 <input type="checkbox" />
                 <label>Remember this card for future use</label>
        </div>
        </div>


    </div>
  )
}

export default FinalPay