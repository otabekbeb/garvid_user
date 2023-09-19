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
    const [Wiew1, setWiew1] = useState([])
    const [Wiew2, setWiew2] = useState([])
    const [inputValue, setInputValue] = useState()
    const [oneuser, setOneuser] = useState([])
    const [page, setPage] = useState(localStorage.getItem("fornati") ? 1 : 0)
    const [read, setRead] = useState()
    const [read1, setRead1] = useState()
    const [pageId, setPageId] = useState()
    const [pageId1, setPageId1] = useState()
    const [page2,setPage2] = useState()

    useEffect(() => {
        axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
                for (let i = 0; i < res.data.length; i++) {
                    for (let j = 0; j < res1.data.length; j++) {
                        if (res.data[i].user_id == res1.data[j].id) {
                            res.data[i].username = res1.data[j].username
                            res.data[i].last_name = res1.data[j].last_name
                        }
                    }

                }
                const Filter10=res.data.filter(item=>item.notification_id==0)
                setWiew(Filter10)
                setWiew2(res.data)
                localStorage.getItem("fornati")?
                JSON.parse(localStorage.getItem("fornati")).map(fornati=>{
                 const Filter = res.data.filter(item => item.id == fornati.id)
                setWiew1(Filter)
                // console.log(JSON.parse(localStorage.getItem("fornati"))[0].id,"salom");
                const Filter1 = res.data.filter(item => item.notification_id == fornati.id)
                setWiew2(Filter1)  
                setRead1(fornati.user_id) 
                setPageId1(fornati.id)
                }):localStorage.removeItem("fornati")
                
            })
        })
        axios.get(`${url}/auth/oneuser`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            res.data.map(item => {
                setOneuser(item)
            })
        })
    },[])
    function atvet() {
        var formdata = new FormData()
        formdata.append("title", oneuser.username)
        formdata.append("description", inputValue)
        formdata.append("user_id", oneuser.id)
        formdata.append("to_user_id", localStorage.getItem("fornati")?read1:read)
        formdata.append("notification_id", localStorage.getItem("fornati")?pageId1:page2)
        axios.post(`${url}/api/notification`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
                    for (let i = 0; i < res.data.length; i++) {
                        for (let j = 0; j < res1.data.length; j++) {
                            if (res.data[i].user_id == res1.data[j].id) {
                                res.data[i].username = res1.data[j].username
                                res.data[i].last_name = res1.data[j].last_name
                            }
                        }
                    }
                  document.querySelector("#atvetu1").value=""
                  localStorage.getItem("fornati")?
                  JSON.parse(localStorage.getItem("fornati")).map(item1=>{
                    const Filter2 = res.data.filter(item => item.notification_id == item1.id)
                    setWiew2(Filter2)
                  })
                  :res.data.map(fornati=>{
                      const Filter2 = res.data.filter(item => item.notification_id == pageId1) 
                      const Filter3 = res.data.filter(item => item.id == fornati.id)
                      const Filter = res.data.filter(item => item.id == pageId)
                      const Filter1 = res.data.filter(item => item.notification_id == pageId)
                      localStorage.getItem("fornati")?setWiew1(Filter3):setWiew1(Filter)
                      localStorage.getItem("fornati")?setWiew2(Filter2):setWiew2(Filter1) 
                      setRead1(fornati.user_id)
                      setPageId1(fornati.id)
                  })
                    
                })
            })    
        })
            .catch(err => {})
    }
    function inputOpen(key) {
        document.querySelectorAll("#inputNotifaction")[key].style.display = "block"
    }
    function inputClose(key) {
        document.querySelectorAll("#inputNotifaction")[key].style.display = "none"
    }
    function Page(id, key) {
        const Filter = Wiew.filter(item => item.id == key)
        setWiew1(Filter)
        axios.get(`${url}/api/notification`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
              const Filter1 = res.data.filter(item => item.notification_id == key)
        setWiew2(Filter1)
        setPageId(key)
        setRead(id)
        setPage(1)
        setPage2(key)  
            
        })   
        
// var formdata = new FormData();

//     formdata.append("notification_id", id);

