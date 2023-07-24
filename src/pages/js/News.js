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



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function News() {
    return (
      <div className='newss1'>
        <Navbar/>
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
            <div  className="col-lg-7 px-0">
              <Carousel  className="owl-carousel main-carousel position-relative">
                <Carousel.Item  className="position-relative overflow-hidden" style={{height: '500px'}}>
                  <img  className="img-fluid h-100" src={news1} style={{objectFit: 'cover'}} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-white" href>Jan 01, 2045</a>
                    </div>
                    <a  style={{cursor:"pointer"}} onClick={()=> window.location="/newspage"} className="h2 m-0 text-white text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="position-relative overflow-hidden" style={{height: '500px'}}>
                  <img className="img-fluid h-100" src={news2} style={{objectFit: 'cover'}} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-white" href>Jan 01, 2045</a>
                    </div>
                    <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="position-relative overflow-hidden" style={{height: '500px'}}>
                  <img className="img-fluid h-100" src={news3} style={{objectFit: 'cover'}} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-white" href>Jan 01, 2045</a>
                    </div>
                    <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-5 px-0">
              <div className="row mx-0">
                <div onClick={()=> window.location="/newspage"} style={{cursor:"pointer"}}  className="col-md-6 px-0">
                  <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                    <img className="img-fluid w-100 h-100" src={new1} style={{objectFit: 'cover'}} />
                    <div className="overlay">
                      <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                        <a className="text-white" href><small>Jan 01, 2045</small></a>
                      </div>
                      <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                    </div>
                  </div>
                </div>
                <div onClick={()=> window.location="/newspage"} style={{cursor:"pointer"}}  className="col-md-6 px-0">
                  <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                    <img className="img-fluid w-100 h-100" src={new2} style={{objectFit: 'cover'}} />
                    <div className="overlay">
                      <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                        <a className="text-white" href><small>Jan 01, 2045</small></a>
                      </div>
                      <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                    </div>
                  </div>
                </div>
                <div onClick={()=> window.location="/newspage"} style={{cursor:"pointer"}}  className="col-md-6 px-0">
                  <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                    <img className="img-fluid w-100 h-100" src={new3} style={{objectFit: 'cover'}} />
                    <div className="overlay">
                      <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                        <a className="text-white" href><small>Jan 01, 2045</small></a>
                      </div>
                      <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                    </div>
                  </div>
                </div>
                <div onClick={()=> window.location="/newspage"} style={{cursor:"pointer"}}  className="col-md-6 px-0">
                  <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                    <img className="img-fluid w-100 h-100" src={new4} style={{objectFit: 'cover'}} />
                    <div className="overlay">
                      <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                        <a className="text-white" href><small>Jan 01, 2045</small></a>
                      </div>
                      <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid">
          <div className="container">
            <div className="row">
            <div className="col-lg-4">
                {/* Social Follow Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Themes</h4>
                  </div>
                  <div className="bg-white border border-top-0 p-3">
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#39569E'}}>
                      <i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Sports</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
                      <i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Musics</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#0185AE'}}>
                      <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Arts</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#C8359D'}}>
                      <i className="fab fa-instagram text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Sports</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#DC472E'}}>
                      <i className="fab fa-youtube text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Musics</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none" style={{background: '#055570'}}>
                      <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Arts</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
                      
                    </div>
                  </div>
                  <div onClick={()=> window.location="/newspage"} className="col-lg-6">
                    <div className="position-relative mb-3">
                      <img className="img-fluid w-100" src={new1} style={{objectFit: 'cover'}} />
                      <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                          rebum clita rebum dolor stet amet justo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div onClick={()=> window.location="/newspage"} className="col-lg-6">
                    <div className="position-relative mb-3">
                      <img className="img-fluid w-100" src={new2} style={{objectFit: 'cover'}} />
                      <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                          rebum clita rebum dolor stet amet justo</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <a href><img className="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
                  </div>
                  
                  
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 mb-3">
          <div className="container">
            <div className="section-title">
              <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
              <a >View all</a>
            </div>
            <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
          className="owl-carousel news-carousel carousel-item-4 position-relative">
              <SwiperSlide className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new1} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new2} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new3} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new4} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new5} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        
      </div>
    );
  }
