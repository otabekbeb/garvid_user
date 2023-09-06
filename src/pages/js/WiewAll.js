import React, { useEffect, useState } from 'react'
import '../css/WiewAll.css'
import Qongro from '../img/Qongiro.png'
import Usernavbar from "./Navbar"
import axios from 'axios'
import url from './Host'
import { MdOutlineClose } from "react-icons/md"
import Profil from './Profil'
import Futer from '../js/Footer1'
import { BsArrowLeft } from 'react-icons/bs'
export default function WiewAll() {
    const [Wiew, setWiew] = useState([])
    const [inputValue, setInputValue] = useState()
    const [oneuser, setOneuser] = useState([])
    const [page, setPage] = useState(0)
    const [read, setRead] = useState()
    const [pageId, setPageId] = useState()

    useEffect(() => {
        axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
            axios.get(`${url}/auth/allusers`,{ headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res1 => {
                for (let i = 0; i < res.data.length; i++) {
                    for (let j = 0; j < res1.data.length; j++) {
                        if (res.data[i].user_id == res1.data[j].id) {
                            res.data[i].username = res1.data[j].username
                            res.data[i].last_name = res1.data[j].last_name
                        }
                    }

                }
                setWiew(res.data)
            })
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
            axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
                axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
                    for (let i = 0; i < res.data.length; i++) {
                        for (let j = 0; j < res1.data.length; j++) {
                            if (res.data[i].user_id == res1.data[j].id) {
                                res.data[i].username = res1.data[j].username
                                res.data[i].last_name = res1.data[j].last_name
                            }
                        }

                    }
                    setWiew(res.data)
                })
            })
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
    function Page(id, key) {
        setPageId(key)
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
                        <div>
                            <button className='Exit_notifaction_button' onClick={() => setPage(0)}><BsArrowLeft style={{ fontSize: '20px' }} /></button>
                            {Wiew === 0 ? (
                                <div><div className="icon">
                                    <img className='ooo' src={Qongro} alt="" />
                                </div>

                                    <p className='qongiro_title'>You don't have any notifications yet!</p> </div>
                            ) : (<div>    {Wiew.map((item, key) => {
                                if (item.id == pageId) {
                                    return (
                                        <div>
                                            <div style={{ cursor: "pointer" }} className="sms">
                                                {/*<div className="qizil"></div>
                                                <p className='data'>{item.username}</p>
                                                <p className='data'>{item.last_name}</p>*/}
                                                <div className="data_title">
                                                    <div style={{paddingLeft:"20px",marginTop:"20px"}} className="fort_block">
                                                        <p className='unred'>{item.title}</p>
                                                        <p className='lorem_sms'>{item.description} </p>
                                                    <input style={{ display: "none" }} type="text" id='atvet' />
                                                    </div>
                                                    <p className='data'>{item.time_create.slice(11, 16)}</p>
                                                </div>
                                                <div className="p_lorem_sms">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else if (item.to_user_id == read) {
                                    return (
                                        <div>
                                            <div style={{ cursor: "pointer",display:"flex",justifyContent:"space-between" }} className="sms">
                                                {/*<div className="qizil"></div>*/}
                                                <div style={{paddingLeft:"15px"}} className="fort_block">

                                                <p style={{marginBottom:'0px'}} className='data'>{item.username}</p>
                                                <p  className='data'>{item.last_name}</p>
                                                <div className="data_title">
                                                    <p className='unred'>{item.title}</p>
                                                    
                                                </div>
                                                
                                                <div className="p_lorem_sms">
                                                    <p className='lorem_sms'>{item.description} </p>
                                                    <input style={{ display: "none" }} type="text" id='atvet' />
                                                </div>
                                                </div><p  className='data'>{item.time_create.slice(11, 16)}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })} </div>)}
                            <div id='inputNotifaction' className="input_notification_bid_div">
                                <input id='atvetu1' onChange={(e) => setInputValue(e.target.value)} type="text" />
                                <button onClick={() => atvet(read)}>Send</button>
                            </div>
                        </div>) : (
                        <div>
                            {Wiew.map((item, key) => {
                                if (item.to_user_id == localStorage.getItem("OneuserId")) {
                                    return (
                                        <div>
                                            <div onClick={() => Page(item.user_id, item.id)} style={{ cursor: "pointer" }} className="sms">
                                                <div className="qizil"></div>
                                                <div className="data_title">
                                                    <div style={{paddingLeft:"20px"}} className="fort_block">
                                                    <p className='unred'>{item.username}</p>
                                                    <p className='lorem_sms'>{item.last_name} </p>
                                                    <input style={{ display: "none" }} type="text" id='atvet' />
                                                    </div><p className='data'>{item.time_create.slice(11, 16)}</p>
                                                </div>
                                                <div className="p_lorem_sms">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Futer />
        </div>
    )
}
