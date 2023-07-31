'use clint'
import React, { useState, useEffect } from 'react'
import "../css/Newspage.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import new1 from "../img/news-700x435-1.jpg"
import img_for_null from '../img/download.png'
import axios from 'axios'
import url from './Host'

export default function News() {

    const [base,setBase] = useState([])
    const [basetype,setBasetype] = useState([])
    useEffect(()=>{
      axios.get(`${url}/api/knowladge`).then(res=>{
        setBase(res.data)
        console.log(res.data,"bb");
        axios.get(`${url}/api/base_theme`).then(res1=>{
          setBasetype(res1.data)

            const type = res.data.filter(item=>item.base_id==localStorage.getItem("BaseType"))
            setBase(type)

        });
      });

     },[])
    return (

        <div className='newspage1'>
            <Navbar />

            <div>
                <div className="newspage">
                
              {base.map((item,key)=>{
                if (key==localStorage.getItem("baseId")) {
                  return(
                    <>
                    <div className="newspage_cards">
                      {item.image === null ?(<img src={img_for_null} alt="" />):(<img src={item.image} alt="" />)}
                        
                        <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>{item.name}</a>
                    </div>
                    <div className="newspage_p">
                        <p>{item.description}</p>
                    </div>
                    </>
                  )
                }
              })}

                </div>
            </div>


            <Footer />
        </div>
    )
}
