import React, { useEffect, useState } from 'react'
import '../css/FollowCard.css'
import axios from 'axios'
import url from './Host'

export default function FollowCard() {
  const [follow, setFollow] = useState([])
  function folowcolor(key) {
    document.querySelectorAll('.followButton5')[key].classList.toggle("followButton4")
  }
  useEffect(() => {
    axios.get(`${url}/auth/teachers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
    })
  }, [])

  return (
    <div>
  <div className="inpser">
  <div className="inpf">
  <input placeholder="Search..." class="input" name="text" type="text"/>
     </div>
  </div>
      <div className="followcards">
        {follow.map((item,key) => {
          return (
            <a>
              <div className="followcard">
                <a href="/TeacherProfil">
                  {item.image===null?(<h1>No signaL</h1>):(   <img className='jony_foto' src={item.image} alt="" />)}
             
                <h5 className='Name'>{item.username}</h5 >
                </a>
                <button onClick={() => folowcolor(key)} className='followButton5' >subscribe1</button>
              </div>
            </a>
          )
        })}



      </div>
    </div>
  )
}
