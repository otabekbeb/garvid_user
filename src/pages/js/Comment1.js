import React, { useEffect, useState } from 'react'
import '../css/comment.css'
import {FiCornerUpLeft} from 'react-icons/fi'
import {FcFile} from 'react-icons/fc'
import img_comment from '../img/Ellipse.jpg'
import img_comment1 from '../img/Ellipse.png'
import axios from 'axios'
import url from './Host'
import Swal from "sweetalert2";
import person from '../img/149071.png'
import { MdClose } from "react-icons/md";
import "../css/yozishmalar.css";
import {AiOutlineDelete}from "react-icons/ai"
import {CgClose} from "react-icons/cg"
import anonim from '../img/anonim-user.png'


export default function Comment1() {
  const [comment,setComment]=useState([])
  const [comment2,setComment2]=useState([])

  const [page, setPage]=useState(4)
  const [state1, setState1] = React.useState();
  const [dobavit,setDobavit]=useState([])

  const [user,setUser]=useState([])
  const [oneuser,setoneuser]=useState([])




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
      axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then(res=>{
  
        setComment(res.data)
        console.log(res.data,);
      })
    document.querySelector("#chat_text").value=""
    document.querySelector(".commetn_otvet_kaytarish").style="display: none;"

    // var otvet = localStorage.getItem("key")
    // axios.get(`${url}/api/course_theme_comment/${otvet}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    // .then(res=>{
    //   setDobavit(res.data)
    // })
    }
    )
    .catch(err=>{
      Swal.fire("Нельзя писать больше 50 символов")
    })

    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>{

      setComment(res.data)
      console.log(res.data,);
    })
    .catch(err=>{
    })
  }

  function otvetPost(id){

    var formdata = new FormData()
    formdata.append("text",document.querySelector("#chat_text1").value)
    formdata.append("image",document.querySelector("#comment_file1").files[0])
    formdata.append("user_id", oneuser[0].id)
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video1")).id)
    formdata.append("subcomment", 0)

    axios.post(`${url}/api/course_theme_comment/`, formdata, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
    .then(res=>{
      axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video1")).id}`, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then(res=>{
        setComment2(res.data)
      })
    document.querySelector("#chat_text1").value=""

    // var otvet = localStorage.getItem("key")
    // axios.get(`${url}/api/course_theme_comment/${otvet}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    // .then(res=>{
    //   setDobavit(res.data)
    // })
    //  setComment2(res.data)
    }
    )
    .catch(err=>{
      Swal.fire("Нельзя писать больше 50 символов")
    })

    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>{

      setComment2(res.data)
    })
    .catch(err=>{
    })
  }

  function deleteComment(id) {
    axios
    .delete(`${url}/api/course_theme_comment/${id}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>[
      axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then(res=>{
  
        setComment(res.data)
      })
    ])
    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>{

      setComment(res.data)
    })
    .catch(err=>{
      Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.")
    })
  }

  function deleteComment1(id) {
    axios
    .delete(`${url}/api/course_theme_comment/${id}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>[
      axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then(res=>{
  
        setComment2(res.data)
      })
    ])
    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>{

      setComment2(res.data)
    })
    .catch(err=>{
      Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.")
    })
  }

  function OpenotvetMadal(item,key) {
   
    document.querySelector(".commetn_otvet_kaytarish").style="display: flex; "
// setComment2(item)
// console.log(key);
// localStorage.setItem("key", key)

  }
  function CloseotvetMadal() {
    document.querySelector(".otevet_comment_otdel_oyna").style="display: none;"
  }
  function cencelModal() {
    document.querySelector("#chat_text").value=""
    document.querySelector("#chat_text1").value=""
  }
