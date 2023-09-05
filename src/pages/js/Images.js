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
    axios.get(`${url}/api/university`,{headers:{Authorization:"Bearer "+ localStorage.getItem("token")}}).then(res=>{
      setData(res.data)
    }).catch(err=>{})
  },[])


  return (
    <header id='imagees' className='images'>
      <div className="images-kotta">
        <div className="images-img">
          {data.map(item1000 => {
            return (
              <>
                <img src={item1000.logo} alt="" />
                
              </>
            )
          })}



        </div>
      </div>
    </header>
  )
}
