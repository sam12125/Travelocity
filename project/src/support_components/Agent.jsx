import React from 'react'
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ForumIcon from '@mui/icons-material/Forum';
import styles from "./Support.module.css"

const Agent = () => {
  return (
    <div className={styles.agentbox}>
        <h1>Your Virtual Agenty is here to help.</h1>
        <div className={styles.agent}>
            <div>
                <EventBusyIcon/>
                <h3>Cancel your trip</h3>
            </div>
            <div>
                 <CalendarMonthIcon/>
                 <h3>Change your trip</h3>
            </div>
            <div>
                 <DomainVerificationIcon/>
                 <h3>Ask about refunds</h3>
            </div>
            <div>
               <ForumIcon/>
               <h3>Chat Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Agent