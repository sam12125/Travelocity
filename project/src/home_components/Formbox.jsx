import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import SideSelect from "./SideSelect"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleSendTwoToneIcon from '@mui/icons-material/ScheduleSendTwoTone';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showData } from '../Redux/hotels/action';
import HotelData from "../Redux/hotels/HotelData.json"


const Formbox = () => {
  const [travelForm,setTravelForm]= useState({});
  const navigate= useNavigate();
  
  const login= useSelector((state)=>state.login);
  const dispatch=useDispatch()
  
  const handleChange= (e)=>{
    let field=e.target;
    setTravelForm({...travelForm,[field.name]:field.value});
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
   
    localStorage.setItem("travel",JSON.stringify(travelForm));
    const city= JSON.parse(localStorage.getItem("travel")).going;
    if(login){
      if(city==="mumbai"||city==="Mumbai"){
        var hotel=HotelData.Mumbaidata;
        }else if(city==="goa"||city==="Goa"){
          hotel=HotelData.goaData;
        }
      dispatch(showData(hotel))
      navigate("/search")
      
    }else{
      alert("Please Signup first")
      navigate("/signin")
    }
  }

  return (
    <div className={styles.formbox}>
      <div >
        <SideSelect/><br />
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.upperform}>
             <div className={styles.inputbox1}>
               <LocationOnIcon/>
               <p>Going to</p>
               <input type="text" name="going" onChange={handleChange}/>
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-in&nbsp;&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <input type="date" name="checkin" onChange={handleChange}/>
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-out&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <input type="date" name="checkout" onChange={handleChange} />
             </div>
          </div>
          <div className={styles.lowerform}>
             <div className={styles.inputbox1}>
               <LocationOnIcon/>
               <p>Leaving From</p>
               <input type="text" name="leaving" onChange={handleChange} />
             </div>
          </div>
          <div className={styles.submitform}>
            <input type="submit" value='Search' />
          </div>
        </form>
        
      </div>  
    </div>
  )
}

export default Formbox