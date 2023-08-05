import React, { useEffect, useState } from 'react'
import '../css/comment.css'
import {FiCornerUpLeft} from 'react-icons/fi'
import {FcFile} from 'react-icons/fc'
import img_comment from '../img/Ellipse.jpg'
import img_comment1 from '../img/Ellipse.png'
import axios from 'axios'
import url from './Host'
import person from '../img/149071.png'
import { MdClose } from "react-icons/md";
import "../css/yozishmalar.css";
import {AiOutlineDelete}from "react-icons/ai"



export default function Comment1() {
  const [comment,setComment]=useState([])
  const [state1, setState1] = React.useState();

  const [user,setUser]=useState([])
  const [oneuser,setoneuser]=useState([])

  // useEffect(() => {
  //   setState1(
  //     localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  //   );},[]);

  // useEffect((id)=>{


  //   axios.get(`${url}/api/course_theme_comment/${id}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  //   .then(res=>{
  //     setComment(res.data)
  //     console.log(res.data);
  //   })
  //   .catch(err=>{
  //     alert("error")
  //   })
  // },[])  

useEffect(()=>{
  axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
  .then(res=>{
    setComment(res.data)
    console.log(res.data);
  })
  .catch(err=>{
  })



axios.get(`${url}/auth/oneuser`,{
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
}).then(res=>{
setoneuser(res.data)
console.log(res.data,"salom");
})
},[])


  function messagePost(id){
    var formdata = new FormData()
    formdata.append("text",document.querySelector("#chat_text").value)
    formdata.append("image",document.querySelector("#comment_file").files[0])
    formdata.append("user_id", oneuser[0].id)
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video")).id)
    formdata.append("subcomment", 0)

    axios.post(`${url}/api/course_theme_comment/`, formdata, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res=>{
      
      console.log(res.data);
    })
    .catch(err=>{
      alert("error")
    })

    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>{

      setComment(res.data)
      console.log(res.data,'hey');
    })
    .catch(err=>{
      alert("error")
    })
  }

  function deleteComment(key) {
    axios.delete(`${url}/api/course_theme_comment/${key}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}, 

    })
    .then(res=>[
      alert("Вы успешно удалили свой комментарий")
    ])
    .catch(err=>{
      alert(err)
    })
  }

  return (
    <div>

    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">

      {comment.map(item => {
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
              {/* <img src={person} alt="" /> */}
            
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
              <p>{item.text}</p>
              <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              {oneuser.id===item.user_id?(""):(
              <p className='m_comment_delete' onClick={()=>deleteComment()}><span><AiOutlineDelete/></span>удалить</p>)}
              
              </div>
          </div>
      </div>
        )
       })}  




       {/* <div id="Javob" className="javob_berish">
                    <div className="javob_berish_div">
                      <div className="javob_berish_blok_text">
                        <h1>Turaev Jafarbek</h1>
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="javob_berish_div_fill">
                        <MdClose onClick={() => javobClose()} />
                      </div>
                    </div>
                  </div> */}
                  
            <div className="m_comment_yozish">
              <input type="file" id='comment_file' />
              <p><FcFile/></p>
              
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'>Cancel</button>
              <button onClick={()=>messagePost()} className='m_otpravit'>Send</button>
              </div></div>
    </div>
    </div>
  )
}
