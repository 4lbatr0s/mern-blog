import "./sidebar.css"
import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="imgItem" src="https://images.fineartamerica.com/images-medium-large-5/1920s-man-cowboy-waving-hat-in-hand-vintage-images.jpg" alt="cowboywawinghat" />
            <p>Vivamus ut placerat sem. Sed euismod ex vel dui dignissim, et maximus purus pellentesque. Morbi pulvinar pellentesque urna ut sollicitudin. Mauris ut molestie magna. Proin aliquam ligula quis mattis mattis. Ut nulla nulla, ullamcorper quis imperdiet in, convallis et purus. Vivamus luctus placerat tortor, ut bibendum augue auctor nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sodales, orci nec fermentum commodo, tortor odio aliquet nisi, id vestibulum nisi urna in sapien. Praesent placerat, velit quis sagittis commodo, augue tortor iaculis massa, quis congue felis tortor ac arcu. Nullam non dolor id quam consectetur mollis. Suspendisse feugiat sapien rhoncus magna luctus dictum. Sed egestas ac lorem at sodales. Quisque non consectetur enim. </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                CATEGORIES
            </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                FOLLOW US
            </span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i> 
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-github-square"></i>
                <i className="sidebarIcon fa-brands fa-kaggle"></i>
            </div>
        </div>
    </div>
  )
}