function openModalOtvet11() {
  document.querySelector(".otevet_comment_otdel_oyna").style="display: block"
  document.querySelector(".m_otdel_bgc").style="display:none"
}
function closeModalOtvet11() {
  document.querySelector(".m_otdel_bgc").style="display: block"
  document.querySelector(".otevet_comment_otdel_oyna ").style="display:none !important"
}
  return (
    <div>

    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">
<div className='for_scroll'>
      {comment.map(item => {
        return(<>
        {/* {dobavit.map(item1=>{
return(<>
                 <div className="for_answer_tag">
                 <div className="for_img_and_username">
                 <img src={item.oneuser?item.oneuser.image.includes("http")?item.oneuser.image:`${url}/${item.oneuser.image}`:
                   <img src={anonim} alt="" />} alt="" />
                   </div>
                   
                   <div className="for_text_and_username">
                   <h6>Вы ответили {item.oneuser?item.oneuser.username:"Anonim User"}  
                   </h6>
                 <p>{item1.text}</p></div>
                   </div>
           
</>)
        })} */}
           
              
         
          <div className="m_comment">
           
          <div className="m_comment_img">
          {
            oneuser.map(item2 => {
              return(
                <>
            {/* {item2.image==null?(<img src={person} alt="" />):(
            <img src={item2.image.includes("http")?item2.image:`${url}/${item2.image}`} alt="" />)} */}
            <img src={item.oneuser?item.oneuser.image.includes("http")?item.oneuser.image:`${url}/${item.oneuser.image}`:
            <img src={anonim} alt="" />} alt="" />
           </>
              )
            })
          }
            
          </div>
          <div className="m_comment_text">
              
         

                <h5>{item.oneuser?item.oneuser.username:"Anonim User"}</h5>
            
              <img src={item.image.includes("http")?item.image:`${url}/${item.image}`} alt="" />
              <p className='m_comment_text1505'>{item.text}</p>
              <div className="m_comment_otvet"> 
              <p  className='m_otvet_comment' 
              // onClick={()=>OpenotvetMadal(item.text,item.id)}
              onClick={()=>{openModalOtvet11()}}
              ><span><FiCornerUpLeft/></span>Ответить</p> 
  
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
      </>
        )
       })}  

</div>


      
                  {/* <div className="commetn_otvet_kaytarish">
                  <div className="m_comment_img1">
          {
            oneuser.map(item2 => {
              return(
                <>
             <img src={comment.oneuser?comment.oneuser.image.includes("http")?comment.oneuser.image:`${url}/${comment.oneuser.image}`:
            <img src={anonim} alt="" />} alt="" />
                </>
              )
            })
          }
            
          </div>
                    <div className="comment_otvet_block" id='comment_down'>
                    {
            comment.map(item1 => {
              return(
                <h6>{item1.oneuser?item1.oneuser.username:"Anonim User"}</h6>

              )
            })
          }

                <p>{comment2>15?(<>{comment2.slice(0,15)}...</>):(<>{comment2}</>)}</p>

                        
                    </div>
                
                  <span id='closeModal' onClick={()=>{CloseotvetMadal()}}><CgClose/></span>
                  </div> */}



                  <div className="m_comment_yozish">
              <input type="file" id='comment_file' />
              <p><FcFile/></p>
              
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen' onClick={()=>{cencelModal()}}>Cancel</button>
              <button onClick={(event)=>{ messagePost()}} className='m_otpravit'>Send</button>
              </div>
            </div>



            <div className="otevet_comment_otdel_oyna">
                  <p  className='m_otvet_comment_back' 
                  onClick={()=>{closeModalOtvet11()}}>
                    <span><FiCornerUpLeft/></span>Назад</p> 
                    <div className="comment_otevet_all">
                      
                      {comment2.map(item32=>{
                        return(<><img src={item32.oneuser?item32.oneuser.image.includes("http")?item32.oneuser.image:`${url}/${item32.oneuser.image}`:
                        <img src={anonim} alt="" />} alt="" />
                         <h5>{item32.oneuser?item32.oneuser.username:"Anonim User"}</h5>
                           <p>{item32.text}</p>
                           {oneuser.map(item5=>{
                return(
                  <>
                  {item5.id==item32.user_id?(
              <p className='m_comment_delete'
               onClick={()=>{deleteComment1(item32.id)}}>
                <span><AiOutlineDelete/></span>удалить</p>):
              ("")
              }
                </>
                )
                
              })}
                           </>
                        )
                       
                      })}
                    </div>
                    <div className="m_comment_yozish">
              <input type="file" id='comment_file1' />
              <p><FcFile/></p>
              
              <textarea placeholder='Введите текст' id="chat_text1"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen' onClick={()=>{cencelModal()}}>Cancel</button>
              <button onClick={(event)=>{ otvetPost()}} className='m_otpravit'>Send</button>
              </div>
                  </div>
    </div>
    </div>
  )
}
