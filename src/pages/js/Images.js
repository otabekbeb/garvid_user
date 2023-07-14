import React from 'react'
import '../css/Images.css'
import images1 from '../img/images1.png'
import images2 from '../img/images2.png'
import images3 from '../img/images3.png'
import images4 from '../img/images4.png'
import images5 from '../img/images5.png'
import images6 from '../img/images6.png'

export default function Images() {
  return (
<header className='images'>
<div className="images-kotta">
    <div className="images-img">
        <img src={images1} alt="" />
        <img src={images2} alt="" />
        <img src={images3} alt="" />
        <img src={images4} alt="" className='oppo1' />
        <img src={images5} alt="" className='oppo1' />
        <img src={images6} alt=""  className='oppo1'/>
    </div>
</div>
</header>
  )
}
