import React from 'react'
import styles from "./Navbar.module.css"
const FeatureOffer = () => {
  return (
    <>
  
    <div className={styles.featurebox}>
      
      <div className={styles.featureinner1}>
          <div>
             <h4>Family Vacation deals</h4>
             <h3>Seiz your next unforgettable family vacation</h3>
          </div>
      </div>
      <div className={styles.featureinner2}>
          <img src="https://s0.2mdn.net/10257150/GetIt_TheArubaEffect_babybeach_300x250_100k.jpg" alt="image" />
      </div>
    </div>
    </>
  )
}

export default FeatureOffer