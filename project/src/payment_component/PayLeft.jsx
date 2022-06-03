import React from 'react'
import Booking from './Booking'
import FinalPay from './FinalPay'
import Protect from './Protect'
import UserInfo from './UserInfo'

const PayLeft = () => {
  return (
    <div>
        <UserInfo/>
        <Protect/>
        <FinalPay/>
        <Booking/>
    </div>
  )
}

export default PayLeft