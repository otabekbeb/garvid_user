import React, { useState } from "react";
import "../css/login.css";
import LoginImg from "../img/image-1.webp";
import loginimg from "../img/image-2.webp";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";

export default function Login() {
  const [page,setPage] =useState(1)

  function userModal(){
    window.location="/user"
  }

  return (
    <div>

      <div className="login_big_div">
        <div className="login_db">
      <div className="login_i_register_button">
        <button onClick={()=>setPage(1)}>Регистрация</button>
        <button onClick={()=>setPage(2)}>Авторизоваться</button>
      </div>
      {page===1?(
      <div className="login_relative">
          <img className="LoginImg" src={LoginImg} alt="" />
          <div className="login_small_div">
            <form>
            <div className="login_small_div_input">
              <h1>Регистрация</h1>
              <div className="login_small_input">
                <AiOutlineUser className="login_icon" />
                <input placeholder="Имя" type="text" required/>
              </div>
              <div className="login_small_input">
                <FiMail className="login_icon" />
                <input placeholder="Email" type="text" required />
              </div>
              <div className="login_small_input">
                <BiLockAlt className="login_icon" />
                <input placeholder="Пароль" type="password" required />
              </div>
              <div className="login_button_div">
                <input onClick={()=>userModal()} value={"Регистрация"} type="submit"/>
              </div>
            </div>
            </form>
          </div>
          <img className="loginimg" src={loginimg} alt="" />
      </div>):
        (<div className="login_relative">
        <img className="LoginImg" src={LoginImg} alt="" />
        <div className="login_small_div">
          <form>
          <div className="login_small_div_input">
            <h1>Авторизоваться</h1>
            <div className="royhat_small_input">
              <FiMail className="login_icon" />
              <input placeholder="Email" type="text" required/>
            </div>
            <div className="royhat_small_input">
              <BiLockAlt className="login_icon" />
              <input placeholder="Пароль" type="password" required/>
            </div>
            <div className="login_button_div">
             <input onClick={()=>userModal()} value={"Авторизоваться"} type="submit" />
            </div>
          </div>
          </form>
        </div>
        <img className="loginimg" src={loginimg} alt="" />
    </div>
    )}
    </div>
      </div>
    </div>
  );
}
