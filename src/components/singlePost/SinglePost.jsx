import React from 'react'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://www.alastyr.com/blog/wp-content/uploads/2021/04/Javascript-nedir.jpg" alt="" className="singlePostImage" />
      </div>
      <h1 className="singlePostTitle">
      Orci varius natoque penatibus et magnis
        <div className="singlePostEditContainer">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className='singlePostAuthor'>Author:<b>Serhat</b></span>
        <span className='singlePostAuthor'>1 hour ago</span>
      </div>
      <p className='singlePostDescription'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien nulla, scelerisque ut lorem at, luctus rhoncus nunc. Duis hendrerit leo nec risus pharetra dictum nec non turpis. Integer gravida pulvinar vulputate. Phasellus lorem erat, lobortis eu sem vitae, molestie euismod lorem. Vestibulum ullamcorper auctor venenatis. Nam pretium metus nibh, id molestie justo sollicitudin quis. Maecenas vel arcu sapien. Nam fringilla velit a dapibus lacinia. Maecenas varius maximus dolor et commodo. In suscipit libero vitae urna viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id commodo dui. Fusce laoreet mauris eget convallis interdum. Sed finibus elit at libero pretium, ut sollicitudin arcu finibus. Nulla eu dui ac diam consectetur imperdiet id eleifend justo.
  Curabitur lacus magna, mattis id consequat a, vehicula et felis. Praesent quis viverra nibh, sit amet cursus odio. Vivamus quis ante eget lectus vehicula tincidunt. Quisque a eros vulputate, commodo lectus sed, sagittis quam. Duis sollicitudin, nulla convallis eleifend blandit, augue tortor dictum elit, dapibus elementum nisl neque a arcu. Nullam cursus ligula ac augue vehicula pharetra. Nulla volutpat viverra arcu eu gravida. Nunc tincidunt dictum ullamcorper. Aenean posuere malesuada tortor, nec aliquam eros. Phasellus viverra est risus, a condimentum ligula dapibus non. Vivamus at sagittis elit. Proin vestibulum arcu erat, eu congue nibh euismod ut. Quisque vulputate congue enim, id feugiat ante aliquam eu. Nunc tincidunt non orci in volutpat. Aenean scelerisque nunc eu magna lacinia ultricies.
  Duis sed leo a odio efficitur viverra at at eros. Maecenas facilisis pharetra luctus. Donec felis urna, dignissim vel nunc ut, elementum lobortis justo. Donec bibendum mollis augue ut semper. Duis vitae cursus lorem, et bibendum magna. Cras eget molestie mi. Pellentesque vel suscipit justo. Donec nec faucibus nisl, id vehicula magna. Sed rutrum lacus nulla, ut sagittis ante venenatis sit amet. Donec ultrices volutpat risus, eu suscipit libero aliquam nec. In hac habitasse platea dictumst. Aenean sagittis, augue sit amet maximus fringilla, nunc ligula mattis lectus, eu laoreet eros leo sed tortor. Maecenas sollicitudin, mi nec dapibus molestie, mauris tortor condimentum mi, eget porttitor risus leo quis odio. Duis sapien lacus, rutrum tristique dolor interdum, laoreet venenatis elit. Nulla posuere pellentesque porttitor. 
      </p>
    </div>
  )
}
