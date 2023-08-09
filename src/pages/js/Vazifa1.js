// import React, { useEffect, useState } from 'react'
// import '../css/vazifa1.css'
// import {BsCheck2, BsArrowDownShort} from 'react-icons/bs'
// import {AiOutlineFileText, AiOutlinePaperClip} from 'react-icons/ai'
// import axios from 'axios'
// import url from './Host'

// export default function Vazifa1() {
//   const [task,setTask]=useState([])
//   const [theme,setTheme]=useState([])
//   const [state1, setState1] = React.useState();

//   useEffect(()=>{

//     setState1(
//       localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
//     )
//   },[])

//   return (
//     <div>
// <div className='m_vazifa_kotta'> 
//         <div className="m_vazifa_scachat">

//                 <div className="scachat_kotta">
//                 <div className="m_zadaniya_s">
//                   <input type="checkbox" id='checkbox1'/>
//                     <div className="m_scachat"><BsArrowDownShort /></div>
//                     <div className="m_title_scac">
//                        <h5>fgafeae</h5>
//                     <p >5.1 MB | 25.06.2019</p></div>
                   
//                 </div>
//                <div className='checed_vazifa'>
//                 <h5>Submitted file</h5>
//                 <div className="chec_proveren"><BsCheck2/></div>
//                </div>
//                </div>  

//             <div className="m_obsh_pas_div">
//            <div className="otpr_dz_file">
//               <div className="m_file_vazifa">
//                 <p><AiOutlineFileText/></p>
//                 <h5>Task: General tasks for the first section</h5>
//               </div>
//               <div className="m_line_w"></div>
//               <div className="m_otpr">
//             <p><AiOutlinePaperClip/></p>
//             <input type="text" placeholder='Отправка задачи' />
            
//               </div>
//            </div>
//            <div className="m_comment_button1">
//               <button className='m_otpravit'>Send</button>
//               </div>
//         </div>
//         </div>
//     </div>
//     </div>
//   )
// }



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
import {CgClose} from "react-icons/cg"


export default function Comment1() {
  const [comment,setComment]=useState([])
  const [comment2,setComment2]=useState([])
  const [page, setPage]=useState(4)
  const [state1, setState1] = React.useState();
  const [deleteId1,setDeleteId1]=useState()

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
  //     Swal.fire("error")
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
      window.location.reload()
    document.querySelector("#chat_text").value=""

    })
    .catch(err=>{
      Swal.fire("error")
    })

    axios.get(`${url}/api/course_theme_comment/${JSON.parse(localStorage.getItem("page_video")).id}`, {
      headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>{

      setComment(res.data)
      console.log(res.data,);
    })
    .catch(err=>{
      Swal.fire("error")
    })
  }

  function deleteComment(id) {
    axios
    .delete(`${url}/api/course_theme_comment/${id}`, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then(res=>[
      Swal.fire("Вы успешно удалили свой комментарий"),
      window.location.reload(),
    
    ])
    .catch(err=>{
      Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.")
    })
  }

  function OpenotvetMadal(item) {
    document.querySelector(".commetn_otvet_kaytarish").style="display: flex; "
setComment2(item)
  }
  function CloseotvetMadal() {
    document.querySelector(".commetn_otvet_kaytarish").style="display: none;"
  }
  function cencelModal() {
    document.querySelector("#chat_text").value=""
  }

  return (
    <div>

    <div className='m_comment_kotta'> 
    <div className="m_otdel_bgc">
    {oneuser.id==comment.user_id?(
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
              <p>{item.text}</p>
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
       })} </>):("")}
       




      
                  <div className="commetn_otvet_kaytarish">
                  <div className="m_comment_img1">
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
                  <span id='closeModal' onClick={()=>{CloseotvetMadal()}}><CgClose/></span>
                  </div>


            <div className="m_comment_yozish">
              <input type="file" id='comment_file' />
              <p><FcFile/></p>
              
              <textarea placeholder='Введите текст' id="chat_text"></textarea>
            </div>
            <div className="m_comment_button">
              <button className='m_otmen' onClick={()=>{cencelModal()}}>Cancel</button>
              <button onClick={(event)=>{ messagePost(); cencelModal()}} className='m_otpravit'>Send</button>
              </div></div>
    </div>
    </div>
  )
}