import React from 'react'
import {Left} from './Left'
import Right from './Right'
import styles from './Search.module.css'


const Whole = () => {
  return (
    <div className={styles.whole}>
        <Left/>
        <Right/>
    </div>
  )
}

export default Whole