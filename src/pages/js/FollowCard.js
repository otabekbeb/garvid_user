import React, { useEffect, useState } from 'react'
import '../css/FollowCard.css'
import axios from 'axios'
import url from './Host'

export default function FollowCard() {
  const [follow, setFollow] = useState([])
  function folowcolor() {
    document.querySelector('.followButton1').classList.toggle("followButton2")
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
        {follow.map(item => {
          return (
            <a>
              <div className="followcard">
                <a href="/TeacherProfil">
                <img className='jony_foto' src={item.imgage} alt="" />
                <h5 className='Name'>{item.username}</h5 >
                </a>
                <button onClick={() => folowcolor()} className='followButton1' >subscribe</button>
              </div>
            </a>
          )
        })}



      </div>
    </div>
  )
}
