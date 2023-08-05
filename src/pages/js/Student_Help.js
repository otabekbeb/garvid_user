import { useState,useEffect } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar' 
import axios from 'axios'
import url from './Host'

// import { help } from 'mathjs'

export default function Help_Mentor() {
  const [help,setHelp] = useState([])
  useEffect(() => {
      axios.get(`${url}/api/help`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
        setHelp(res.data)
        console.log(res.data)
    }).catch(err=>{
        alert("malumot xato keldi")
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
          <a href="/StudentHelp4" style={{ color: 'black' }}>
            <div className="text_mod">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, doloremque.</p>
          <Usernavbar />
        <h2 className='Savol'>Answers to frequently asked questions</h2>
            <div className="big_svl">
                <div className="orqaga">
                    <div className="orqaga_icon">
                       <a href="/Help"><button className='nazad_bt'>   <AiOutlineLeft /> back</button></a>
                    </div>
                </div>
                <div className="mod_svg">
                  {help.map(item=>{
                    return(
                      <a href="/User_help2" style={{color:'black'}}>
                   <div className="text_mod">
                        <p>{item.title}</p>
                    </div>
                   </a>
                    )
                  })}
                   
                  
                </div>
            </div>
            </div>
          </a>
          <a href="/StudentHelp4" style={{ color: 'black' }}>
            <div className="text_mod">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aperiam.</p>
            </div>
          </a>
          <a href="/StudentHelp4" style={{ color: 'black' }}>
            <div className="text_mod">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sint.</p>
            </div>
          </a>
        </div>
      </div>
      <Futer />
    </div>
  )
}
