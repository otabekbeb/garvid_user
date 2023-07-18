
import React, { useState, useEffect } from 'react'

function sa() {
    var o = document.querySelector(".media-ul").style.display
    if (o == "flex") {
        document.querySelector(".media-ul").style.display = "none";
    } else {
        document.querySelector(".media-ul").style.display = "flex";
    }
    // document.querySelector(".media-ul").style.display="flex";
    document.querySelector(".bar-menu").classList.toggle("la")
    document.querySelector(".wone").classList.toggle("laa")
    document.querySelector(".wone1").classList.toggle("laa")
    document.querySelector(".wone2").classList.toggle("laa")
}

function about2() {
    document.querySelector(".ichi span").style = "transform: rotate(180deg);";

}

function aboutClose2() {

    document.querySelector(".ichi span").style = "transform: rotate(0deg);"
}
function ffd() {

}
// meded
function ochil1() {

    var t = document.querySelector(".lll ul").style.display
    var p = document.querySelector(".lll ul").style.opacity
    if (t == "none") {
        document.querySelector(".lll ul").style.display = "block";
        document.querySelector(".lll ul").style.opacity = "1";
    } else {
        document.querySelector(".lll ul").style.display = "none";
        document.querySelector(".lll ul").style.opacity = "0";
    }
}
function meded() {

    var t = document.querySelector(".ffdul ").style.display
    var p = document.querySelector(".ffdul").style.opacity
    if (t == "none") {
        document.querySelector(".ffdul").style.display = "block";
        document.querySelector(".ffdul").style.opacity = "1";
    } else {
        document.querySelector(".ffdul").style.display = "none";
        document.querySelector(".ffdul").style.opacity = "0";
    }
}


export default function Navbar() {


    const [state1, setState1] = React.useState();
    const [state, State] = React.useState(1)

    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
        );
        if (localStorage.getItem("lang") !== "ru") {
            document.querySelector("#checkbox").checked = true
        } else {
            document.querySelector("#checkbox").checked = false
        }
    }, []);




    return (
        <div>
            <section className='navbar'>
                <div className="navbar-ul">
                    <ul>
                        <li onClick={()=> window.location="/user"} className='moto-menu-item'><a href="/user">{state1 === "eng" ? "User" : "Пользователь"}</a></li>
                        <li className='moto-menu-item'> <a href="">{state1 === "eng" ? "Student" : "Студент"}</a> </li>
                        <li className='moto-menu-item'><a href="">{state1 === "eng" ? "Mentor" : "Наставник"}</a></li>
                        <li className='moto-menu-item'><a href="">{state1 === "eng" ? "Partner" : "Партнёр"}</a></li>
                        <li onClick={()=> window.location="/loginpage"} className='moto-menu-item'><a href="/loginpage">{state1 === "eng" ? "Profile editing" : "Редактировать профиль"}</a></li>
                    </ul>
                    <div class="checkbox-con">
                        <input id="checkbox" onClick={() => { !document.querySelector("#checkbox").checked ? (localStorage.setItem("lang", "ru")) : (localStorage.setItem("lang", "eng")); window.location.reload() }} type="checkbox" />
                    </div>
                </div>
                <div className="media-navbar">



                    <div className="navbar-menu">
                        <div className="navbar-mediao-barr" onClick={() => sa()}>

                            <div className="bar-menu" id='sa'  >
                                <div className="wone" ></div>
                                <div className="wone1"  ></div>
                                <div className="wone2"  ></div>


                            </div>
                        </div>


{/* onMouseLeave={()=>aboutClose2()}  */}
                        <div className="media-ul">
                            <div className="dfdf">
                                <ul>
                                    <li><a href="/user" className='tt'>Пользователь</a></li>
                                    <div className="media-kategory" onMouseLeave={() => aboutClose2()}  >


                                    </div>
                                    <div className="ffd" >
                                        <ul className='ffdul' >

                                        </ul>
                                    </div>
                                    <li><a href="" className='tt'>Студент</a></li>

                                    <li><a href="" className='tt'>Наставник</a></li>
                                    <li><a href="" className='tt'>Партнер</a></li>
                                    <li><a href="" className='tt'>Редактировать профиль</a></li>
                                </ul>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

            <div className="div1" ></div>
            <div className="navbar-futer-tepaga">
                <a href="#">
                    <div className="navbar-tepaga-krug"></div>
                </a>
            </div>
            
        </div>
    )
}