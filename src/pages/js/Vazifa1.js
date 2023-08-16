 
import React, { useEffect, useState } from 'react'
import '../css/vazifa1.css'
import {FiCornerUpLeft} from 'react-icons/fi'
import {FcFile} from 'react-icons/fc'
import img_comment from '../img/Sertifikat.png'
import img_comment1 from '../img/Ellipse.png'
import axios from 'axios'
import url from './Host'
import person from '../img/149071.png'
import { MdClose } from "react-icons/md";
import "../css/yozishmalar.css";
import {AiOutlineDelete}from "react-icons/ai"
import {CgClose} from "react-icons/cg"
import Swal from "sweetalert2"; 

export default function Comment1() {

  const [teacherwork, setTeacherwork]=useState([])
  const [oneuser,setoneuser]=useState([])
  const [subcoment,setSubcoment]=useState(0)
  const [commenttask, setCommenttask]=useState([])


useEffect(()=>{
  axios.get(`${url}/api/course_theme_task`, {
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  .then(res=>{
    setTeacherwork(res.data)
    console.log(res.data);
  })
  .catch(err=>{
  })




},[])


function commentTaskPost() {
  var formdata = new FormData()

    formdata.append("task_commnet_id", document.querySelector("#chat_text12").value)
    formdata.append("text", 0)
    formdata.append("image",document.querySelector("#comment_file").files[0])
    formdata.append("user_id", oneuser[0].id)
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video")).id)
    formdata.append("subcomment", subcoment)

    axios.post(`${url}/api/course_theme_comment/`, formdata, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res=>{
      axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then(res=>{
        setCommenttask(res.data)
        console.log(res.data, 'aaaassss');
      })})

      axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then(res=>{
        setCommenttask(res.data)
        console.log(res.data, 'aas'); 
      })
      
}

  return (
    <div>

    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">


       
        {teacherwork.map(item=>{
          if (item.id===localStorage.getItem("page_video").id) {
            return(
              <div className='task_div_big'>
                <img src={item.image} alt="" /> <p> 
                {item.content}
                </p>
             
              </div>
            )
          }else{
            <div>There are no tasks here</div>
          }
      
        
        })}

          {commenttask.map(item=>{
            return(
              <>
               <p>{item.task_commnet_id}</p>
         
              </>
            )
           
          })}

      
            <div className="m_comment_yozish">
              {/* <input type="file" id='comment_file' />
              <p><FcFile/></p> */}
              
              <textarea placeholder='Введите ответ на задания' id="chat_text12"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'
              //  onClick={()=>{cencelModal()}}
              >Cancel</button>
              <button 
              // onClick={(event)=>{ themePost(); cencelModal()}} 
              className='m_otpravit' onClick={(event)=>{commentTaskPost()}}>Send</button>
              </div>  


            </div>
    </div>
    </div>
  )
}