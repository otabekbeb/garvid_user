import React, { useEffect, useState } from 'react'
import '../css/vazifa1.css'
import {BsCheck2, BsArrowDownShort} from 'react-icons/bs'
import {AiOutlineFileText, AiOutlinePaperClip} from 'react-icons/ai'
import axios from 'axios'
import url from './Host'

export default function Vazifa1() {
  const [task,setTask]=useState([])
  const [theme,setTheme]=useState([])
  const [state1, setState1] = React.useState();

  useEffect(()=>{

    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    )
  },[])

  return (
    <div>
<div className='m_vazifa_kotta'> 
        <div className="m_vazifa_scachat">

                <div className="scachat_kotta">
                <div className="m_zadaniya_s">
                  <input type="checkbox" id='checkbox1'/>
                    <div className="m_scachat"><BsArrowDownShort /></div>
                    <div className="m_title_scac">
                       <h5>fgafeae</h5>
                    <p >5.1 MB | 25.06.2019</p></div>
                   
                </div>
               <div className='checed_vazifa'>
                <h5>Submitted file</h5>
                <div className="chec_proveren"><BsCheck2/></div>
               </div>
               </div>  

            <div className="m_obsh_pas_div">
           <div className="otpr_dz_file">
              <div className="m_file_vazifa">
                <p><AiOutlineFileText/></p>
                <h5>Task: General tasks for the first section</h5>
              </div>
              <div className="m_line_w"></div>
              <div className="m_otpr">
            <p><AiOutlinePaperClip/></p>
            <input type="text" placeholder='Отправка задачи' />
            
              </div>
           </div>
           <div className="m_comment_button1">
              <button className='m_otpravit'>Send</button>
              </div>
        </div>
        </div>
    </div>
    </div>
  )
}
