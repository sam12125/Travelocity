export const RATING_GREATER_ONE= "RATING_GREATER_ONE"
export const RATING_GREATER_TWO="RATING_GREATER_TWO"
export const RATING_GREATER_THREE="RATING_GREATER_THREE"
export const RATING_GREATER_FOUR="RATING_GREATER_FOUR"
export const RATING_GREATER_FIVE="RATING_GREATER_FIVE"
export const PRICE_LOW_TO_HIGH="PRICE_LOW_TO_HIGH"
export const OUR_PICK_PRICE="OUR_PICK_PRICE"
export const STAR_RATING="STAR_RATING"
export const GUEST_RATING="GUEST_RATING"
export const LESS_SEVENTYFIVE= "LESS_SEVENTYFIVE"
export const LESS_ONE_TWENTY_FIVE= "LESS_ONE_TWENTY_FIVE"
export const LESS_TWO_HUNDRED= "LESS_TWO_HUNDRED"
export const LESS_THREE_HUNDRED= "LESS_THREE_HUNDRED"
export const GREATER_THREE_HUNDRED= "GREATER_THREE_HUNDRED"
export const RATING_FOUR_PLUS="RATING_FOUR_PLUS"
export const RATING_THREE_PLUS="RATING_THREE_PLUS"
export const REVIEW_GREATER_THAN_1K="REVIEW_GREATER_THAN_1K"
export const HIGH_REVIEW_RATING="HIGH_REVIEW_RATING"
export const HIGH_REVIEW_COST="HIGH_REVIEW_COST"
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const SHOW_DATA="SHOW_DATA"

export const greaterOne = ()=>{
    return{
        type:RATING_GREATER_ONE
    }
}

export const greaterTwo= ()=>{
    return{
        type:RATING_GREATER_TWO
    }
}

export const greaterThree= ()=>{
    return{
        type:RATING_GREATER_THREE
    }
}

export const greaterFour= ()=>{
    return{
        type:RATING_GREATER_FOUR
    }
}

export const greaterFive= ()=>{
    return{
        type:RATING_GREATER_FIVE
    }
}

export const priceLtoH=()=>{
    return{
        type:PRICE_LOW_TO_HIGH
    }
}

export const ourPickPrice=()=>{
    return{
        type:OUR_PICK_PRICE
    }
}

export const guestRating= ()=>{
    return{
        type:GUEST_RATING
    }
}

export const starRating= ()=>{
    return{
        type:STAR_RATING
    }
}

export const lessSeventyFive=()=>{
    return{type:LESS_SEVENTYFIVE}
}

export const lessOneTwentyFive=()=>{
    return{
        type:LESS_ONE_TWENTY_FIVE
    }
}

export const lessTwoHundred=()=>{
    return{
        type:LESS_TWO_HUNDRED
    }
}
export const lessThreeHundred=()=>{
    return{
        type:LESS_THREE_HUNDRED
    }
}

export const greaterThreeHundred=()=>{
    return{
        type:GREATER_THREE_HUNDRED
    }
}

export const ratingFourPlus=()=>{
    return{
        type:RATING_FOUR_PLUS
    }
}
export const ratingThreePlus=()=>{
    return{
        type:RATING_THREE_PLUS
    }
}

export const reviewGreaterThan1k=()=>{
    return{
        type:REVIEW_GREATER_THAN_1K
    }
}

export const highReviewRating= ()=>{
    return{
        type:HIGH_REVIEW_RATING
    }
}

export const highReviewCost=()=>{
    return {
        type:HIGH_REVIEW_COST
    }
}

export const loginSuccess= ()=>{
    return {
        type:LOGIN_SUCCESS
    }
}

export const showData= (payload)=>{
    return{
        type:SHOW_DATA,
        payload
    }
}