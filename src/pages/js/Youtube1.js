import React, { useEffect, useState } from 'react'
import img_kotta from '../img/Rectangle.png'
import img_ava from '../img/Ellipse.png'
import img_accordion from '../img/Rectangle 14.1.svg'
import { AiFillStar } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { TbInfoTriangleFilled } from 'react-icons/tb'
import { TiThMenu } from 'react-icons/ti'
import '../css/youtube1.css'
import Qollamalar from '../js/Bilmadim1'
import Scachat from '../js/Scachat'
import Vazifa from '../js/Vazifa1'
import Comment from '../js/Comment1'
import Usernavbar from '../js/Usernavbar'
import Loader from "./loader"
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import istok_img from "../img/istockphoto-1321436405-612x612.jpg";

import { BiBorderBottom, BiTime } from 'react-icons/bi'

import '../css/youtube1.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import url from "./Host"

export default function Youtube1() {
  const [id, setId] = useState(1);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [theme, setTheme] = useState([]);
  const [main, setMain] = useState([]);
  const [user, setUser] = useState([])
  const [state1, setState1] = React.useState();
  const [loader, setLoader] = useState(0)
  const [IDtheme, setIdtheme] = useState({})

  function openModal() {
    document.querySelector(".navbar_yon").classList.toggle("navbar_yon1")


  }
  function closeModal() {
    document.querySelector(".navbar_yon").style = "display:none;";
  }

  function videoBolim(id) {
    document.querySelector(".navbar_yon", ".navbar_none").style = "display:none;";
    setId(id);
  }

  function painModal() {
    document.querySelector(".zadaniya").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya1").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya2").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya3").style = "border-bottom: none; color: #9DA7BB;"
  }
  function painModal1() {
    document.querySelector(".zadaniya1").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya2").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya3").style = "border-bottom: none; color: #9DA7BB;"
  }
  function painModal2() {
    document.querySelector(".zadaniya2").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya1").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya1").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya3").style = "border-bottom: none; color: #9DA7BB;"
  }
  function painModal3() {
    document.querySelector(".zadaniya3").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya2").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya1").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya").style = "border-bottom: none; color: #9DA7BB;"
  }

  //mediya

  function painModal5() {
    document.querySelector(".zadaniya5").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya6").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya7").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya8").style = "border-bottom: none; color: #9DA7BB;"
  }
  function painModal6() {
    document.querySelector(".zadaniya6").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya5").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya7").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya8").style = "border-bottom: none; color: #9DA7BB;"
  }
  function painModal7() {
    document.querySelector(".zadaniya7").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya6").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya5").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya8").style = "border-bottom: none; color: #9DA7BB;"
  }
  function painModal8() {
    document.querySelector(".zadaniya8").style = "border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya6").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya7").style = "border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya5").style = "border-bottom: none; color: #9DA7BB;"
  }


  useEffect(() => {

    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    )

    // axios.get(`${url}/course/theme/`,  { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res => {
    //   axios.get(`${url}/course/subcategory/`,  { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res2 => {
    //   for (let i = 0; i < res.data.length; i++) {
    //    for (let b = 0; b < res2.data.length; b++) {
    //    if (res.data.subcategory===res2.data.id) {
    //     console.log(res.data.subcategory,"bilamn");
    //     console.log(res2.data.id,"bilaman1");
    //    }

    //    else{
    //     console.log('xato');
    //    }
    //    }

    //   }

    // })})

    // axios.get(`${url}/auth/user/`, { headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") } }).then(res => {
    //   console.log(res.data,);
    // })
    // axios.get(`${url}/auth/user/`,{ headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") } }).then(res => {
    //   setUser(res.data)
    //   setLoader(1)
    // })
    setIdtheme(localStorage.getItem("themeid"))
    // localStorage.removeItem("themeid");
    // localStorage.removeItem("themeidsend")
  }, [])


  return (
    <>
      {loader === 1 ? (
        <div>
          <div>
            <Usernavbar />
            <div className="youtube_bgc">
              <div className="flex_youtube">


                        <div className="youtube_kotta_img">
                          <div className="img_youtube_kotta">
                          {/* {item.video===null?(
                          <iframe
                              src={item.links}
                              title="W3Schools Free Online Web Tutorials"
                            ></iframe>):(<>
                              {(item.video && item.links)?(<iframe
                              src={item.links}
                              title="W3Schools Free Online Web Tutorials"
                            ></iframe>):(<><video className='theme_video' controls>
                            <source src={item.video} type="video/mp4"/>
                          </video></>)}  </>)}  */}
                          </div>
                          <div className="theme_df">
                          <div className="flex_logig">
                            <h1 className="raspberry_pi">ges</h1>
                            <div className="odtel_media_uchun">
                              <h1>sgr</h1>
                              <div className="flex_star_p">
                                <div className="flex_star2">
                                  <p>
                                    <AiFillStar />
                                  </p>
                                  <p>
                                    <AiFillStar />
                                  </p>
                                  <p>
                                    <AiFillStar />
                                  </p>
                                  <p>
                                    <AiFillStar />
                                  </p>
                                </div>
                                <div className="flex_star12">
                                  <p>
                                    <AiFillStar />
                                  </p>
                                </div>
                                <p className="p_4_1_5245">
                                  4.1 <span>(524)</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex_star">
                              <p>
                                <AiFillStar />
                              </p>
                              <p>
                                <AiFillStar />
                              </p>
                              <p>
                                <AiFillStar />
                              </p>
                              <p>
                                <AiFillStar />
                              </p>
                            </div>
                            <div className="flex_star1">
                              <p>
                                <AiFillStar />
                              </p>
                            </div>

                            <p className="p_4_1_524">
                              4.1 <span>(524)</span>
                            </p>
                          </div>
                          </div>
                          <p className='theme_content'>adwwa</p>

                          {/* {
                        [main[0]].map(main => {
                                        return ( */}
                                          <div className="theme_df">
                                          <div className="post_ava">
                                            {/* <img src={main.author.image} alt="" /> */}
                                            <h6>awdwaw</h6>
                                            {/* <button>Subscribe</button> */}
                                          </div>
                                          </div>
                                          {/* )                                   
                        })
                        } */}
                          </div>

                         
                       {/* </>
                      );
                    }
                  })} */}

{/* 
                {category.map((item) => {
                  return ( */}
                    <div className="youtube_kichkina">
                      <div className="odelniy_oyna_tepa">
                        <div className="raspberry_pid">
                          <h1>WDDDW</h1>
                          <div className="margin_right">
                            <div className="line_height"></div>
                            <p>2 уроки</p>
                          </div>
                        </div>
                      </div>
                      <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey={0+1}>
                                <Accordion.Header>adwda</Accordion.Header>

                                      <Accordion.Body style={{cursor:'pointer'}}>
                                          <div style={{cursor:'pointer'}} className="accordion_flex">
                                            <div className="accordion_img">
                                              {/* <img src={theme.image} alt="" /> */}
                                            </div>
                                            <div className="accordion_text">
                                              <h6>
                                               dawwawa
                                              </h6>
                                              <p>dwadad
                                              </p>
                                            </div>
                                          </div>
                                        </Accordion.Body>
                                      
                              </Accordion.Item>

                      </Accordion>
                    </div>
 
              </div>
              <div className="navbar_video">
                <div className="navbar_none">
                  <div className="navbar_otish">
                    <p onClick={() => { videoBolim(1); painModal() }} className="zadaniya">
                      Question and answer
                    </p>
                    <p onClick={() => { videoBolim(2); painModal1() }} className="zadaniya1">
                      Tasks
                    </p>
                    <p onClick={() => { videoBolim(3); painModal2() }} className="zadaniya2">

                    </p>
                    <p onClick={() => { videoBolim(4); painModal3() }} className="zadaniya3">




                    </p>
                  </div>
                </div>
              </div>
              <div className="navbar_block">
                <div
                  className="menu_navbar"
                  onClick={() => {
                    openModal();
                  }}
                >
                  <TiThMenu />
                </div>
                <div
                  className="navbar_yon"
                  onMouseLeave={() => {
                    closeModal();
                  }}
                >
                  <div className="navbar_otish1">
                    <p onClick={() => { videoBolim(1); painModal5() }} className="zadaniya5">
                      Вопрос и ответ
                    </p>
                    <p onClick={() => { videoBolim(1); painModal6() }} className="zadaniya6">
                      Задания
                    </p>
                    <p onClick={() => { videoBolim(3); painModal7() }} className="zadaniya7">

                    </p>
                    <p onClick={() => { videoBolim(4); painModal8() }} className="zadaniya8">

                    </p>
                  </div>
                </div>
              </div>
              <div className={id === 1 ? "show-content" : "content"}>
                <Comment />
              </div>
              <div className={id === 2 ? "show-content" : "content"}>
                <Vazifa />
              </div>
              <div className={id === 3 ? "show-content" : "content"}>
                <Qollamalar />
              </div>
              <div className={id === 4 ? "show-content" : "content"}>
                <Scachat />
              </div>
            </div>
          </div>

        </div>) : (<Loader />)}
    </>
  )
}