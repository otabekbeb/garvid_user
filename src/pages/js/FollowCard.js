import React, { useEffect, useState } from 'react'
import '../css/FollowCard.css'
import axios from 'axios'
import url from './Host'
import img_for_null from '../img/download.png'
import Groupimg from "../img/Group 2.png";
export default function FollowCard() {
  const [follow, setFollow] = useState([])
  const [follow1, setFollow1] = useState([])
  const [following, setFollowing] = useState(localStorage.getItem("OneuserId"))
  const [bosildi, setbosildi] = useState([])
  const [bosildi1, setbosildi1] = useState()
  const [deleteId, setDeleteId] = useState()

  function folowcolor(key, id) {
    var formdata = new FormData()
    formdata.append("topuser", id)
    formdata.append("minuser", following)

    axios.post(`${url}/api/follow/`, formdata, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
    window.location.reload()
      axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setbosildi(res.data)
        res.data.map(item => {
          setbosildi1(item.minuser)
        })
      }).catch(err=>{})

    }).catch(err => {
      alert("ishlxadatoi")
    })
  }
  function folowcolor1(key) {
   const Filter=bosildi.filter(item=>item.topuser==key)
   Filter.map((item,key)=>{
    axios.delete(`${url}/api/follow/${item.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      window.location.reload()
      axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setbosildi(res.data)
        res.data.map(item => {
          setbosildi1(item.minuser)
        })
      }).catch(err=>{})
    }).catch(err => {
      alert("Data not deleted")
    })
   })

    
  }

  useEffect(() => {
    axios.get(`${url}/auth/teachers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
      localStorage.setItem("FollowCard",res.data.length)
      setFollow1(res.data)
    }).catch(err=>{})
    axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setbosildi(res.data)
      res.data.map(item => {
        setbosildi1(item.minuser)
      })
    }).catch(err=>{})
  }, [])
  function searchInput(e) {
    const Search = follow.filter(item => item.username.includes((e.target.value).toLowerCase()))
    if (e.target.value) {
      setFollow(Search)
    } else {
      setFollow(follow1)
    }
  }

  return (
    <div className='skubi_dubi'>
      <div className="inpser">
        <div className="inpf">
          {/* <input placeholder="Search..." className="input" name="text" type="text" /> */}
          <input onChange={searchInput} type="text " placeholder='Search...' className='input  </div>' />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {follow === null?( 
          <div className="delete_padding1">
                  <img src={Groupimg} alt="" />
                  <h4>Вы не купили курс</h4>
                  <div className="delete_btns">
                    <a href="/Ourcourse">
                      {" "}
                      <button
                        style={{ background: "#44bef1  " }}
                        className="delete_btn_yes"
                      >
                        Купить курс
                      </button>
                    </a>
                  </div>
                </div>):(<div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                {follow.map((item, key) => {
            if (following != item.id) {
              return (
                <div id='col_12' className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div onClick={()=>{localStorage.setItem("allUsersId",item.id)}} className="our-team">
                    <div className="picture"  onClick={()=>{window.location="/TeacherProfil";}}>
                    {item.image === null?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDQxJomerNcXJqX7IQeLmKbFUA7U5JLanCEW23p8p52ZWtq3gcOcQEB4v_HegvorxeZM&usqp=CAU"/>):(  <img className="img-fluid" src={item.image} />)} 
                    </div>
                    <div className="team-content" onClick={()=>{window.location="/TeacherProfil";}}>
                      <h3 style={{ lineHeight: "70px" }} className="name">{item.username}</h3>
                    </div>
                    <center><ul className="social">
                      {(bosildi.filter(folow => (item.id == folow.topuser && following == folow.minuser)).length > 0) ? (
                        <button style={{ background: "gray" }} onClick={() => folowcolor1(item.id)} className='followButton5' >Subscribed</button>
                      ) : (
                        <button onClick={() => folowcolor(key, item.id)} className='followButton5' >Subscribe</button>
                      )}
                    </ul></center>
                  </div>
                </div>
              )
            }
          })}</div>)}
          


        </div>
      </div>

    </div>
  )
}
