import React, { useState,useEffect } from 'react'
import '../css/vazifa1.css'
import {BsCheck2, BsArrowDownShort} from 'react-icons/bs'
import {AiOutlineFileText, AiOutlinePaperClip} from 'react-icons/ai'

export default function Vazifa1() {

  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);
  return (
    <div>

    <div className='m_vazifa_kotta'> 
    <div className="m_vazifa_scachat">
   
       <div className="scachat_kotta">
        <div className="m_zadaniya_s">
            <div className="m_scachat"><BsArrowDownShort /></div>
            <div className="m_title_scac">
               <h5>Tasks by variables.txt</h5>
            <p >5.1 MB | 25.06.2019</p></div>
           
        </div>
       </div>
       <div className="scachat_kotta">
        <div className="m_zadaniya_s">
            <div className="m_scachat"><BsArrowDownShort /></div>
            <div className="m_title_scac">
               <h5>Book on JAVA.pdf</h5>
            <p >4.1 MB | 25.06.2019</p></div>
           
        </div>
       </div>
       <div className="scachat_kotta">
        <div className="m_zadaniya_s">
            <div className="m_scachat"><BsArrowDownShort /></div>
            <div className="m_title_scac">
               <h5>Data sequence.docx</h5>
            <p >7.1 MB | 25.06.2019</p></div>
           
        </div>
       </div>



       
    </div>
</div>
    </div>
  )
}