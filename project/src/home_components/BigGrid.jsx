import React from 'react'
import styles from "./Navbar.module.css"

const BigGrid = () => {
  return (
    <div className={styles.bigslidebox}>
       <div className={styles.bigslide1}>
         <h2>All-inclusive resorts</h2>
         <p>Think of nothing beyond having a <br />great time with your family</p><br />
         <button>View deals</button>
       </div>
       <div className={styles.bigslide2}>
       <h2>Last minutes getaways</h2>
         <p>Celebrate the moments with an <br />unexpected getaway</p><br />
         <button>View deals</button>
       </div>
    </div>
  )
}

export default BigGrid