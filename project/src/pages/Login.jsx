import React, { useState } from 'react'
import "../search_components/Hotel.css"
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../Redux/hotels/action';

const Login = () => {
    const navigate= useNavigate();
    let dispatch= useDispatch();
    const [loginData,setLoginData]=useState({});

    const handleChange= (e)=>{
        let field=e.target;
        if(field.type==="checkbox"){
            setLoginData({...loginData,[field.name]:field.checked})
        }else{
            setLoginData({...loginData,[field.name]:field.value})
        }
    }
    let userinfo=JSON.parse(localStorage.getItem("userinfo"))||"";
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(userinfo===""){
            alert("User Not Found Please create a account")
            navigate("/signup")
        }else{
        let flag=false;
        for(let i=0;i<userinfo.length;i++){
            if(userinfo[i].email===loginData.email&&userinfo[i].password===loginData.password){
              flag=true;
              localStorage.setItem("loginperson",JSON.stringify(userinfo[i]))
            }
        }
        if(flag===true){
           dispatch(loginSuccess())
           navigate("/")
        }else{
            alert("Invalid Credentials")
        }
      }
    }
  return (
    <div className='signupbox'>
    <div>
        <h1>Sign in</h1>
    </div>
    <form onSubmit={handleSubmit}>
        
        <div>  
            <div>
                <input  required onChange={handleChange} type="email" placeholder="Email address" name="email" className='signupinput'/>
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
                <input type="submit" className='signupsubmit' value="continue" />
            </div>
        </div>
    </form>
    <div id="endsignup">
      <p id="sp1" style={{color:"#0a438b"}}>Forgot Password</p>
      <p>Don't have an account? <Link to={"/signup"}>Create one</Link></p>    
      <p>or continue with</p>
      <div><AppleIcon style={{marginRight:"10px",fontSize:"30px"}}/><FacebookIcon style={{color:"blue",fontSize:"30px"}}/></div>
    </div>
</div>
  )
}

export default Login