import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer1 from './Footer1'
import axios from 'axios';
import url from './Host';

export default function Partner() {
    const [partner, setPartner] = useState([]);
    const [til, setTil] = useState([]);


    useEffect(() => {
      
    axios.get(`${url}/api/operator`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
        setPartner(res.data)
        console.log(res.data);
      }).catch(err => {
  
      })
      axios.get(`${url}/api/language`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
        setTil(res.data)
        console.log(res.data);
      }).catch(err => {
  
      })
      
    }, [])
    
    
  return (
    <div>
        <Navbar/>
        <div className="asd">
            {/* <img src={abaut} alt="" /> */}
            <div className="asd-block">
              <h1>Our partner</h1> 
              <br />
              <br className='rr' />

              <div className="mini"></div>
            </div>
          </div>
          <div className="sahifa">
            <div className="sahifa-glav">
              <div className="safiha-p">
                <h4><a href="/">Home  <span><box-icon name='chevron-right' color='#6b3d0c' ></box-icon></span></a></h4>
              </div>
              <div className="safiha-d">
                <p id='tepaga'>Our partner</p>
              </div>
            </div>
          </div>
          {/* <div className="part_cards">
            {partner.map(item=>{
                return(
                    <div className="card">
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                )
                
            })}
          </div> */}
          {/* {til.map(item=>{
            return(
                <h1>{item.lg}</h1>
            )
          })} */}
          <Footer1/>
    </div>
  )
}
