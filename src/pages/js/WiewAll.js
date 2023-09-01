import React, { useEffect, useState } from 'react'
import '../css/WiewAll.css'
import Qongro from '../img/Qongiro.png'
import Usernavbar from "./Navbar"
import axios from 'axios'
import url from './Host'
import Profil from './Profil'
function WiewAll() {
    const [Wiew, setWiew] = useState([])
    useEffect(() => {
        axios.get(`${url}/api/notification`,{ headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
            setWiew(res.data)
        })
    })
    return (
        <div>
            <Usernavbar />
            <Profil />
            <h1 style={{ textAlign: 'center' }}></h1>
            <div className="wiew_div">
                <h3 className='logo'>Notifications</h3>
                {/* <div className="icon">
                    <img  className='ooo'  src={Qongro} alt="" />
                </div>
                <p className='qongiro_title'>You don't have any notifications yet!</p> */}
                <div className="wiew_sms_big">
                    {Wiew.map(item => {
                        return (
                            <div className="sms">
                                <div className="qizil"></div>
                                <div className="data_title">
                                    <p className='unred'>{item.title}</p>
                                    <p className='data'>{item.time_create.slice(0,10)}</p>
                                </div>
                                <div className="p_lorem_sms">
                                    <p className='lorem_sms'>{item.description} 😊?</p>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default WiewAll