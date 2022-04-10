import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper"> {/* I can create a settings component instead of writing settings here. */}
            <div className='settingsTitle'>
                <span className="settingsUpdateTitle">
                    Update Your Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Your Account
                </span>
            </div>
            <form action="" className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://f4.bcbits.com/img/0010573837_20.jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/> {/*use htmlInput instead of this. */}
                </div>
                <label>Username</label>
                <input type="text" placeholder='serhat'/>
                <label>Email</label>
                <input type="email" placeholder='serhatoner@protonmail.com'/>
                <label>Password</label>
                <input type="passoword"/>
                <button className="settingsSubmit">Update</button>
            </form> 
        </div>
        <Sidebar/>
    </div>
  )
}
