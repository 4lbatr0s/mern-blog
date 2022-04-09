import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
        className='postImage'
        src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="postbox"
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum Dolo Sit Amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescription'>Vivamus ut placerat sem. Sed euismod ex vel dui dignissim, et maximus purus pellentesque. Morbi pulvinar pellentesque urna ut sollicitudin. Mauris ut molestie magna. Proin aliquam ligula quis mattis mattis. Ut nulla nulla, ullamcorper quis imperdiet in, convallis et purus. Vivamus luctus placerat tortor, ut bibendum augue auctor nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sodales, orci nec fermentum commodo, tortor odio aliquet nisi, id vestibulum nisi urna in sapien. Praesent placerat, velit quis sagittis commodo, augue tortor iaculis massa, quis congue felis tortor ac arcu. Nullam non dolor id quam consectetur mollis. Suspendisse feugiat sapien rhoncus magna luctus dictum. Sed egestas ac lorem at sodales.</p>
     </div>
  )
}
