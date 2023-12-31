import { useState, useEffect } from 'react'
import '../css/User_help2.css'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar'
import { BiSolidLike } from 'react-icons/bi'
import { AiOutlineLeft } from 'react-icons/ai'
import { BiSolidDislike } from 'react-icons/bi'
import axios from 'axios'
import url from './Host'
export default function User_help2() {
    function like() {
        document.querySelector('.like1').style = "color:#6b3d0c"
        document.querySelector('.like2').style = "color:black"


    }
    function liken() {
        document.querySelector('.like1').style = "color:black"
        document.querySelector('.like2').style = "color:#6b3d0c"


    }
    const [help, setHelp] = useState([])
    useEffect(() => {
        axios.get(`${url}/api/help`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            setHelp(res.data)
            console.log(res.data)
        }).catch(err => {
           alert("malumot xato keldi")
        })
    }, [])
    return (
        <div>
            <Usernavbar />

            <div className="big_svl1">
                <div className="orqaga1">
                    <div className="orqaga_icon">
                        <a href="/UserHelp"><button className='nazad_bt'>   <AiOutlineLeft /> back</button></a>
                    </div>
                </div>
                {help.map((item,key)=> {
                    if(key==localStorage.getItem("helpId")){
                        return (
                            <div className="mod_svg1">
                                <div className="text_mod1">
                                    <p>{item.description}
                                    </p>
                                </div>
                                <div className="like_div">
                                    <BiSolidLike className='like1' onClick={() => like()} />
                                    <BiSolidDislike className='like2' onClick={() => liken()} />
                                </div>
                            </div>
                        )
                    }
                    
                })}

            </div>
            <Futer />

        </div>
    )
}
    