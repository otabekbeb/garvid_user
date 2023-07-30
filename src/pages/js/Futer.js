import React, { useState,useEffect } from 'react'
import '../css/Futer.css'
import {FaTelegramPlane} from "react-icons/fa"
import {GrFacebookOption,GrYoutube} from "react-icons/gr"
import {AiFillInstagram} from "react-icons/ai"
import tolov from '../img/Group 26.png'

export default function Futer() {
  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);
  return (
    <div>

      <div>
        <div className="line1"></div>
        <div className="futer_botom">
            <div className="futer_container">
            <div className="futer_row">
    <div className="futer_col">
    <ul><h4>Basic</h4>
      <li>about project</li>
      <li>Courses</li>
      <li>For mentors</li>
      <li>Public offer</li>
      <li>Privacy Policy</li>
      <div className="futer_i">
<div className="social_i"><FaTelegramPlane /></div>
<div className="social_i"><GrFacebookOption /></div>
<div className="social_i"><AiFillInstagram /></div>
<div className="social_i"><GrYoutube /></div>
</div>
    </ul>
    
  </div>

  <div className="futer_col">
    <ul><h4>Additional</h4>
      <li>our team</li>
      <li>Cooperation with us</li>
      <li>How it works?</li>
    </ul>
  </div>

  <div className="futer_col">    <ul><h4>Support</h4>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
  </div>

  <div className="futer_col">
    <ul>
        <h4>Payment types</h4>
        <div className="tolov_"><img src={tolov} alt="" /></div>
    <p>100011, Russia, Shaykhontokhur district,
    <br />Zargainar street, house 3B</p>
    <button className='aloqa_btn' onClick={()=> window.location="/contacts"}>
    Connect with us</button>
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
    
    </div>
  )
}
