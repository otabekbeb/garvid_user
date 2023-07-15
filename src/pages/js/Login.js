import React, {useEffect, useState } from "react";
import "../css/login.css";
import LoginImg from "../img/image-1.webp";
import loginimg from "../img/image-2.webp";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import axios from "axios";
import url from "./Host";
import { type } from "@testing-library/user-event/dist/type";

export default function Login() {
  const [page,setPage] =useState(1)
  const [email,setEmail] =useState()
  const [name,setName] =useState()
  const [data,setData] =useState([])

  function userModal(){
    var formdata=new FormData()
    formdata.append("username",document.querySelector(".name").value)
    formdata.append("email",document.querySelector(".email").value)
    formdata.append("password",document.querySelector(".password").value)

    axios.post(`${url}/auth/register/`,formdata).then(res=>{
    console.log(res);
    setPage(4)
    }).catch(err=>{
       console.log(err);
    })
    
  }

  useEffect(()=>{
    axios.get(`${url}/auth/user/`,{headers:{'Authorization':'Bearer ' + sessionStorage.getItem("token")}}).then(res=>{
    setData(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])

  function userVeri(){
   
  axios.post(`${url}/auth/register/?verify_code=${name.target.value}&email=${email.target.value}`).then(res=>{
    alert("Вы зарегистрировались")
    setPage(1)  
  }).catch(err=>{
    console.log(err);
  })
  }

  function userAvto(){
    var formdata=new FormData()
    formdata.append("email",document.querySelector("#email").value)
    formdata.append("password",document.querySelector("#parol").value)

    axios.post(`${url}/auth/login/`,formdata).then(res=>{
    sessionStorage.setItem("token",res.data.access)
    window.location="/user"
    }).catch(err=>{
      console.log(err);
    })
  }





  return (
    <div>

      <div className="login_big_div">
      {page===4?(
      <div className="login_db">
        <div className="login_relative">
        <img className="LoginImg" src={LoginImg} alt="" />
        <div className="login_small_div">
          <form>
          <div className="login_small_div_input">
            <h1>Верификация</h1>
            <p>Код отправлен на вашу электронную почту</p>
            <div className="royhat_small_input">
              <FiMail className="login_icon" />
              <input  placeholder="Верификация"  onChange={setName}  type="number" required/>
            </div>
            <div className="login_button_div">
            <button type="button" onClick={()=>userVeri()}>Верификация</button>
            </div>
          </div>
          </form>
        </div>
        <img className="loginimg" src={loginimg} alt="" />
        </div>
        </div>):(
          <div className="login_db">
          <div className="login_i_register_button">
            <button onClick={()=>setPage(1)}>Авторизоваться</button>
            <button onClick={()=>setPage(2)}>Регистрация</button>
          </div>
          {page===1?(
          <div className="login_relative">
            <img className="LoginImg" src={LoginImg} alt="" />
            <div className="login_small_div">
              <form action="">
              <div className="login_small_div_input">
                <h1>Авторизоваться</h1>
                <div className="royhat_small_input">
                  <FiMail className="login_icon" />
                  <input placeholder="Email" id="email"  type="text" required/>
                </div>
                <div className="royhat_small_input">
                  <BiLockAlt className="login_icon" />
                  <input placeholder="Пароль" id="parol" type="password" required/>
                </div>
                <div className="login_button_div">
                 <button type="button"  onClick={()=>userAvto()} >Авторизоваться</button>
                </div>
              </div>
              </form>
            </div>
            <img className="loginimg" src={loginimg} alt="" />
        </div>):
            (
              <div className="login_relative">
              <img className="LoginImg" src={LoginImg} alt="" />
              <div className="login_small_div">
                <form>
                <div className="login_small_div_input">
                  <h1>Регистрация</h1>
                  <div className="login_small_input">
                    <AiOutlineUser className="login_icon" />
                    <input className="name" placeholder="Имя" type="text" required/>
                    <div className="error">Это уже используется</div>
                  </div>
                  <div className="login_small_input">
                    <FiMail className="login_icon" />
                    <input  onChange={setEmail} className="email" placeholder="Email" type="text" required />
                    <div className="error">Это уже используется</div>
                  </div>
                  <div className="login_small_input">
                    <BiLockAlt className="login_icon" />
                    <input className="password" placeholder="Пароль" type="password" required />
                  </div>
                  <div className="login_button_div">
                    <button type="button" onClick={()=>userModal()}>Регистрация</button>
                  </div>
                </div>
                </form>
              </div>
              <img className="loginimg" src={loginimg} alt="" />
          </div>
        )}
            </div>
        )}
        

      </div>
    </div>
  );
}
