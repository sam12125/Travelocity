import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import styles from "./Payment.module.css"
import PersonIcon from '@mui/icons-material/Person';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const UserInfo = () => {
    let user= JSON.parse(localStorage.getItem("loginperson"))
  return (
    <div>
        <div className={styles.emailbox}>
           <LockIcon/>
           <div>
               <h3>Signed in as</h3>
               <p>{user.email}</p>
           </div>
        </div>
        <div className={styles.loadformbox}>
            <div className={styles.personicon}>
                <PersonIcon/>
                <h3>Room 1: <span>2 Adults, 1 King Bed</span></h3>
            </div>
            <div className={styles.done}>
               <DoneOutlineIcon style={{fontSize:"18px",color:"green"}}/>
               <p>Free parking</p>
               <DoneOutlineIcon style={{fontSize:"18px",color:"green"}} />
               <p>Free WiFi</p>
            </div>
            <div className={styles.tname}>
                <p>Traveler name<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
                <select>
                    <option value="Aman">{user.firstname} {user.lastname}</option>
                    <option>Add Members</option>
                    <option>Remove Member</option>
                </select>
            </div>
            <div className={styles.startform}>
             <div>
                <div>
                    <p>First name<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
                    <input type="text" className={styles.lastinput}  />
                </div>
                <div>
                    <p>Last name<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
                    <input className={styles.lastinput} type="text"  />
                </div>
             </div> 
                <div><p>Mobile phone number<sup style={{color:"red",fontSize:"20px"}} >*</sup></p></div>
                <div>
                    <select>
                        <option >IND +91</option>
                        <option value="">USA +1</option>
                    </select>
                    <input type="number" className={styles.lastinput2} placeholder='So the Property can reach you' />
                </div>
                <div>
                    <input style={{width:"20px",height:"20px",marginTop:"20px"}} type="checkbox" />
                    <label style={{marginTop:"20px",marginLeft:"-15px"}}>Receive text alerts about this trip. Messag and data rartes may apply.</label>
                </div>
                <p style={{color:"#0a438b"}} >Smoking requests (optional) </p>
                <p style={{color:"#0a438b"}}>Special Requests (optional)</p>
            </div>
        </div>
    </div>
  )
}

export default UserInfo