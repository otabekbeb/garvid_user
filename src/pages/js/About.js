'use clint'
import React, { useState,useEffect } from 'react'
import '../css/About.css'
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import axios from 'axios'
import url from './Host'




export default function About() {
  const [data, setData] = useState([]);
  const [state1, setState1] = React.useState();
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
    },[])
  return (

    
    <div className='abouut'>
      <Navbar/>

      <div>
<div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>About Us</h1>
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
    <p  id='tepaga'>About Us</p>
</div>
</div>
</div>

<header className='about-header-block'>
<div className="about-header-block-kotta">
  <div className="about-header-block-img">
    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img.jpg" alt="" />
    <div className="about-header-block-text">
      <h2 id='uityty'>Do the right things at the right time.</h2>
      <p>Welcome to the leading company in the market! Our success is due to the highest quality of customer service. <br className='pogos'/> We can meet the requirements of even the most capricious clients; there are no difficult tasks for us! Thank you for your choice! Our  <br className='pogos' /> the company boasts a reputation as a reliable partner known throughout the world. We pride ourselves on uncompromising <br /> quality</p>
      <div className="about-header-addelna">
        <p>Thank you for visiting our site! You are in the right place! We are focused on providing comprehensive <br className='pogos' /> solutions and services to customers around the world. Putting the interests of our clients first, we make every effort to<br className='pogos' /> exceed your expectations.</p>
      </div>
      <div className="about-header-df">
        <div className="about-header-blcos1">
          <h2>275</h2>
          <p >Cases completed </p>
        </div>
        <div className="about-header-blcos2">
          <h2>19</h2>
          <p id='localengwon3'>Consultants</p>
        </div>
        <div className="about-header-blcos3">
          <h2>130</h2>
          <p id='localengwon'>Awards Won <br  className='dfoigdfoi'/> <br  className='dfoigdfoi'/></p>
        </div>
        <div className="about-header-blcos4">
          <h2>723</h2>
          <p id='localengwon1'>Happy clients</p>
        </div>
      </div>
    </div>
  </div>
 <div className="about-header-block-swiper">
   

<div className="about-header-f">
     <div className="about-header-block2-text">
  <ul>
    <li><a href="#">About Us</a></li>
  </ul>
  <div className="about-header-line"></div>
  
   </div>
   <div className="about-header-block2-text2">
  <ul>
    <li><a href="#">News </a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>
   <div className="about-header-block2-text3">
  <ul>
    <li><a href="#"> team</a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>

</div>
<div className="about-header-card">
<h4>Do you need help?</h4>
<p>Contact us at FinExpert  <br /> office closest to you or <br />submit your business inquiry online.</p>

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
</div></SwiperSlide> */}
        {/* <SwiperSlide className='sli'>
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


      <div className="swiper-button">
    <button>Presentation of the company</button>
  </div>
  </div>
  
</div>
<div className="about-header-block-davom">

     <div className="about-header-block-davom-text-tepa">
    <h3>How we are working</h3><h3 className='letsgio'>Our mission</h3>
  </div>
  <div className="about-header-block-df">
    <div className="about-header-block-df-img">
      <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-about-2.jpg" alt="" />
    </div>
    <div className="about-header-block-df-text">
      <ul>
        <li className='cher'>Our well-known coaching programs will allow you to:</li>
      <div className="cher2">
      <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Relationships with clients and employees</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to achieve complete<br className='adfad'/><span className='dfsdsd'>capacity</span></span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Cut costs without sacrificing quality</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to reach our full potential</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Sharpen your sharp leadership skills to manage your team</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Manage your time to get more done in less time</span></li>
      </div>

      </ul>
    </div>
  </div>


</div>
<div className="media-header-dovom">
<div className="about-header-block-davom-text-tepa">
    <h3>How we are working</h3>
  </div>
  <div className="about-header-block-df">
    <div className="about-header-block-df-img">
      <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-about-2.jpg" alt="" />
    </div>
    <div className="about-header-block-df-text">
<h3>Our mission</h3>
<p>Our renowned coaching programs will allow you to:</p>
<div className="about-header-nn">
<ul>
      <div className="cher2">
      <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Relationships with clients and employees</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to reach our full potential</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Cut costs without sacrificing quality</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to reach our full potential</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Sharpen your sharp leadership skills to manage your team</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Manage your time to get more done in less time</span></li>
      </div>

      </ul>
</div>
    </div>
  </div>
  <div className="media-header-media-kamanda">
    <div className="media-about-gg">
        <p><a href="#">About Us</a></p>
  <div className="about-media-line"></div>
    </div>
    <div className="media-about-gg1">
        <p><a href="#">News</a></p>
  <div className="about-media-line"></div>
    </div>
    <div className="media-about-gg2">
        <p><a href="#">Team</a></p>
  <div className="about-media-line"></div>
    </div>

<div className="media-header-button">
  <h3>Do you need help?</h3>
  <p>Contact us at your nearest FinExpert office or submit a business request online.</p>
  <button>Contact us</button>
</div>



<div className="asdosdd">


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
      


      </Swiper>
     </div>
  </div>

 </div>
{/* <div className="asdf">
<div className="navigator-tepaga" >
<a href="#tepaga"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
</div>

</div> */}


</header>

      </div>







<Images/>
<Footer/>
    </div>
    
  )
}
