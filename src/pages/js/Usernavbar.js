import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import axios from "axios";
import url from "./Host";

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
  document.querySelector(".ichi2 span").style="transform: rotate(180deg)"
}
function iconhover1() { 
  document.querySelector(".ichi2 span").style="transform: rotate(0deg)"
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
export default function Navbar() {
  const [state1, setState1] = React.useState();
  const [state, State] = React.useState(1);
  const [user, setUser] = useState([])
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

                <div style={{display:"none"}} className="menu" onMouseLeave={() => menuufolse()}>
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
                        <p  onClick={()=> window.location="/news"} id="menu2pp" onMouseEnter={() => menu2ul()}>
                          {" "}
                          <a  className="zaib">
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

                          <li onClick={()=> window.location="contacts"} id="ded">
                            <a id="contactcolor" href="/contacts">Contact </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>

                <li  className="moto-menu-item">
                  {" "}
                  <a href="/user">User</a>{" "}
                </li>
                <li className="moto-menu-item">
                  <a href="/teacher">Teacher</a>
                </li>
                <li className="moto-menu-item">
                  <a href="/studentpage">Student</a>
                </li>
                <li className="moto-menu-item">
                  <a href="/loginpage">Edit profile</a>
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
            <div   className="media-navbar" style={{margin:"auto",width:'100%'}}>
              <div style={{width:'100%'}} className="navbar-menu">
                <div className="navbar-mediao-barr" onClick={() => sa()}>
                  <div className="bar-menu" id="sa">
                    <div className="wone"></div>
                    <div className="wone1"></div>
                    <div className="wone2"></div>
                  </div>
                </div>


                {/* onMouseLeave={()=>aboutClose2()}  */}
                <div style={{width:'100%'}} className="media-ul">
                  <div className="dfdf">
                    <ul>
                      <li>
                        <a href="/" className="tt">
                          Home
                        </a>
                      </li>
                      <div style={{display:"none"}}
                        className="media-kategory"
                        onMouseLeave={() => aboutClose2()}
                      >
                        <div
                          className="ichi"
                          onMouseEnter={() => about2()}
                          onClick={() => meded()}
                        >
                          <li>
                            <a href="/about" className="tt">
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
                              <a href="news">News</a>
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
                              <li className="lll1">
                                <a href="/blog">Blog</a>
                              </li>
                              <li className="lll2">
                                <a href="/contacts">Contacts</a>
                              </li>
                            </ul>
                          </div>

                          <li className="ds">
                            <a href="#">FAQs</a>
                          </li>
                        </ul>
                      </div>
                      <li>
                        <a href="/user" className="tt">
                          User
                        </a>
                      </li>

                      <li>
                        <a href="/teacher" className="tt">
                          Teacher
                        </a>
                      </li>
                      <li>
                        <a href="/studentpage" className="tt">
                          Student
                        </a>
                      </li>
                      <li>
                        <a href="/loginpage" className="tt">
                          Edit profile
                        </a>
                      </li>
                      <li>
                        <a href="/ourcourse" className="tt">
                          Courses
                        </a>
                      </li>
                      <div id="google_translate_element"></div>
                      {/* <li><a href="/teacher" className='tt'>Teacher</a></li> */}
                      {/* <li>
                        {localStorage.getItem("token") ? (<a href="/user" className="tt">{user.username}</a>) : (<a Login href="/login" className="tt">Login</a>)}
                      </li> */}
                    </ul>
                  </div>
                </div>
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
    </div>
  );
}