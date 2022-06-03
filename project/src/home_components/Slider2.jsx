import React from 'react'
import { smallslider2 } from '../data/HomepageData'
import Smallslidegrid from './Smallslidegrid'
import styles from "./Navbar.module.css"
import { nanoid } from 'nanoid'

const Slider2 = () => {
    return (
        <>
        <h1 style={{width:"90%",margin:"auto",marginBottom:"-40px"}}>Start planning your next trip</h1>
        <div className={styles.smallslider2}>
            {smallslider2.map((el)=>{
                return <Smallslidegrid key={nanoid()} {...el}/>
            })}
        </div>
        </>
    )
}

export default Slider2