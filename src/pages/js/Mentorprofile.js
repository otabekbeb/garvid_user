import React, { useState,useEffect } from 'react'
import Use_img from "../img/Ellipse.jpg"
import "../css/mentorprofile.css"
import Pdp from "./UserPdp"
import {MdOutlinePhotoCamera} from "react-icons/md"
import {BsActivity,BsFillBellFill,BsThreeDots} from "react-icons/bs"
import {BiCast} from "react-icons/bi"
import {FiEdit,FiLifeBuoy,FiLogOut} from "react-icons/fi"
import {TbPointFilled} from "react-icons/tb"
import {AiOutlineRight} from "react-icons/ai"
import chadimg from "../img/Ellipse.jpg"

export default function Mentorprofile() {
  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);


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
      {state1==="en" ?(<div>
      <div className="profil_size_df">
       <div className="profil_size">
        <div className="profil_blok_bir1">
          <div onMouseLeave={()=>userimgClose()} className='user_img_size'>
          <img onMouseEnter={()=>userimgModal()} className='user_img' src={Use_img} alt="" />
           <div className="user_img_hover">
            <input type="file" />
          <MdOutlinePhotoCamera  className='user_hover_photo_icon'/>
        </div>
        </div>
           <div className="blok_bir_text_mentor1">
            <h1>Muhammad Dzhumaev</h1>
            <p>Java Tutor, Python</p>
            <button>Mentor</button>
           </div>
        </div>
        
        <div className="profil_blok_ikki">
          <div className="profil_blok_ikki_text">
          <p>Current balance</p>
          <div className="profil_blok_ikki_sum1">
            <h1>1 350 000</h1><p>UZS</p>
          </div>
          <div className="profil_blok_ikki_button">
            <button><BsActivity/></button><button>Balance replenishment</button>
          </div>
          </div>
          <div onMouseLeave={()=>taxrirlashClose()} className="profil_blok_ikki_icon">
          <BsFillBellFill onMouseEnter={()=>taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
          <BsThreeDots  onMouseEnter={()=>taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
          <div className="profil_blok_ikki_icon_texrirlash_modal">
            <div className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Edit profile</p></div>
            <div className='taxrirlash_modal_div'><BiCast className='taxrirlash_modal_icon'/><p>Notifications</p></div>
            <div className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon'/><p>Help</p></div>
            <hr />
            <div className='taxrirlash_modal_div'><FiLogOut className='taxrirlash_modal_icon'/><p>Exit</p></div>
          </div>
          <div className="profil_blok_ikki_icon_taxriirlash_chat">
            <p>Today</p>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
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
                <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
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
                <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
             
             <div className="taxrirlash_chad_barchasini">
              <p>view all<AiOutlineRight/></p>
             </div>
            </div>
          </div>



          </div>
        </div>
        </div> 
    </div>):(<div>
      <div className="profil_size_df">
       <div className="profil_size">
        <div className="profil_blok_bir1">
          <div onMouseLeave={()=>userimgClose()} className='user_img_size'>
          <img onMouseEnter={()=>userimgModal()} className='user_img' src={Use_img} alt="" />
           <div className="user_img_hover">
            <input type="file" />
          <MdOutlinePhotoCamera  className='user_hover_photo_icon'/>
        </div>
        </div>
           <div className="blok_bir_text_mentor1">
            <h1>Мухаммад Джумаев</h1>
            <p>Наставник по Java, Python</p>
            <button>Наставник</button>
           </div>
        </div>
        
        <div className="profil_blok_ikki">
          <div className="profil_blok_ikki_text">
          <p>Текущий баланс</p>
          <div className="profil_blok_ikki_sum1">
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
    </div>)}
    
    </div>
  )
}
