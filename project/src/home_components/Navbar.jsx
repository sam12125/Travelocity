import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DropDownNav from './DropDownNav'
import styles from "./Navbar.module.css"


const Navbar = () => {
const login= useSelector((state)=>state.login);
const loginData= JSON.parse(localStorage.getItem("loginperson"))||"";
let navigate=useNavigate()
if(loginData!==""){
var loginperson=loginData.firstname;
}else{
  loginperson="";
}


  return (
    <div className={styles.navcontainer}>
       <div className={styles.iconbox} onClick={()=>navigate("/")} >
           <img src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" alt="" />
           <DropDownNav/>
       </div>
       <div className={styles.navlinks}>
       <h4>Espariol</h4>
       <h4><a style={{color:"white" ,fontSize:"15px"}} href="https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=wwwtravelocitycom-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=80001&tpid=80001&eapid=0&langId=1033" target="_blank">List your property</a></h4>
       <h4 onClick={()=>navigate("/support")}>Support</h4>
       <h4>Trips</h4>
       <h4 onClick={()=>navigate("/signin")}>{login?loginperson:"Sign in"}</h4>
       </div>

    </div>
  )
}

export default Navbar