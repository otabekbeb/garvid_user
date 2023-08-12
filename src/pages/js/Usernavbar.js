import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import axios from "axios";
import url from "./Host";
import garvrd from '../img/Remove-bg.ai_1691307426758.png'
import teacher from '../img/oqtuvchi.png'
import Student from '../img/student.jpg'
import Edit from '../img/Edit.png'
import Curs from '../img/Curs.png'

function sa() {
  var o = document.querySelector(".media-ul").style.display;
  if (o == "flex") {
    document.querySelector(".media-ul").style.display = "none";
  } else {
    document.querySelector(".media-ul").style.display = "flex"
  }
  // document.querySelector(".media-ul").style="width:100%;"
  document.querySelector(".bar-menu").classList.toggle("la");
  document.querySelector(".wone").classList.toggle("laa");
  document.querySelector(".wone1").classList.toggle("laa");
  document.querySelector(".wone2").classList.toggle("laa");
}

function about2() {
  document.querySelector(".ichi span").style = "transform: rotate(180deg);";
}

function aboutClose2() {
  document.querySelector(".ichi span").style = "transform: rotate(0deg);";
}
function iconhover() {
  document.querySelector(".ichi2 span").style = "transform: rotate(180deg)"
}
function iconhover1() {
  document.querySelector(".ichi2 span").style = "transform: rotate(0deg)"
}
// meded
function ochil1() {
  document.querySelector(".lll ul").classList.toggle("lllb");

}
function meded() {
  document.querySelector(".ffdul ").classList.toggle("fffdull");
}
function menuul() {
  document.querySelector(".div1").style = "display:block";
  document.querySelector(".menu ul").style = "display:block";
  document.querySelector(".menuu  span").style = "transform: rotate(180deg);";
}
function menuufolse() {
  document.querySelector(".menuu  span").style = "transform: rotate(0deg);";
}
function menuul1() {
  document.querySelector(".menu ul").style = "display:none";
  document.querySelector(".div1").style = "display:none important";
}
function menu2ul() {
  document.querySelector(".blog1").style = "display:block";
}
function menu2ul12() {
  document.querySelector(".menu ul").style = "display:block";
  document.querySelector(".blog1").style = "display:block";
}
function menu2leave() {
  document.querySelector(".blog1").style = "display:none ";
}
function menu2leave1() {
  document.querySelector(".blog1").style = "display:none";
  document.querySelector(".menu ul").style = "display:none";
}
function ochilnavbar() {
  document.querySelector(".navbar-glav-medias").style = `position: relative;
  left: 0%;`
  document.querySelector(".navbar-qoraaa").style = `display:block`
}

function yopilqora1() {
  document.querySelector(".navbar-glav-medias").style = `position: relative;
  left: 100%`
  document.querySelector(".navbar-qoraaa").style = `display:none !important`

}


