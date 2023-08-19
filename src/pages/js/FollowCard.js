import React, { useEffect, useState } from 'react'
import '../css/FollowCard.css'
import axios from 'axios'
import url from './Host'
import img_for_null from '../img/download.png'

export default function FollowCard() {
  const [follow, setFollow] = useState([])
  const [following, setFollowing] = useState(localStorage.getItem("OneuserId"))
  const [bosildi, setbosildi] = useState([])
  const [bosildi1, setbosildi1] = useState()
  const [deleteId, setDeleteId] = useState()

  function folowcolor(key, id) {
    var formdata = new FormData()
    formdata.append("topuser", id)
    formdata.append("minuser",following)

    axios.post(`${url}/api/follow/`, formdata, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      
      axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setbosildi(res.data)
        res.data.map(item => {
          setbosildi1(item.minuser)
        })
      })

    }).catch(err => {
      alert("ishlxadatoi")
    })
  }
function folowcolor1(key,id) {
  axios.delete(`${url}/api/follow/${id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
   
    alert("olindi")
  }).catch(err => {
    alert("Данные не удалены")
  })
}

  useEffect(() => {
    axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
    })
    axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setbosildi(res.data)
      res.data.map(item => {
        setbosildi1(item.minuser)
      })
    })
  }, [])

  return (
    <div>
      <div className="inpser">
        <div className="inpf">
          {/* <input placeholder="Search..." class="input" name="text" type="text" /> */}
          <input type="text " placeholder='Search...' className='input' />
        </div>
      </div>
      <div className="followcards">
        {follow.map((item, key) => {
          if (following != item.id) {
          
           return   <a>
                <div className="followcard">
                  <a onClick={()=> {window.location="TeacherProfil";localStorage.setItem("allUsersId",item.id) }}>
                    {item.image === null ? (<img className='jony_foto' src={img_for_null} alt="" />) : (<img className='jony_foto' src={item.image} alt="" />)}

                    <h5 className='Name'>{item.username}</h5 >
                  </a>
                  
                     
                  {(bosildi.filter(folow=>(item.id == folow.topuser && following == folow.minuser)).length>0)?(
                    <button style={{background:"gray"}} onClick={() => folowcolor1(item.id)} className='followButton5' >Subscribed</button>
                  ):(
                    <button onClick={() => folowcolor(key, item.id)} className='followButton5' >Subscribe</button>
                  )}   
                    
                  
                       
                    
                 
                </div>
              </a>
           
          }

        })}



      </div>
    </div>
  )
}
