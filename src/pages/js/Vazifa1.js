
import React, { useEffect, useState } from 'react'
import '../css/vazifa1.css'
import '../css/comment.css'
import { FiCornerUpLeft } from 'react-icons/fi'
import { FcFile } from 'react-icons/fc'
import img_comment from '../img/Sertifikat.png'
import img_comment1 from '../img/anonim-user.png'
import axios from 'axios'
import url from './Host'
import person from '../img/149071.png'
import { MdClose } from "react-icons/md";
import "../css/yozishmalar.css";
import { AiOutlineDelete } from "react-icons/ai"
import { CgClose } from "react-icons/cg"
import Swal from "sweetalert2";

export default function Comment1() {

  const [teacherwork, setTeacherwork] = useState([])
  const [oneuser, setOneuser] = useState([])
  const [subcoment, setSubcoment] = useState(0)
  const [commenttask, setCommenttask] = useState([])
  const [task_commnet_id, setTask_commnet_id] = useState(JSON.parse(localStorage.getItem("task_commnet_id")))
  const [comment, setComment] = useState([])


  useEffect(() => {



    axios.get(`${url}/api/course_theme_task`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => {
        setTeacherwork(res.data)
        console.log(res.data);
      })
      .catch(err => {
      })


    axios.get(`${url}/auth/oneuser`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then(res => {
      setOneuser(res.data)
      console.log(res.data, "salom");
    })


    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => {
        var B = res.data.filter(item => item.task_commnet_id == 1)
        setCommenttask(B)
      })
      .catch(err => {
      })

  }, [])

  function deleteComment1(id) {
    axios
      .delete(`${url}/api/course_theme_comment/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then(res => {
        axios.get(`${url}/api/course_theme_comment/`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
          .then(res => {
            var a = res.data.filter(item => item.task_commnet_id != JSON.parse(localStorage.getItem("page_video")).id)
            setCommenttask(a)
          })
      })
    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => {
        var a = res.data.filter(item => item.task_commnet_id == 1)
        setComment(a)
        console.log(a, "comdwadwadent");
      })
      .catch(err => {
        Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.")
      })
  }

  function commentTaskPost() {
    var formdata = new FormData()
    formdata.append("text", document.querySelector("#chat_text12").value)
    formdata.append("image", document.querySelector("#comment_file").files[0])
    formdata.append("user_id", oneuser[0].id)
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video")).id)
    formdata.append("subcomment", subcoment)
    formdata.append("task_commnet_id", 1)

    axios.post(`${url}/api/course_theme_comment/`, formdata, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => {
        axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
          .then(res => {
            var a = res.data.filter(item => item.task_commnet_id == 1)
            setComment(a)
            console.log(a, "comdwadwadent");
          })
        document.querySelector("#chat_text12").value = ""

      }
      )
      .catch(err => {
        Swal.fire("Error")
      })

    axios.get(`${url}/api/course_theme_comment/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => {
        var a = res.data.filter(item => item.task_commnet_id != JSON.parse(localStorage.getItem("page_video")).id)
        setCommenttask(a)
        console.log(res.data, 'sfdfdxdseery');
      })
      .catch(err => {
      })

  }

  return (
    <div>

      <div className='m_comment_kotta'>
        <div className="m_otdel_bgc">
        <div className="for_scroll">
    {commenttask.length==0?( 
      <div className="for_no_comment">
                <p>Тут ещё нут ответов на задачу </p>
              </div>):(
                <>
                               {teacherwork.map(item => {

if (item.id == localStorage.getItem("page_video").id) {
  return (
    <div className='task_div_big'>
      <img src={item.image} alt="" /> <p>
        {item.content}
      </p>

    </div>
  )
} else {
  <div>There are no tasks here</div>
}


})}

{commenttask.map(item => {
if (item.task_commnet_id == 1) {
  return (
    <>
      <div className="df_div_comment_page">
        <div className="div_img_class_over">
          <img src={item.oneuser ? item.oneuser.image.includes("http") ? item.oneuser.image : `${url}/${item.oneuser.image}` :
            <img src={img_comment1} alt="" />} alt="" />
        </div>

        <div className="div_class_tugadi">


          <h5>{item.oneuser.username ? item.oneuser.username : "Anonim User"}</h5>
          <p className='m_comment_text1505'>{item.text}</p>
          {oneuser.map(item5 => {
            return (
              <>
                {item5.id == item.user_id ? (
                  <p className='m_comment_delete1'
                    onClick={() => { deleteComment1(item.id) }}>
                    <span><AiOutlineDelete /></span>удалить</p>) :
                  ("")
                }
              </>
            )

          })} </div>
      </div>

    </>
  )
}
})}
                </>
              )}

</div>




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
              className='m_otpravit' onClick={() => { commentTaskPost() }}>Send</button>



          </div>







        </div>
      </div>
    </div>
  )
}