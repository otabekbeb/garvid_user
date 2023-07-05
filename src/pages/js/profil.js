import React from 'react'
import Use_img from "../img/Ellipse.jpg"
import icon_img from "../img/start-up.png"
import icon_img1 from "../img/Vector.svg"
import icon_img2 from "../img/medal.svg"
import "../css/profil.css"
import {MdOutlinePhotoCamera} from "react-icons/md"
import {BsActivity,BsFillBellFill,BsThreeDots} from "react-icons/bs"

export default function Profil() {

  function userimgModal(){
    document.querySelector(".user_img_hover").style="  position: absolute;bottom: 0;"
    
  }
  function userimgClose(){
    document.querySelector(".user_img_hover").style="  position: absolute;bottom: -100px;"
    
  }

  return (
    <div>
      <div className="profil_size_df">
       <div className="profil_size">
        <div className="profil_blok_bir">
          <div onMouseLeave={()=>userimgClose()} className='user_img_size'>
          <img onMouseEnter={()=>userimgModal()} className='user_img' src={Use_img} alt="" />
           <div className="user_img_hover">
            <input type="file" />
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
        
        <div className="profil_blok_ikki">
          <div className="profil_blok_ikki_text">
          <p>Текущий баланс</p>
          <div className="profil_blok_ikki_sum">
            <h1>1 350 000</h1><p>UZS</p>
          </div>
          <div className="profil_blok_ikki_button">
            <button><BsActivity/></button><button>Пополнение баланса</button>
          </div>
          </div>
          <div className="profil_blok_ikki_icon">
          <BsFillBellFill className='profil_blok_ikki_icon_bir' />
          <BsThreeDots className='profil_blok_ikki_icon_ikki' />
          </div>
        </div>
        </div> 
      </div>
    </div>
  )
}
