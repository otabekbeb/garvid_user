import React, { useState,useEffect } from 'react'
import Use_img from "../img/Ellipse.jpg"

import Pdp from "./UserPdp"
import {MdOutlinePhotoCamera} from "react-icons/md"
import {BsActivity,BsFillBellFill,BsThreeDots} from "react-icons/bs"
import {BiCast} from "react-icons/bi"
import {FiEdit,FiLifeBuoy,FiLogOut} from "react-icons/fi"
import {TbPointFilled} from "react-icons/tb"
import {AiOutlineRight} from "react-icons/ai"
import chadimg from "../img/Ellipse.jpg"
import '../css/Studentpage.css'
import { GrFormClose } from 'react-icons/gr';
import Mentorkurs from "./Mentorkurs"
import 'bootstrap/dist/css/bootstrap.min.css';
import Yozishma from './MentorChat'
import Sertifikat from './Workforteach'
import Azo from "./Azo"
import Usernavbar from './Usernavbar'
import { TiThMenu } from 'react-icons/ti'
import Futer from "./Footer1"
import axios from 'axios'
import url from './Host'
import { AiFillStar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import img_for_null from '../img/download.png'
export default function Mentor() {
  const [state1, setState1] = React.useState();
  const [students, setStudents] = React.useState([]);
  const [kursdata, setKursdata] = useState([]);
  const [courses, setCourses] = useState([])
  useEffect(() => {
    axios.get(`${url}/auth/oneuser`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      setStudents(res.data)
      console.log(res.data,"aa");
    });
    axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      setKursdata(res.data)
    }).catch(err => {
      console.log(err);
    });
    axios.get(`${url}/api/mycourse/${localStorage.getItem("courseid")}`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
      setCourses(res.data)
      console.log(res.data,"nn")
  }).catch(err=>{
   console.log("xato");
  });

  }, [])
  
  function dashed() {
    document.querySelector("#edit_card").style = "display:flex !important"
  }
  function Filter() {
    var a = document.querySelector(".filter_button").style.display
    if (a === "none") {
      document.querySelector(".filter_button").style = "display:block "
    } else {
      document.querySelector(".filter_button").style = "display:none "
    }
  }
  function filter1() {
    document.querySelector(".filter_button").style = "display:none !important"
  }
    function userimgModal(){
        document.querySelector(".user_img_hover").style="  position: absolute;bottom: 0;"
        
      }
      function dashed_nazat() {
        document.querySelector("#edit_card").style = "display:none"
      }
      function userimgClose(){
        document.querySelector(".user_img_hover").style="  position: absolute;bottom: -100px;"
      }
    
      function taxrirlashModal(){
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style="display:block;"
        document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style="display:none;"
      }
      function taxrirlashClose(){
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style="display:none;"
        document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style="display:none;"
      }
      function taxrirlashChadModal(){
        document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style="display:block;"
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style="display:none;"
      }
      const [toggle, setToggle] = useState(1)
      
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
    <div className='studentpagess'>
       <Usernavbar />

        <div>
      <div className="profil_size_df">
       <div className="profil_size">
        {students.map(item=>{
          return(
        <div className="profil_blok_bir1">
          <div onMouseLeave={()=>userimgClose()} className='user_img_size'>
            {item.image === null? (<img onMouseEnter={()=>userimgModal()} className='user_img' src={img_for_null} alt="" />):(<img onMouseEnter={()=>userimgModal()} className='user_img' src={item.image} alt="" />)}
          
           <div className="user_img_hover">
            <input type="file" />
          <MdOutlinePhotoCamera  className='user_hover_photo_icon'/>
        </div>
        </div>
        
            <div className="blok_bir_text_mentor1">
            <h1>{item.username}</h1>
            <p>Java Tutor, Python</p>
            <button>Mentor1</button>
           </div>
          
           
        </div>)
        })}
        
        <div className="profil_blok_ikki">
          {students.map(item=>{
          return(
<div className="profil_blok_ikki_text">
          <p>Current balance</p>
          <div className="profil_blok_ikki_sum1">
            <h1>{item.balance}</h1><p>UZS</p>
          </div>
          <div className="profil_blok_ikki_button">
            <button><BsActivity/></button><button>Balance replenishment</button>
          </div>
          </div>
          )
        })}
          
          <div onMouseLeave={()=>taxrirlashClose()} className="profil_blok_ikki_icon">
          <BsFillBellFill onMouseEnter={()=>taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
          <BsThreeDots  onMouseEnter={()=>taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
          <div className="profil_blok_ikki_icon_texrirlash_modal">
            <div className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Edit profile</p></div>
            <div className='taxrirlash_modal_div'><BiCast className='taxrirlash_modal_icon'/><p>Notifications</p></div>
            <div className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon'/><p>Help</p></div>
            <hr />
            <div className='taxrirlash_modal_div'><FiLogOut className='taxrirlash_modal_icon'/><p>Exit</p></div>
          </div>
          <div className="profil_blok_ikki_icon_taxriirlash_chat">
            <p>Today</p>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
            <p>06.08.2019</p>
            <div className="taxrirlash_chad">
              <div className="taxrirlash_chad_img_size">
              <img src={chadimg} alt="" />
              </div>
               <div className="taxrirlash_chad_size">
              <div className="taxrirlash_chad_vaqt">
                <h1>Jenny Fox</h1><div className='taxrirlash_chad_vaqt_soat'><TbPointFilled className='chad_set'/><p>19:22</p></div>
              </div>
              <div className="taxrirlash_chad_text">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              </div>
            </div>
             
             <div className="taxrirlash_chad_barchasini">
              <p>view all<AiOutlineRight/></p>
             </div>
            </div>
          </div>



          </div>
        </div>
        </div> 
    </div>
    <div>
            <div className="gray_blok">
                <div className="fil_text_blok">
                  
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} className='fromLeft'>My courses</h1>{toggle===1?(<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("courselenght")} pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} className='fromLeft'>Correspondence</h1><div className="fil_text_blok_kurs_lenght">14 pieces</div></div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} className='fromLeft'>Tasks</h1>{toggle===3?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} className='fromLeft'>My subscribers</h1>{toggle===4?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
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
                </div>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}><div>
        <div className="Filter">
          <div className="blur_blok">
            <div className="inp_blok">
              <input type="text" placeholder="Search among my courses" />
              <CiSearch className="search" />
            </div>
            <div className="blur">
              <div className="icon_blok">
                <div
                  className="sel_blok"
                  onClick={() => {
                    Filter();
                  }}
                >
                  <BiMenu className="menyu" />
                  <h4>Filter</h4>
                </div>
                {/* <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div> */}
              </div>
              <div onMouseLeave={() => filter1()} className="filter_button">

                <div className="button_filter_kurs">
                  <div className="div_kurs">dawdawdd</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards">
          {localStorage.setItem("courselenght",kursdata.length)}
          {kursdata.map(item => {
            return (
              <div className="kurs_card">
                <button className="btn_das">Dasturlash</button>
                {item.image === null ? (
                  <img src={img_for_null} />
                ) : (
                  <img src={item.image} />
                )}
                <div className="kurs_paddaing_auto">
                  <h4>{item.name}</h4>
                  <div className="star_card">
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_ib">
                      <AiFillStar />
                    </i>
                    <p>
                      4.1 <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Kurs narxi</p>
                      {item.price}$
                    </h5>
                    <h5>
                      <p>Kurs vaqti</p>
                      {item.planned_time}h
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight
                  // onClick={() => {
                  //   window.location = "/video";
                  //   localStorage.setItem("course", item.id)
                  // }}
                  />
                </button>
              </div>
            )
          })}
          <div className="dashed" onClick={() => dashed()}>
            <i><AiOutlinePlus /></i>
          </div>
          <div id="edit_card" className="edit_card" >
            <div className="edit_padding">

              <button onClick={() => dashed_nazat()} className="close_btn">
                <i><GrFormClose /></i>
              </button>
              <div className="edit_inside">
                <label htmlFor="">Name:</label>
                <input type="text" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Description:</label>
                <input type="text" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Price:</label>
                <input type="number" className="inp_numbr" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Planned time:</label>
                <input type="number" className="inp_numbr" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Image:</label>
                <input type="file" className="inp_img" />
              </div>
              <button className="edit_inside_btn">Send</button>
            </div>
          </div>
        </div>

        {/* SPISKA */}

        {/* <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>no picture</h1>
                        </div>
                      ) : (
                        <img src={item.image} alt="No img" />
                      )}
                    </div>
                    <div className="spiska_title_df">
                      <div className="spiska_title">
                        <h3>{item.name}</h3>
                        <div className="star_icon_blok1">
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar />
                          <div className="number">
                            <h6>4.1 (524)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="left1_icon">
                        <HiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div></div>
            <div className={toggle === 2 ? "show-content" : "content"}><Yozishma /></div>
            <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
            <div className={toggle === 4 ? "show-content" : "content"}><Azo/></div>

    </div>
    <Futer />
    </div>
  )
}
