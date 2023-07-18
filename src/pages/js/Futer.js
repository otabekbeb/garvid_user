import React from 'react'
import '../css/Futer.css'
import {FaTelegramPlane} from "react-icons/fa"
import {GrFacebookOption,GrYoutube} from "react-icons/gr"
import {AiFillInstagram} from "react-icons/ai"
import tolov from '../img/Group 26.png'

export default function Futer() {
  return (
    <div>
        <div className="line1"></div>
        <div className="futer_botom">
            <div className="futer_container">
            <div className="futer_row">
    <div className="futer_col">
    <ul><h4>Основной</h4>
      <li>О проекте</li>
      <li>Курсы</li>
      <li>Наставникам</li>
      <li>Публичная оферта</li>
      <li>Политика конфиденциальности</li>
      <div className="futer_i">
<div className="social_i"><FaTelegramPlane /></div>
<div className="social_i"><GrFacebookOption /></div>
<div className="social_i"><AiFillInstagram /></div>
<div className="social_i"><GrYoutube /></div>
</div>
    </ul>
    
  </div>

  <div className="futer_col">
    <ul><h4>Дополнительные</h4>
      <li>Наша команда</li>
      <li>Сотрудничество с нами</li>
      <li>Как это работает?</li>
    </ul>
  </div>

  <div className="futer_col">    <ul><h4>Поддерживать</h4>
      <li>Наиболее часто задаваемые вопросы</li>
      <li>Контакт</li>
    </ul>
  </div>

  <div className="futer_col">
    <ul>
        <h4>Виды оплаты</h4>
        <div className="tolov_"><img src={tolov} alt="" /></div>
    <p>100011, г.Россия, Шайхонтохурский район,
    <br />ул.Заргайнар, дом 3Б</p>
    <button className='aloqa_btn'>
Связаться с нами</button>
    </ul>
   
    
  </div>
            </div>
            </div>
            




<div className="botom_p">
<p>© 2019 storm.uz</p>
<div className="mini_line"></div>
<p>Personel Development Process LLC</p>
<div className="mini_line"></div>
<p>Foydalanish shartlari</p>
</div>

    </div>
    </div>
  )
}
