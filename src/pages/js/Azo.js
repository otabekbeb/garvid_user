import React, { useState, useEffect } from 'react'
import "../css/azo.css"
import azoimg from "../img/Ellipse.jpg"
import axios from 'axios'
import url from './Host'

import Groupimg from "../img/Subscriber-pana.png";
import { AiOutlineArrowDown } from 'react-icons/ai'
import '../css/Nosignal.css'
export default function Azo() {
    const [follow, setFollow] = useState([])
    const [following, setFollowing] = useState(localStorage.getItem("OneuserId"))
    function folowcolor1(key) {
        document.querySelectorAll('.followButton1')[key].classList.toggle("followButton3")
    }
    useEffect(() => {
        axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setFollow(res.data)
        }).catch(err => { })
    }, [])

    function obuna() {
        document.querySelector('#azo_bolgan_katta_div_text_block_button').classList.toggle("obuna1")
    }
    function obuna2() {
        document.querySelector('#azo_bolgan_katta_div_text_block_button1').classList.toggle("obuna2")
    }
    const [state1, setState1] = React.useState();
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${url}/auth/teachers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setUsers(res.data)
        }).catch(err => { })
    }, []);
    function folowcolor1(key) {
        axios.delete(`${url}/api/follow/${key}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            window.location.reload()
        }).catch(err => {
            alert("xato")
        })
    }

    return (
        <div className='followi1'>
            <div className="followcards1">
                {follow.length === 0 ? (
                    <div className="delete_padding1">
                        <img style={{ width: '400px' }} src={Groupimg} alt="" />
                        <h4 style={{ fontSize: '40px', opacity: '0.3' }}>No subscribtions</h4>
                        <div className="delete_btns">
                            <a href="/Ourcourse">
                                {" "}
                                {/* <button
                    style={{ background: "#6b3d0c  " }}
                    className="delete_btn_yes"
                  >
                    Купить курс
                  </button> */}
                            </a>
                        </div>
                    </div>) : (<div style={{ display: "flex" ,flexWrap:"wrap",justifyContent:"center"}}> {follow.map((item, key) => {
                        return <div>
                            {users.map(item1 => {
                                if (item1.id == item.topuser) {
                                    localStorage.setItem("for_azo", follow.filter(follow1 => follow1.topuser == item1.id).length)
                                    return (
                                        <div style={{ width: "300px" }}>
                                                <div id='col_12' className="col-12 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="our-team"  onClick={()=>{localStorage.setItem("allUsersId",item1.id)}}>
                                                        <div onClick={()=>{window.location="/TeacherProfil";}} className="picture">
                                                            {item1.image === null ? (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDQxJomerNcXJqX7IQeLmKbFUA7U5JLanCEW23p8p52ZWtq3gcOcQEB4v_HegvorxeZM&usqp=CAU" />) : (<img className="img-fluid" src={item1.image} />)}
                                                        </div>
                                                        <div className="team-content" onClick={()=>{window.location="/TeacherProfil";}}> 
                                                            <h3 style={{ lineHeight: "70px" }} className="name">{item1.username}</h3>
                                                        </div>
                                                        <center><ul className="social">
                                                            <button style={{ background: "#6b3d0c" }} onClick={() => folowcolor1(item.id)} className='followButton5' >Subscribed</button>
                                                        </ul></center>
                                                    </div>
                                                </div>
                                            

                                        </div>
                                    )
                                }
                            })}
                        </div>
                    })}</div>)}




            </div>

        </div>

    )
}


