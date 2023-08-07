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
import { GrClose } from 'react-icons/gr'
import axios from 'axios'
import url from './Host'

export default function Mentorprofile() {
  const [state1, setState1] = React.useState();
  const [base,setbase] = useState([])
  const [user,setUser] =useState([])
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);

    useEffect (()=>{
      axios.get(`${url}/auth/oneuser`, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(res=>{
        // console.log(res.data);
        res.data.map(item=>{
          localStorage.setItem("oneuser",item.id)
        })
        setbase(res.data)
      }).catch(err=>{
        console.log('err');
      })
    })

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
      function notificationModal() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:0px;";
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
          "display:none";
      }
      function notificationClose() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:-100%;";
      }

      function notificationModal() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:0px;";
    
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
          "display:none";
        document.querySelector(".profil-qora-qiladi").style = "display:block";
      }
      function notificationClose() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:-100%;";
        document.querySelector(".profil-qora-qiladi").style = "display:none";
      }
    
    
  return (
    <div>

      <div>
        {base.map(item=>{
          return(
            <div className="profil_size_df">
            <div className="profil_size">
             <div className="profil_blok_bir1">
               <div onMouseLeave={()=>userimgClose()} className='user_img_size'>
               <img onMouseEnter={()=>userimgModal()} className='user_img' src={item.image} alt="" />
                <div className="user_img_hover">
                 <input type="file" />
               <MdOutlinePhotoCamera  className='user_hover_photo_icon'/>
             </div>
             </div>
                <div className="blok_bir_text_mentor1">
                 <h1>{item.username}</h1>
                 <p>Java Tutor, Python</p>
                 <button>Mentor</button>
                </div>
             </div>
             
             <div className="profil_blok_ikki">
               <div className="profil_blok_ikki_text">
               <p>Current balance</p>
               <div className="profil_blok_ikki_sum1">
                 <h1>{item.balance}</h1><p>UZS</p>
               </div>
               <div className="profil_blok_ikki_button">
                 <button><BsActivity/></button><button>Balance replenishment</button>
               </div>
               </div>
               <div onMouseLeave={()=>taxrirlashClose()} className="profil_blok_ikki_icon">
               <BsFillBellFill onMouseEnter={()=>taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
               <BsThreeDots  onMouseEnter={()=>taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
               <div className="profil_blok_ikki_icon_texrirlash_modal">
                 <div onClick={() =>
                   window.location="/loginpageMentor"} className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Edit profile</p></div>
                 <div className='taxrirlash_modal_div'  onClick={() => notificationModal()}><BiCast className='taxrirlash_modal_icon'/><p>Notifications</p></div>
                 <div onClick={() =>
                   window.location="/Help"} className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon'/><p>Help</p></div>
                 <hr />
                 <div className='taxrirlash_modal_div' onClick={()=>{window.location="/";localStorage.removeItem("token")}}><FiLogOut className='taxrirlash_modal_icon'/><p>Exit</p></div>
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
          )
        })}
     
     <div className="profil_notifacation_size">
          {/* <div className="admin">
            <h4>Sms</h4>
            <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>

          </div> */}

<div className="div-admin-sms">
  <h5>SMS</h5>
  <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>
</div>
<div className="sms-insta">
<div className="sms-insto-bb1">
    <div className="sms-insta-block">
    <div className="sms-img">
      <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
    </div>
<div className="sms-kotta-pas">
<div className="sms-text-tepa"><p>boxodirov_025  </p><p></p></div>
    <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
</div>
  </div>

  <div className="sms-insta-block">
    <div className="sms-img">
      <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
    </div>
<div className="sms-kotta-pas">
<div className="sms-text-tepa"><p>boxodirov_025 </p><p></p></div>
    <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
</div>
  </div>

    <div className="sms-insta-block">
    <div className="sms-img">
      <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
    </div>
<div className="sms-kotta-pas">
<div className="sms-text-tepa"><p>boxodirov_025  </p><p></p></div>
    <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
</div>
  </div>
</div>
</div>

          <div className="div-admin-sms">
            <h5>SMS</h5>
            <div
              onClick={() => notificationClose()}
              className="profil_notifacation_size_close"
            >
              <GrClose className="closei" />
            </div>
          </div>
          <div className="sms-insta">
            <div className="sms-insto-bb1">
              

              {user.map(item=>{
                return(
                  <div className="sms-insta-block">
                <div className="sms-img">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png"
                    alt=""
                  />
                </div>
                
                <div className="sms-kotta-pas">
                  <div className="sms-text-tepa">
                    <p>
                      boxodirov_025 • now{" "}
                      <span>
                        <box-icon type="solid" name="bell-ring"></box-icon>
                      </span>
                    </p>
                  </div>
                  <div className="sms-text-pas">
                    <p>Sent an sms to: Salom</p>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="profil-qora-qiladi"></div>
    </div>
    
    </div>
  )
}
