import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'
import axios from 'axios'
import url from "./Host";
import "../css/Services.css"
import img_for_null1 from '../img/download.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Services() {
      const [state1, setState1] = React.useState();
      const [data, setData] = useState([]);
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);

useEffect(()=>{

  axios.get(`${url}/api/servis`).then(res => {
    setData(res.data)
    console.log(res.data)
}).catch(err => {

})
})


  return (
    <div className='ser1'>

      <div>
  <div className='services_div'>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Services</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="/">Home<span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>Services</p>
</div>
</div>
</div>
         <div className="box">
        <div className="left-card">

            {data.map(item1 => {
                                            return (
                                                <div id='serviscards' className="cards">

                                                        {item1.image === null ? (
                                                            <img src={img_for_null1} alt="" />
                                                        ) : (
                                                            <img src={item1.image} />
                                                        )}
                                                        <h5>{item1.title}</h5>
                                                        <p>{item1.deckription}</p>
                                                </div>
                                            )
                                        })}


        </div>


        <div className="right-card">
        <div className="about-header-card">
<h4>Do you need help?</h4>
<p>Contact us at FinExpert office closest to you or submit your business inquiry online.</p>

<button onClick={()=> window.location="/contacts"}>Connect with us</button>
</div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper">

        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Wow I'm so happy with you service. You managed to overcome my expectations!</p>

<strong>Adam Watson</strong>
<h4>(CEO and Founder)</h4>
</div>
        </SwiperSlide>
        <SwiperSlide className='sli'>
          <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Hi guys! You solved my problem in no time!<br />Your service and customer care is excellent!</p>

<strong>Louise Smith</strong>
<h4>(CEO and Founder)</h4>
</div></SwiperSlide>
        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Great organization!! Your quick response was a pleasant surprise for me. Thank you!</p>

<strong>Jack Walsh</strong>
<h4>(CEO and Founder)</h4>
</div>
        </SwiperSlide>

      </Swiper>
        </div>
        
    </div>
    <Images/>
    <Footer/>
    </div>

      </div>
   
  
    
     </div>
  )
}
