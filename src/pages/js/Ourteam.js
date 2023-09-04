import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'
import axios from 'axios'
import url from './Host'
import "../css/Services.css"
import "../css/Ourteam.css"
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
      axios.get(`${url}/auth/teachers/`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
        setData(res.data)
        console.log(res.data);
        }).catch(err => {
         
        })
    })
  return (
    <div className='ourteamm'>

      <div>
  <div className='services_div'>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Our team</h1>
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
    <p id='tepaga'>Our team</p>
</div>
</div>
</div>
         <div className="box">
        <div className="left-card">
            <div id='cards11' className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img01.jpg" alt=""/>
                <h1><a href="#">Johnny Bennett</a></h1>
                <p>As FinExpert's founder, Dennis solves issues concerning the company's development and its departments...</p>
                <div className="two">
               <div className="icon">
                <div className="dumalo"><i className="bx bxl-facebook"></i></div>
                <div className="dumalo"><i className="bx bxl-twitter"></i></div>
                <div className="dumalo"><i className="bx bxl-linkedin"></i></div>
               </div>
               <div className="view"><h4>View profile <span>&gt;</span></h4></div>
               </div>
            </div>

            <div id='cards11' className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img02.jpg" alt=""/>
                <h1><a href="#">Clarke Grinn</a></h1>
                <p>Clarke provides financial planning and wealth management services trying to minimize expenses and risks of our...</p>
                <div className="two">
               <div className="icon">
                <div className="dumalo"><i className="bx bxl-facebook"></i></div>
                <div className="dumalo"><i className="bx bxl-twitter"></i></div>
                <div className="dumalo"><i className="bx bxl-linkedin"></i></div>
               </div>
               <div className="view"><h4>View profile <span>&gt;</span></h4></div>
               </div>
            </div>

            <div id='cards11' className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img03.jpg" alt=""/>
                <h1><a href="#">Ashley Jonas</a></h1>
                <p>Ashley's main task is to manage the financial risks of FinExpert. She is also responsible for analyzing the data received from...</p>
                <div className="two">
               <div className="icon">
                <div className="dumalo"><i className="bx bxl-facebook"></i></div>
                <div className="dumalo"><i className="bx bxl-twitter"></i></div>
                <div className="dumalo"><i className="bx bxl-linkedin"></i></div>
               </div>
               <div className="view"><h4>View profile <span>&gt;</span></h4></div>
               </div>
            </div>

            <div id='cards11' className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img04.jpg" alt=""/>
                <h1><a href="#">Johnny Bennett</a></h1>
                <p>Mr. Benett is an important member of our team. His work consists in managing the taxes and solving various situations...</p>
                <div className="two">
               <div className="icon">
                <div className="dumalo"><i className="bx bxl-facebook"></i></div>
                <div className="dumalo"><i className="bx bxl-twitter"></i></div>
                <div className="dumalo"><i className="bx bxl-linkedin"></i></div>
               </div>
               <div className="view"><h4>View profile <span>&gt;</span></h4></div>
               </div>
            </div>

            <div id='cards11' className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img05.jpg" alt=""/>
                <h1><a href="#">Joe Norris</a></h1>
                <p>Ms. Norris deals with various financial concerns of small businesses and startups. He provides online consulting services...</p>
                <div className="two">
               <div className="icon">
                <div className="dumalo"><i className="bx bxl-facebook"></i></div>
                <div className="dumalo"><i className="bx bxl-twitter"></i></div>
                <div className="dumalo"><i className="bx bxl-linkedin"></i></div>
               </div>
               <div className="view"><h4>View profile <span>&gt;</span></h4></div>
               </div>
            </div>

            <div id='cards11' className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img06.jpg" alt=""/>
                <h1><a href="#">Bernard Harris</a></h1>
                <p>When it comes to reduction of financial risks of international companies and business corporations, Bernard is our leading consultant...</p>
                <div className="two">
               <div className="icon">
                <div className="dumalo"><i className="bx bxl-facebook"></i></div>
                <div className="dumalo"><i className="bx bxl-twitter"></i></div>
                <div className="dumalo"><i className="bx bxl-linkedin"></i></div>
               </div>
               <div className="view"><h4>View profile <span>&gt;</span></h4></div>
               </div>
            </div>
            
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

{data.map((item)=>{
  return(
      <SwiperSlide className='sli'>
        {/* <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Wow I'm so happy with you <br />service. You managed to overcome<br /> my expectations! You guys are very efficient.</p>

<strong>Adam Watson</strong>
<h4>(CEO and Founder)</h4>
</div> */}
<div className="sli-kurg-rasm">

<div className="sli-img"><img src={item.image}  alt="" /></div>

</div>
<div className="sli-text">
<p>{item.description}</p>

<strong>{item.username}</strong>
</div>
        </SwiperSlide>
  )
  
})}
        {/* <SwiperSlide className='sli'>
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
        </SwiperSlide> */}

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
