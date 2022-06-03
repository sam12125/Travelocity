import React from 'react'
import PayRight from './PayRight'
import styles from "./Payment.module.css"
import PayLeft from './PayLeft'
const PayContent = () => {
  return (
    <div className={styles.paycontent}>
        <PayLeft/>
        <PayRight/>
    </div>
  )
}

export default PayContent