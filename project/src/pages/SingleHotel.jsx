import React from 'react'
import DetailsPage from '../single_hotel_components/DetailsPage'
import Photos from '../single_hotel_components/Photos'
import Roomdetails from '../single_hotel_components/RoomDetails'


const SingleHotel = () => {
  return (
    <div>
        <Photos/>
        <DetailsPage/>
        <Roomdetails/>
    </div>
  )
}

export default SingleHotel