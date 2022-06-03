import  React,{useState,useEffect} from "react";
import Budget from "./Budget";
import GuestRating from "./GuestRating";
import "./Hotel.css"

import PopularFilter from "./PopularFilter";
import StarRating from "./StarRating";



export const Left=()=> {
 
  return (
    <>
   <div>
  
     <PopularFilter/>
     <StarRating/>
     <Budget/>
     <GuestRating/>


    </div>
    </>
    
  );
}