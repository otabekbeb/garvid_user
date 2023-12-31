"use client";
import React, { useEffect } from "react";

import "../css/Contacts.css";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";
import Number from '../js/Number'
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { BsCheck2 } from 'react-icons/bs'
import { BsCheckAll } from 'react-icons/bs'

export default function Contact() {
  const [state, setstate] = React.useState();


  const dataPost = () => {
    var formdata = {
      fullname: document.querySelectorAll('.contact_inp')[0].value + " " + document.querySelectorAll('.contact_inp')[1].value,
      purchase: document.querySelectorAll('.contact_inp')[2].value,
      email: document.querySelector('.contact_inp101').value,
      message: document.querySelector('.contact_textarea').value
    }
    axios.post('https://markazback2.onrender.com/api/call_me', formdata, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => {
      state === "ru" ? (Swal.fire("Информация отправлена, дождитесь звонка оператора")) : (Swal.fire("Information sent, wait for a call from the operator"))
      window.location.reload()
    }).catch(err => {
      state === "ru" ? (Swal.fire("Check information, Failed to send")) : (Swal.fire("Check information, Failed to send"))
    })
  }
  useEffect(() => {
    setstate(localStorage.getItem("lang"));
  }, []);
  return (
    <div className="contactss">

      <Navbar />
      <div className="asd">
        {/* <img src={abaut} alt="" /> */}
        <div className="asd-block">
          <h1>Contacts</h1>
          <br />
          <br className='rr' />

          <div className="mini"></div>
        </div>
      </div>
      <div className="sahifa">
        <div className="sahifa-glav">
          <div className="safiha-p">
            <h4><a href="/">{state === "ru" ? ("Главный") : ("Home")}  <span><box-icon name='chevron-right' color='#6b3d0c' ></box-icon></span></a></h4>
          </div>
          <div className="safiha-d">
            <p id='tepaga'>{state === "ru" ? ("Связь") : ("Contact")}</p>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact_left">
          <h1 onClick={() => window.location = "/contacts"}>
            {state === "ru" ? "Связаться с нами" : "Connect with us"}
          </h1>
          {/* <p className="contact_info">
            {state === "ru"
              ? (<div>Как я могу связаться с вами? <br /><br />По номеру <a className="contact_tel" href="tel: +7 032 11 12">
                (+7) <span> 032 11 12</span>
              </a>  или же оставить сообщение и наши операторы с вами свяжутся в кратчайшее время. </div>)
              : (<div>How can I contact you? <br /><br /><a className="contact_tel" href="tel: +7 032 11 12">
                (+7) <span> 032 11 12</span>
              </a>call or leave a message and our operators will contact you as soon as possible.</div>)}
          </p> */}
          <p className="contact_address">
            {state === "ru"
              ? " Казахстан, Туркестанская область, город Шымкент,Улица Сурикова 3Б"
              : "Qazaqstan, Turkestan Region, Shymkent city, Surikova street 3B"}
          </p>

          <div className="email_box">
            <MdEmail className="email_icon" />
            <a href="mailto: garvird@gmail.com">
              info@baisan.org
            </a>
          </div>
          <div className="feat_left contact_icons">

            <a href="#" className="iconBox " style={{ background: '#6b3d0c', color: '#fff' }}>
              <FaFacebookF className="icon icon4" />
            </a>
            <a href="#" className="iconBox" style={{ background: '#6b3d0c', color: '#fff' }}>
              <FaTwitter className="icon icon4" />
            </a>
            <a href="#" className="iconBox" style={{ background: '#6b3d0c', color: '#fff' }}>
              <FaInstagram className="icon icon4" />
            </a>
          </div>
        </div>
        <div className="contact_left666">
          <h1 onClick={() => window.location = "/contacts"}>
            {state === "ru" ? "Связаться с нами" : "Connect with us"}
          </h1>
          {/* <p className="contact_info">
            {state === "ru"
              ? (<div>Как я могу связаться с вами? <br /><br />По номеру <a className="contact_tel" href="tel: +7 032 11 12">
                (+7) <span> 032 11 12</span>
              </a>  или же оставить сообщение и наши операторы с вами свяжутся в кратчайшее время. </div>)
              : (<div>How can I contact you? <br /><br /><a className="contact_tel" href="tel: +7 032 11 12">
                (+7) <span> 032 11 12</span>
              </a>call or leave a message and our operators will contact you as soon as possible.</div>)}
          </p> */}
          <p className="contact_address">
            {state === "ru"
              ? " Казахстан, Туркестанская область, город Шымкент,Улица Сурикова 3Б"
              : "Qazaqstan, Turkestan Region, Shymkent city, Surikova street 3B"}
          </p>

          <div className="email_box">
            <MdEmail className="email_icon" />
            <a href="mailto: garvird@gmail.com">
              info@baisan.org
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
              placeholder={state === "ru" ? "Имя*" : "Name*"}
            />
            <input
              type="text"
              className="contact_inp"
              placeholder={
                state === "ru" ? "LastName*" : "LastName*"
              }
            />
            <input
              type="text"
              className="contact_inp"
              placeholder={state === "ru" ? "Телефон*" : "Purchase*"}
            />
          </div>
          <input
            type="text"
            className="contact_inp101"
            placeholder={state === "ru" ? "Электронная почта*" : "Email*"}
          />
          <Number />
          <textarea
            rows={10}
            placeholder={state === "ru" ? "Сообщение*" : "Message*"}
            className="contact_textarea"
          ></textarea>
          <div className="admin_button">
            <button onClick={() => { dataPost() }} className="contact_btn">
              {state === "ru" ? "отправить" : "send"}
            </button>
            {/* <div className="admin_title">
              <h4>Admin:</h4>
              <div className="chec_icon">
                <BsCheck2 className='bir_chec' />
                <BsCheckAll className='ikki_chec' />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
