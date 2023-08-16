import React, { useState, useEffect } from 'react'
import "../css/azo.css"
import azoimg from "../img/Ellipse.jpg"
import axios from 'axios'
import url from './Host'

export default function Azo() {
    const [follow, setFollow] = useState([])
    const [following,setFollowing] = useState(localStorage.getItem("OneuserId"))
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
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);

    return (
        <div>

           
              
                <div className="followcards1">
                    {follow.map((item,key) => {
                       if(following==item.topuser){ 
                        return (
                            
 <a>
                                <div className="followcard1">
                                    <a href="/TeacherProfil">
                                        {item.image === null ? (<h1>No signaL</h1>) : (<img className='jony_foto' src={item.image} alt="" />)}

                                        <h5 className='Name'>{item.username}</h5 >
                                    </a>
                                    <button onClick={() => folowcolor1(key)} className='followButton1' >subscribe</button>
                                </div>
                            </a>
                            
                           
                        )}
                    })}



                
            </div>

        </div>

    )
}
