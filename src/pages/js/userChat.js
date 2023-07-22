import React, { useState,useEffect } from 'react'
import "../css/yozishmalar.css";
import YozishmaUserImg from "../img/Ellipse.jpg";
import {
  BsArrow90DegLeft,
  BsArrowLeft,
  BsCheck,
  BsCheckAll,
} from "react-icons/bs";
import { MdEdit,MdDeleteForever } from "react-icons/md"
import { LiaTelegramPlane } from "react-icons/lia";
import { MdClose } from "react-icons/md";
import Anime from "../img/png-transparent-anime-desktop-manga-television-show-anime-black-hair-manga-human.png"
import ImgChat from "../img/Ellipse 3.png"
import ImgChatt from "../img/Ellipse 2.4.png"

export default function MentorChat() {
  const [page,setPage]=useState()
  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);

  function chatModal(img,name,time) {

    document.querySelector(".yozishma_small_div").style = "display:block;"
    document.querySelector(".yozishma_bolim_text_nik").style = "display:none"
    document.querySelector(".yoq1").style = "display:block;"
    document.querySelector(".yoq").style = "display:flex ;"
    document.querySelector(".javob_berish").style = "display:none;"
    document.querySelector(".chat_gap_text_div").style="display:block;"
    document.querySelector(".chat_yoq_payt").style="display:none;"
  
    var abj = {
      img: img,
      name: name,
      time:time,
    }
    
    var tush=[]
    tush.push(abj)
    tush.map(item=>{
    document.querySelector('.telegram_pro_img_text').innerHTML=`
    <img style="width: 40px !important;height: 40px !important;border-radius: 50% !important;" src='${item.img}' alt="" />
    <div style="margin-top: 10px !important;display: block !important;" className="telegram_pro_text">
    <h1 style="font-size: 15px !important;margin-bottom: 0 !important;" >${item.name}</h1>
    <p style="font-size: 12px !important;margin-top: 0 !important;">${item.time}</p></div>`
  })
  }
  function Chatnone() {
    document.querySelector(".yozishma_bolim_text_nik").style = "display:block;"
    document.querySelector(".yoq").style="display:none"
  }
  function ChatClose() {
    document.querySelector(".yozishma_bolim_text_nik").style = "display:block;"
    document.querySelector(".yozishma_small_div").style = "display:none;"
    document.querySelector(".yoq1").style="display:none"
  }

  function javobModal() {
    document.querySelector(".javob_berish").style = "display:block;"
    document.querySelector(".javob_berish_ikki").style="display:none;"
  }
  function javobClose() {
    document.querySelector(".javob_berish").style = "display:none;"
  }
  function javobBerishModal(){
  document.querySelector(".javob_berish_ikki").style="display:block;"
  document.querySelector(".javob_berish").style = "display:none;"
  }
  function javobBerishClose(){
    document.querySelector(".javob_berish_ikki").style="display:none;"
  }
  function edit_chat_hoverModal(){
    document.querySelector(".edit_chat_hover").style="display:block;scale: 1;transition: 10s;"
    document.querySelector(".edit_chat_hover_ikki").style="display:none;scale: 0.4;transition: 2s;"
  }
  function edit_chat_hoverClose(){
    document.querySelector(".edit_chat_hover").style="display:none;scale: 0.4;transition: 2s;"
  }
  function edit_chat_ikki_hoverModal(){
    document.querySelector(".edit_chat_hover_ikki").style="display:block;scale: 1;transition: 10s;"
    document.querySelector(".edit_chat_hover").style="display:none;scale: 0.4;transition: 2s;"
  }
  function edit_chat_ikki_hoverClose(){
    document.querySelector(".edit_chat_hover_ikki").style="display:none;scale: 0.4;transition: 2s;"
  }


  var data=[
    {
      name:"002",
      img:Anime,
      time:"23:10",
    },
    {
      name:"Abdurahm",
      img:ImgChat,
      time:"23:10",
    },
    {
      name:"Jonibek",
      img:ImgChatt,
      time:"6:10",
    },
    {
      name:"Otabek",
      img:YozishmaUserImg,
      time:"13:10",
      
    }
  ]





  return (
    <div>
      {state1==="en"? (<div className="Chat_background">
      <div className="yozishma_big_div">
        <div className="yozishma_big_div_size">
          <div className="yozishma_bolim_text_nik">
          {data.map(item=>{
            return(
              <div
              onClick={() => chatModal(item.img,item.name,item.time)}
              className="yozishma_bolim_text_nik_text"
            >
                  <img id="img" src={item.img} alt="" />
                  <div className="yozishma_bolim_text_nik_text_ism_p">
                  <h1  id="name">{item.name}</h1>
                  <p>Hi</p>
                </div>
              <div className="yozishma_bolim_text_nik_text_qongiroq">
                <div className="yozishma_bolim_text_nik_text_qongiroq_vaqti">{item.time}</div>
                <div className="yozishma_bolim_text_nik_text_qongiroq_bildir">2</div>
              </div>
            </div>
            )
          })}
          </div>

          <div className="yozishma_small_div">
          <div className="chat_gap_text_div">
            <div className="yozishma_telegram_profil">
              <BsArrowLeft className="yoq" onClick={() => Chatnone()} />
              <BsArrowLeft className="yoq1" onClick={() => ChatClose()} />
              
                {[data[0]].map(item=>{
                  return(
                  <div className="telegram_pro_img_text">
                  <img src={item.img} alt="" />
                  <div className="telegram_pro_text">
                  <h1>{item.name}</h1>
                  <p>{item.time}</p>
                  </div> 
                  </div>
                  )
                })}
              
            </div>
            <div className="yozishma_small_text_div">

                  <div className="yozishma_small_text_div_chat">

                <div className="yozishma_small_text_div_text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste harum tempora dolores fugit quidem necessitatibus totam doloribus eligendi aperiam architecto consequatur enim exercitationem reprehenderit mollitia, voluptatibus vitae. Illo, eligendi.</p>
                  <div className="yozishma_small_text_div_text_javob_sozi">
                    <div
                      onClick={() => javobModal()}
                      className="javob_sozi_big"
                    >
                      <BsArrow90DegLeft className="javob_sozi" />
                      <p>
                        <a className="Javob" href="#Javob">
                        Reply
                        </a>
                      </p>
                    </div>       
                <div className="yozishma_small_text_div_ptichka">
                  <div className="edit_chat_hover_relative">
                  <div className="edit_chat_hover">
                  Delete
                  </div>
                  <MdDeleteForever onMouseLeave={()=>edit_chat_hoverClose()} onMouseEnter={()=>edit_chat_hoverModal()} className="edit_chat"/>
                  </div>
                  <div className="edit_chat_hover_ikki_relative">
                  <div className="edit_chat_hover_ikki">
                  Edit
                  </div>
                  <MdEdit onMouseLeave={()=>edit_chat_ikki_hoverClose()} onMouseEnter={()=>edit_chat_ikki_hoverModal()} className="edit_chat"/>
                  </div>
                  <BsCheckAll className="ptichka_chat"/>
                  <BsCheck className="ptichka_chat"/>
                </div>
                  </div>
                </div>

              </div>
              
            </div>
            <div className="yozishma_small_xabar_div">
              <div id="Javob" className="javob_berish">
                <div className="javob_berish_div">
                  <div className="javob_berish_blok_text">
                    <h1>Turaev Jafarbek</h1>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="javob_berish_div_fill">
                    <MdClose onClick={() => javobClose()} />
                  </div>
                </div>
              </div>
              <div className="javob_berish_ikki">
                <div className="javob_berish_div">
                  <div className="javob_berish_blok_text">
                    <h1>Turaev Jafarbek</h1>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="javob_berish_div_fill">
                    <MdClose onClick={() => javobBerishClose()} />
                  </div>
                </div>
              </div>
              <div className="chat_file_smile">
                <LiaTelegramPlane  className="telegram_plane" />
              </div>
              <input placeholder="Введите текст" id="smile_input" type="text" />
            </div>
          </div>          
          <div className="chat_yoq_payt">
          <p>Select a chat to start messaging</p>
          </div>
          
            
          </div>
        </div>
      </div>
    </div>):(<div className="Chat_background">
      <div className="yozishma_big_div">
        <div className="yozishma_big_div_size">
          <div className="yozishma_bolim_text_nik">
          {data.map(item=>{
            return(
              <div
              onClick={() => chatModal(item.img,item.name,item.time)}
              className="yozishma_bolim_text_nik_text"
            >
                  <img id="img" src={item.img} alt="" />
                  <div className="yozishma_bolim_text_nik_text_ism_p">
                  <h1  id="name">{item.name}</h1>
                  <p>привет</p>
                </div>
              <div className="yozishma_bolim_text_nik_text_qongiroq">
                <div className="yozishma_bolim_text_nik_text_qongiroq_vaqti">{item.time}</div>
                <div className="yozishma_bolim_text_nik_text_qongiroq_bildir">2</div>
              </div>
            </div>
            )
          })}
          </div>

          <div className="yozishma_small_div">
          <div className="chat_gap_text_div">
            <div className="yozishma_telegram_profil">
              <BsArrowLeft className="yoq" onClick={() => Chatnone()} />
              <BsArrowLeft className="yoq1" onClick={() => ChatClose()} />
              
                {[data[0]].map(item=>{
                  return(
                  <div className="telegram_pro_img_text">
                  <img src={item.img} alt="" />
                  <div className="telegram_pro_text">
                  <h1>{item.name}</h1>
                  <p>{item.time}</p>
                  </div> 
                  </div>
                  )
                })}
              
            </div>
            <div className="yozishma_small_text_div">

                  <div className="yozishma_small_text_div_chat">

                <div className="yozishma_small_text_div_text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste harum tempora dolores fugit quidem necessitatibus totam doloribus eligendi aperiam architecto consequatur enim exercitationem reprehenderit mollitia, voluptatibus vitae. Illo, eligendi.</p>
                  <div className="yozishma_small_text_div_text_javob_sozi">
                    <div
                      onClick={() => javobModal()}
                      className="javob_sozi_big"
                    >
                      <BsArrow90DegLeft className="javob_sozi" />
                      <p>
                        <a className="Javob" href="#Javob">
                          Отвечать
                        </a>
                      </p>
                    </div>       
                <div className="yozishma_small_text_div_ptichka">
                  <div className="edit_chat_hover_relative">
                  <div className="edit_chat_hover">
                  Удалить
                  </div>
                  <MdDeleteForever onMouseLeave={()=>edit_chat_hoverClose()} onMouseEnter={()=>edit_chat_hoverModal()} className="edit_chat"/>
                  </div>
                  <div className="edit_chat_hover_ikki_relative">
                  <div className="edit_chat_hover_ikki">
                  Изменить
                  </div>
                  <MdEdit onMouseLeave={()=>edit_chat_ikki_hoverClose()} onMouseEnter={()=>edit_chat_ikki_hoverModal()} className="edit_chat"/>
                  </div>
                  <BsCheckAll className="ptichka_chat"/>
                  <BsCheck className="ptichka_chat"/>
                </div>
                  </div>
                </div>

              </div>
              
            </div>
            <div className="yozishma_small_xabar_div">
              <div id="Javob" className="javob_berish">
                <div className="javob_berish_div">
                  <div className="javob_berish_blok_text">
                    <h1>Тураев Джафарбек</h1>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="javob_berish_div_fill">
                    <MdClose onClick={() => javobClose()} />
                  </div>
                </div>
              </div>
              <div className="javob_berish_ikki">
                <div className="javob_berish_div">
                  <div className="javob_berish_blok_text">
                    <h1>Тураев Джафарбек</h1>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="javob_berish_div_fill">
                    <MdClose onClick={() => javobBerishClose()} />
                  </div>
                </div>
              </div>
              <div className="chat_file_smile">
                <LiaTelegramPlane  className="telegram_plane" />
              </div>
              <input placeholder="Введите текст" id="smile_input" type="text" />
            </div>
          </div>          
          <div className="chat_yoq_payt">
          <p>Выберите чат, чтобы начать обмен сообщениями</p>
          </div>
          
            
          </div>
        </div>
      </div>
    </div>)}
    
    </div>
  );
}

