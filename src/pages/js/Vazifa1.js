import React, { useEffect, useState } from 'react'
import '../css/vazifa1.css'
import {BsCheck2, BsArrowDownShort} from 'react-icons/bs'
import {AiOutlineFileText, AiOutlinePaperClip} from 'react-icons/ai'
import axios from 'axios'
import url from './Host'

export default function Vazifa1() {
  const [task,setTask]=useState([])
  const [theme,setTheme]=useState([])

  useEffect(()=>{
    axios.get(`${url}/course/theme_task/`,{headers:{"Accept-Language":"en"}}).then(res=>{
      console.log(res.data,"zor");
      setTask(res.data)
      axios.get(`${url}/course/theme/`,{headers:{"Accept-Language":"en"}}).then(res1=>{
        setTheme(res1.data)
      })
    })
  },[])

  return (
    <div className='m_vazifa_kotta'> 
        <div className="m_vazifa_scachat">
          {theme.map(item=>{
            return(
              <>
              {task.map(item1=>{
              if (item.id===item1.course_theme) {
              return(
                <div className="scachat_kotta">
                <div className="m_zadaniya_s">
                  <input type="checkbox" id='checkbox1'/>
                    <div className="m_scachat"><BsArrowDownShort /></div>
                    <div className="m_title_scac">
                       <h5>{item1.content}</h5>
                    <p >5.1 MB | 25.06.2019</p></div>
                   
                </div>
               <div className='checed_vazifa'>
                <h5>Отправленный файл</h5>
                <div className="chec_proveren"><BsCheck2/></div>
               </div>
               </div>  
              )            
              }
              })}
              </>
            )
          })}



            <div className="m_obsh_pas_div">
           <div className="otpr_dz_file">
              <div className="m_file_vazifa">
                <p><AiOutlineFileText/></p>
                <h5>Задание: Общие задания для первого раздела</h5>
              </div>
              <div className="m_line_w"></div>
              <div className="m_otpr">
            <p><AiOutlinePaperClip/></p>
            <input type="text" placeholder='Отправка задачи'/>
              </div>
           </div>
           <div className="m_but_otpr"><button>Отправить</button></div>
        </div>
        </div>
    </div>
  )
}
