import React, { useState, useEffect } from 'react'
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
import Test_create from "./Test_create.js"
import Mysubscribers from "../js/Mysubscribers.js"
import Ourcourse from './Ourcourse';
import VideoChat from "../join"

export default function MentorPdp() {
    const [toggle, setToggle] = useState(1)
    const [state1, setState1] = React.useState();
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);


    function updatetoggle(id) {
        setToggle(id)
        document.querySelector(".profil_modal_media").style = "display:none;"
        document.querySelector(".profil_blok_menu_clone").style = "display:none !important;"
        document.querySelector(".profil_blok_menu").style = "display:block;"
    }

    function menuModal() {
        document.querySelector(".profil_modal_media").style = "display:block;"
        document.querySelector(".profil_blok_menu").style = "display:none !important;"
        document.querySelector(".profil_blok_menu_clone").style = "display:block;"
    }
    function menuModalClone() {
        document.querySelector(".profil_modal_media").style = "display:none;"
        document.querySelector(".profil_blok_menu_clone").style = "display:none !important;"
        document.querySelector(".profil_blok_menu").style = "display:block;"
    }

    return (
        <div>

            <div>
                <div className="gray_blok">
                    <div className="fil_text_blok">
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} style={toggle === 1 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>My courses</h1>{toggle === 1 ? (<div className="fil_text_blok_kurs_lenght" >{localStorage.getItem("courseLength")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} style={toggle === 2 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Correspondence</h1></div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} style={toggle === 3 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Tasks</h1>{toggle === 3 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("taskLength")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} style={toggle === 4 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Courses</h1>{toggle === 4 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("ourcourseLength")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(7)} style={toggle === 7 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>My Subscribers</h1>{toggle === 7 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("subscribersLength")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} style={toggle === 5 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Educations</h1>{toggle === 5 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("for_education")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(6)} style={toggle === 6 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Tests</h1>{toggle === 6 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("testLength")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(8)} style={toggle === 8 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Видеочат</h1>{toggle === 8 ? ("") : ("")}</div>
                    </div>
                    <div className="profil_blok_menu_size">
                        <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
                        <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
                    </div>
                    <div className="profil_modal_media">
                        <h1 onClick={() => updatetoggle(1)} className='fromMenu'>My courses</h1>
                        <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Correspondence</h1>
                        <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Tasks</h1>
                        <h1 onClick={() => updatetoggle(4)} className='fromMenu'>Courses</h1>
                        <h1 onClick={() => updatetoggle(7)} className='fromMenu'>My Subscribers</h1>
                        <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Educations</h1>
                        <h1 onClick={() => updatetoggle(6)} className='fromMenu'>Tests</h1>
                        <h1 onClick={() => updatetoggle(8)} className='fromMenu'>Видеочат</h1>
                    </div>
                </div>

                <div className={toggle === 1 ? "show-content" : "content"}><Mentorkurs /></div>
                <div className={toggle === 2 ? "show-content" : "content"}><Yozishma /></div>
                <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
                <div className={toggle === 4 ? "show-content" : "content"}><Ourcourse /></div>
                <div className={toggle === 7 ? "show-content" : "content"}><Mysubscribers /></div>
                <div className={toggle === 5 ? "show-content" : "content"}><Education /></div>
                <div className={toggle === 6 ? "show-content" : "content"}><Test_create /></div>
                <div className={toggle === 8 ? "show-content" : "content"}><VideoChat /></div>

            </div>

        </div>
    )
}
