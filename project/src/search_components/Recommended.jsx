import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { guestRating, ourPickPrice, priceLtoH, starRating } from '../Redux/hotels/action'

const Recommended = () => {

let dispatch=useDispatch()
const handleChange= (e)=>{
let value=e.target.value
 if(value==="price"){
     dispatch(priceLtoH())
 }else if(value==="starrating"){
     dispatch(starRating())
 }else if(value==="rating"){
     dispatch(guestRating())
 }else if(value==="ourprice"){
     dispatch(ourPickPrice())
 } 
}

  return (
    <div style={{height:"60px"}}>
         <p>See how we pick our recommended properties</p>
         <select name="sort" onChange={handleChange}>
           <option value="recommended">Recommended</option>
           <option value="price">Price</option>
           <option value="rating">Guest Rating + Our picks</option>
           <option value="starrating">Star Rating</option>
           <option value="ourprice">Price + Our picks</option>
          </select>
       </div>
  )
}

export default Recommended