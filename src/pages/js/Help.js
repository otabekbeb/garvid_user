import React from 'react'
import '../css/Help.css'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar'
import { FaUserCircle } from 'react-icons/fa'
import { BsChatLeftDots } from 'react-icons/bs'
import { FiYoutube } from 'react-icons/fi'
import {AiOutlineLeft} from 'react-icons/ai'
function yobobqol(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function orqaga2(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
function yobobqol1(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function yobobqol2(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function yobobqol3(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function orqaga3(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
function orqaga4(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
function orqaga5(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
export default function Help() {
  return (
    <div>
      <Usernavbar />
      <div className="bos">
      <h1 className='Savol'>Ответы на частые вопросы</h1>
      <div className="user_help">
       <div className="user_help1">
       <div className="user_div" onClick={()=>yobobqol()}>
          <div className="user_icon">
            <FaUserCircle />
          </div>
          <h4>User </h4>
        </div>
        <div className="user_div" onClick={()=>yobobqol1()}>
          <div className="user_icon">
            <FaUserCircle />
          </div>
          <h4>Mentor </h4>
        </div>
        <div className="user_div" onClick={()=>yobobqol2()}>
          <div className="user_icon">
            <FiYoutube />
          </div>
          <h4> Youtube</h4>
        </div>
        <div className="user_div" onClick={()=>yobobqol3()}>
          <div className="user_icon">
            <BsChatLeftDots />
          </div>
          <h4>Chat</h4>
        </div>
       </div>

      </div> 

    <div className="malumot_div">
    <div className="nazad_left_div" onClick={()=>orqaga2()}>
    <AiOutlineLeft /> <p className='nazad'>Hазад</p>
    </div>
      <div className="malumot">
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
      </div>
    </div>
    <div className="malumot_div">
    <div className="nazad_left_div" onClick={()=>orqaga2()}>
    <AiOutlineLeft /> <p className='nazad'>Hазад</p>
    </div>
      <div className="malumot">
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
      </div>
    </div>   
    <div className="malumot_div">
    <div className="nazad_left_div" onClick={()=>orqaga2()}>
    <AiOutlineLeft /> <p className='nazad'>Hазад</p>
    </div>
      <div className="malumot">
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
      </div>
    </div>
    <div className="malumot_div">
    <div className="nazad_left_div" onClick={()=>orqaga2()}>
    <AiOutlineLeft /> <p className='nazad'>Hазад</p>
    </div>
      <div className="malumot">
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
        <div className="title_profil">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, esse?</p>
        </div>
      </div>
    </div>
    </div>
      <Futer />
    </div>
  )
}
