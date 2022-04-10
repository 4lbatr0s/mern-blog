import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
        className='writeImage'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"> {/* We've craeted a label with attribute htmlFor to make this label work as fileInput id below. */}
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/> {/*now label fileInput works instead of this, so we can hide this*/}
                <input type="text" placeholder='TITLE'  className = "writeInput" autoFocus={true}/> {/*autoFocus:whenever I refresh the page, set cursor inside the input area*/}
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className = "writeSubmit">Publish</button>
        </form>
    </div>
  )
}
