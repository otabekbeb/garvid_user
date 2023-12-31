
import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import axios from "axios";
import logo from '../img/signal-2023-06-09-165727_003.png'
import url from "./Host";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs"
import garvrd from '../img/Remove-bg.ai_1691307426758.png'
import bgremove from '../img/bgremove.png'
function sa() {
  var o = document.querySelector(".media-ul").style.display;
  if (o == "flex") {
    document.querySelector(".media-ul").style.display = "none";
  } else {
    document.querySelector(".media-ul").style.display = "flex";
  }
  // document.querySelector(".media-ul").style.display="flex";
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
  const activeLink = "";
  const normalLink = ""
  const [MobileMenu, setMobileMenu] = useState(false)


  const googleTranslateElementInit = () => {
    axios.get(`${url}/api/language/mass`).then(res=>{
      var v=""
       res.data.map(item=>{
         v=v+','+item
       })
       var a=v.slice(1)
       new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: 'true',
          includedLanguages: `${a}`, // include this for selected languages
          // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        
        "google_translate_element"  
        );

     }).catch(err=>{})
      
  };
  window.onload = function () {
    googleTranslateElementInit();
    setTimeout(function() {
      const translateButton = document.querySelector(".goog-te-combo");
      if (translateButton) {
        translateButton.value = "en"; // Ingliz tilini tanlaganini belgilash
        translateButton.dispatchEvent(new Event("change"));
      }
    }, 1000)
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);



  useEffect(() => {

    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );

    axios.get(`${url}/auth/oneuser`, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }).then(res => {
      setUser(res.data)
    }).catch(err=>{
      
    });
  }, []);



  function UserTeacherStudent() {
    if (localStorage.getItem("position") == 2) {
      window.location = "/mentor"
    } else if (localStorage.getItem("position") == 1) {
      window.location = "/user"
    }
    else if (localStorage.getItem("position") == 4) {
      window.location = "/studentall"
    }

  }
  return (
    <div>

      <div>
        <section onMouseLeave={() => menuul1()} className="navbar">

          <div className="navbar-ul" >
            <ul>
              <img onClick={()=>window.location="/"} style={{width:"120px", marginRight:'-30px',cursor:"pointer"}} src={logo} alt="" />
              <li className="moto-menu-item">
                <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}><a onClick={()=>window.location="/"} style={{color:"#6b3d0c"}}>Home</a></NavLink>
              </li>


              <div className="menu" onMouseLeave={() => menuufolse()}>
                <div className="menuu" onMouseEnter={() => menuul()}>
                  <p>
                    <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : normalLink}><a onClick={()=>window.location="/about"} style={{color:"#6b3d0c"}}>About us</a></NavLink>
                    <span>
                      <box-icon
                        name="chevron-down"
                        color="#6b3d0c"
                      ></box-icon>
                    </span>
                  </p>

                  <ul>
                    
                    <li onClick={() => window.location = "/"} id="ded">
                      <a id="contactcolor" href="/" style={{color:"#6b3d0c"}}>FAQ </a>
                    </li>
                    <div className="navbbar-line-hr"></div>
                    <li onClick={() => window.location = "/contacts"} id="ded">
                      <a id="contactcolor" href="/contacts" style={{color:"#6b3d0c"}}>Contact </a>
                    </li>
                    <div className="navbbar-line-hr"></div>



                    <li onClick={() => window.location = "/news"} id="menu2pp" >
                      {" "}
                      <a className="zaib" style={{color:"#6b3d0c"}}>
                        News{" "}
                      </a>{" "}
                    </li>
                    <div className="navbbar-line-hr"></div>

                    <ul

                      className="blog1"
                    >
                      <div className="navbbar-line-hr1"></div>


                    </ul>

                  </ul>
                </div>
              </div>

              <li className="moto-menu-item">
                {" "}
                <NavLink to="/servis"   className={({ isActive }) => isActive ? activeLink : normalLink}><a onClick={()=>window.location="/servis"} style={{color:"#6b3d0c"}}>Services</a>{" "}</NavLink>
              </li>
              <li className="moto-menu-item">
                <NavLink to="/blog" className={({ isActive }) => isActive ? activeLink : normalLink}><a onClick={()=>window.location="/blog"} style={{color:"#6b3d0c"}}>Blog</a>{" "}</NavLink>
              </li>
              <li className="moto-menu-item">
                <NavLink to="/ourteam" className={({ isActive }) => isActive ? activeLink : normalLink}><a onClick={()=>window.location="/ourteam"} style={{color:"#6b3d0c"}}> Our team</a>{" "}</NavLink>
              </li>
              <li className="moto-menu-item">
                <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}><a onClick={()=>window.location="/contacts"} style={{color:"#6b3d0c"}}>Contacts</a>{" "}</NavLink>
              </li>





            </ul>
            <div className="user-name-media">

              <li id="pasasas" className="moto-menu-item">

                <span id="user-cionnaxuy"><BsFillPersonFill style={{color:"#6b3d0c"}} /></span>

                {(localStorage.getItem("token")&&user.length>0)?(
                  user.map(item => {
                    return <a id="asdasddasdasasdsa" style={{color:"#6b3d0c"}}
                      onClick={() => { UserTeacherStudent() }}
                    >{item.username}</a>
                  })):(<a href="/login"  style={{color:"#6b3d0c"}}>Log in</a>)}
              </li>
            </div>
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
                      {localStorage.getItem("token") ? (user.map((item,key)=>{return(<a href="/user" className="tt">{item.username}</a>) })) : (<a href="/login" className="tt">Log in</a>)}
                    </li>



