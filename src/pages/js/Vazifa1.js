
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
  // const [comment,setComment]=useState([])
  // const [comment2,setComment2]=useState([])
  // const [page, setPage]=useState(4)
  // const [state1, setState1] = React.useState();
  // const [deleteId1,setDeleteId1]=useState()

  // const [user,setUser]=useState([])
  // const [oneuser,setoneuser]=useState([])

  const [teacherwork, setTeacherwork]=useState([])

useEffect(()=>{
  axios.get(`${url}/api/course_theme_task`, {
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  .then(res=>{
    setTeacherwork(res.data)
    console.log(res.data);
  })
  .catch(err=>{
  })



// axios.get(`${url}/auth/oneuser`,{
//   headers: { Authorization: "Bearer " + localStorage.getItem("token") },
// }).then(res=>{
// setoneuser(res.data)
// console.log(res.data,"salom");
// })
},[])


  // function themePost(id){

  //   var formdata = new FormData()
  //   formdata.append("content",document.querySelector("#chat_text12").value)
  //   formdata.append("image",document.querySelector("#comment_file").files[0])
  //   formdata.append("course_theme", JSON.parse(localStorage.getItem("page_video")).id)

  //   axios.post(`${url}/api/course_theme_task`, formdata, {
  //     headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
  //   })
  //   .then(res=>{
  //     axios.get(`${url}/api/course_theme_task/${JSON.parse(localStorage.getItem("page_video")).id}`, {
  //       headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  //     .then(res=>{
  
  //       setComment(res.data)
  //       console.log(res.data, "print hello");
  //     })
  //   document.querySelector("#chat_text12").value=""

  //   })
  //   .catch(err=>{
  //     Swal.fire("error")
  //   })

  //   axios.get(`${url}/api/course_theme_task/${JSON.parse(localStorage.getItem("page_video")).id}`, {
  //     headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  //   .then(res=>{

  //     setComment(res.data)
  //     console.log(res.data,);
  //   })
  //   .catch(err=>{
  //   })
  // }

  // function deleteComment(id) {
  //   axios
  //   .delete(`${url}/api/course_theme_task/${id}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  //   .then(res=>{
  //     axios.get(`${url}/api/course_theme_task/${JSON.parse(localStorage.getItem("page_video")).id}`, {
  //       headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  //     .then(res=>{
  
  //       setComment(res.data)
  //       console.log(res.data,);
  //     })
  // })
  //   .catch(err=>{
  //     Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.")
  //   })
  // }



  // function cencelModal() {
  //   document.querySelector("#chat_text12").value=""
  // }

  return (
    <div>

    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">

    {/* {oneuser.id==comment.user_id?(
    <>{comment.map(item => {
        return(
          <div className="m_comment">
          <div className="m_comment_img">
          {
            oneuser.map(item2 => {
              return(
                <>
            {item2.image==null?(<img src={person} alt="" />):(
            <img src={item2.image.includes("http")?item2.image:`${url}/${item2.image}`} alt="" />)}
</>
              )
            })
          }
            
          </div>
          <div className="m_comment_text">
              
          {
            oneuser.map(item1 => {
              return(

                <h5>{item1.username}</h5>
              )
            })
          }
              <img src={item.image.includes("http")?item.image:`${url}/${item.image}`} alt="" />
              <p>{item.content}</p>
              <div className="m_comment_otvet"> 
              {oneuser.map(item5=>{
                return(
                  <>
                  {item5.id==item.user_id?(
              <p className='m_comment_delete' onClick={()=>{deleteComment(item.id)}}><span><AiOutlineDelete/></span>удалить</p>):
              ("")
              }
                </>
                )
                
              })}
            
              
              </div>
          </div>
      </div>
        )
       })} </>):("")} */}
       
        {teacherwork.map(item=>{
          return(
            <div className='task_div_big'>
              <img src={item.image} alt="" /> <p> 
              {item.content}
              </p>
           
            </div>
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
              className='m_otpravit'>Send</button>
              </div></div>
    </div>
    </div>
  )
}