export default function Navbar() {
  const [state1, setState1] = React.useState();
  const [state, State] = React.useState(1);
  const [user, setUser] = useState([])
  const [MobileMenu, setMobileMenu] = useState(false)
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };


  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );



  }, []);

  return (
    <div>

      <div>
        <section onMouseLeave={() => menuul1()} className="navbar">
          <div className="section_navbar">
            <div className="navbar-ul">
              <ul>
                <li className="moto-menu-item">
                  <a href="/">Home</a>
                </li>

                <div style={{ display: "none" }} className="menu" onMouseLeave={() => menuufolse()}>
                  <div className="menuu" onMouseEnter={() => menuul()}>
                    <p>
                      <a href="/about">About Us</a>
                      <span>
                        <box-icon
                          name="chevron-down"
                          color="#44bef1"
                        ></box-icon>
                      </span>
                    </p>
                    <ul onMouseLeave={() => menuul1()}>
                      <li className="faqcolor">
                        <a className="faqscolor" href="#">FAQs</a>
                      </li>
                      <div className="navbbar-line-hr"></div>


                      <div
                        className="menu2"
                        onMouseLeave={() => menu2leave()}
                        onMouseEnter={() => menu2ul()}
                      >
                        <p onClick={() => window.location = "/news"} id="menu2pp" onMouseEnter={() => menu2ul()}>
                          {" "}
                          <a className="zaib">
                            News{" "}
                            <span id="menu2spanid">
                              <box-icon
                                name="chevron-right"
                                color="#44bef1"
                              ></box-icon>
                            </span>
                          </a>{" "}
                        </p>
                        <div className="navbbar-line-hr"></div>

                        <ul
                          onMouseEnter={() => menu2ul()}
                          onMouseLeave={() => menu2leave1()}
                          className="blog1"
                        >
                          <div className="navbbar-line-hr1"></div>

                          <li onClick={() => window.location = "contacts"} id="ded">
                            <a id="contactcolor" href="/contacts">Contact </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>

                <li className="moto-menu-item">
                  {" "}
                  <a href="/user">User</a>{" "}
                </li>
                {localStorage.getItem("position")==1?(<li className="moto-menu-item">
                  <a href="/teacher">Teacher</a>
                </li>):(<li className="moto-menu-item">
                  <a href="/mentor">Teacher</a>
                </li>)}
                
                <li className="moto-menu-item">
                  <a href="/studentpage">Student</a>
                </li>
                <li className="moto-menu-item">
                  <a href="/editprofil">Edit profile</a>
                </li>
                <li className="moto-menu-item">
                  <a href="/ourcourse">Courses</a>
                </li>
                {/* <li className="moto-menu-item">
                  {localStorage.getItem("token") ? (<a href="/user">{user.username}</a>) : (<a href="/login">Log in</a>)}
                </li> */}
              </ul>
              <div id="google_translate_element"></div>
            </div>
            <div className="media-navbar" style={{ margin: "auto", width: '100%' }}>
              {/* <div style={{width:'100%'}} className="navbar-menu">
                <div className="navbar-mediao-barr" onClick={() => sa()}>
                  <div className="bar-menu" id="sa">
                    <div className="wone"></div>
                    <div className="wone1"></div>
                    <div className="wone2"></div>
                  </div>
                </div>


{/* onMouseLeave={()=>aboutClose2()}  */}
              {/* <div  className="media-ul">
                  <div className="dfdf">
                    <ul>
                      <li onClick={()=> window.location="/"}>
                        <a href="/" className="tt">
                          Home
                        </a>
                      </li>
                      <div
                        className="media-kategory"
                        onMouseLeave={() => aboutClose2()}
                      >
                        <div
                          className="ichi"
                          onMouseEnter={() => about2()}
                          onClick={() => meded()}
                        >
                          <li onClick={()=> window.location="/about"}>
                            <a  className="tt">
                              About Us
                            </a>
                          </li>{" "}
                          <span id="sdfdsfsd">
                            <box-icon
                              name="chevron-down"
                              color="black"
                            ></box-icon>
                          </span>
                        </div>
                      </div>
                      <div className="ffd">
                        <ul className="ffdul">
                          <div className="ichi2" onMouseEnter={()=> iconhover()} onMouseLeave={()=> iconhover1()} onClick={() => ochil1()}>
                            <li onClick={()=> window.location="/news"} className="ds">
                              <a >News</a>
                            </li>
                            <span>
                              <box-icon
                                name="chevron-down"
                                color="#989da2"
                              ></box-icon>
                            </span>
                          </div>
                          <div className="lll">
                            <ul>
                              <li onClick={()=> window.location="/blog"} className="lll1">
                                <a >Blog</a>
                              </li>
                              <li onClick={()=> window.location="/contacts"} className="lll2">
                                <a >Contacts</a>
                              </li>
                            </ul>
                          </div>

                          <li className="ds">
                            <a href="#">FAQs</a>
                          </li>
                        </ul>
                      </div>
                      <li onClick={()=> window.location="/servis"}>
                        <a className="tt">
                          Services
                        </a>
                      </li>

                      <li onClick={()=> window.location="/blog"}>
                        <a className="tt">
                          Blog
                        </a>
                      </li>
                      <li onClick={()=> window.location="/ourteam"}>
                        <a className="tt">
                          our team
                        </a>
                      </li>
                      <li onClick={()=> window.location="/contacts"}>
                        <a className="tt">
                          Contacts
                        </a>
                      </li>
                      
                    <li >
                      {localStorage.getItem("token") ? (user.map(item=>{return(<a href="/user" className="tt">{item.username}</a>) })) : (<a href="/login" className="tt">Log in</a>)}
                    </li>



<div id="google_translate_element"></div>
                    </ul>
                  </div>
                </div>
              </div>  */}
              <div className="navbar-media-img-joy">
                <img src={garvrd} alt="" id="avbar-media-img-joyimg" />
              </div>
              <div className="navbar-media-katalog-joy" onClick={() => setMobileMenu(!MobileMenu)} >
                {MobileMenu ? <div className="box-icon-togirladim1" onClick={() => yopilqora1()}><box-icon name='x' color='white' ></box-icon></div> : <div className="box-icon-togirladim" onClick={() => ochilnavbar()}><box-icon name='menu-alt-right' color='white' ></box-icon></div>}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="div1"
        onMouseEnter={() => menu2ul12()}
        onMouseLeave={() => menu2leave1()}
      ></div>
      <div className="navbar-futer-tepaga">
        <a href="#">
          <div className="navbar-tepaga-krug"></div>
        </a>
      </div>
      <div className="navbar-glav-medias">
        <div className="navbar-media-left">

          <div className="navbar-media-left-ul">
            <ul >
              <div className="navbar-box-icons">  <span><box-icon name='home' type='solid' color='#323946' ></box-icon></span><li id="surul-navbar" onClick={() => window.location = "/"}>Home</li></div>
              <div className="navbar-box-icons"><span><box-icon type='solid' color='#323946' name='user'></box-icon></span> <li id="surul-navbar" onClick={() => window.location = "/user"}>User</li>  </div>
              {localStorage.getItem("position")==1?(<div className="navbar-box-icons"><span ><img src={teacher} style={{ width: "30px" }} alt="" /></span> <li id="surul-navbar" onClick={() => window.location = "/teacher"}>Teacher</li>  </div>):(<div className="navbar-box-icons"><span ><img src={teacher} style={{ width: "30px" }} alt="" /></span> <li id="surul-navbar" onClick={() => window.location = "/mentor"}>Teacher</li>  </div>)}

              
              <div className="navbar-box-icons">   <span><img src={Student} style={{ width: "30px" }} alt="" /></span> <li id="surul-navbar" onClick={() => window.location = "/studentpage"}>Student</li>  </div>
              <div className="navbar-box-icons"><span><img src={Edit} style={{ width: "30px" }} alt="" /></span><li id="surul-navbar" onClick={() => window.location = "/loginpage"}>Edit profile</li>  </div>
              <div className="navbar-box-icons"><span><img src={Curs} style={{ width: "30px" }} alt="" /></span><li id="surul-navbar" onClick={() => window.location = "/ourcourse"}>Courses</li></div>


              <div className="navbar-box-icons"><span><box-icon name='user' color='#323946' ></box-icon></span><li id="surul-navbar">  {localStorage.getItem("token") ? (user.map(item => { return (<a href="/user" id="osdsodsdd" className="323946">{item.username}</a>) })) : (<a href="/login" className="tt">Log in</a>)}</li></div>
            </ul>

          </div>


        </div>

      </div>
      <div className="navbar-qoraaa">

      </div>
    </div>
  );
}