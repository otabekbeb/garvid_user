import React, { useState,useEffect } from 'react'
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

export default function News() {
    return (
      <div>
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
        <div className="themes">
          <h3>News</h3>
          <h3>News</h3>
          <h3>News</h3>
          <h3>News</h3>
          <h3>News</h3>
          <h3>News</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 px-0">
              <Carousel className="owl-carousel main-carousel position-relative">
                <Carousel.Item className="position-relative overflow-hidden" style={{height: '500px'}}>
                  <img className="img-fluid h-100" src={news1} style={{objectFit: 'cover'}} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-white" href>Jan 01, 2045</a>
                    </div>
                    <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
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
                <div className="col-md-6 px-0">
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
                <div className="col-md-6 px-0">
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
                <div className="col-md-6 px-0">
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
                <div className="col-md-6 px-0">
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
        {/* Main News Slider End */}
        {/* Breaking News Start */}
        <div className="container-fluid bg-dark py-3 mb-3">
          <div className="container">
            <div className="row align-items-center bg-dark">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div className="bg-primary text-dark text-center font-weight-medium py-2" style={{width: '170px'}}>Breaking News</div>
                  <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3" style={{width: 'calc(100% - 170px)', paddingRight: '90px'}}>
                    <div className="text-truncate"><a className="text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                    <div className="text-truncate"><a className="text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breaking News End */}
        {/* Featured News Slider Start */}
        <div className="container-fluid pt-5 mb-3">
          <div className="container">
            <div className="section-title">
              <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
            <div className="owl-carousel news-carousel carousel-item-4 position-relative">
              <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new1} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </div>
              <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new2} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </div>
              <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src={new3} style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </div>
              <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src="img/news-700x435-4.jpg" style={{objectFit: 'cover'}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                    <a className="text-white" href><small>Jan 01, 2045</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Lorem ipsum dolor sit amet elit...</a>
                </div>
              </div>
              <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                <img className="img-fluid h-100" src="img/news-700x435-5.jpg" style={{objectFit: 'cover'}} />
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
        {/* Featured News Slider End */}
        {/* News With Sidebar Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
                      <a className="text-secondary font-weight-medium text-decoration-none" href>View All</a>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                      <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt="" />
                          <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                          <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                      <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt="" />
                          <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                          <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <a href><img className="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative mb-3">
                      <img className="img-fluid w-100" src={new3} style={{objectFit: 'cover'}} />
                      <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                      <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt="" />
                          <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                          <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative mb-3">
                      <img className="img-fluid w-100" src="img/news-700x435-4.jpg" style={{objectFit: 'cover'}} />
                      <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                      <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt="" />
                          <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                          <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-1.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-2.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-3.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-4.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <a href><img className="img-fluid w-100" src="img/ads-728x90.png" alt="" /></a>
                  </div>
                  <div className="col-lg-12">
                    <div className="row news-lg mx-0 mb-3">
                      <div className="col-md-6 h-100 px-0">
                        <img className="img-fluid h-100" src="img/news-700x435-5.jpg" style={{objectFit: 'cover'}} />
                      </div>
                      <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                        <div className="mt-auto p-4">
                          <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                            <a className="text-body" href><small>Jan 01, 2045</small></a>
                          </div>
                          <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                          <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                            rebum clita rebum dolor stet amet justo</p>
                        </div>
                        <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                          <div className="d-flex align-items-center">
                            <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt="" />
                            <small>John Doe</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                            <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-1.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-2.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-3.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-4.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* Social Follow Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                  </div>
                  <div className="bg-white border border-top-0 p-3">
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#39569E'}}>
                      <i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">12,345 Fans</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
                      <i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">12,345 Followers</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#0185AE'}}>
                      <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">12,345 Connects</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#C8359D'}}>
                      <i className="fab fa-instagram text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">12,345 Followers</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#DC472E'}}>
                      <i className="fab fa-youtube text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">12,345 Subscribers</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none" style={{background: '#055570'}}>
                      <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">12,345 Followers</span>
                    </a>
                  </div>
                </div>
                {/* Social Follow End */}
                {/* Ads Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                  </div>
                  <div className="bg-white text-center border border-top-0 p-3">
                    <a href><img className="img-fluid" src="img/news-800x500-2.jpg" alt="" /></a>
                  </div>
                </div>
                {/* Ads End */}
                {/* Popular News Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                  </div>
                  <div className="bg-white border border-top-0 p-3">
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-1.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-2.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-3.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-4.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                      <img className="img-fluid" src="img/news-110x110-5.jpg" alt="" />
                      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                        <div className="mb-2">
                          <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                          <a className="text-body" href><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Popular News End */}
                {/* Newsletter Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                  </div>
                  <div className="bg-white text-center border border-top-0 p-3">
                    <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                    <div className="input-group mb-2" style={{width: '100%'}}>
                      <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                      <div className="input-group-append">
                        <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                      </div>
                    </div>
                    <small>Lorem ipsum dolor sit amet elit</small>
                  </div>
                </div>
                {/* Newsletter End */}
                {/* Tags Start */}
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                  </div>
                  <div className="bg-white border border-top-0 p-3">
                    <div className="d-flex flex-wrap m-n1">
                      <a href className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Business</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Business</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Health</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Education</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Science</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Business</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                      <a href className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                    </div>
                  </div>
                </div>
                {/* Tags End */}
              </div>
            </div>
          </div>
        </div>
        {/* News With Sidebar End */}
        {/* Footer Start */}
        <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
          <div className="row py-4">
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
              <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
              <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
              <p className="font-weight-medium"><i className="fa fa-envelope mr-2" />info@example.com</p>
              <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
              <div className="d-flex justify-content-start">
                <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram" /></a>
                <a className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
              <div className="mb-3">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                  <a className="text-body" href><small>Jan 01, 2045</small></a>
                </div>
                <a className="small text-body text-uppercase font-weight-medium" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
              </div>
              <div className="mb-3">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                  <a className="text-body" href><small>Jan 01, 2045</small></a>
                </div>
                <a className="small text-body text-uppercase font-weight-medium" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
              </div>
              <div className>
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                  <a className="text-body" href><small>Jan 01, 2045</small></a>
                </div>
                <a className="small text-body text-uppercase font-weight-medium" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
              <div className="m-n1">
                <a href className="btn btn-sm btn-secondary m-1">Politics</a>
                <a href className="btn btn-sm btn-secondary m-1">Business</a>
                <a href className="btn btn-sm btn-secondary m-1">Corporate</a>
                <a href className="btn btn-sm btn-secondary m-1">Business</a>
                <a href className="btn btn-sm btn-secondary m-1">Health</a>
                <a href className="btn btn-sm btn-secondary m-1">Education</a>
                <a href className="btn btn-sm btn-secondary m-1">Science</a>
                <a href className="btn btn-sm btn-secondary m-1">Business</a>
                <a href className="btn btn-sm btn-secondary m-1">Foods</a>
                <a href className="btn btn-sm btn-secondary m-1">Entertainment</a>
                <a href className="btn btn-sm btn-secondary m-1">Travel</a>
                <a href className="btn btn-sm btn-secondary m-1">Lifestyle</a>
                <a href className="btn btn-sm btn-secondary m-1">Politics</a>
                <a href className="btn btn-sm btn-secondary m-1">Business</a>
                <a href className="btn btn-sm btn-secondary m-1">Corporate</a>
                <a href className="btn btn-sm btn-secondary m-1">Business</a>
                <a href className="btn btn-sm btn-secondary m-1">Health</a>
                <a href className="btn btn-sm btn-secondary m-1">Education</a>
                <a href className="btn btn-sm btn-secondary m-1">Science</a>
                <a href className="btn btn-sm btn-secondary m-1">Business</a>
                <a href className="btn btn-sm btn-secondary m-1">Foods</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
              <div className="row">
                <div className="col-4 mb-3">
                  <a href><img className="w-100" src="img/news-110x110-1.jpg" alt="" /></a>
                </div>
                <div className="col-4 mb-3">
                  <a href><img className="w-100" src="img/news-110x110-2.jpg" alt="" /></a>
                </div>
                <div className="col-4 mb-3">
                  <a href><img className="w-100" src="img/news-110x110-3.jpg" alt="" /></a>
                </div>
                <div className="col-4 mb-3">
                  <a href><img className="w-100" src="img/news-110x110-4.jpg" alt="" /></a>
                </div>
                <div className="col-4 mb-3">
                  <a href><img className="w-100" src="img/news-110x110-5.jpg" alt="" /></a>
                </div>
                <div className="col-4 mb-3">
                  <a href><img className="w-100" src="img/news-110x110-1.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4 px-sm-3 px-md-5" style={{background: '#111111'}}>
          <p className="m-0 text-center">© <a href="#">Your Site Name</a>. All Rights Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Design by <a href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-primary btn-square back-to-top"><i className="fa fa-arrow-up" /></a>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}
      </div>
    );
  }
