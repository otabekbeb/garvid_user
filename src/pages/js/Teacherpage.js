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
export default function Contact() {
  const [state, setstate] = React.useState();
  const [loader, setLoader] = useState(0)


  const dataPost = () => {
    var formdata = {
      fullname: document.querySelector("#inputla1").value + " " + document.querySelector("#inputla2").value,
      email: document.querySelector("#inputla3").value,
      city: document.querySelector("#inputla4").value,
      phone: document.querySelector("#inputla5").value,
      which_lesson: document.querySelector("#inputla6").value,
      purchase: document.querySelector("#inputla7").value,
      message: document.querySelector("#contact_textarea").value,
    };
    axios
      .post("https://markazback2.onrender.com/api/call_me", formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        alert("ishladi")
        state === "ru"
          ? Swal.fire("Information sent, wait for a call from the operator")
          : Swal.fire("Information sent, wait for a call from the operator");
        window.location.reload();
      })
      .catch((err) => {
        state === "ru"
          ? Swal.fire("Check information, Failed to send")
          : Swal.fire("Check information, Failed to send");
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

            <div className="contact_right1">
              <form action="">
                <label>
                  <p>FirstName</p>
                  <input type="text" id="inputla1" required />
                </label>
                <label>
                  <p>LastName</p>
                  <input type="text" id="inputla2" required />
                </label>
                <label>
                  <p>email</p>
                  <input type="text" id="inputla3" required />
                </label>
                <label>
                  <p>purchase</p>
                  <input type="text" id="inputla4" required />
                </label>
                <label>
                  <p>city</p>
                  <input type="text" id="inputla5" required />
                </label>
                <label>
                  <p>phone</p>
                  <input type="text" id="inputla6" required />
                </label>
                <label>
                  <p>which_lesson</p>
                  <input type="text" id="inputla7" required />
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
