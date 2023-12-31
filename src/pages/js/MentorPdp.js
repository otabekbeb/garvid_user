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
import axios from "axios";
import url from "./Host";
import Education from './Education';
import Test_create from "./Test_create.js"
import Mysubscribers from "../js/Mysubscribers.js"
// import Ourcourse from './Ourcourse';
import VideoChat from "../Join"
import Sertificate_create from "./Sertificate_create.js"

export default function MentorPdp() {
    const [toggle, setToggle] = useState(1)
    const [stTasks, setTasks] = useState([]);
    const [state1, setState1] = React.useState();
    const [foreducation,setForeducation] = useState([])
    const [test, setTest] = useState([])
    const [kursdata,setKursdata] = useState([])
    const [sertificat, setSertificat] = useState([])
    useEffect(() => {
        axios
      .get(`${url}/edu/sertificat`)
      .then((res) => {
        var a = res.data.filter(item => item.mentor == localStorage.getItem("OneuserId"))
        setSertificat(a)
      });
        axios.get(`${url}/edu/test`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setTest(res.data)
        })
        axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            const Filter = res.data.filter(item => item.author == localStorage.getItem("OneuserId"))
            setKursdata(Filter)
      
          }).catch(err => {
            console.log(err);
          })
        axios.get(`${url}/api/course_theme_task`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setTasks(res.data)
        }).catch(err=>{})
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
        axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setForeducation(res.data)
        }).catch(err=>{})
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
                <div className="#6b3d0c_blok">
                    <div className="fil_text_blok">
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} style={toggle === 1 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>My courses</h1>{toggle === 1 ? (<div className="fil_text_blok_kurs_lenght" >{kursdata.length} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} style={toggle === 2 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>Chat</h1></div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} style={toggle === 3 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>Tasks</h1>{toggle === 3 ? (<div className="fil_text_blok_kurs_lenght">{stTasks.length} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} style={toggle === 4 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>My Subscribers</h1>{toggle === 4 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("subscribersLength")} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} style={toggle === 5 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>Educations</h1>{toggle === 5 ? (<div className="fil_text_blok_kurs_lenght">{foreducation.length} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(6)} style={toggle === 6 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>Tests</h1>{toggle === 6 ? (<div className="fil_text_blok_kurs_lenght">{test.length} pieces</div>) : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(8)} style={toggle === 8 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>Zoom</h1>{toggle === 8 ? ("") : ("")}</div>
                        <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(9)} style={toggle === 9 ? { borderBottom: '2px solid #6b3d0c' } : {}} className='fromLeft'>Sertificate</h1>{toggle === 9 ? (<div className="fil_text_blok_kurs_lenght">{sertificat.length} pieces</div>) : ("")}</div>
                    </div>
                    <div className="profil_blok_menu_size">
                        <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
                        <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
                    </div>
                    <div className="profil_modal_media">
                        <h1 onClick={() => updatetoggle(1)} className='fromMenu'>My courses</h1>
                        <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Chat</h1>
                        <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Tasks</h1>
                        <h1 onClick={() => updatetoggle(4)} className='fromMenu'>My Subscribers</h1>
                        <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Educations</h1>
                        <h1 onClick={() => updatetoggle(6)} className='fromMenu'>Tests</h1>
                        <h1 onClick={() => updatetoggle(8)} className='fromMenu'>Zoom</h1>
                        <h1 onClick={() => updatetoggle(9)} className='fromMenu'>Sertificate</h1>
                    </div>
                </div>

                <div className={toggle === 1 ? "show-content" : "content"}><Mentorkurs /></div>
                <div className={toggle === 2 ? "show-content" : "content"}><Yozishma /></div>
                <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
                <div className={toggle === 4 ? "show-content" : "content"}><Mysubscribers /></div>
                <div className={toggle === 5 ? "show-content" : "content"}><Education /></div>
                <div className={toggle === 6 ? "show-content" : "content"}><Test_create /></div>
                <div className={toggle === 8 ? "show-content" : "content"}><VideoChat /></div>
                <div className={toggle === 9 ? "show-content" : "content"}><Sertificate_create /></div>

            </div>

        </div>
    )
}
