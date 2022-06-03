import React from 'react'
import styles from "./Payment.module.css"
import RuleFolderIcon from '@mui/icons-material/RuleFolder';

const PayHead = () => {
  return (
    <div className={styles.payhead}>
        <div>
            <h1>Secure booking — only takes 2 minutes!</h1>
        </div>
        <div className={styles.lowhead}>
            <RuleFolderIcon style={{borderRadius:"50%",background:"lightgrey",fontSize:"30px",padding:"7px"}}/>
            <div>
                <p>Free cancellation before Wed, May 18, 2:00pm (property local time)</p>
                <p>You can change or cancel this stay for a full refund if plans change. Because flexibility matters.</p>
            </div>
        </div>
    </div>
  )
}

export default PayHead