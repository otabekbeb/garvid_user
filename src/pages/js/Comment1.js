import React, { useEffect, useState } from 'react'
import '../css/comment.css'
import {FiCornerUpLeft} from 'react-icons/fi'
import {BsFillChatFill} from 'react-icons/bs'
import img_comment from '../img/Ellipse.jpg'
import img_comment1 from '../img/Ellipse.png'
import axios from 'axios'
import url from './Host'


export default function Comment1() {
  const [comment,setComment]=useState([])
  

  useEffect(()=>{
    axios.get(`${url}/course/theme_comment/`,{headers:{"Authorization":"Bearer " + sessionStorage.getItem("token")}}).then(res=>{
      console.log(res.data,"salom");
      setComment(res.data)
    })
  },[])

  return (
    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">

      {comment.map(item=>{
        return(
          <div className="m_comment">
          <div className="m_comment_img">
              <img src={img_comment} alt="" />
          </div>
          <div className="m_comment_text">
              <h4>Jonibek Akbarov</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quod velit totam iste in nemo excepturi, quas doloremque dicta aspernatur voluptas saepe ipsam! 
                Soluta magnam aliquam dolorum. Quis accusamus autem atque?</p>
              <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              </div>
          </div>
      </div>
        )
      })}



            <div className="m_comment_yozish">
              <p><BsFillChatFill/></p>
              <textarea placeholder='Ваш комментарий'  name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'>Отменить</button>
              <button className='m_otpravit'>Отправить</button>
              </div></div>
    </div>
  )
}
