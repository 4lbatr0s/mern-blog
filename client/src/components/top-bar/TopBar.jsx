import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
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
            <li className='topListItem'>
              <Link className = "link" to="/">HOME</Link>
            </li>
            <li className='topListItem'>
              <Link className = "link" to="/">ABOUT</Link>
            </li>
            <li className='topListItem'>
              <Link className = "link" to="/">CONTACT</Link>
            </li>
            <li className='topListItem'>
              <Link className = "link" to="/">WRITE</Link>
            </li>
            <li className='topListItem'>
              {user && "LOGOUT"} {/**if there is a user, then show logout, if not then don't show up. */}
            </li>
          </ul>
        </div>
        <div className='topRight'> {/*again, if there is user, show profile pic, if not, dont! */}
            {user ? (
              <img className = 'topImg' src="https://tarheeltrailblazers.com/wp/wp-content/uploads/2020/08/computer-kid.jpeg" alt="" />
            ):(
              <ul className= "topList">
                <li className='topListItem'><Link className='link' to="/login">LOGIN</Link> </li>
                <li className='topListItem'><Link className='link' to="/register">REGISTER</Link> </li>
              </ul>
            )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>          
        </div>
    </div>
  )
}
