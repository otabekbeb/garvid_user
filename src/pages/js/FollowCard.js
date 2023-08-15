import React, { useEffect, useState } from 'react'
import '../css/FollowCard.css'
import axios from 'axios'
import url from './Host'

export default function FollowCard() {
  const[follow,setFollow]=useState([])
   function folowcolor(){
    document.querySelector('.followButton1').classList.toggle("followButton2")
   }
   useEffect(() => {
    axios.get(`${url}/auth/teachers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
    })
  }, [])
   
    return (
        <div>
          
            <div classNme="followcards">
              {follow.map(item=>{
                return(
                  <a href="/TeacherProfil">
              <div className="followcard">
                    <img className='jony_foto' src={item.imgage} alt="" />
                    <h5 className='Name'>{item.username}</h5 >
                    <button onClick={()=>folowcolor()} className='followButton1' >subscribe</button>
                </div>
              </a>
                )
              })}
              
                
                
            </div>
        </div>
    )
}
