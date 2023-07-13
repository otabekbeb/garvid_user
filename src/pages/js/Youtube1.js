import React from 'react'
import img_kotta from '../img/Rectangle.png'
import img_ava from '../img/Ellipse.png'
import {AiFillStar} from 'react-icons/ai'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import '../css/youtube1.css'
import Navbar from '../js/Navbar'
import Vazifa from  '../js/Vazifa'
export default function Youtube1() {
  return (
<>
<Navbar/>

  
<div className='youtube_bgc'>
    <div className="flex_youtube">
      <div className="youtube_kotta_img">
        <div className="img_youtube_kotta">
          <img src={img_kotta} alt="" />
        </div>
          <div className="flex_logig">
            <h1 className='raspberry_pi'>Основы программирования Raspberry Pi</h1>
            <div className="odtel_media_uchun">
            <h1>Основы программирования Raspberry Pi</h1>
            <div className="flex_star_p">
            <div className="flex_star2">
                <p><AiFillStar/></p>
                <p><AiFillStar/></p>
                <p><AiFillStar/></p>
                <p><AiFillStar/></p>
              </div>
              <div className="flex_star12">
                <p><AiFillStar/></p>
              </div>
              <p className='p_4_1_5245'>4.1 <span>(524)</span></p></div>
            </div>
              <div className="flex_star">
                <p><AiFillStar/></p>
                <p><AiFillStar/></p>
                <p><AiFillStar/></p>
                <p><AiFillStar/></p>
              </div>
              <div className="flex_star1">
                <p><AiFillStar/></p>
              </div>
              <p className='p_4_1_524'>4.1 <span>(524)</span></p>
              <div className="buttons_next_back">
            <button className='button_back'><BsChevronLeft/> <p>Предыдущий</p><p className='urok_back'> урок</p></button>
            <button><p>Следующий</p> <p className='urok_next'>урок</p> <BsChevronRight/>  </button>
          </div>
          </div>
            <div className="post_ava">
              <img src={img_ava} alt="" />
             <h6>Мухаммад Джумаев</h6>
             <button>Подписаться</button>
            </div>
      </div>
      <div className="youtube_kichkina">
        
      </div>
    </div>
</div> 
<Vazifa/>
</>
  )
}
