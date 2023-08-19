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
import UserChat from "./userChat"
import Education from "./Education"
import Sertifikat from './Workforteach'
import Azo from "./Azo"
import Usernavbar from './Usernavbar'
import { TiThMenu } from 'react-icons/ti'
import Futer from "./Footer1"
import axios from 'axios'
import { GrClose } from 'react-icons/gr'
import Swal from "sweetalert2"; 
import url from './Host'
import { AiFillStar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import img_for_null from '../img/download.png'
import Testpage from './Testpage'
function openTest(){
  document.querySelector(".block-bir-variant1 p").style=`   background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant2 p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;

`
document.querySelector(".block-bir-variant2 p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;

`
  document.querySelector(".block-bir-variant p").style=` background-color: rgb(98, 177, 204);color: white;`
}
function openTest1(){
  document.querySelector(".block-bir-variant2 p").style=`   background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant p").style=`   background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant1 p").style=`background-color: rgb(98, 177, 204);color: white;
  
  `
}
function openTest2(){
document.querySelector(".block-bir-variant1 p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;

`
document.querySelector(".block-bir-variant p").style=`
background-color: #fcfcfc;
border: 1px solid #ccc;
`
document.querySelector(".block-bir-variant2 p").style=`background-color: rgb(98, 177, 204);color: white;`
}




function openTest3(){
document.querySelector(".block-bir-variant3 p").style=`background-color: rgb(98, 177, 204);color: white;`
document.querySelector(".block-bir-variant4 p").style=`background-color: #fcfcfc;
border: 1px solid #ccc;`
document.querySelector(".block-bir-variant5 p").style=`background-color: #fcfcfc;
border: 1px solid #ccc;`

}

function openTest4(){

  document.querySelector(".block-bir-variant4 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant3 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant5 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest5(){
  document.querySelector(".block-bir-variant5 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant4 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant3 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}





function openTest6(){
  document.querySelector(".block-bir-variant6 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant7 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant8 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest7(){
  document.querySelector(".block-bir-variant7 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant6 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant8 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest8(){
  document.querySelector(".block-bir-variant8 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant7 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant6 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}


function openTest9(){
  document.querySelector(".block-bir-variant9 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant10 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant11 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest10(){
  document.querySelector(".block-bir-variant10 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant9 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant11 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest11(){
  document.querySelector(".block-bir-variant11 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant10 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant9 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}


function openTest12(){
  document.querySelector(".block-bir-variant12 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant13 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant14 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest13(){
  document.querySelector(".block-bir-variant13 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant12 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant14 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
function openTest14(){
  document.querySelector(".block-bir-variant14 p").style=`background-color: rgb(98, 177, 204);color: white;`
  document.querySelector(".block-bir-variant13 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`
  document.querySelector(".block-bir-variant12 p").style=`background-color: #fcfcfc;
  border: 1px solid #ccc;`

}
export default function Mentor() {
  const [state1, setState1] = React.useState();
  const [students, setStudents] = React.useState([]);
  const [kursdata, setKursdata] = useState([]);
  const [courses, setCourses] = useState([]);
  const [user,setUser] =useState([])
  const [data, setData] = useState([]);
  const [page,setpage]= useState(1)
  const [counter , setCounter]= React.useState(59)
  const [counter1 , setCounter1]= React.useState(70)
  const [counter2 , setCounter2]= React.useState(65)
  const [counter3 , setCounter3]= React.useState(70)
  const [counter4 , setCounter4]= React.useState(80)
  const[loading,setloading]= useState(false)
  
  useEffect(()=>{
      setloading(true);
      setTimeout(()=>{
          setloading(false);
      },20000);
  },[])
  
  React.useEffect(()=>{
      const timer =
      counter > 0 &&  setInterval(()=>setCounter(counter - 1),1000);
      return()=> clearInterval(timer);
  },[counter])
  
  React.useEffect(()=>{
      const timer1 =
      counter1 > 0 &&  setInterval(()=>setCounter1(counter1 - 1),1000);
      return()=> clearInterval(timer1);
  },[counter1])
  
  
  React.useEffect(()=>{
      const timer2 =
      counter2 > 0 &&  setInterval(()=>setCounter2(counter2 - 1),1000);
      return()=> clearInterval(timer2);
  },[counter2])
  
  
  React.useEffect(()=>{
      const timer3 =
      counter3 > 0 &&  setInterval(()=>setCounter3(counter3 - 1),1000);
      return()=> clearInterval(timer3);
  },[counter3])
  
  
  React.useEffect(()=>{
      const timer4 =
      counter4 > 0 &&  setInterval(()=>setCounter4(counter4 - 1),1000);
      return()=> clearInterval(timer4);
  },[counter4])

  const [follow, setFollow] = useState([])
  const [following,setFollowing] = useState(localStorage.getItem("OneuserId"))
  function folowcolor1(key) {
      document.querySelectorAll('.followButton1')[key].classList.toggle("followButton3")
    }
  useEffect(() => {
      axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setFollow(res.data)
      })
    }, [])
  function obuna() {
      document.querySelector('#azo_bolgan_katta_div_text_block_button').classList.toggle("obuna1")
  }
  function obuna2() {
      document.querySelector('#azo_bolgan_katta_div_text_block_button1').classList.toggle("obuna2")
  }

  useEffect(() => {
      axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
          setUsers(res.data)
        })
  }, []);

  function folowcolor1(key) {
      document.querySelectorAll('.followButton1')[key].classList.toggle("followButton3")
    }
  useEffect(() => {
      axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setFollow(res.data)
      })
    }, [])
  function obuna() {
      document.querySelector('#azo_bolgan_katta_div_text_block_button').classList.toggle("obuna1")
  }
  function obuna2() {
      document.querySelector('#azo_bolgan_katta_div_text_block_button1').classList.toggle("obuna2")
  }
  const [users,setUsers] = useState([])
  useEffect(() => {
      axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
          setUsers(res.data)
        })
  }, []);
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
  function exitss() {
    window.location="/"
    localStorage.removeItem("token")
  }
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
      function notificationModal() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:0px;";
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
          "display:none";
            document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none";
    document.querySelector(".profil-qora-qiladi").style = "display:block";
    
      }
      function notificationClose() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:-100%;";
          
    document.querySelector(".profil-qora-qiladi").style = "display:none";
      }
      function notificationModal() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:0px;";
    
        document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
          "display:none";
        document.querySelector(".profil-qora-qiladi").style = "display:block";
      }
      function notificationClose() {
        document.querySelector(".profil_notifacation_size").style =
          "position: fixed;right:-100%;";
        document.querySelector(".profil-qora-qiladi").style = "display:none";
      }
      useEffect(() => {
        axios
          .get(`${url}/auth/oneuser/`, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          })
          .then((res) => {
            localStorage.setItem("page_user", JSON.stringify(res.data));
            res.data.map(item => {
              localStorage.setItem("OneuserId", item.id)
            })
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        setState1(
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    
    
    
      }, []);
      function userImgPut(id) {
        var formdata = new FormData();
    
        formdata.append("image", document.querySelector("#userInput").files[0]);
        formdata.append("address", students[0].address);
        formdata.append("description", students[0].description);
        formdata.append("email", students[0].email);
        formdata.append("last_name", students[0].last_name);
        formdata.append("phone_number", students[0].phone_number);
        formdata.append("username", students[0].username);
    
        axios
          .put(`${url}/auth/oneuser/${id}`, formdata, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          })
          .then((res) => {
            axios
      .get(`${url}/auth/oneuser`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
          
          })
          .catch((err) => {
            Swal.fire("Что-то пошло не так, попробуйте снова.")
          });
        axios
          .get(`${url}/auth/oneuser`, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          })
          .then((res) => {
            console.log(res.data);
            setStudents(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
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
          {item.image === null ? (
                      <img
                        onMouseEnter={() => userimgModal()}
                        className="user_img"
                        src={img_for_null}
                        alt=""
                      />
                    ) : (
                      <img
                        onMouseEnter={() => userimgModal()}
                        className="user_img"
                        src={
                          item.image.includes("http")
                            ? item.image
                            : `${url}/${item.image}`
                        }
                        alt=""
                      />
                    )}
          
           <div className="user_img_hover">
            <input id="userInput" onChange={() => userImgPut(item.id)} type="file" />
          <MdOutlinePhotoCamera  className='user_hover_photo_icon'/>
        </div>
        </div>
        
            <div className="blok_bir_text_mentor1">
            <h1>{item.username}</h1>
            <p>Java Tutor, Python</p>
            <button>Student</button>
           </div>
          
           
        </div>)
        })}
        
        <div className="profil_blok_ikki">
          {students.map(item=>{
          return(
<div className="profil_blok_ikki_text">
          <p>Current balance</p>
          <div className="profil_blok_ikki_sum1">
            <h1>{item.balance}</h1><p>$</p>
          </div>
          <div className="profil_blok_ikki_button">
                <button>
                  <BsActivity />
                </button>
                <button onClick={()=>  window.location="/oplata"}>Balance replenishment</button>
              </div>
          </div>
          )
        })}
          
          <div onMouseLeave={()=>taxrirlashClose()} className="profil_blok_ikki_icon">
          <BsFillBellFill onMouseEnter={()=>taxrirlashChadModal()} className='profil_blok_ikki_icon_bir' />
          <BsThreeDots  onMouseEnter={()=>taxrirlashModal()} className='profil_blok_ikki_icon_ikki' />
          <div className="profil_blok_ikki_icon_texrirlash_modal">
            <div className='taxrirlash_modal_div'><FiEdit className='taxrirlash_modal_icon' /><p>Edit profile</p></div>
            <div
                  onClick={() => notificationModal()}
                  className="taxrirlash_modal_div"
                >
                  <BiCast className="taxrirlash_modal_icon" />
                  <p>Notifications</p>
                </div>
          <a href="/Help" style={{color:"black"}}>  <div className='taxrirlash_modal_div'><FiLifeBuoy className='taxrirlash_modal_icon'/><p>Help</p></div></a>
            <hr />
            <div onClick={()=>exitss()} className='taxrirlash_modal_div'><FiLogOut className='taxrirlash_modal_icon'/><p>Exit</p></div>
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
                  
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} className='fromLeft'>My courses</h1>{toggle===1?(<div className="fil_text_blok_kurs_lenght">14 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(0)} className='fromLeft'>Education</h1>{toggle===1?(<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("courselenght")} pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} className='fromLeft'>Correspondence</h1><div className="fil_text_blok_kurs_lenght">14 pieces</div></div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} className='fromLeft'>Tasks</h1>{toggle===3?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(7)} className='fromLeft'>Test</h1>{toggle===7?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} className='fromLeft'>My subscribtions</h1>{toggle===4?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                    <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} className='fromLeft'>My subscribers</h1>{toggle===5?(<div className="fil_text_blok_kurs_lenght">24 pieces</div>):("")}</div>
                </div>
                <div className="profil_blok_menu_size">
                    <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
                    <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
                </div>
                <div className="profil_modal_media">
                    <h1 onClick={() => updatetoggle(1)} className='fromMenu'>My courses</h1>
                    <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Correspondence</h1>
                    <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Tasks</h1>
                    <h1 onClick={() => updatetoggle(7)} className='fromMenu'>Test</h1>
                    <h1 onClick={() => updatetoggle(4)} className='fromMenu'>My subscribtions</h1>
                    <h1 onClick={() => updatetoggle(5)} className='fromMenu'>My subscribers</h1>
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
      </div></div><div className={toggle === 7 ? "show-content" : "content"}><div>
        
        <div className="letsgo-test">
        <div className="test-ichi">
        {page==1?(<div>
            <div className="ichi-img-test">
                <img src="https://cdn.goconqr.com/assets/quiz/splash_clock-734cd8dde9a207e2c74c07bc3c40edd41e7a3891c095949da9ff3e266e7e6483.png" alt="" />
            </div>
            <div className="ichi-text-test">
                <h4>Each question in this quiz is timed.</h4>
                <button onClick={()=>setpage(2)}>Begin Test</button>
            </div> 
            
        </div>):(
            page===2?(<div > 
        <div className="test-center">
        <div className="tepa-sanidi-test">
        <div className="tepa-tepa-zaibal">
        <h6>Question <span>1</span> of <span>5</span></h6>
        </div>
        <div className="tepa-time">
        <box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter}</span>
        </div>
        </div>
        </div>
        <div className="test-center">
        <div className="tepa-line"></div>
        </div>
        <div className="test-center-margin">
            <div className="test-variant">
                <h3>test-variant</h3>
                <h5>test-variant</h5>
                <div className="varianlaa">
                    <div className="block-bir-variant" id='spspspsps' onClick={()=>openTest()}>
                        <p >yoqol</p>
                    </div>
                    <div className="block-bir-variant1"  onClick={()=>openTest1()}>
                        <p>yoqol2</p>
                    </div>
                    <div className="block-bir-variant2"  onClick={()=>openTest2()}>
                        <p>yoqol3</p>
                    </div>
                </div>
                <div className="buttob-next"><button onClick={()=>setpage(3)}>Next</button></div>
            </div>
        </div>
            </div> ):(page==3?(<div>
                <div className="test-center">
        <div className="tepa-sanidi-test">
        <div className="tepa-tepa-zaibal">
        <h6>Question <span>2</span> of <span>5</span></h6>
        </div>
        <div className="tepa-time">
        <box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter1}</span>
        </div>
        </div>
        </div>
        <div className="test-center">
        <div className="tepa-line"></div>
        </div>
                <div className="test-center-margin">
            <div className="test-variant">
                <h3>test-variant2</h3>
                <h5>test-variant2</h5>
                <div className="varianlaa">
                    <div className="block-bir-variant3" onClick={()=>openTest3()}>
                        <p >sur</p>
                    </div>
                    <div className="block-bir-variant4"  onClick={()=>openTest4()}>
                        <p>sur2</p>
                    </div>
                    <div className="block-bir-variant5"  onClick={()=>openTest5()}>
                        <p>sur3</p>
                    </div>
                </div>
                <div className="buttob-next"><button onClick={()=>setpage(4)}>Next</button></div>
            </div>
        </div>
            </div>):(page==4?(<div>
                <div className="test-center">
        <div className="tepa-sanidi-test">
        <div className="tepa-tepa-zaibal">
        <h6>Question <span>3</span> of <span>5</span></h6>
        </div>
        <div className="tepa-time">
        <box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter2}</span>
        </div>
        </div>
        </div>
        <div className="test-center">
        <div className="tepa-line"></div>
        </div>
                <div className="test-center-margin">
            <div className="test-variant">
                <h3>test-variant2</h3>
                <h5>test-variant2</h5>
                <div className="varianlaa">
                    <div className="block-bir-variant6" onClick={()=>openTest6()}>
                        <p >surr</p>
                    </div>
                    <div className="block-bir-variant7"  onClick={()=>openTest7()}>
                        <p>rsur2</p>
                    </div>
                    <div className="block-bir-variant8"  onClick={()=>openTest8()}>
                        <p>srur3</p>
                    </div>
                </div>
                <div className="buttob-next"><button onClick={()=>setpage(5)}>Next</button></div>
            </div>
        </div>
            </div>):(page==5?(<div>
                <div className="test-center">
        <div className="tepa-sanidi-test">
        <div className="tepa-tepa-zaibal">
        <h6>Question <span>4</span> of <span>5</span></h6>
        </div>
        <div className="tepa-time">
        <box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter3}</span>
        </div>
        </div>
        </div>
        <div className="test-center">
        <div className="tepa-line"></div>
        </div>
                <div className="test-center-margin">
            <div className="test-variant">
                <h3>test-variant2</h3>
                <h5>test-variant2</h5>
                <div className="varianlaa">
                    <div className="block-bir-variant9" onClick={()=>openTest9()}>
                        <p >surr</p>
                    </div>
                    <div className="block-bir-variant10"  onClick={()=>openTest10()}>
                        <p>rsur2</p>
                    </div>
                    <div className="block-bir-variant11"  onClick={()=>openTest11()}>
                        <p>srur3</p>
                    </div>
                </div>
                <div className="buttob-next"><button onClick={()=>(setpage(6))}>Next</button></div>
            </div>
        </div>
            </div>):(page==6?(<div>
                <div className="test-center">
        <div className="tepa-sanidi-test">
        <div className="tepa-tepa-zaibal">
        <h6>Question <span>5</span> of <span>5</span></h6>
        </div>
        <div className="tepa-time">
        <box-icon name='timer'></box-icon> <span id='timer-yebat'>00:{counter4}</span>
        </div>
        </div>
        </div>
        <div className="test-center">
        <div className="tepa-line"></div>
        </div>
                <div className="test-center-margin">
            <div className="test-variant">
                <h3>test-variant2</h3>
                <h5>test-variant2</h5>
                <div className="varianlaa">
                    <div className="block-bir-variant12" onClick={()=>openTest12()}>
                        <p >surr</p>
                    </div>
                    <div className="block-bir-variant13"  onClick={()=>openTest13()}>
                        <p>rsur2</p>
                    </div>
                    <div className="block-bir-variant14"  onClick={()=>openTest14()}>
                        <p>srur3</p>
                    </div>
                </div>
                <div className="buttob-next"><button onClick={()=>window.location="/Testloader"}>Next</button></div>
            </div>
        </div>
            </div>):(<div></div>)))))
        )
        }
        </div>
        
        </div>
         
        
            </div></div>
            <div className={toggle === 2 ? "show-content" : "content"}><UserChat /></div>
            <div className={toggle === 0 ? "show-content" : "content"}><Education /></div>
            <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
            <div className={toggle === 4 ? "show-content" : "content"}><div>

           
              
<div className="followcards1">
    {follow.map((item,key) => {
      return <>
       {users.map(item1=>{
        if(item1.id==item.topuser){ 
            return (    
                
<a>
                    <div className="followcard1">
                        <a href="/TeacherProfil">
                            {item.image === null ? (<h1>No signaL</h1>) : (<img className='jony_foto' src={item1.image} alt="" />)}

                            <h5 className='Name'>{item1.username}</h5 >
                        </a>
                        <button onClick={() => folowcolor1(key)} className='followButton1' >subscribe</button>
                    </div>
                </a>
                
               
            )}
       })}
       </>
    })}




</div>

</div></div>
            <div className={toggle === 5 ? "show-content" : "content"}><div>

           
              
<div className="followcards1">
    {follow.map((item,key) => {
      if(following==item.topuser){ 
        return <>
       {users.map(item1=>{
            if (item1.id==item.minuser) {
                return (    
                    <a>
                        <div className="followcard1">
                            <a href="/TeacherProfil">
                                {item.image === null ? (<h1>No signaL</h1>) : (<img className='jony_foto' src={item1.image} alt="" />)}

                                <h5 className='Name'>{item1.username}</h5 >
                            </a>
                            <button onClick={() => folowcolor1(key)} className='followButton1' >subscribe</button>
                        </div>
                    </a>
                    
                   
                )
            }
       })}
       </>
} })}




</div>

</div></div>
    </div>

    <div className="profil_notifacation_size">
          {/* <div className="admin">
            <h4>Sms</h4>
            <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>

          </div> */}

<div className="div-admin-sms">
  <h5>SMS</h5>
  <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>
</div>
<div className="sms-insta">
<div className="sms-insto-bb1">
    <div className="sms-insta-block">
    <div className="sms-img">
      <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
    </div>
<div className="sms-kotta-pas">
<div className="sms-text-tepa"><p>boxodirov_025  </p><p></p></div>
    <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
</div>
  </div>

  <div className="sms-insta-block">
    <div className="sms-img">
      <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
    </div>
<div className="sms-kotta-pas">
<div className="sms-text-tepa"><p>boxodirov_025 </p><p></p></div>
    <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
</div>
  </div>

    <div className="sms-insta-block">
    <div className="sms-img">
      <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
    </div>
<div className="sms-kotta-pas">
<div className="sms-text-tepa"><p>boxodirov_025  </p><p></p></div>
    <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
</div>
  </div>
</div>
</div>

          <div className="div-admin-sms">
            <h5>SMS</h5>
            <div
              onClick={() => notificationClose()}
              className="profil_notifacation_size_close"
            >
              <GrClose className="closei" />
            </div>
          </div>
          <div className="sms-insta">
            <div className="sms-insto-bb1">
              

              {user.map(item=>{
                return(
                  <div className="sms-insta-block">
                <div className="sms-img">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png"
                    alt=""
                  />
                </div>
                
                <div className="sms-kotta-pas">
                  <div className="sms-text-tepa">
                    <p>
                      boxodirov_025 • now{" "}
                      <span>
                        <box-icon type="solid" name="bell-ring"></box-icon>
                      </span>
                    </p>
                  </div>
                  <div className="sms-text-pas">
                    <p>Sent an sms to: Salom</p>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="profil-qora-qiladi"></div>


    <Futer />
    </div>
  )
}
