import React, { useEffect, useState } from 'react'
import Use_img from "../img/Ellipse.jpg"
import icon_img from "../img/start-up.png"
import icon_img1 from "../img/Vector.svg"
import icon_img2 from "../img/medal.svg"
import "../css/profil.css"
import Pdp from "./UserPdp"
import { MdOutlinePhotoCamera } from "react-icons/md"
import { BsActivity, BsFillBellFill, BsThreeDots } from "react-icons/bs"
import { BiCast } from "react-icons/bi"
import { FiEdit, FiLifeBuoy, FiLogOut } from "react-icons/fi"
import { TbPointFilled } from "react-icons/tb"
import { AiOutlineRight } from "react-icons/ai"
import chadimg from "../img/Ellipse.jpg"
import axios from 'axios'
import url from './Host'
import userNull from "../img/149071.png"
import { AiFillCloseCircle } from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion';
export default function Profil() {
  const [data, setData] = useState([])
  const [state1, setState1] = React.useState();


  function userimgModal() {
    document.querySelector(".user_img_hover").style = "position: absolute;bottom: 0;"
  }
  function userImgPut() {
    var formdata = new FormData()
    formdata.append("image", document.querySelector("#userInput").files[0]);

    axios.put(`${url}/auth/user/`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {

      window.location.reload()
    })
      .catch(err => {
        state1 === "ru" ? (alert("Ошибка изображения")) : (alert("Image failed"))
      })
  }
  function userimgClose() {
    document.querySelector(".user_img_hover").style = "  position: absolute;bottom: -100px;"
  }

  function taxrirlashModal() {
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:block;"
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:none;"
  }
  function taxrirlashClose() {
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:none;"
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:none;"
  }
  function taxrirlashChadModal() {
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:block;"
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:none;"
  }

  useEffect(() => {
    axios.get(`${url}/auth/user/`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }).then(res => {
      console.log(res.data);
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    )
  }, [])

  function chiqish() {
    window.location = "/"
    localStorage.removeItem("token")
  }
  function notificationModal() {
    document.querySelector(".profil_notifacation_size").style = "position: fixed;right:0px;"
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:none"
  }
  function HelpModal() {
    document.querySelector(".profil_Help_size").style = "position: fixed;right:0px;"
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:none"
  }
  function notificationClose() {
    document.querySelector(".profil_notifacation_size").style = "position: fixed;right:-100%;"
  }
  function Helpclose() {
    document.querySelector(".profil_Help_size").style = "position: fixed;right:-100%;"
  }

  // function postUser(){
  //   var formdata=new FormData()
  //   formdata.append("image",document.querySelector("#userInput").value)

  //   axios.put(`${url}/auth/user/`,formdata,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") }}).then(res=>{
  //     alert("ishladi")
  //   }).catch(err=>{
  //     alert("ishlamadi")
  //   })
  // }

  return (
    <div>
      {state1 === "en" ? (<div>
        <div className="profil_size_df">
          <div className="profil_size">
            <div className="profil_blok_bir">
              <div onMouseLeave={() => userimgClose()} className='user_img_size'>
                {data.image === null ? (<img onMouseEnter={() => userimgModal()} className='user_img' src={userNull} alt="" />) : (<img onMouseEnter={() => userimgModal()} className='user_img' src={"https://baisan.onrender.com" + data.image} alt="" />)}
                <div className="user_img_hover">
                  <input onChange={() => userImgPut()} id='userInput' type="file" />
                  <MdOutlinePhotoCamera className='user_hover_photo_icon' />
                </div>
              </div>
              <div className="blok_bir_text">
                <h1>{data.username}</h1>
                <button>Regular user</button>
                <p> о нас</p>
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
                <p>Current balance</p>
                <div className="profil_blok_ikki_sum" >
                  {data.balance === null ? (<h1>0</h1>) : (<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><h1>{data.balance}</h1><p>$</p></div>)}
                </div>
                <div className="profil_blok_ikki_button">
                  <button><BsActivity /></button><button>Balance replenishment</button>
                </div>
              </div>
              <div onMouseLeave={() => taxrirlashClose()} className="profil_blok_ikki_icon">
                <BsFillBellFill onMouseEnter={() => taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
                <BsThreeDots onMouseEnter={() => taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
                <div className="profil_blok_ikki_icon_texrirlash_modal">
                  <div onClick={() =>
                    window.location = "/loginpage"} className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Edit profile</p></div>
                  <div onClick={() => notificationModal()} className='taxrirlash_modal_div'><BiCast className='taxrirlash_modal_icon' /><p>Notifications</p></div>
                  <div  onClick={() => HelpModal()} className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon' /><p>Help</p></div>
                  <hr />
                  <div className='taxrirlash_modal_div' onClick={() => chiqish()} ><FiLogOut className='taxrirlash_modal_icon' /><p>Exit</p></div>
                </div>
                <div className="profil_blok_ikki_icon_taxriirlash_chat">
                  <p>Today</p>
                  <div className="taxrirlash_chad">
                    <div className="taxrirlash_chad_img_size">
                      <img src={chadimg} alt="" />
                    </div>
                    <div className="taxrirlash_chad_size">
                      <div className="taxrirlash_chad_vaqt">
                        <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set' /><p>19:22</p></div>
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
                        <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set' /><p>19:22</p></div>
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
                        <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set' /><p>19:22</p></div>
                      </div>
                      <div className="taxrirlash_chad_text">
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                    </div>
                  </div>

                  <div className="taxrirlash_chad_barchasini">
                    <p >view all<AiOutlineRight /></p>
                  </div>
                </div>
              </div>



            </div>
          </div>
          <div className="profil_notifacation_size">
            <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><AiFillCloseCircle className='closei' /></div>
            <div className="Admin">
              <h3 className='hello_admin'>Admin</h3>
              <Accordion defaultActiveKey="0" style={{ marginTop: '30px' }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Information about the site</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Coming into contact with Admin</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="number">
                <p>Phone Number</p>
                <h5>+998 99 999 99 99</h5>
              </div>

            </div>
          </div>
          <div className="profil_Help_size">
            <div onClick={() => Helpclose()} className="profil_notifacation_size_close"><AiFillCloseCircle className='closei' /></div>
                    <h1>Yordam</h1>  
          </div>
        </div>
      </div>) : (<div>
        <div className="profil_size_df">
          <div className="profil_size">
            <div className="profil_blok_bir">
              <div onMouseLeave={() => userimgClose()} className='user_img_size'>
                {data.image === null ? (<img onMouseEnter={() => userimgModal()} className='user_img' src={userNull} alt="" />) : (<img onMouseEnter={() => userimgModal()} className='user_img' src={"https://baisan.onrender.com" + data.image} alt="" />)}
                <div className="user_img_hover">
                  <input onChange={() => userImgPut()} id='userInput' type="file" />
                  <MdOutlinePhotoCamera className='user_hover_photo_icon' />
                </div>
              </div>
              <div className="blok_bir_text">
                <h1>{data.username}</h1>
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
                  {data.balance === null ? (<h1>0</h1>) : (<div style={{ display: 'flex', gap: '5px', alignContent: 'center' }}><h1>{data.balance}</h1><p>RUB</p></div>)}
                </div>
                <div className="profil_blok_ikki_button">
                  <button><BsActivity /></button><button>Пополнение баланса</button>
                </div>
              </div>
              <div onMouseLeave={() => taxrirlashClose()} className="profil_blok_ikki_icon">
                <BsFillBellFill onMouseEnter={() => taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
                <BsThreeDots onMouseEnter={() => taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
                <div className="profil_blok_ikki_icon_texrirlash_modal">
                  <div onClick={() =>
                    window.location = "/loginpage"} className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Редактировать профиль</p></div>
                  <div className='taxrirlash_modal_div'><BiCast className='taxrirlash_modal_icon' /><p>Уведомления</p></div>
                  <div className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon' /><p>Помощь</p></div>
                  <hr />
                  <div className='taxrirlash_modal_div' onClick={() => chiqish()}><FiLogOut className='taxrirlash_modal_icon' /><p>Выход</p></div>
                </div>
                <div className="profil_blok_ikki_icon_taxriirlash_chat">
                  <p>Bugun</p>
                  <div className="taxrirlash_chad">
                    <div className="taxrirlash_chad_img_size">
                      <img src={chadimg} alt="" />
                    </div>
                    <div className="taxrirlash_chad_size">
                      <div className="taxrirlash_chad_vaqt">
                        <h1>Дженни Фокс</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set' /><p>19:22</p></div>
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
                        <h1>Дженни Фокс</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set' /><p>19:22</p></div>
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
                        <h1>Дженни Фокс</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set' /><p>19:22</p></div>
                      </div>
                      <div className="taxrirlash_chad_text">
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                    </div>
                  </div>

                  <div className="taxrirlash_chad_barchasini">
                    <p>Посмотреть все<AiOutlineRight /></p>
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
