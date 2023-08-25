import { AiOutlineArrowDown } from 'react-icons/ai'

import React, { useState, useEffect } from 'react'
import "../css/azo.css"
import azoimg from "../img/Ellipse.jpg"
import axios from 'axios'
import url from './Host'
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
        <div>



            <div className="followcards1">
                {follow.length === 0 ? (<div className="No_div">
                    <h1>Курс не куплен</h1>
                    <div className="pas_icon">
                        <AiOutlineArrowDown className='pas' />
                        <AiOutlineArrowDown className='pas' />
                        <AiOutlineArrowDown className='pas' />

                    </div>
                    <button>Покупка курса </button>
                </div>) : (<>
                    {follow.map((item, key) => {
                        if (following == item.topuser) {
                            return <>
                                {users.map(item1 => {
                                    if (item1.id == item.minuser) {
                                        return (
                                            <a>
                                                <div className="followcard1">
                                                    <a href="/TeacherProfil">
                                                        {item.image === null ? (<h1>No signaL</h1>) : (<img className='jony_foto' src={item1.image} alt="" />)}

                                                        <h5 className='Name'>{item1.username}</h5 >
                                                    </a>
                                                    <button onClick={() => folowcolor1(key)} className='followButton1' >subscribe</button>
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