//     axios
//       .post(`${url}/api/notification/${id}`, formdata,{ headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
//       .then((res) => {
//         alert("ishladi")
//       })
//       .catch((err) => {
//         alert("xato")
//       });
        
    }
    function atvet1() {
        var formdata= new FormData()
        formdata.append("title",oneuser.username)
        formdata.append("description", inputValue)
        formdata.append("user_id", oneuser.id)
        formdata.append("to_user_id")
    
        
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
                            <button className='Exit_notifaction_button' onClick={() => {setPage(0);localStorage.removeItem("fornati")}}><BsArrowLeft style={{ fontSize: '20px' }} /></button>
                            {Wiew === 0 ? (
                                <div><div className="icon">
                                    <img className='ooo' src={Qongro} alt="" />
                                </div>

                                    <p className='qongiro_title'>You don't have any notifications yet!</p> </div>
                            ) : (<div className='forae_scrol'>
                                {Wiew1.map((item, key) => {
                                    return (
                                        <div >
                                            <div style={{ cursor: "pointer" }} className="sms">
                                                {/*<div className="qizil"></div>
                                                <p className='data'>{item.username}</p>
                                                <p className='data'>{item.last_name}</p>*/}
                                                <div className="data_title">
                                                    <div style={{ paddingLeft: "20px", marginTop: "20px" }} className="fort_block">
                                                        <p className='unred'>{item.username}</p>
                                                        <p className='lorem_sms'>{item.description} </p>
                                                        <input style={{ display: "none" }} type="text" id='atvet' />
                                                    </div>
                                                    <div className="time_blockk">
                                                    <p className='data'>{item.time_create.slice(11, 16)}</p>
                                                    <p className='data'>{item.time_create.slice(0, 10)}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {Wiew2.map((item, key) => {

                                return (
                                        <div>
                                            <div style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }} className="sms">
                                                {/*<div className="qizil"></div>*/}
                                                <div style={{ paddingLeft: "15px" }} className="fort_block">
                                                    <div className="data_title">
                                                        <p style={{ paddingTop: "20px" }} className='unred'>{item.title}</p>

                                                    </div>

                                                    <div className="p_lorem_sms">
                                                        <p style={{ paddingBottom: "0px" }} className='lorem_sms'>{item.description} </p>
                                                        <input style={{ display: "none" }} type="text" id='atvet' />
                                                    </div>
                                                </div><div className="time_blockk"><p className='data'>{item.time_create.slice(11, 16)}</p><p className='data'>{item.time_create.slice(0, 10)}</p></div>
                                            </div>
                                        </div>
                                    )
                                    
                                    
                                })}
                            </div>)}
                            <div id='inputNotifaction' className="input_notification_bid_div">
                                {/* <textarea id="atvetu1" onChange={(e) => setInputValue(e.target.value)} cols="30" rows="10"></textarea> */}
                                <input id='atvetu1' onChange={(e) => setInputValue(e.target.value)} type="text" />
                                <button onClick={() => atvet()}>Send</button>
                            </div>
                        </div>) : (
                        <div>
                            <div className="forae_scrol">
                            {Wiew.map((item, key) => {
                                if (item.to_user_id == localStorage.getItem("OneuserId")) {
                                    return (
                                        <div>
                                            <div onClick={() => Page(item.user_id, item.id)} style={{ cursor: "pointer" }} className="sms">
                                                <div className="qizil"></div>
                                                <div id='data_title' className="data_title">
                                                    <div style={{ paddingLeft: "20px" }} className="fort_block">
                                                        <p className='unred'>{item.username}</p>
                                                        <p className='lorem_sms'>{item.description} </p>
                                                        <input style={{ display: "none" }} type="text" id='atvet' />
                                                    </div><div className="time_blockk"><p className='data'>{item.time_create.slice(11, 16)}</p><p id='data' className='data'>{item.time_create.slice(0, 10)}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}</div>
                            <div id='inputNotifaction' className="input_notification_bid_div">
                            {/* <textarea id="atvetu1" onChange={(e) => setInputValue(e.target.value)} cols="30" rows="10"></textarea> */}
                            <input id='atvetu1' onChange={(e) => setInputValue(e.target.value)} type="text" />
                            <button onClick={() => atvet1()}>Send</button>
                        </div>
                        </div>
                    )}
                </div>
            </div>
            <Futer />
        </div>
    )
}
