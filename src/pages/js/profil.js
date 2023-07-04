import React from 'react'
import Use_img from "../img/Ellipse.jpg"
import icon_img from "../img/start-up.png"
import icon_img1 from "../img/Vector.svg"
import icon_img2 from "../img/medal.svg"
import "../css/profil.css"
import {MdOutlinePhotoCamera} from "react-icons/md"

export default function Profil() {

  function userimgModal(){
    document.querySelector(".user_img_hover").style="display:block;"
    
  }
  function userimgClose(){
    document.querySelector(".user_img_hover").style="display:none;"
    
  }

  return (
    <div>
       <div className="profil_size">
        <div className="profil_blok_bir">
          <div onMouseLeave={()=>userimgClose()} className='user_img_size'>
          <img onMouseEnter={()=>userimgModal()} className='user_img' src={Use_img} alt="" />
           <div className="user_img_hover">
          <MdOutlinePhotoCamera  className='user_hover_photo_icon'/>
        </div>
        </div>
           <div className="blok_bir_text">
            <h1>Тураев Джафарбек</h1>
            <button>Обычный пользователь</button>
            <p>Мои знаки</p>
            <div className="blok_bir_icon">
            <div className="blok_bir_icon_img1">
            <img className='raketa_img' src={icon_img} alt="" />
            </div>
            <div className="blok_bir_icon_img2">
            <img className='miya_img' src={icon_img1} alt="" />
            </div>
            <div className="blok_bir_icon_img3">
            <img className='medal_img' src={icon_img2} alt="" />
            </div>
            </div>
           </div>
        </div>
        
        <div className="profil_blok_ikki"></div>
        </div> 
    </div>
  )
}
