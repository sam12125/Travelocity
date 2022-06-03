import React from 'react'

const Map = () => {
  let search=JSON.parse(localStorage.getItem("travel"));
  // let city=search.going;
  // console.log(city)
  // let place= `https://www.google.com/maps/embed/v1/place?q=${city}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
  return (
    <div>
        <iframe src="" ></iframe>
    </div>
  )
}

export default Map