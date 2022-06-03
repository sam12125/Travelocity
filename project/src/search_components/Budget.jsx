import React from 'react'
import { useDispatch } from 'react-redux';
import { greaterThreeHundred, lessOneTwentyFive, lessSeventyFive, lessThreeHundred, lessTwoHundred } from '../Redux/hotels/action';

const Budget = () => {
let dispatch=useDispatch();
  const handleLess1= (e)=>{
    let check=e.target.checked;
    if(check===true){
    dispatch(lessSeventyFive())
    }
    document.getElementById("LessthanO").checked=false;
    document.getElementById("LessthanT").checked=false;
    document.getElementById("LessthanTh").checked=false;
    document.getElementById("GreaterthanTh").checked=false;
  }
  const handleLess2= (e)=>{
    let check=e.target.checked;
    if(check===true){
    dispatch(lessOneTwentyFive())
    }
    document.getElementById("LessthanS").checked=false;
    document.getElementById("LessthanT").checked=false;
    document.getElementById("LessthanTh").checked=false;
    document.getElementById("GreaterthanTh").checked=false;
  }
  const handleLess3= (e)=>{
    let check=e.target.checked;
    if(check===true){
    dispatch(lessTwoHundred())
    }
    document.getElementById("LessthanS").checked=false;
    document.getElementById("LessthanTh").checked=false;
    document.getElementById("GreaterthanTh").checked=false;
    document.getElementById("LessthanO").checked=false;
  }
  const handleLess4= (e)=>{
    let check=e.target.checked;
    if(check===true){
    dispatch(lessThreeHundred())
    }
    document.getElementById("GreaterthanTh").checked=false;
    document.getElementById("LessthanO").checked=false;
    document.getElementById("LessthanS").checked=false;
    document.getElementById("LessthanT").checked=false;

  }
  const handleLess5= (e)=>{
    let check=e.target.checked;
    if(check===true){
    dispatch(greaterThreeHundred())
    }
    document.getElementById("LessthanO").checked=false;
    document.getElementById("LessthanS").checked=false;
    document.getElementById("LessthanT").checked=false;
    document.getElementById("LessthanTh").checked=false;
  }
  return (
    <div>

       <h3>Your Budget</h3>
       <div id="popsort">
           <div>
              <input type="checkbox" id="LessthanS" onChange={handleLess1}/> <p>Less than $75</p>  
           </div>
           <div>
               <input type="checkbox" id="LessthanO" onChange={handleLess2} /> <p>$75 to $125</p>   
           </div>
           <div>
               <input type="checkbox" id="LessthanT" onChange={handleLess3} /> <p>$125 to $200</p>  
           </div>
           <div>
               <input type="checkbox" id="LessthanTh" onChange={handleLess4} /> <p>$200 to $300</p> 
           </div>
           <div>
               <input type="checkbox" id="GreaterthanTh" onChange={handleLess5} /> <p>Greater than $300</p>
           </div>   
      </div>
    </div>
  )
}

export default Budget