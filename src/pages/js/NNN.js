import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination } from 'swiper/modules';
export default function NNN() {

    return (
        <div>
            <div className="container-fluid pt-5 mb-3">
                <div className="container" >
                    <div className="section-title">
                        <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
                    </div>
                    <div className="owl-carousel news-carousel carousel-item-4 position-relative">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
                                    <img className="img-fluid h-100" src="http://127.0.0.1:5500/img/news-700x435-5.jpg" style={{ bjectFit: 'cover' }} />
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
            </div>
            <div className="News">

                <div className="col-12">
                    <div className="section-title">
                        <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
                        <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                    </div>
                </div>

                <div className="News_cards">
                    <div className="News_card" >
                        <img className="img-fluid w-100" src="http://127.0.0.1:5500/img/news-700x435-2.jpg" />
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
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                            </div>
                        </div>
                    </div>
                    <div className="News_card" >
                        <img className="img-fluid w-100" src="http://127.0.0.1:5500/img/news-700x435-2.jpg" />
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
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                            </div>
                        </div>
                    </div>
                    <div className="News_card" >
                        <img className="img-fluid w-100" src="http://127.0.0.1:5500/img/news-700x435-2.jpg" />
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
                                <small>John Doe</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
