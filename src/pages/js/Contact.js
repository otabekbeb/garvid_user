import React, { useState,useEffect } from 'react'
import '../css/Contact.css'
import Navbar from './Navbar'
import Contacts from './Contacts'
import Footer from './Footer1'
import Images from './Images'
export default function Contact() {
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
      );},[]);
  return (

    <div>
    {state1==="eng" ? (<div>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Contacts</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Home  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>Contact</p>
</div>
</div>
</div>

<Images/>
<Footer/>

    </div>):(<div>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Контакты</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Главный  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>О нас</p>
</div>
</div>
</div>
<div className="asdfkja">
<div className="katta">
        <div className="container213">
        <div className="left231">
            <h1>Форма для обратной связи</h1>
        <div className="inp">
            <p className="pp" >Ваше имя</p>
            <input  className="inpp" type="text"/>
            <p className="pp" >Ваш адрес электронной почты</p>
            <input className="inppp" type="email"/>
             <p>Field is required</p> 
            <p className="pp" >Телефон</p>
            <input className="Phone" type="text"/>
            <p className="pp" >Ваше сообщение</p>
            <input className="coment" type="text"/>
        </div>
        <div className="btn">
            <button>представлять на рассмотрение</button>
        </div>
    </div>

        <div className="right123">
            <h1>Контактная информация</h1>
            <div className="p">
                <h4>Адрес</h4>
                <p>267 Парк Авеню Нью-Йорк, NY 90210</p>
                <h4>Мы открыты</h4>
                <p>Часы работы: 8.00-18.00 Пн-Сб</p>
                <h4>Телефон</h4>
                <p><span>(123) 45678910</span>, <span>(123) 45678901</span></p>
                <h4>Email</h4>
                <p><span>info@demolink.org</span></p>
            </div>
        </div>
    </div>


    </div>
</div>
<Images/>
<Footer/>

    </div>)}
    
    </div>
  )
}