import React, { useEffect, useState } from "react";
import "../css/yozishmalar.css";
import YozishmaUserImg from "../img/Ellipse.jpg";
import {
  BsArrow90DegLeft,
  BsArrowLeft,
} from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdClose } from "react-icons/md";
import Anime from "../img/png-transparent-anime-desktop-manga-television-show-anime-black-hair-manga-human.png"
import ImgChat from "../img/Ellipse 3.png"
import ImgChatt from "../img/Ellipse 2.4.png"

export default function Yozishmalar() {
  const [state,setState]=useState()

  function chatModal(img,name) {

    document.querySelector(".yozishma_small_div").style = "display:block;";
    document.querySelector(".yozishma_bolim_text_nik").style = "display:none";
    document.querySelector(".yoq1").style = "display:flex;";
    document.querySelector(".yoq").style = "display:flex;";
    document.querySelector(".javob_berish").style = "display:none;";
    var abj = {
      img: img,
      name: name,
      
  }
  var tush=[]
 tush.push(abj)
  tush.map(item=>{
    document.querySelector(".telegram_pro_img_text").innerHTML=`<div style="width: 100%;display: flex !important;align-items: center !important;gap: 5px; " className="telegram_pro_img_text">
    <img style="width: 40px !important;height: 40px !important;border-radius: 50% !important;" src='${item.img}' alt="" />
    <div style="margin-top: 10px !important;display: block !important;" className="telegram_pro_text">
      <h1 style="font-size: 15px !important;margin-bottom: 0 !important;" >${item.name}</h1>
      <p style="font-size: 12px !important;margin-top: 0 !important;">16:49</p></div>`
  })

  }
  function Chatnone() {
    document.querySelector(".yozishma_bolim_text_nik").style = "display:block;";
    document.querySelector(".yoq").style = "display:none;";
  }
  function ChatClose() {
    document.querySelector(".yozishma_bolim_text_nik").style = "display:block;";
    document.querySelector(".yozishma_small_div").style = "display:none;";
    document.querySelector(".yoq1").style = "display:none;";
  }

  function javobModal() {
    document.querySelector(".javob_berish").style = "display:block;";
  }
  function javobClose() {
    document.querySelector(".javob_berish").style = "display:none;";
  }

  var data=[
    {
      name:"002",
      img:Anime
    },
    {
      name:"abdurahm",
      img:ImgChat
    },{
      name:"jonibek",
      img:ImgChatt
    },{
      name:"otabek",
      img:YozishmaUserImg
    }
  ]

  

  useEffect(() => {
    localStorage.setItem("bird",false)
  })

  


  return (
    <div className="Chat_background">
      <div className="yozishma_big_div">
        <div className="yozishma_big_div_size">
          <div className="yozishma_bolim_text_nik">
          {data.map(item=>{
            return(
              <div
              onClick={() => chatModal(item.img,item.name)}
              className="yozishma_bolim_text_nik_text"
            >
                  <img id="img" src={item.img} alt="" />
                  <div className="yozishma_bolim_text_nik_text_ism_p">
                  <h1  id="name">{item.name}</h1>
                  <p>привет</p>
                </div>
              <div className="yozishma_bolim_text_nik_text_qongiroq">
                <div className="yozishma_bolim_text_nik_text_qongiroq_vaqti">13:14</div>
                <div className="yozishma_bolim_text_nik_text_qongiroq_bildir">2</div>
              </div>
            </div>
            )
          })}

          </div>

          <div className="yozishma_small_div">
            <div className="yozishma_telegram_profil">
              <BsArrowLeft className="yoq" onClick={() => Chatnone()} />
              <BsArrowLeft className="yoq1" onClick={() => ChatClose()} />
              <div className="telegram_pro_img_text">
                <img src={YozishmaUserImg} alt="" />
                <div className="telegram_pro_text">
                  <h1>Тураев Джафарбек</h1>
                  <p>16:49</p>
                </div>
              </div>
            </div>
            <div className="yozishma_small_text_div">
              <div className="yozishma_small_text_div_chat">
                <div className="yozishma_small_text_div_text">
                  <p>Lorem ipsum dolor sit amet consectetur lorem lorem</p>
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
                    <div className="yozishma_vaqt_soat_kun">
                      <span>16-июнь 2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yozishma_small_text_div_chat">
                <div className="yozishma_small_text_div_text">
                  <p>
                    Lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nesciunt dignissimos eveniet excepturi explicabo aut
                    nemo sapiente minus repudiandae eligendi at aperiam repellat
                    magnam accusamus molestiae, ut facilis eaque. Neque, ipsa!{" "}
                  </p>
                  <div className="yozishma_small_text_div_text_javob_sozi">
                    <div
                      onClick={() => javobModal()}
                      className="javob_sozi_big"
                    >
                      <BsArrow90DegLeft className="javob_sozi" />
                      <p>Отвечать</p>
                    </div>
                    <div className="yozishma_vaqt_soat_kun">
                      <span>16-июнь 2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yozishma_small_text_div_chat">
                <div className="yozishma_small_text_div_text">
                  <p>Lorem ipsum dolor sit amet consectetur lorem lorem</p>
                  <div className="yozishma_small_text_div_text_javob_sozi">
                    <div
                      onClick={() => javobModal()}
                      className="javob_sozi_big"
                    >
                      <BsArrow90DegLeft className="javob_sozi" />
                      <p>Отвечать</p>
                    </div>
                    <div className="yozishma_vaqt_soat_kun">
                      <span>16-июнь 2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yozishma_small_text_div_chat">
                <div className="javob_chat_div_beruvchi">
                  <h1>Тураев Джафарбек</h1>
                  <p>Lorem</p>
                </div>
                <div className="yozishma_small_text_div_text">
                  <p>Lorem ipsum dolor sit amet consectetur lorem lorem</p>
                  <div className="yozishma_small_text_div_text_javob_sozi">
                    <div
                      onClick={() => javobModal()}
                      className="javob_sozi_big"
                    >
                      <BsArrow90DegLeft className="javob_sozi" />
                      <p>Отвечать</p>
                    </div>
                    <div className="yozishma_vaqt_soat_kun">
                      <span>16-июнь 2019</span>
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
              <div className="chat_file_smile">
                <LiaTelegramPlane className="telegram_plane" />
              </div>
              <input placeholder="Введите текст" id="smile_input" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
