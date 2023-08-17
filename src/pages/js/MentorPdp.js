import React, { useState,useEffect } from 'react'
import "../css/mentorPdp.css"
import Mentorkurs from "./Mentorkurs"
import 'bootstrap/dist/css/bootstrap.min.css';
import Yozishma from './MentorChat'
import Sertifikat from './Workforteach'
import Azo from "./Azo"
// import Mon from '../img/Mon.png'
// import { AiFillStar } from 'react-icons/ai'
// import {HiArrowRight} from 'react-icons/hi'
// import Rasp from '../img/Rasp.png'
// import {BsPlus} from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'
import Education from './Education';

export default function MentorPdp() {
    const [toggle, setToggle] = useState(1)
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
      );},[]);
      

    function updatetoggle(id) {
        setToggle(id)
        document.querySelector(".profil_modal_media").style="display:none;"
        document.querySelector(".profil_blok_menu_clone").style="display:none !important;"
        document.querySelector(".profil_blok_menu").style="display:block;"
    }

    function menuModal() {
        document.querySelector(".profil_modal_media").style="display:block;"
        document.querySelector(".profil_blok_menu").style="display:none !important;"
        document.querySelector(".profil_blok_menu_clone").style="display:block;"
    }
    function menuModalClone() {
        document.querySelector(".profil_modal_media").style="display:none;"
        document.querySelector(".profil_blok_menu_clone").style="display:none !important;"
        document.querySelector(".profil_blok_menu").style="display:block;"
    }

  return (
    <div>

        <div>
            <div className="gray_blok">
                <div className="fil_text_blok">
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} style={toggle===1? {borderBottom:'2px solid #44bef1'}:{}} className='fromLeft'>My courses</h1>{toggle===1?(<div className="fil_text_blok_kurs_lenght" >{localStorage.getItem("courseLength")} pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} style={toggle===2? {borderBottom:'2px solid #44bef1'}:{}} className='fromLeft'>Correspondence</h1><div className="fil_text_blok_kurs_lenght">14 pieces</div></div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} style={toggle===3? {borderBottom:'2px solid #44bef1'}:{}} className='fromLeft'>Tasks</h1>{toggle===3?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} style={toggle===4? {borderBottom:'2px solid #44bef1'}:{}} className='fromLeft'>My subscribers</h1>{toggle===4?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} style={toggle===5? {borderBottom:'2px solid #44bef1'}:{}} className='fromLeft'>Educations</h1>{toggle===5?(<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("educationLength")} pieces</div>):("")}</div>
                </div>
                <div className="profil_blok_menu_size">
                    <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
                    <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
                </div>
                <div className="profil_modal_media">
                    <h1 onClick={() => updatetoggle(1)} className='fromMenu'>My courses</h1>
                    <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Correspondence</h1>
                    <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Tasks</h1>
                    <h1 onClick={() => updatetoggle(4)} className='fromMenu'>My subscribers</h1>
                    <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Educations</h1>
                </div>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}><Mentorkurs /></div>
            <div className={toggle === 2 ? "show-content" : "content"}><Yozishma /></div>
            <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
            <div className={toggle === 4 ? "show-content" : "content"}><Azo/></div>
            <div className={toggle === 5 ? "show-content" : "content"}><Education/></div>

    </div>
    
    </div>
  )
}
