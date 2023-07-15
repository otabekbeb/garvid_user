import React, { useState } from 'react'
import '../css/Pdp.css'
import Filtr from "./Searchfilter"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bilim from './Bilim'
import Sertifikat from './Sertifikate'
import Azo from "./Azo"

import UserChat from "./userChat"

// import Mon from '../img/Mon.png'
// import { AiFillStar } from 'react-icons/ai'
// import {HiArrowRight} from 'react-icons/hi'
// import Rasp from '../img/Rasp.png'
// import {BsPlus} from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'


export default function Pdp() {
    const [toggle, setToggle] = useState(1)


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
        
            <div className="gray_blok">
                <div className="fil_text_blok">
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} className='fromLeft'>Мои курсы</h1>{toggle===1?(<div className="fil_text_blok_kurs_lenght">4 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} className='fromLeft'>Мои усвоенные знания</h1>{toggle===2?(<div className="fil_text_blok_kurs_lenght">14 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} className='fromLeft'>Мои сертификаты</h1>{toggle===3?(<div className="fil_text_blok_kurs_lenght">24 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} className='fromLeft'>Мои подписки</h1>{toggle===4?(<div className="fil_text_blok_kurs_lenght">24 штуки</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} className='fromLeft'>Переписка</h1><div className="fil_text_blok_kurs_lenght">1 штуки</div></div>
                </div>
                <div className="profil_blok_menu_size">
                    <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
                    <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
                </div>
                <div className="profil_modal_media">
                    <h1 onClick={() => updatetoggle(1)} className='fromMenu'>Мои курсы</h1>
                    <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Мои усвоенные знания</h1>
                    <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Мои сертификаты</h1>
                    <h1 onClick={() => updatetoggle(4)} className='fromMenu'>Мои подписки</h1>
                    <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Переписка</h1>
                </div>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}><Filtr /></div>
            <div className={toggle === 2 ? "show-content" : "content"}><Bilim /></div>
            <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /> </div>
            <div className={toggle === 4 ? "show-content" : "content"}><Azo /></div>
            <div className={toggle === 5 ? "show-content" : "content"}><UserChat /></div>
        </div>
    )
}