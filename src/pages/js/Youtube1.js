import React, { useEffect, useState } from "react";
import img_kotta from "../img/Rectangle.png";
import img_ava from "../img/Ellipse.png";
import img_accordion from "../img/Rectangle 14.1.svg";
import { AiFillStar } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import "../css/youtube1.css";
import Qollamalar from "../js/Bilmadim1";
import Scachat from "../js/Scachat";
import Vazifa from "../js/Vazifa1";
import Comment from "../js/Comment1";
import Usernavbar from "../js/Usernavbar";
import Loader from "./loader";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import istok_img from "../img/istockphoto-1321436405-612x612.jpg";

import { BiBorderBottom, BiTime } from "react-icons/bi";
import Footer1 from "./Footer1"
import "../css/youtube1.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import url from "./Host";
import err from "../img/istockphoto-1321436405-612x612.jpg";
import novideo from "../img/download.png";

export default function Youtube1() {
  const [id, setId] = useState(1);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [theme, setTheme] = useState([]);
  const [main, setMain] = useState([]);
  const [user, setUser] = useState([]);
  const [state1, setState1] = React.useState();
  const [loader, setLoader] = useState(1);
  const [IDtheme, setIdtheme] = useState({});
  const [task_comnet_id, setTask_comnet_id]=useState(0)


  function openModal() {
    document.querySelector(".navbar_yon").classList.toggle("navbar_yon1");
  }
  function closeModal() {
    document.querySelector(".navbar_yon").style = "display:none;";
  }

  function videoBolim(id) {
    document.querySelector(".navbar_yon", ".navbar_none").style =
      "display:none;";
    setId(id);
  }

  function painModal() {
    document.querySelector(".zadaniya").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya1").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya2").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya3").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal1() {
    document.querySelector(".zadaniya1").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya2").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya3").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal2() {
    document.querySelector(".zadaniya2").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya1").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya1").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya3").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal3() {
    document.querySelector(".zadaniya3").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya2").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya1").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya").style =
      "border-bottom: none; color: #9DA7BB;";
  }

  //mediya

  function painModal5() {
    document.querySelector(".zadaniya5").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya6").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya7").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya8").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal6() {
    document.querySelector(".zadaniya6").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya5").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya7").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya8").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal7() {
    document.querySelector(".zadaniya7").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya6").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya5").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya8").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal8() {
    document.querySelector(".zadaniya8").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya6").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya7").style =
      "border-bottom: none; color: #9DA7BB;";
    document.querySelector(".zadaniya5").style =
      "border-bottom: none; color: #9DA7BB;";
  }

  useEffect(() => {
    var id = localStorage.getItem("abbas");
    axios
      .get(`${url}/api/course_data_category/course/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setMain(res.data.one?res.data.one:[]);
        setCategory(res.data.all);
        console.log(res.data);
        localStorage.setItem("page_video1",JSON.stringify(res.data.one?res.data.one:[])) 
        localStorage.setItem("page_video",JSON.stringify(res.data.one?res.data.one:[]))
        setLoader(0)
      })
      .catch((err) => {
        // console.log(err);
        // document.querySelector(".a_err_boganda").style =
        //   "display: flex;justify-content: center;align-items: center;";
      });




      
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);

  function ModalCatchBolsa() 
  { if (localStorage.getItem("position")==2) {
    window.location="/mentor"
  }else if(localStorage.getItem("position")==1){
    window.location="/user"
  }
  else if(localStorage.getItem("position")==4){
    window.location="/studentall"
  }
  }

  return (
    <div className="youtube_bgc">
      <div className="a_err_boganda">
        <div className="a_err_bolsa_block">
          <img src={err} alt="" />
          <h3> Что-то произошло сервером мы уже испровляем это.</h3>
          <h3> Можете попробовать попойже</h3>
          <button onClick={() => ModalCatchBolsa()}>вернуться назад</button>
        </div>
      </div>
      {loader === 0 ? (
        <div>
          <div>
            <Usernavbar />
            <div className="youtube_bgc">
              <div className="flex_youtube">

              <div className="youtube_kotta_img">
                  <div className="img_youtube_kotta">
                    <iframe
                      src={main.video}
                      title="W3Schools Free Online Web Tutorials"
                    ></iframe>
                  </div>
                  <div className="theme_df">
                    <div className="flex_logig">
                      <h1 className="raspberry_pi">{main.name}</h1>
                      <div className="odtel_media_uchun">
                        <h1>{main.name}</h1>
                        {/* <div className="flex_star_p">
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
                      </div> */}
                      </div>
                      {/* <div className="flex_star">
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
                    </p> */}
                    </div>
                  </div>
                  <p className="theme_content">{main.content}</p>
                </div>
                <div className={main==""?"db":"a_err_boganda"}>
                      <div className="a_err_bolsa_block">
                        <img src={err} alt="" />
                        <h3>
                          Что-то произошло сервером, мы уже испровляем это.
                        </h3>
                        <h3> Можете попробовать попойже</h3>
                        <button onClick={() => ModalCatchBolsa()}>
                          вернуться назад
                        </button>
                      </div>
                    </div>

                <div className="youtube_kichkina">
                  {category.map((item, key) => {
                   return(
                    <>

                          <Accordion>
                            <Accordion.Item eventKey={0 + key}>
                              <Accordion.Header>{item.name}</Accordion.Header>
                              {item.theme.map((item2) => {
                                return (
                                  <Accordion.Body
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div
                                      style={{ cursor: "pointer" }}
                                      className="accordion_flex"
                                    >
                                      <div className="accordion_img">
                                        {item2.image === null ? (
                                          <img src={novideo} alt="" />
                                        ) : (
                                          <img src={item2.image} alt="" />
                                        )}
                                      </div>
                                      <div className="accordion_text">
                                        <h6>{item2.name}</h6>
                                        <p>{item2.content}</p>
                                      </div>
                                    </div>
                                  </Accordion.Body>
                                );
                              })}
                            </Accordion.Item>
                          </Accordion>

                

                  </>
                   )
                  })}
                </div>
              </div>
              <div className="navbar_video">
                <div className="navbar_none">
                  <div className="navbar_otish">
                    <p
                      onClick={() => {
                        videoBolim(1);
                        painModal();
                      }}
                      className="zadaniya"
                    >
                      Comments
                    </p>
                    <p
                      onClick={() => {
                        videoBolim(2);
                        painModal1();
                      }}
                      className="zadaniya1"
                    >
                      Tasks
                    </p>
                    <p
                      onClick={() => {
                        videoBolim(3);
                        painModal2();
                      }}
                      className="zadaniya2"
                    ></p>
                    <p
                      onClick={() => {
                        videoBolim(4);
                        painModal3();
                      }}
                      className="zadaniya3"
                    ></p>
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
                    <p
                      onClick={() => {
                        videoBolim(1);
                        painModal5();
                      }}
                      className="zadaniya5"
                    >
                     Крмментарии
                    </p>
                    <p
                      onClick={() => {
                        videoBolim(1);
                        painModal6();
                      }}
                      className="zadaniya6"
                    >
                      Задания
                    </p>
                    <p
                      onClick={() => {
                        videoBolim(3);
                        painModal7();
                      }}
                      className="zadaniya7"
                    ></p>
                    <p
                      onClick={() => {
                        videoBolim(4);
                        painModal8();
                      }}
                      className="zadaniya8"
                    ></p>
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
        </div>
      ) : (
        <Loader />
      )}
      
      <Footer1/>
    </div>
  );
}
  