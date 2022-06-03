import React from 'react'
import { smallslider1 } from '../data/HomepageData'
import Smallslidegrid from './Smallslidegrid'
import styles from "./Navbar.module.css"
import {nanoid} from "nanoid"
const Slider1 = () => {
  return (
    <div className={styles.smallslider1}>
        {smallslider1.map((el)=>{
            return <Smallslidegrid key={nanoid()} {...el}/>
        })}
    </div>
  )
}

export default Slider1;