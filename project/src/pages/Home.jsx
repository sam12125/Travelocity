import React from 'react'
import BigGrid from '../home_components/BigGrid'
import Destination from '../home_components/Destination'
import FeatureOffer from '../home_components/FeatureOffer'
import ImageForm from '../home_components/ImageForm'
import Scanner from '../home_components/Scanner'
import Slider1 from '../home_components/Slider1'
import Slider2 from '../home_components/Slider2'
import Video from '../home_components/Video'

const Home = () => {
  return (
    <>
       <ImageForm/>
       <Slider1/>
       <BigGrid/>
       <Slider2/>
       <FeatureOffer/>
       <Video/>
       <Scanner/>
       <Destination/>
    </>
  )
}

export default Home