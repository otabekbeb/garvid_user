import React, { useEffect, useState } from 'react'
import '../css/FollowCard.css'
import axios from 'axios'
import url from './Host'
import img_for_null from '../img/download.png'

export default function FollowCard() {
  const [follow, setFollow] = useState([])
  const [following,setFollowing] = useState(localStorage.getItem("OneuserId"))
  function folowcolor(key) {
    document.querySelectorAll('.followButton5')[key].classList.toggle("followButton4")
  }
  useEffect(() => {
    axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
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
          if(following!=item.id){
            return (
            <a>
              <div className="followcard">
                <a href="/TeacherProfil">
                  {item.image===null?(<img className='jony_foto' src={img_for_null} alt="" />):(   <img className='jony_foto' src={item.image} alt="" />)}
             
                <h5 className='Name'>{item.username}</h5 >
                </a>
                <button onClick={() => folowcolor(key)} className='followButton5' >subscribe1</button>
              </div>
            </a>
          )
          }
          
        })}



      </div>
    </div>
  )
}
