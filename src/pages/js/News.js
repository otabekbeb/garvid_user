import React, { useState,useEffect,useRef } from 'react'
import "../css/News.css"
import news1 from "../img/news-800x500-1.jpg"
import news2 from "../img/news-800x500-2.jpg"
import news3 from "../img/news-800x500-3.jpg"
import new1 from "../img/news-700x435-1.jpg"
import new2 from "../img/news-700x435-2.jpg"
import new3 from "../img/news-700x435-3.jpg"
import new4 from "../img/news-700x435-4.jpg"
import new5 from "../img/news-700x435-5.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar'
import Footer1 from './Footer1'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
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
      <div><Navbar/>
      <div className='newss1'>
        
        <meta charSet="utf-8" />
        <title>BizNews - Free News Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />  
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet" />
        {/* Libraries Stylesheet */}
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Topbar Start */}
        
        {/* Navbar End */}
        {/* Main News Slider Start */}
        

            <div className="container-fluid">
            <div className="row">
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
                        {item.name==null?(""):(<><a onClick={()=>{localStorage.setItem("BaseType",item.id);window.location.reload()}} href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
                        <i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                        <span className="font-weight-medium">{item.name}</span>
                      </a></>)}
                      </>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div  className="col-lg-7 px-0">
                <Swiper style={{cursor:"pointer"}}  navigation={true} modules={[Navigation]} className="owl-carousel main-carousel position-relative">
                  {base.map((item,key)=>{
                    return(
                      <SwiperSlide onClick={()=> {localStorage.setItem("baseId",key)}} className="position-relative overflow-hidden" style={{height: '500px'}}>
                      <img  className="img-fluid h-100" src={item.image} style={{objectFit: 'cover'}} />
                      <div className="overlay">
                        <div className="mb-2">
                          <a className="text-white">{item.time_create.slice(0,10)}</a>
                        </div>
                        <a  style={{cursor:"pointer",zIndex:"10000000"}} onClick={()=> {window.location="/newspage";localStorage.setItem("baseId",key)}} className="h2 m-0 text-white text-uppercase font-weight-bold">{item.name}</a>
                      </div>
                    </SwiperSlide>
                    )
                  })}

                </Swiper>
              </div>
              <div className="col-lg-5 px-0">
                <div className="row mx-0">
                  {base.map((item,key)=>{
                    if(key<2){
                      return(
<div onClick={()=> {window.location="/newspage";localStorage.setItem("baseId",key)}} style={{cursor:"pointer"}}  className="col-md-6 px-0">
                    <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                      <img className="img-fluid w-100 h-100" src={item.image} style={{objectFit: 'cover'}} />
                      <div className="overlay">
                        <div className="mb-2">
                        <a className="text-white" >{item.time_create.slice(0,10)}</a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" >{item.name}</a>
                      </div>
                    </div>
                  </div>
                    )
                    }
                    
                  })}
                  
                </div>
              </div>
            </div>
          </div>

        
        
        <Footer1/>
      </div></div>
    );
  }
