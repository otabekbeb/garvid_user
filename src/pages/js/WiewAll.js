import React, { useEffect, useState } from 'react'
import '../css/WiewAll.css'
import Qongro from '../img/Qongiro.png'
import Usernavbar from "./Navbar"
import axios from 'axios'
import url from './Host'
import { MdOutlineClose } from "react-icons/md"
import Profil from './Profil'
import Futer from '../js/Footer1'
import {BsArrowLeft} from 'react-icons/bs'
 export default   function WiewAll() {
    const [Wiew, setWiew] = useState([])
    const [inputValue, setInputValue] = useState()
    const [oneuser, setOneuser] = useState([])
    const [page, setPage] = useState(0)
    const [read, setRead] = useState()

    useEffect(() => {
        axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
            setWiew(res.data)
        })
        axios.get(`${url}/auth/oneuser`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            res.data.map(item => {
                setOneuser(item)
            })
        })
    })
    function atvet(id) {
        var formdata = new FormData()
        formdata.append("title", oneuser.username)
        formdata.append("description", inputValue)
        formdata.append("user_id", oneuser.id)
        formdata.append("to_user_id", id)
        axios.post(`${url}/api/notification`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        })
            .catch(err => {
                alert("xato")
            })
    }
    function inputOpen(key) {
        document.querySelectorAll("#inputNotifaction")[key].style.display = "block"
    }
    function inputClose(key) {
        document.querySelectorAll("#inputNotifaction")[key].style.display = "none"
    }
    function Page(id) {
        setRead(id)
        setPage(1)
    }

    return (
        <div>
            <Usernavbar />
            <Profil />
            <h1 style={{ textAlign: 'center' }}></h1>
            <div className="wiew_div">
                <h3 className='logo'>Notifications</h3>
                <div className="wiew_sms_big">
                    {page == 1 ? (
                        <>
                            <button className='Exit_notifaction_button' onClick={() => setPage(0)}><BsArrowLeft style={{fontSize:'20px'}}/></button>
                            {Wiew === 0 ? (
                                <><div className="icon">
                                    <img className='ooo' src={Qongro} alt="" />
                                </div>
                               
                            <p className='qongiro_title'>You don't have any notifications yet!</p> </>
                    ) : (<>    {Wiew.map((item, key) => {
                        if (item.to_user_id == read) {
                            return (
                                <>
                                    <div style={{ cursor: "pointer" }} className="sms">
                                        <div className="qizil"></div>
                                        <div className="data_title">
                                            <p className='unred'>{item.title}</p>
                                            <p className='data'>{item.time_create.slice(11, 16)}</p>
                                        </div>
                                        <div className="p_lorem_sms">
                                            <p className='lorem_sms'>{item.description} </p>
                                            <input style={{ display: "none" }} type="text" id='atvet' />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })} </>)}

                </>) : (
                <>
                    {Wiew.map((item, key) => {
                        if (item.to_user_id == localStorage.getItem("OneuserId")) {
                            return (
                                <>
                                    <div onClick={() => inputOpen(key)} style={{ cursor: "pointer" }} className="sms">
                                        <div className="qizil"></div>
                                        <div className="data_title">
                                            <p className='unred'>{item.title}</p>
                                            <div style={{ display: 'flex', gap: '10px' }}><p onClick={() => Page(item.user_id)} className='data'>wrote</p><p className='data'>{item.time_create.slice(11, 16)}</p></div>
                                        </div>
                                        <div className="p_lorem_sms">
                                            <p className='lorem_sms'>{item.description} </p>
                                            <input style={{ display: "none" }} type="text" id='atvet' />
                                        </div>
                                        <div id='inputNotifaction' className="input_notification_bid_div">
                                            <input id='atvetu1' onChange={(e) => setInputValue(e.target.value)} type="text" />
                                            <button onClick={() => atvet(item.user_id)}>Send</button>
                                            <button onClick={() => inputClose()}><MdOutlineClose /></button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })}
                </>
                                        )}
            </div>
        </div>
        <Futer />
        </div>
    )
}
