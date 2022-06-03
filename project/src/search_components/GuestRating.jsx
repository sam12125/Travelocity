import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { greaterFive, ratingFourPlus, ratingThreePlus } from '../Redux/hotels/action';

const GuestRating = () => {
  const[radio1,setRadio1]=useState(false);
  const[radio2,setRadio2]=useState(false);
  const[radio3,setRadio3]=useState(false);


  const dispatch=useDispatch();
  const hadleChange1=(e)=>{
    setRadio1(true)
    let check=e.target.checked;
    if(check===true){
      dispatch(greaterFive())
    }
    setRadio2(false)
    setRadio3(false)
  }
  const handleChange2=(e)=>{
    setRadio2(true)
    let check=e.target.checked;
    if(check===true){
      dispatch(ratingFourPlus())
    }
    setRadio1(false)
    setRadio3(false)
  }
  const handleChange3=(e)=>{
    setRadio3(true)
    let check=e.target.checked;
    if(check===true){
      dispatch(ratingThreePlus())
    }
    setRadio1(false)
    setRadio2(false)
  }


  return (
    <div>
      <h3>Guest Rating</h3>
      
      <div id="popsort">
      <div>        
        <input type="radio" value="Any"/> <p>Any</p>      
      </div>
      <div>       
         <input type="radio" checked={radio1} onChange={hadleChange1} /> <p>Wonderful 4.5+</p>     
      </div>
      <div>       
          <input type="radio" checked={radio2} onChange={handleChange2} /> <p>Very good 4+</p>     
      </div>
      <div>
          <input type="radio" checked={radio3} onChange={handleChange3} /> <p>Good 3.5+</p>     
      </div>
      </div>
      
    </div>
  )
}

export default GuestRating