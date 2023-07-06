import React, { useState } from 'react'
import '../css/Pdp.css'
import Nav from 'react-bootstrap/Nav';
import Filtr from "./Searchfilter"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bilim from './pages/js/Bilim'
// import Mon from '../img/Mon.png'
// import { AiFillStar } from 'react-icons/ai'
// import {HiArrowRight} from 'react-icons/hi'
// import Rasp from '../img/Rasp.png'
// import {BsPlus} from 'react-icons/bs'
// import {TbPointFilled} from 'react-icons/tb'
export default function Pdp() {
    const [toggle, setToggle] = useState(1)

    function updatetoggle(id) {
        setToggle(id)
    }

    return (
        <div>
            <div className="gray_blok">
                <div className="fil_text_blok">
                <h1 onClick={()=>updatetoggle(1)} className='fromLeft'>Мои курсы</h1>
                <h1 onClick={()=>updatetoggle(2)} className='fromLeft'>Мои усвоенные знания</h1>
                <h1 onClick={()=>updatetoggle(3)} className='fromLeft'>Мои сертификаты</h1>
                <h1 onClick={()=>updatetoggle(4)} className='fromLeft'>Мои наставники-члены</h1>
                </div>
            </div>
            
            <div className={toggle === 1 ? "show-content" : "content"}><Filtr /></div>
            <div className={toggle === 2 ? "show-content" : "content"}><Bilim/></div>
            <div className={toggle === 3 ? "show-content" : "content"}>sertifikatim </div>
            <div className={toggle === 4 ? "show-content" : "content"}>azolarim</div>

        </div>
    )
}
