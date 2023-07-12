import React from 'react'
import Use_img from "../img/Ellipse.jpg"
import icon_img from "../img/start-up.png"
import icon_img1 from "../img/Vector.svg"
import icon_img2 from "../img/medal.svg"
import "../css/profil.css"
import Pdp from "./UserPdp"
import {MdOutlinePhotoCamera} from "react-icons/md"
import {BsActivity,BsFillBellFill,BsThreeDots} from "react-icons/bs"
import {BiCast} from "react-icons/bi"
import {FiEdit,FiLifeBuoy,FiLogOut} from "react-icons/fi"
import {TbPointFilled} from "react-icons/tb"
import {AiOutlineRight} from "react-icons/ai"
import chadimg from "../img/Ellipse.jpg"


export default function Profil() {

  function userimgModal(){
    document.querySelector(".user_img_hover").style="  position: absolute;bottom: 0;"
    
  }
  function userimgClose(){
    document.querySelector(".user_img_hover").style="  position: absolute;bottom: -100px;"
  }

  function taxrirlashModal(){
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style="display:block;"
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style="display:none;"
  }
  function taxrirlashClose(){
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style="display:none;"
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style="display:none;"
  }
  function taxrirlashChadModal(){
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style="display:block;"
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style="display:none;"
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
          <div onMouseLeave={()=>taxrirlashClose()} className="profil_blok_ikki_icon">
          <BsFillBellFill onMouseEnter={()=>taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
          <BsThreeDots  onMouseEnter={()=>taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
          <div className="profil_blok_ikki_icon_texrirlash_modal">
            <div className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Редактировать профиль</p></div>
            <div className='taxrirlash_modal_div'><BiCast className='taxrirlash_modal_icon'/><p>Уведомления</p></div>
            <div className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon'/><p>Помощь</p></div>
            <hr />
            <div className='taxrirlash_modal_div'><FiLogOut className='taxrirlash_modal_icon'/><p>Выход</p></div>
          </div>
          <div className="profil_blok_ikki_icon_taxriirlash_chat">
            <p>Bugun</p>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Дженни Фокс</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Дженни Фокс</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
            <p>06.08.2019</p>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Дженни Фокс</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
             
             <div className="taxrirlash_chad_barchasini">
              <p>Посмотреть все<AiOutlineRight/></p>
             </div>
            </div>
          </div>



          </div>
        </div>
        </div> 
      </div>
  )
}
