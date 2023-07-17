"use client";
import React, { useEffect } from "react";

import "../css/Contacts.css";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [state, setstate] = React.useState();
const dataPost=()=>{
  var postdata={
    fullname:document.querySelectorAll('.contact_inp')[0].value,
    email:document.querySelectorAll('.contact_inp')[1].value,
    phone_number:document.querySelectorAll('.contact_inp')[2].value,
    message:document.querySelector('.contact_textarea').value
  }
  axios.post("http://127.0.0.1:8000/auth/user_connect_with/",postdata).then(res=>{
state==="ru"?(alert("Информация отправлена, дождитесь звонка оператора")):(alert("Ma'limot yuborildi.Operator qo'ngirog'ini kuting"))
window.location.reload()
  }).catch(err=>{
    state==="ru"?(alert("Проверить информацию,Не удалось отправить")):(alert("Ma'lumotlarni tekshiring yuborilmadi"))
  })
}
  useEffect(() => {
    setstate(localStorage.getItem("lang"));
  }, []);
  return (
    <div>
      
      <Navbar />
      <div className="contact">
        <div className="contact_left">
          <h1>
            {state === "ru" ? "Связаться с нами" : "Biz bilan bog'laning"}
          </h1>
          <p className="contact_info">
            {state === "ru"
              ? (<div>Как я могу связаться с вами? <br /><br />По номеру <a className="contact_tel" href="tel: +998330321112">
              (+7) <span> 032 11 12</span>
            </a>  или же оставить сообщение и наши операторы с вами свяжутся в кратчайшее время. </div>)
              : (<div>Siz bilan qanday bog'lanishim mumkin? <br /><br /><a className="contact_tel" href="tel: +998330321112">
            (+7) <span> 032 11 12</span>
          </a> raqamiga qo'ng'iroq qiling yoki xabar qoldiring va operatorlarimiz imkon qadar tezroq siz bilan bog'lanadi.</div>)}
          </p>
          <p className="contact_address">
            {state === "ru"
              ? " Мирабадский район,Малая кольцевая дорога, Ташкент, 100015"
              : "Mirobod tumani,Kichik Halqa Yo’li, Toshkent 100015"}
          </p>
          
          <div className="email_box">
            <MdEmail className="email_icon" />
            <a href="mailto: garvird@gmail.com">
              garvird@gmail.com
            </a>
          </div>
          <div className="feat_left contact_icons">
            
            <a href="#" className="iconBox ">
              <FaFacebookF className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaTwitter className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaInstagram className="icon icon4" />
            </a>
          </div>
        </div>
        <div className="contact_right">
          <div className="inputs_top">
            <input
              type="text"
              className="contact_inp"
              placeholder={state === "ru" ? "Имя*" : "Ism*"}
            />
            <input
              type="text"
              className="contact_inp"
              placeholder={
                state === "ru" ? "Электронная почта*" : "Elektron pochta*"
              }
            />
            <input
              type="text"
              className="contact_inp"
              placeholder={state === "ru" ? "Телефон*" : "Telefon*"}
            />
          </div>
          <textarea
            rows={10}
            placeholder={state === "ru" ? "Сообщение*" : "Habar*"}
            className="contact_textarea"
          ></textarea>
          <div className="inputs_bottom">
            <button onClick={()=>{dataPost()}} className="contact_btn">
              {state === "ru" ? "отправить" : "yuborish"}
            </button>
          </div>
        </div>
      </div>
      
      <Footer1 />
    </div>
  );
}
