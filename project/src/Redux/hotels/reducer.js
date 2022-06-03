import { GREATER_THREE_HUNDRED, GUEST_RATING, HIGH_REVIEW_COST, HIGH_REVIEW_RATING, LESS_ONE_TWENTY_FIVE, LESS_SEVENTYFIVE, LESS_THREE_HUNDRED, LESS_TWO_HUNDRED, LOGIN_SUCCESS, OUR_PICK_PRICE, PRICE_LOW_TO_HIGH, RATING_FOUR_PLUS, RATING_GREATER_FIVE, RATING_GREATER_FOUR, RATING_GREATER_ONE, RATING_GREATER_THREE, RATING_GREATER_TWO, RATING_THREE_PLUS, REVIEW_GREATER_THAN_1K, SHOW_DATA, STAR_RATING } from "./action"
import HotelData from "./HotelData"

// let place=JSON.parse(localStorage.getItem("travel"))||""
// if(place.going==="mumbai"||place.going==="Mumbai"){
// var hotel=HotelData.Mumbaidata;
// }else if(place.going==="goa"||place.going==="Goa"){
//   hotel=HotelData.goaData;
// }else{
//   hotel=[]
// }

let mumbai=HotelData.Mumbaidata;
let goa=HotelData.goaData;
var hotel=[...mumbai,...goa]
let initialState={
    hotels:hotel,
    login:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case RATING_GREATER_ONE:{
    let ndata=hotel.filter((el)=>{
      return el.Rating<2
    })
    return { ...state,hotels:ndata }
  }
  case RATING_GREATER_TWO:{
    let ndata=hotel.filter((el)=>{
      return (el.Rating<3&&el.Rating>2)
    })
    return { ...state,hotels:ndata }
  }
  case RATING_GREATER_THREE:{
    let ndata=hotel.filter((el)=>{
      return (el.Rating<4&&el.Rating>3)
    })
    return { ...state,hotels:ndata }
  }
  case RATING_GREATER_FOUR:{
    let ndata=hotel.filter((el)=>{
      return (el.Rating<4.5&&el.Rating>4)
    })
    return { ...state,hotels:ndata }
  }
  case RATING_GREATER_FIVE:{
    let ndata=hotel.filter((el)=>{
      return el.Rating>4.5
    })
    return { ...state,hotels:ndata }
  }
  case PRICE_LOW_TO_HIGH:{
    let ndata=hotel.sort((a,b)=>{
      return (a.Cost - b.Cost)
    })
    return {...state,hotels:[...ndata]}
  }
  case OUR_PICK_PRICE:{
    let ndata=hotel.filter((el)=>{
      return el.Cost>60&&el.Cost<220
    })
    return {...state,hotels:[...ndata]}
  }
  case GUEST_RATING:{
    let ndata=hotel.sort((a,b)=>{
      return b.Review-a.Review;
    })
    return {...state,hotels:[...ndata]}
  }
  case STAR_RATING:{
    let ndata=hotel.sort((a,b)=>{
      return b.Rating-a.Rating;
    })
    return{...state,hotels:[...ndata]}
  }
  case LESS_SEVENTYFIVE:{
    let ndata=hotel.filter((el)=>{
      return el.Cost<=75
    })
    return {...state,hotels:[...ndata]}
  }
  case LESS_ONE_TWENTY_FIVE:{
    let ndata=hotel.filter((el)=>{
      return (el.Cost>75&&el.Cost<=125)
    })
    return {...state,hotels:[...ndata]}
  }
  case LESS_TWO_HUNDRED:{
    let ndata=hotel.filter((el)=>{
      return (el.Cost>125&&el.Cost<=200)
    })
    return {...state,hotels:[...ndata]}
  }
  case LESS_THREE_HUNDRED:{
    let ndata=hotel.filter((el)=>{
      return (el.Cost>200&&el.Cost<300)
    })
    return {...state,hotels:[...ndata]}
  }
  case GREATER_THREE_HUNDRED:{
    let ndata=hotel.filter((el)=>{
      return (el.Cost>=300)
    })
    return {...state,hotels:[...ndata]}
  }
  case RATING_FOUR_PLUS:{
    let ndata=hotel.filter((el)=>{
      return el.Rating>=4
    })
    return { ...state,hotels:ndata }
  }

  case RATING_THREE_PLUS:{
    let ndata=hotel.filter((el)=>{
      return el.Rating>=3.5
    })
    return { ...state,hotels:ndata }
  }
  case REVIEW_GREATER_THAN_1K:{
    let ndata=hotel.filter((el)=>{
      return el.Review>=1000
    })
    return { ...state,hotels:ndata }
  }
  case HIGH_REVIEW_RATING:{
    let ndata=hotel.filter((el)=>{
      return (el.Review>=600&&el.Rating>=4)
    })
    return { ...state,hotels:ndata }
  }
  case HIGH_REVIEW_COST:{
    let ndata=hotel.filter((el)=>{
      return (el.Review>=600&&el.Cost>=100)
    })
    return { ...state,hotels:ndata }
  }
  case LOGIN_SUCCESS:{
    return{
      ...state,login:true
    }
  }
  case SHOW_DATA:{
    return{
      ...state,hotels:payload
    }
  }

  default:
    return state
  }
}
