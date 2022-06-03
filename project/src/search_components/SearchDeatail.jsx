import React, { useState } from 'react'
import styles from './Search.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleSendTwoToneIcon from '@mui/icons-material/ScheduleSendTwoTone';
import { useDispatch } from 'react-redux';
import { showData } from '../Redux/hotels/action';
import HotelData from "../Redux/hotels/HotelData.json"


const SearchDeatail = () => {
  let search=JSON.parse(localStorage.getItem("travel"))||{}
  let [searchForm,setSearchForm]= useState(search)
  let dispatch=useDispatch()

  const handleChange= (e)=>{
    let field=e.target;
    setSearchForm({...searchForm,[field.name]:field.value})
  }

  const  handleSubmit= (e)=>{
     e.preventDefault();
     localStorage.setItem("travel",JSON.stringify(searchForm))
     const city= JSON.parse(localStorage.getItem("travel")).going;
     if(city==="mumbai"||city==="Mumbai"){
      var hotel=HotelData.Mumbaidata;
      }else if(city==="goa"||city==="Goa"){
        hotel=HotelData.goaData;
      }
     dispatch(showData(hotel))    
  }
  

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <div className={styles.upperform}>
             <div className={styles.inputbox1}>
               <LocationOnIcon/>
               <p>Going to</p>
               <input type="text" name="going" placeholder={searchForm.going} onChange={handleChange} />
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-in&nbsp;&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <p>{searchForm.checkin} </p>
               <input type="date" name="checkin" onChange={handleChange} />
             </div>
             <div className={styles.datebox1}>
               <p style={{marginLeft:"5px"}}>Check-out&nbsp;</p>
               <ScheduleSendTwoToneIcon/> 
               <p>{searchForm.checkout} </p>
               <input type="date" name="checkout" onChange={handleChange} />
             </div>
             <div className={styles.submitform}>
                <input type="submit" value='Search' />
             </div>
          </div>
        </form>
    </div>
  )
}

export default SearchDeatail