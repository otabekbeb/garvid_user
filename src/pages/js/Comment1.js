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
  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
    );},[]);

  useEffect(()=>{
    axios.get(`${url}/course/theme_comment/`,{headers:{"Authorization":"Bearer " + sessionStorage.getItem("token")}}).then(res=>{
      axios.get(`${url}/auth/user/`,{headers:{"Authorization":"Bearer " + sessionStorage.getItem("token")}}).then(res1=>{
      if (res.user==res1.id) {
        setComment(res.data)
        console.log(res.data,"salommmmmm");
      }
      })
    })
  },[])

  function messagePost(){
    // var formdata=new FormData()
    // formdata.append("text",document.querySelector("#chat_text").value)
    // formdata.append("image",null)
    // formdata.append("subcomment",null)


    // axios.post(`${url}/course/theme_comment/`,formdata,{headers:{"Authorization":"Bearer " + sessionStorage.getItem("token")}}).then(res=>{
    // alert("yozildi")
    // }).catch(err=>{
    //   alert("ishladddddd")
    // })
  }

  return (
    <div>
    {state1==="eng"?(<div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">

      {comment.map(item=>{
        return(
          <div className="m_comment">
          <div className="m_comment_img">
              <img src={item.image} alt="" />
          </div>
          <div className="m_comment_text">
              <h4>Jonibek Akbarov</h4>
              <p>{item.text}</p>
              {/* <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              </div> */}
          </div>
      </div>
        )
      })}



            <div className="m_comment_yozish">
              <p><BsFillChatFill/></p>
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'>Cancel</button>
              <button onClick={()=>messagePost()} className='m_otpravit'>Send</button>
              </div></div>
    </div>):(<div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">

      {comment.map(item=>{
        return(
          <div className="m_comment">
          <div className="m_comment_img">
              <img src={item.image} alt="" />
          </div>
          <div className="m_comment_text">
              <h4>Jonibek Akbarov</h4>
              <p>{item.text}</p>
              {/* <div className="m_comment_otvet"> 
              <p><span><FiCornerUpLeft/></span>Ответить</p> 
              </div> */}
          </div>
      </div>
        )
      })}



            <div className="m_comment_yozish">
              <p><BsFillChatFill/></p>
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen'>Отменить</button>
              <button onClick={()=>messagePost()} className='m_otpravit'>Отправить</button>
              </div></div>
    </div>)}
    </div>
  )
}
