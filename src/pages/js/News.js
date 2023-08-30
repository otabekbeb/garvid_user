import React, { useState, useEffect, useRef } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { BsChat } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
// import { Pagination } from 'swiper/modules';
import axios from 'axios'
import url from './Host'

export default function News() {
  const [base, setBase] = useState([])
  const [basetype, setBasetype] = useState([])
  useEffect(() => {
    axios.get(`${url}/api/knowladge`).then(res => {
      setBase(res.data)
      console.log(res.data, "bb");
      axios.get(`${url}/api/base_theme`).then(res1 => {
        setBasetype(res1.data)

        const type = res.data.filter(item => item.base_id == localStorage.getItem("BaseType"))
        setBase(type)

      });
    });
  }, [])

  return (
    <div>
      <Navbar />
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
                  {basetype.map(item => {
                    return (
                      <>
                        {item.name == null ? ("") : (<><a onClick={() => { localStorage.setItem("BaseType", item.id); window.location.reload() }} href className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#52AAF4' }}>
                          <i className="fab fa-twitter text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }} />
                          <span className="font-weight-medium">{item.name}</span>
                        </a></>)}
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-7 px-0">
              <Swiper style={{ cursor: "pointer" }} navigation={true} modules={[Navigation]} className="owl-carousel main-carousel position-relative">
                {base.map((item, key) => {
                  return (
                    <SwiperSlide onClick={() => { localStorage.setItem("baseId", key) }} className="position-relative overflow-hidden" style={{ height: '500px' }}>
                      <img className="img-fluid h-100" src={item.image} style={{ objectFit: 'cover' }} />
                      <div className="overlay">
                        <div className="mb-2">
                          <a className="text-white">{item.time_create.slice(0, 10)}</a>
                        </div>
                        <a style={{ cursor: "pointer", zIndex: "10000000" }} onClick={() => { window.location = "/newspage"; localStorage.setItem("baseId", key) }} className="h2 m-0 text-white text-uppercase font-weight-bold">{item.name}</a>
                      </div>
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>
            <div className="col-lg-5 px-0">
              <div className="row mx-0">
                {base.map((item, key) => {
                  if (key < 2) {
                    return (
                      <div onClick={() => { window.location = "/newspage"; localStorage.setItem("baseId", key) }} style={{ cursor: "pointer" }} className="col-md-6 px-0">
                        <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                          <img className="img-fluid w-100 h-100" src={item.image} style={{ objectFit: 'cover' }} />
                          <div className="overlay">
                            <div className="mb-2">
                              <a className="text-white" >{item.time_create.slice(0, 10)}</a>
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


        <div className="container-fluid pt-5 mb-3">
          <div className="container" >
             <button className='News_button1'>FEATURED NEWS</button> 

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              // pagination={{
              //     clickable: true, 
              // }}
              // breakpoints={{
              //   // when window width is <= 782px
              //   782: {
              //     width: 640,
              //     slidesPerView: 2,
              //   },
              
              // }}
              modules={[Pagination]}
              className="mySwiper100"
            >
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              // pagination={{
              //     clickable: true, 
              // }}
              // breakpoints={{
              //   // when window width is <= 782px
              //   782: {
              //     width: 640,
              //     slidesPerView: 2,
              //   },
              
              // }}
              modules={[Pagination]}
              className="mySwiper101"
            >
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              // pagination={{
              //     clickable: true, 
              // }}
              // breakpoints={{
              //   // when window width is <= 782px
              //   782: {
              //     width: 640,
              //     slidesPerView: 2,
              //   },
              
              // }}
              modules={[Pagination]}
              className="mySwiper102"
            >
              <SwiperSlide >
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                  <img className="img-fluid h-100" src="data:image/jpeg;base64,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" style={{ bjectFit: 'cover' }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">Business</a>
                      <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>





        <div className="News">
          <div className="News_cards">
            <div className="News_card" >
            <button className='Card_button'>FEATURED NEWS</button>
              <img className="img-fluid w-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" />
              <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Business</a>
                  <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                </div>
                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                  rebum clita rebum dolor stet amet justo</p>
              </div>
              <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle mr-2" src="img/user.jpg" alt="" />
                  <small>John ODIL</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ml-3"><AiOutlineEye />12345</small>
                  <small className="ml-3"><BsChat />123</small>
                </div>
              </div>
            </div>
            <div className="News_card" >
            <button className='Card_button'>FEATURED NEWS</button>
              <img className="img-fluid w-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" />
              <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Business</a>
                  <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                </div>
                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                  rebum clita rebum dolor stet amet justo</p>
              </div>
              <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle mr-2" src="img/user.jpg" alt="" />
                  <small>John ODIL</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ml-3"><AiOutlineEye />12345</small>
                  <small className="ml-3"><BsChat />123</small>
                </div>
              </div>
            </div>
            <div className="News_card" >
            <button className='Card_button'>FEATURED NEWS</button>
              <img className="img-fluid w-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" />
              <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Business</a>
                  <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                </div>
                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                  rebum clita rebum dolor stet amet justo</p>
              </div>
              <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle mr-2" src="img/user.jpg" alt="" />
                  <small>John ODIL</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ml-3"><AiOutlineEye />12345</small>
                  <small className="ml-3"><BsChat />123</small>
                </div>
              </div>
            </div>
            <div className="News_card" >
            <button className='Card_button'>FEATURED NEWS</button>
              <img className="img-fluid w-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" />
              <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Business</a>
                  <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                </div>
                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                  rebum clita rebum dolor stet amet justo</p>
              </div>
              <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle mr-2" src="img/user.jpg" alt="" />
                  <small>John ODIL</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ml-3"><AiOutlineEye />12345</small>
                  <small className="ml-3"><BsChat />123</small>
                </div>
              </div>
            </div>
          </div>
          <div className="News_cards101">
            <div className="News_card101" >
            <button className='Card_button'>FEATURED NEWS</button>
              <img className="img-fluid w-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" />
              <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Business</a>
                  <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                </div>
                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                  rebum clita rebum dolor stet amet justo</p>
              </div>
              <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle mr-2" src="img/user.jpg" alt="" />
                  <small>Qodir ali</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ml-3"><AiOutlineEye />12345</small>
                  <small className="ml-3"><BsChat />123</small>
                </div>
              </div>
            </div>
            <div className="News_card101" >
            <button className='Card_button'>FEATURED NEWS</button>
              <img className="img-fluid w-100" src="https://blog.hubspot.com/hubfs/CSS%20Flexbox.png" />
              <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">Business</a>
                  <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                </div>
                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                  rebum clita rebum dolor stet amet justo</p>
              </div>
              <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle mr-2" src="img/user.jpg" alt="" />
                  <small>Qodir ali</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ml-3"><AiOutlineEye />12345</small>
                  <small className="ml-3"><BsChat />123</small>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <Footer1 />
      </div>
    </div>
  );
}
