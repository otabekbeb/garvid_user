import React, { useEffect, useState } from 'react'
import img_kotta from '../img/Rectangle.png'
import img_ava from '../img/Ellipse.png'
import img_accordion from '../img/Rectangle 14.1.svg'
import { AiFillStar } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import {TbInfoTriangleFilled} from 'react-icons/tb'
import {TiThMenu} from 'react-icons/ti'
import '../css/youtube1.css'
import Qollamalar from '../js/Bilmadim1'
import Scachat from '../js/Scachat'
import Vazifa from '../js/Vazifa1'
import Comment from '../js/Comment1'
import Navbar from '../js/Navbar'


import { BiBorderBottom, BiTime } from 'react-icons/bi'
import '../css/youtube1.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import url from "./Host"

export default function Youtube1() {
  const [id,setId]=useState(1)
  const [category,setCategory]=useState([])
  const [subcategory,setSubcategory]=useState([])

  function openModal() {
    document.querySelector('.navbar_yon').classList.toggle("na")
    var a=document.querySelector(".navbar_yon").style.display

    if (a=="none") {
      document.querySelector('.navbar_yon').style="display:block"
    }
    else{
      document.querySelector('.navbar_yon').style="display:none"
    }

  }

   function painModal() {
    document.querySelector(".zadaniya").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya1").style="border-bottom: none; color: #9DA7BB;" 
    document.querySelector(".zadaniya2").style="border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya3").style="border-bottom: none; color: #9DA7BB;"
  }
   function painModal1() {
    document.querySelector(".zadaniya1").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya").style="border-bottom: none; color: #9DA7BB;" 
    document.querySelector(".zadaniya2").style="border-bottom: none; color: #9DA7BB;"
    document.querySelector(".zadaniya3").style="border-bottom: none; color: #9DA7BB;"
  }
  function painModal2() {
    document.querySelector(".zadaniya2").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya1").style="border-bottom: none; color: #9DA7BB;" 
    document.querySelector(".zadaniya1").style="border-bottom: none; color: #9DA7BB;" 
    document.querySelector(".zadaniya3").style="border-bottom: none; color: #9DA7BB;"
  }
  function painModal3() {
    document.querySelector(".zadaniya3").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
    document.querySelector(".zadaniya2").style="border-bottom: none; color: #9DA7BB;" 
    document.querySelector(".zadaniya1").style="border-bottom: none; color: #9DA7BB;" 
    document.querySelector(".zadaniya2").style="border-bottom: none; color: #9DA7BB;"
  }

//mediya

