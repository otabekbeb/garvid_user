import React, { useEffect, useState } from 'react'
import '../css/Images.css'
import images1 from '../img/images1.png'
import images2 from '../img/images2.png'
import images3 from '../img/images3.png'
import images4 from '../img/images4.png'
import images5 from '../img/images5.png'
import images6 from '../img/images6.png'
import axios from 'axios'
import url from './Host'

export default function Images() {
  const [data, setData] = useState([]);


  useEffect(()=>{
    axios.get(`${url}/api/homiy`,{headers:{Authorization:"Bearer "+ localStorage.getItem("token")}}).then(res=>{
      setData(res.data)
    }).catch(err=>{})
  },[])


  return (
    <header id='imagees' className='images'>
      <div className="images-kotta">
        <div className="images-img">
          {data.map(item => {
            return (
              <>
              
                <img style={{height:'100px', width:'140px'}} onClick={()=>{window.location="/Teams";localStorage.setItem("partner",item.id)}} src={item.image} alt="" />
                
              </>
            )
          })}



        </div>
      </div>
    </header>
  )
}