<div id="google_translate_element"></div>
                    </ul>
                  </div>
                </div>
              </div>  */}
            <div className="navbar-media-img-joy">
            <img onClick={()=>window.location="/"} style={{width:"130px", marginTop:'-31px', marginBottom:'-34px'}} src={logo} alt="" />

            </div>
            <div className="navbar-media-katalog-joy" onClick={() => setMobileMenu(!MobileMenu)} >
              {MobileMenu ? <div className="box-icon-togirladim1" onClick={() => yopilqora1()}><box-icon name='x' color='white' ></box-icon></div> : <div className="box-icon-togirladim" onClick={() => ochilnavbar()}><box-icon name='menu-alt-right' color='white' ></box-icon></div>}
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
              <div className="navbar-box-icons"><span><box-icon name='home' type='solid' color='#323946' ></box-icon></span><li id="surul-navbar" onClick={() => window.location = "/"}>Home</li></div>
              <div className="navbar-box-icons"><span><box-icon type='solid' color='#323946' name='user'></box-icon></span> <li id="surul-navbar" onClick={() => window.location = "/About"}>About us</li>  </div>
              <div className="navbar-box-icons"><span><box-icon name='news' color='#323946' ></box-icon></span> <li id="surul-navbar" onClick={() => window.location = "/News"}>News</li>  </div>
              <div className="navbar-box-icons"><span><box-icon name='contact' type='solid' color='#323946' ></box-icon></span> <li id="surul-navbar" onClick={() => window.location = "/contacts"}>Contacts</li>  </div>
              <div className="navbar-box-icons"><span><box-icon name='chat' type='solid' color='#323946' ></box-icon></span><li id="surul-navbar" >FAQs</li>  </div>
              <div className="navbar-box-icons"><span><box-icon type='solid' color='#323946' name='wrench'></box-icon></span><li id="surul-navbar" onClick={() => window.location = "/servis"}>Services</li></div>
              <div className="navbar-box-icons"><span><box-icon name='message-alt-detail' color='#323946' ></box-icon></span><li id="surul-navbar" onClick={() => window.location = "/blog"}>Blog</li></div>
              <div className="navbar-box-icons"><span><box-icon type='solid' color='#323946' name='group'></box-icon></span> <li id="surul-navbar" onClick={() => window.location = "/ourteam"}>our team</li></div>
              <div className="navbar-box-icons"><span><box-icon name='user' color='#323946' ></box-icon></span><li id="surul-navbar">  
              {localStorage.getItem("token") ? (user.map(item => {
                 return (<a href="/user" id="osdsodsdd" className="323946">{item.username}</a>)
                  })) :(<a href="/login" className="tt">Log in</a>)}
                  </li></div>
            </ul>


          </div>


        </div>

      </div>
      <div className="navbar-qoraaa" >

      </div>
    </div>
  );
}