import React from 'react'
import Navbar from '../home_components/Navbar'
import {Routes,Route} from"react-router-dom"
import Home from '../pages/Home'
import Fotter from '../home_components/Fotter'
import Support from '../pages/Support'
import HotelSearch from '../pages/HotelSearch'
import SingleHotel from '../pages/SingleHotel'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Payment from '../pages/Payment'
import PaymentSuccess from '../pages/PaymentSuccess'
const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path={"/"} element={<Home/>}/>
           <Route path={"/support"} element={<Support/>}/>
           <Route path={"/search"} element={<HotelSearch/>}/>
           <Route path={"/hotel"} element={<SingleHotel/>}/>
           <Route path={"/signup"} element={<Signup/>}/>
           <Route path={"/signin"} element={<Login/>}/>
           <Route path={"/payment"} element={<Payment/>}/>
           <Route path={"/paymentsucessful"} element={<PaymentSuccess/>}/>
        </Routes>
        <Fotter/>
    </div>
  )
}

export default MainRoute