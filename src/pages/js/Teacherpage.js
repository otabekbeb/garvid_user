"use client";
import React, { useEffect, useState } from "react";

import "../css/Teacherpage.css";
// import Footer1 from "./Footer1";
import Usernavbar from "./Navbar";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import Loader from "./loader"
import Swal from "sweetalert2";
import { BsCheck2 } from 'react-icons/bs'
import { BsCheckAll } from 'react-icons/bs'
import url from "./Host";
export default function Contact() {
  const [state, setstate] = React.useState();
  const [loader, setLoader] = useState(0)


  function dataPost() {
    var formdata = new FormData()


    formdata.append("fullname", document.querySelectorAll("#constactqq")[0].value + " " + document.querySelectorAll("#constactqq")[1].value)
    formdata.append("email", document.querySelectorAll("#constactqq")[2].value)
    formdata.append("city", document.querySelectorAll("#constactqq")[3].value)
    formdata.append("phone", document.querySelectorAll("#constactqq")[4].value)
    formdata.append("which_lesson", document.querySelectorAll("#constactqq")[5].value)
    formdata.append("purchase", document.querySelectorAll("#constactqq")[6].value)
    formdata.append("message", document.querySelector(".contact_textarea").value)

    axios
      .post(`${url}/api/call_me`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        alert("ishladi")
        window.location.reload();
      })
      .catch((err) => {
        alert("x")
      });
  };
  useEffect(() => {
    setstate(localStorage.getItem("lang"));
    setTimeout(() => {
      setLoader(1)
    }, 3000);
  }, []);
  return (
    <div>
      {loader === 1 ? (
        <div>
          <Usernavbar />
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
            <div className="contact_right1">
              <form action="">
                <label>
                  <p>FirstName</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>LastName</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>email</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>purchase</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>city</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>phone</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>which_lesson</p>
                  <input type="text" id="constactqq" required />
                </label>
                <label>
                  <p>Message</p>
                  <textarea
                    name=""
                    className="contact_textarea"
                    id="text1"
                    cols="30"
                    rows="10"
                  ></textarea>
                </label>
                <div className="admin_button1">
                  <button
                    onClick={() => {
                      dataPost();
                    }}
                  >
                    Send
                  </button>
                  {/* <div className="admin_title">
                                            <h4>Admin:</h4>
                                            <div className="chec_icon">
                                                {chec.map(item => {
                                                    return (
                                                        <div>
                                                            {item.read === true ? (<BsCheck2 className='bir_chec' />) : (<BsCheckAll className='ikki_chec' />)}

                                                        </div>
                                                    )

                                                })}


                                            </div>
                                        </div> */}
                </div>
              </form>

            </div>
          </div>

          {/* <Footer1 /> */}
        </div>) : (<Loader />)}
    </div>

  );
}
