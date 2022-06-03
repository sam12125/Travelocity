import React, { useState } from 'react'
import "../search_components/Hotel.css"
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
 const [signupData,setSignupData]=useState({});
 let navigate=useNavigate()

const handleChange= (e)=>{
    let field=e.target;
    if(field.type==="checkbox"){
        setSignupData({...signupData,[field.name]:field.checked})
    }else{
        setSignupData({...signupData,[field.name]:field.value})
    }
}
let userinfo= JSON.parse(localStorage.getItem("userinfo"))||[];
const handleSubmit=(e)=>{
    e.preventDefault();
    userinfo=[...userinfo,signupData]
    localStorage.setItem("userinfo",JSON.stringify(userinfo))
    navigate("/signin")
}

  return (
    <div className='signupbox'>
        <div>
            <h1>Create an account</h1>
        </div>
        <form onSubmit={handleSubmit}>
            
            <div>  
                <div>
                    <input  required onChange={handleChange} type="email" placeholder="Email address" name="email" className='signupinput'/>
                </div>
                <div>
                <input required onChange={handleChange}  type="text" placeholder="First name" name="firstname" className='signupinput'/>
                </div>
                <div>
                <input required onChange={handleChange}  type="text" placeholder="Last name" name="lastname" className='signupinput'/>
                </div>
                <div>
                <input required onChange={handleChange}  type="password" placeholder="Password" name="password" className='signupinput'/>
                </div>
                <div>
                 <input required onChange={handleChange}  name="signupcheck" type="checkbox" className='signupcheck' /> <label>This is a public or shared device</label>
                </div>
                <div>
                    <p>
                    By creating an account, I agree to the Travelocity <span id="sp1">Terms and Conditions and Privacy Statement.</span>
                    </p>
                </div>
                <div>
                    <input type="submit" className='signupsubmit' value="Continue" />
                </div>
            </div>
        </form>
        <div id="endsignup">
          <p>Already have an account? <Link to={"/signin"}>Sign in</Link></p>    
          <p>or continue with</p>
          <div><AppleIcon style={{marginRight:"10px",fontSize:"30px"}}/><FacebookIcon style={{color:"blue",fontSize:"30px"}}/></div>
        </div>
    </div>
  )
}

export default Signup