function painModal5() {
  document.querySelector(".zadaniya5").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
  document.querySelector(".zadaniya6").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya7").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya8").style="border-bottom: none; color: #9DA7BB;"
}
function painModal6() {
  document.querySelector(".zadaniya6").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
  document.querySelector(".zadaniya5").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya7").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya8").style="border-bottom: none; color: #9DA7BB;"
}
function painModal7() {
  document.querySelector(".zadaniya7").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
  document.querySelector(".zadaniya6").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya5").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya8").style="border-bottom: none; color: #9DA7BB;"
}
function painModal8() {
  document.querySelector(".zadaniya8").style="border-bottom: 2px solid #536DFD; color: #2E2E2E;"
  document.querySelector(".zadaniya6").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya7").style="border-bottom: none; color: #9DA7BB;" 
  document.querySelector(".zadaniya5").style="border-bottom: none; color: #9DA7BB;"
}


  function videoBolim(id){
    document.querySelector('.navbar_yon').style="display:none"
  setId(id)  
  }

  useEffect(()=>{
    axios.get(`${url}/course/category/`,{headers:{"Accept-Language":"en"}}).then(res=>{
      setCategory(res.data)
      axios.get(`${url}/course/subcategory/`,{headers:{"Accept-Language":"en"}}).then(res1=>{
setSubcategory(res1.data)
      })
    })

  },[])


  return (
    <div>
      <div className="youtube_bgc">
        <div className="flex_youtube">
          <div className="youtube_kotta_img">
            <div className="img_youtube_kotta">
              <img src={img_kotta} alt="" />
            </div>
            <div className="flex_logig">
              <h1 className="raspberry_pi">
                Основы программирования Raspberry Pi
              </h1>
              <div className="odtel_media_uchun">
                <h1>Основы программирования Raspberry Pi</h1>
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
            <div className="post_ava">
              <img src={img_ava} alt="" />
              <h6>Мухаммад Джумаев</h6>
              <button>Подписаться</button>
            </div>
          </div>
          {category.map(item=>{
            return(
              <div className="youtube_kichkina">
              <div className="odelniy_oyna_tepa">
                <div className="raspberry_pid">
                  <h1>
                    {item.name}
                  </h1>
                  <div className="margin_right">
                    <div className="line_height"></div>
                    <p>
                      24 ta video <br />
                      38 soat
                    </p>
                  </div>
                </div>
              </div>
              <Accordion defaultActiveKey="0">
                {subcategory.map((item2)=>{
                  if (item.id===item2.category) {
                    return(
                      <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {item2.name}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="accordion_flex">
                        <div className="accordion_img">
                          <img src={img_accordion} alt="" />
                        </div>
                        <div className="accordion_text">
                          <h6>1.1 Boshlang’ich o’zgaruvchilar haqida ma’lumot</h6>
                          <p>
                            <span>
                              <BiTime />{" "}
                            </span>
                            01:07:15
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                    <Accordion.Body>
                      <div className="accordion_flex1">
                        <div className="accordion_img">
                          <img src={img_accordion} alt="" />
                        </div>
                        <div className="accordion_text">
                          <h6>1.2 O’zgaruvchilar orasidagi farqlar</h6>
                          <p>
                            <span>
                              <BiTime />{" "}
                            </span>
                            01:07:15
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                    <Accordion.Body>
                      <div className="accordion_flex1">
                        <div className="accordion_img">
                          <img src={img_accordion} alt="" />
                        </div>
                        <div className="accordion_text">
                          <h6>1.3 Int va Float tiplari farqlari</h6>
                          <p>
                            <span>
                              <BiTime />{" "}
                            </span>
                            01:07:15
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                    <Accordion.Body>
                      <div className="accordion_flex1">
                        <div className="accordion_img">
                          <img src={img_accordion} alt="" />
                        </div>
                        <div className="accordion_text">
                          <h6>1.4 Boolean haqida to’liq ma’lumot</h6>
                          <p>
                            <span>
                              <BiTime />{" "}
                            </span>
                            01:07:15
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                    <Accordion.Body>
                      <div className="accordion_flex1">
                        <div className="accordion_img">
                          <img src={img_accordion} alt="" />
                        </div>
                        <div className="accordion_text">
                          <h6>1.5 Turli mantiqiy amallar (1-qism)</h6>
                          <p>
                            <span>
                              <BiTime />{" "}
                            </span>
                            01:07:15
                          </p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                    )
                  }
                })}
              </Accordion>
            </div>
            )
          })}


        </div>
        <div className="navbar_video">
          <div className="navbar_none">
            <div className="navbar_otish">
              <p onClick={()=>{videoBolim(1); painModal() } } className="zadaniya">Вопрос и ответ</p>
              <p onClick={()=>{videoBolim(2); painModal1()}} className="zadaniya1">Задания</p>
              <p onClick={()=>{videoBolim(3); painModal2()}} className="zadaniya2">Руководства</p>
              <p onClick={()=>{videoBolim(4); painModal3()}} className="zadaniya3">Скачать</p>
            </div>
          </div>
        </div>
        <div className="navbar_block">
          <center><div className="menu_navbar" onClick={()=>{openModal()}}>
              <TiThMenu />
            </div></center>
          <div className="navbar_yon">
            
           
            <div className="navbar_otish1">
              <p onClick={()=>{videoBolim(1); painModal5() }} className="zadaniya5">Вопрос и ответ</p>
              <p onClick={()=>{videoBolim(2); painModal6() }} className="zadaniya6">Задания</p>
              <p onClick={()=>{videoBolim(3); painModal7() }} className="zadaniya7">Руководства</p>
              <p onClick={()=>{videoBolim(4); painModal8() }} className="zadaniya8">Скачать</p>
            </div></div>
          </div>
          <div className={id===1?"show-content":"content"}><Comment/></div>
          <div className={id===2?"show-content":"content"}><Vazifa /></div>
          <div className={id===3?"show-content":"content"}><Qollamalar/></div>
          <div className={id===4?"show-content":"content"}><Scachat/></div>
      </div>
    </div>
  );
}
