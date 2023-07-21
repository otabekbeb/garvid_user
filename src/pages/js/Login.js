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
import Navbar from "./Navbar";

export default function Login() {
  const [page,setPage] =useState(1)
  const [email,setEmail] =useState()
  const [name,setName] =useState()
  const [data,setData] =useState([])

  function userModal(){
    var formdata=new FormData()
    if ((document.querySelector(".password").value).length>=8) {
      formdata.append("username",document.querySelector(".name").value)
      formdata.append("email",document.querySelector(".email").value)
      formdata.append("password",document.querySelector(".password").value)
      const NodeList=document.querySelectorAll(".error")
      NodeList[2].style="display:none"
      document.querySelector(".password").style="border-bottom:1px solid #9cf;"
      setTimeout(() => {
        setPage(4)
      }, 1000);
       
    }
    else{
      const NodeList=document.querySelectorAll(".error")
      NodeList[2].style="display:block"
      document.querySelector(".password").style="border-bottom:1px solid red;"
    }
    
    axios.post(`${url}/auth/register/`,formdata).then(res=>{
    console.log(res);
    }).catch(err=>{
       console.log(err);
       alert("Введите полную информацию")
    })
    
  }



  function userVeri(){
   
  axios.post(`${url}/auth/register/?verify_code=${name.target.value}&email=${email.target.value}`).then(res=>{
    alert("Вы зарегистрировались")
    setPage(1)  
  }).catch(err=>{
    console.log(err);
    alert("Ошибка верификации ")
  })
  }

  function userAvto(){
    var formdata=new FormData()
    formdata.append("email",document.querySelector("#email").value)
    formdata.append("password",document.querySelector("#parol").value)

    axios.post(`${url}/auth/login/`,formdata).then(res=>{
      sessionStorage.setItem("password",document.querySelector("#parol").value)
    localStorage.setItem("token",res.data.access)
    window.location="/user"
    }).catch(err=>{
      console.log(err);
      alert("В базе нет такого логина или пароля")
    })
  }


  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
    );},[]);


  return (
    <div>
<Navbar/>
      <div className="login_big_div">
      {page===4?(
      <div className="login_db">
        <div className="login_relative">
        <img className="LoginImg" src={LoginImg} alt="" />
        <div className="login_small_div">
          <form>
          <div className="login_small_div_input">
            <h1>{state1==="eng"?("Verification"):("Верификация")}</h1>
            <p>{state1==="en"?("Code sent to your email"):("Код отправлен на вашу электронную почту")}</p>
            <div className="royhat_small_input">
              <FiMail className="login_icon" />
              <input  placeholder="Верификация"  onChange={setName}  type="number" required/>
            </div>
            <div className="login_button_div">
            <button type="button" onClick={()=>userVeri()}>{state1==="en"?("Verification"):("Верификация")}</button>
            </div>
          </div>
          </form>
        </div>
        <img className="loginimg" src={loginimg} alt="" />
        </div>
        </div>):(
          <div className="login_db">
          <div className="login_i_register_button">
            <button onClick={()=>setPage(1)}>{state1==="eng"?("Login"):("Авторизоваться")}</button>
            <button onClick={()=>setPage(2)}>{state1==="eng"?("Registration"):("Регистрация")}</button>
          </div>
          {page===1?(
          <div className="login_relative">
            <img className="LoginImg" src={LoginImg} alt="" />
            <div className="login_small_div">
              <form action="">
              <div className="login_small_div_input">
                <h1>{state1==="eng"?("Login"):("Авторизоваться")}</h1>
                <div className="royhat_small_input">
                  <FiMail className="login_icon" />
                  <input placeholder={state1==="eng"?("Email"):("Электронная почта")} id="email"  type="text" required/>
                </div>
                <div className="royhat_small_input">
                  <BiLockAlt className="login_icon" />
                  <input placeholder={state1==="eng"?("Password"):("Пароль")} id="parol" type="password" required/>
                </div>
                <div className="login_button_div">
                 <button type="button"  onClick={()=>userAvto()} >{state1==="eng"?("Login"):("Авторизоваться")}</button>
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
                  <h1>{state1==="eng"?("Registration"):("Регистрация")}</h1>
                  <div className="login_small_input">
                    <AiOutlineUser className="login_icon" />
                    <input className="name" placeholder={state1==="eng"?("Name"):("Имя")} type="text" required/>
                    <div className="error">{state1==="eng"?("It's already in use"):("Это уже используется")}</div>
                  </div>
                  <div className="login_small_input">
                    <FiMail className="login_icon" />
                    <input  onChange={setEmail} className="email" placeholder={state1==="eng"?("Email"):("Электронная почта")} type="text" required />
                    <div className="error">{state1==="eng"?("It's already in use"):("Это уже используется")}</div>
                  </div>
                  <div className="login_small_input">
                    <BiLockAlt className="login_icon" />
                    <input className="password" placeholder={state1==="eng"?("Password"):("Пароль")} type="password" required />
                    <div className="error">{state1==="eng"?("The password cannot be less than 8"):("Пароль не может быть меньше 8")}</div>
                  </div>
                  <div className="login_button_div">
                    <button type="button" onClick={()=>userModal()}>{state1==="eng"?("Registration"):("Регистрация")}</button>
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
