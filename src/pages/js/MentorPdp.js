import React,{useState} from 'react'
import "../css/mentorPdp.css"
import Mentorkurs from "./Mentorkurs"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bilim from './Bilim'
import Sertifikat from './Sertifikate'
import Azo from "./Azo"
// import Mon from '../img/Mon.png'
// import { AiFillStar } from 'react-icons/ai'
// import {HiArrowRight} from 'react-icons/hi'
// import Rasp from '../img/Rasp.png'
// import {BsPlus} from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'

export default function MentorPdp() {
    const [toggle, setToggle] = useState(1)


    function updatetoggle(id) {
        setToggle(id)
    }

    function menuModal() {
        document.querySelector(".profil_modal_media").classList.toggle("menu_modal")
    }

  return (
    <div>
            <div className="gray_blok">
                <div className="fil_text_blok">
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} className='fromLeft'>Мои курсы</h1>{toggle===1?(<div className="fil_text_blok_kurs_lenght">4 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} className='fromLeft'>Переписка</h1>{toggle===2?(<div className="fil_text_blok_kurs_lenght">14 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} className='fromLeft'>Задачи</h1>{toggle===3?(<div className="fil_text_blok_kurs_lenght">24 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} className='fromLeft'>Мне члены</h1>{toggle===4?(<div className="fil_text_blok_kurs_lenght">24 штуки</div>):("")}</div>
                </div>
                <div className="profil_blok_menu_size">
                    <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
                </div>
                <div className="profil_modal_media">
                    <h1 onClick={() => updatetoggle(1)} className='fromMenu'>Мои курсы</h1>
                    <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Переписка</h1>
                    <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Задачи</h1>
                    <h1 onClick={() => updatetoggle(4)} className='fromMenu'>Мне члены</h1>
                </div>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}><Mentorkurs /></div>
            <div className={toggle === 2 ? "show-content" : "content"}><Bilim /></div>
            <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
            <div className={toggle === 4 ? "show-content" : "content"}><Azo/></div>

    </div>
  )
}
