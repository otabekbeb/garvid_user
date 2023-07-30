import React, { useState,useEffect } from 'react'
import '../css/Contact.css'
import Navbar from './Navbar'
import Contacts from './Contacts'
import Footer from './Footer1'
import Images from './Images'
export default function Contact() {
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
      );},[]);
  return (

    <div>

    <div>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Contacts</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="/">Home  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>Contact</p>
</div>
</div>
</div>

<Images/>
<Footer/>

    </div>
    
    </div>
  )
}