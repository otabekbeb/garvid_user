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
  const [IDtheme, setIdtheme] = useState([])

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
    axios
      .get(`${url}/course/subcategory/`, {
        headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" },
      })
      .then((res1) => {
        setSubcategory(res1.data);
      });
    axios
      .get(`${url}/course/main/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } })
      .then((res2) => {
        setMain(res2.data);
      });
    axios.get(`${url}/course/category/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res => {
      var aa = []
      res.data.map(item => {
        if (item.course == localStorage.getItem('course')) {
          aa.push(item)
        }
      })
      setCategory(aa);
    })
    axios.get(`${url}/course/theme/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } }).then(res => {
      setTheme(res.data)
    });
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

    axios.get(`${url}/auth/user/`, { headers: { "Authorization": 'Bearer ' + localStorage.getItem("token") } }).then(res => {
      console.log(res.data,);
    })
    axios.get(`${url}/course/registed_course/`).then(res => {
      setUser(res.data)
      setLoader(1)
    })


  }, [])

  return (
    <>
      {loader === 1 ? (
        <div>
          {state1 === "en" ? (<div>
            <Usernavbar />
            <div className="youtube_bgc">
              <div className="flex_youtube">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  id='themeswiper'
                >
                  {theme.map((item) => {
                    if (item.subcategory == localStorage.getItem("themeid")) {
                      return (
                        <>
                      
                        <SwiperSlide>
                        <div className="youtube_kotta_img">
                          <div className="img_youtube_kotta">
                            <iframe
                              src={item.links}
                              title="W3Schools Free Online Web Tutorials"
                            ></iframe>
                          </div>
                          <div className="flex_logig">
                            <h1 className="raspberry_pi">{item.name}</h1>
                            <div className="odtel_media_uchun">
                              <h1>{item.name}</h1>
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

                          <p className='theme_content'>{item.content}</p>

                          {
                        main.map(main => {
                          return (
                            <>
                              {main.user.map(mainuser => {
                                return (
                                  <>
                                    {user.map(user => {
                                      if (mainuser === user.user.id) {
                                        return (
                                          <div className="post_ava">
                                            <h6>{user.user.username}</h6>
                                            {/* <button>Subscribe</button> */}
                                          </div>)
                                      }
                                    })}
                                  </>
                                )
                              })}
                            </>
                          )
                        })
                        }
                          </div>
                        </SwiperSlide>
                         
                       </>
                      );
                    }
                  })}
                </Swiper>

                {category.map((item) => {
                  return (
                    <div className="youtube_kichkina">
                      <div className="odelniy_oyna_tepa">
                        <div className="raspberry_pid">
                          <h1>{item.name}</h1>
                          <div className="margin_right">
                            <div className="line_height"></div>
                            <p>{localStorage.getItem("themeLength")} уроки</p>
                          </div>
                        </div>
                      </div>
                      <Accordion defaultActiveKey="0">
                        {subcategory.map((item2,key) => {
                          if (item.id === item2.category) {
                            return (
                              <Accordion.Item eventKey={0+key}>
                                <Accordion.Header>{item2.name}</Accordion.Header>
                                {theme.map((theme,key) => {
                                  if (theme.subcategory == item2.id) {
                                    localStorage.setItem("themeid", theme.subcategory)
                                    localStorage.setItem("themeLength",key)
                                    return (
                                      <>
                                        <Accordion.Body onClick={()=>{localStorage.setItem("themeid", theme.id)}}>
                                          <div className="accordion_flex">
                                            <div className="accordion_img">
                                              <img src={theme.image} alt="" />
                                            </div>
                                            <div className="accordion_text">
                                              <h6>
                                                {theme.name}
                                              </h6>
                                              <p>{theme.content}
                                              </p>
                                            </div>
                                          </div>
                                        </Accordion.Body>
                                      </>
                                    )
                                  }
                                })}
                              </Accordion.Item>

                            );
                          }
                        })}
                      </Accordion>
                    </div>
                  );
                })}
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
          </div>) : (<div>
            <Usernavbar />
            <div className="youtube_bgc">
              <div className="flex_youtube">
                {theme.map((item) => {
                  return (
                    <div className="youtube_kotta_img">
                      <div className="img_youtube_kotta">
                        <iframe
                          src={item.links}
                          title="W3Schools Free Online Web Tutorials"
                        ></iframe>
                      </div>
                      <div className="flex_logig">
                        <h1 className="raspberry_pi">{item.name}</h1>
                        <div className="odtel_media_uchun">
                          <h1>{item.name}</h1>
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
                        <div className="buttons_next_back">
                          <button className="button_back">
                            <BsChevronLeft />
                            <p>Предыдущий урок</p>
                          </button>
                          <button>
                            <p>Следующий урок </p>
                            <BsChevronRight />{" "}
                          </button>
                        </div>
                      </div>
                      <p>{item.content}</p>
                      <div className="post_ava">
                        <img src={img_ava} alt="" />
                        <h6>Мухаммад Джумаев</h6>
                        {/* <button>Подписаться</button> */}
                      </div>
                    </div>
                  );
                })}

                {category.map((item) => {
                  return (
                    <div className="youtube_kichkina">
                      <div className="odelniy_oyna_tepa">
                        <div className="raspberry_pid">
                          <h1>{item.name}</h1>
                          <div className="margin_right">
                            <div className="line_height"></div>
                            <p>{theme.length}</p>
                          </div>
                        </div>
                      </div>
                      <Accordion defaultActiveKey="0">
                        {subcategory.map((item2) => {
                          if (item.id === item2.category) {
                            return (
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>{item2.name}</Accordion.Header>
                                {theme.map(theme => {
                                  return (
                                    <Accordion.Body>
                                      <div className="accordion_flex">
                                        <div className="accordion_img">
                                          <img src={theme.image} alt="" />
                                        </div>
                                        <div className="accordion_text">
                                          <h6>
                                            {theme.name}
                                          </h6>
                                          <p>
                                            {theme.content}
                                          </p>
                                        </div>
                                      </div>
                                    </Accordion.Body>
                                  )
                                })}
                              </Accordion.Item>

                            );
                          }
                        })}
                      </Accordion>
                    </div>
                  );
                })}
              </div>
              <div className="navbar_video">
                <div className="navbar_none">
                  <div className="navbar_otish">
                    <p onClick={() => { videoBolim(1); painModal() }} className="zadaniya">
                      Вопрос и ответ
                    </p>
                    <p onClick={() => { videoBolim(2); painModal1() }} className="zadaniya1">
                      Задания
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
                    <p onClick={() => { videoBolim(2); painModal6() }} className="zadaniya6">
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
          </div>)}

        </div>) : (<Loader />)}
    </>
  )
}