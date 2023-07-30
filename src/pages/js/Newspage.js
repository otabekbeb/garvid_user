'use clint'
import React, { useState, useEffect } from 'react'
import "../css/Newspage.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import new1 from "../img/news-700x435-1.jpg"
import axios from 'axios'
import url from './Host'

export default function News() {

    const [state1, setState1] = React.useState();
    const [base,setBase] = useState([])
    const [basetype,setBasetype] = useState([])
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
        axios.get(`${url}/knowladge_base/knowladgebase/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res=>{
          setBase(res.data)
        });
        axios.get(`${url}/knowladge_base/basetheme/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res=>{
          setBasetype(res.data)
        });
    }, []);
    return (

        <div className='newspage1'>
            <Navbar />

            <div>
                <div className="newspage">
                <div className="col-lg-4">
                {/* Social Follow Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Themes</h4>
                  </div>
                  <div className="bg-white border border-top-0 p-3">
                    {basetype.map(item=>{
                      return(
                        <>
                        {item.name==null?(""):(<><a onClick={()=>{localStorage.setItem("BaseType",item.id)}} href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
                        <i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                        <span className="font-weight-medium">{item.name}</span>
                      </a></>)}
                      </>
                      )
                    })}
                  </div>
                </div>
              </div>
              {base.map((item,key)=>{
                if (key==localStorage.getItem("baseId")) {
                  return(
                    <>
                    <div className="newspage_cards">
                        <img src={item.image} alt="" />
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
