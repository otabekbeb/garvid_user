import { useState,useEffect } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar' 
import axios from 'axios'
import Swal from "sweetalert2";
import url from './Host'
export default function Help_Mentor() {
  const [help,setHelp] = useState([])
  useEffect(() => {
      axios.get(`${url}/api/help`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
        setHelp(res.data)
        console.log(res.data)
    }).catch(err=>{
        Swal.fire("malumot xato keldi")
    })
    }, [])
  return (
    <div>
          <Usernavbar />
        <h2 className='Savol'>Answers to frequently asked questions</h2>
            <div className="big_svl">
                <div className="orqaga">
                    <div className="orqaga_icon">
                       <a href="/Help"><button className='nazad_bt'>   <AiOutlineLeft /> back</button></a>
                    </div>
                </div>
                <div className="mod_svg">
                  {help.map((item,key)=>{
                    return(
                      <a onClick={()=> {window.location="/User_help4";localStorage.setItem("helpId",key)}}  style={{color:'black'}}>
                   <div className="text_mod">
                        <p>{item.title}</p>
                    </div>
                   </a>
                    )
                  })}
                   
                   
                </div>
            </div>
      <Futer />
    </div>
  )
}
