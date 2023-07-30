import React, { useEffect, useState } from 'react'
import '../css/comment.css'
import {FiCornerUpLeft} from 'react-icons/fi'
import {FcFile} from 'react-icons/fc'
import img_comment from '../img/Ellipse.jpg'
import img_comment1 from '../img/Ellipse.png'
import axios from 'axios'
import url from './Host'


export default function Comment1() {
  const [comment,setComment]=useState([])
  const [state1, setState1] = React.useState();
  const [user,setUser]=useState([])

  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);

  useEffect(()=>{

  },[])

  function messagePost(){

  }

  return (
    <div>

    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">


          <div className="m_comment">
          <div className="m_comment_img">
              {/* <img src={"https://baisan.onrender.com"+item.user.image} alt="" /> */}
          </div>
          <div className="m_comment_text">
              <h4>faad</h4>
              <p>awddwad</p>
              {/* <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              </div> */}
          </div>
      </div>




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
