import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import {useDispatch} from "react-redux"
import { greaterFive, greaterFour, greaterOne, greaterThree, greaterTwo } from '../Redux/hotels/action';

const StarRating = () => {
 let dispatch = useDispatch()
  const handleOne=()=>{
    dispatch(greaterOne())
  }
  const handleTwo=()=>{
    dispatch(greaterTwo())
  }
  const handleThree=()=>{
    dispatch(greaterThree())
  }
  const handleFour=()=>{
    dispatch(greaterFour())
  }
  const handleFive=()=>{
    dispatch(greaterFive())
  }
  return (
    <div>
      <h3>Star Rating</h3>
      <div id="star">
        <div id ="btn1" onClick={handleOne}  ><h3>1</h3><StarRateIcon/></div>
        <div id ="btn1" onClick={handleTwo}><h3>2</h3><StarRateIcon/></div>
        <div id ="btn1" onClick={handleThree}><h3>3</h3><StarRateIcon/></div>
        <div id ="btn1" onClick={handleFour}><h3>4</h3><StarRateIcon/></div>
        <div id ="btn1" onClick={handleFive}><h3>5</h3><StarRateIcon/></div>
      </div>

    </div>
  )
}

export default StarRating