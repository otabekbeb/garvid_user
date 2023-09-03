import React, { useEffect, useState } from 'react'
import '../css/WiewAll.css'
import Qongro from '../img/Qongiro.png'
import Usernavbar from "./Navbar"
import axios from 'axios'
import url from './Host'
import Profil from './Profil'
import Futer from '../js/Footer1'
function WiewAll() {
    const [Wiew, setWiew] = useState([])
    const [Oneuser, setOneuser] = useState()
    useEffect(() => {
        axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
            setWiew(res.data)
            console.log(res.data, "slom");
        })
    })
    function atvet(id) {
        var formdata = new FormData()
        formdata.append("title", document.querySelector("#atvetu").value)
        formdata.append("description", document.querySelector("#atvetu1").value)
        formdata.append("user_id", localStorage.getItem("OneuserId"))
        formdata.append("to_user_id", id)
        axios.post(`${url}/api/notification`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("ishladi ")
        })
    }
    return (
        <div>
            <Usernavbar />
            <Profil />
            <h1 style={{ textAlign: 'center' }}></h1>
            <div className="wiew_div">
                <h3 className='logo'>Notifications</h3>
                <div className="wiew_sms_big">
                    {Wiew.length === 0 ? (<h1 style={{ textAlign: 'center' }}> Xabar yogu akbar</h1>) : (<> {Wiew.map(item => {
                        if (item.to_user_id == localStorage.getItem("OneuserId")) {
                            return (
                                <div style={{ cursor: "pointer" }} className="sms">
                                    <div className="qizil"></div>
                                    <button onClick={() => atvet(item.user_id)}>a</button>
                                    <div className="data_title">
                                        <input type="text" id='atvetu' />
                                        <input type="text" id='atvetu1' />
                                        <p className='unred'>{item.title}</p>
                                        <p className='data'>{item.time_create.slice(11, 16)}</p>
                                    </div>
                                    <div className="p_lorem_sms">
                                        <p className='lorem_sms'>{item.description} </p>
                                        <input style={{ display: "none" }} type="text" id='atvet' />
                                    </div>
                                </div>
                            )
                        }

                    })}</>)}



                </div>
            </div>
            <Futer />
        </div>
    )
}

export default WiewAll