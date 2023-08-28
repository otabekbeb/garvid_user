import { AiOutlineArrowDown } from 'react-icons/ai'

import React, { useState, useEffect } from 'react'
import "../css/azo.css"
import azoimg from "../img/Ellipse.jpg"
import axios from 'axios'
import url from './Host'
import '../css/Nosignal.css'
import Groupimg from '../img/Group 2.png'
export default function Azo() {
    const [follow, setFollow] = useState([])
    const [following, setFollowing] = useState(localStorage.getItem("OneuserId"))
    function folowcolor1(key) {
        axios.delete(`${url}/api/follow/${key}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
         alert("oxsha")   
        }).catch(err=>{
            alert("xato")
        })
    }
    useEffect(() => {
        axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setFollow(res.data)
        })
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
        axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setUsers(res.data)
        })
    }, []);

    return (
        <div className='followi1'>



            <div className="followcards1">
                {follow.length === 0 ? (
                    <div className="delete_padding">
                        <img src={Groupimg} alt="" />
                        <h4>Нет подписчиков</h4>
                        {/* <div className="delete_btns">

                            <a href="/Ourcourse">  <button style={{ background: '#44bef1  ' }} className="delete_btn_yes">Купить курс</button></a>
                        </div> */}
                    </div>) : (<>
                        {follow.map((item, key) => {
                            if (following == item.topuser) {
                                return <>
                                    {users.map(item1 => {
                                        
                                        if (item1.id == item.minuser) {
                                            localStorage.setItem("subscribersLength",follow.filter(follow=>follow.topuser==following).length)
                                            return (
                                                <a>
                                                    <div id='col_12' className="col-12 col-sm-6 col-md-4 col-lg-3">
                                                        <div className="our-team">
                                                            <div className="picture">
                                                                <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                                                            </div>
                                                            <div className="team-content">
                                                                <h3 style={{ lineHeight: "70px" }} className="name">{item1.username}</h3>
                                                            </div>
                                                            <center><ul className="social">
                                                            <button style={{ background: "gray" }} onClick={() => folowcolor1(item.id)} className='followButton5' >Subscribed</button>
                                                            </ul></center>
                                                        </div>
                                                    </div>
                                                </a>


                                            )
                                        }
                                    })}
                                </>
                            }
                        })}
                    </>)}




            </div>

        </div>

    )
}
