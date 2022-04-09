import React from 'react'
import "./topbar.css"
export default function TopBar() {
  return (
    <div className="top">
        <div className='topLeft'>
          <i className="topIcon fa-brands fa-facebook-square"></i> 
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-github-square"></i>
          <i className="topIcon fa-brands fa-kaggle"></i>
        </div>
        <div className='topCenter'>
          <ul className="topList">
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
          </ul>
        </div>
        <div className='topRight'>
            <img className = 'topImg' src="https://tarheeltrailblazers.com/wp/wp-content/uploads/2020/08/computer-kid.jpeg" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>          
        </div>
    </div>
  )
}
