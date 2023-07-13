import React from 'react'
import img_kotta from '../img/Rectangle.png'
import img_ava from '../img/Ellipse.png'
import img_accordion from '../img/Rectangle 14.1.svg'
import { AiFillStar } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import '../css/youtube1.css'
import Navbar from '../js/Navbar'
import Vazifa from '../js/Vazifa'
import { BiTime } from 'react-icons/bi'
import '../css/youtube1.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Youtube1() {
  return (
    <div>


      <div className='youtube_bgc'>
        <div className="flex_youtube">
          <div className="youtube_kotta_img">
            <div className="img_youtube_kotta">
              <img src={img_kotta} alt="" />
            </div>
            <div className="flex_logig">
              <h1 className='raspberry_pi'>Основы программирования Raspberry Pi</h1>
              <div className="odtel_media_uchun">
                <h1>Основы программирования Raspberry Pi</h1>
                <div className="flex_star_p">
                  <div className="flex_star2">
                    <p><AiFillStar /></p>
                    <p><AiFillStar /></p>
                    <p><AiFillStar /></p>
                    <p><AiFillStar /></p>
                  </div>
                  <div className="flex_star12">
                    <p><AiFillStar /></p>
                  </div>
                  <p className='p_4_1_5245'>4.1 <span>(524)</span></p></div>
              </div>
              <div className="flex_star">
                <p><AiFillStar /></p>
                <p><AiFillStar /></p>
                <p><AiFillStar /></p>
                <p><AiFillStar /></p>
              </div>
              <div className="flex_star1">
                <p><AiFillStar /></p>
              </div>
              <p className='p_4_1_524'>4.1 <span>(524)</span></p>
              <div className="buttons_next_back">
                <button className='button_back'><BsChevronLeft /><p>Предыдущий урок</p></button>
                <button><p>Следующий урок </p><BsChevronRight />  </button>
              </div>
            </div>
            <div className="post_ava">
              <img src={img_ava} alt="" />
              <h6>Мухаммад Джумаев</h6>
              <button>Подписаться</button>
            </div>
          </div>
          <div className="youtube_kichkina">
            <div className="odelniy_oyna_tepa">
              <div className="raspberry_pid">
                <h1>Программирование на малине Pi <br /> основы</h1>
                <div className="margin_right"><div className="line_height"></div>
                  <p>24 ta video <br />
                    38 soat
                  </p></div>

              </div>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Dasturlashga kirish va o’rnatish jarayoni</Accordion.Header>
                <Accordion.Body>
                  <div className="accordion_flex">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.1 Boshlang’ich o’zgaruvchilar haqida ma’lumot</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.2 O’zgaruvchilar orasidagi farqlar</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.3  Int va Float tiplari farqlari</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.4  Boolean haqida to’liq ma’lumot</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.5  Turli mantiqiy amallar (1-qism)</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Dasturda oddiy amallar bilan ishlash</Accordion.Header>
                <Accordion.Body>
                  <div className="accordion_flex">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.1 Boshlang’ich o’zgaruvchilar haqida ma’lumot</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.2 O’zgaruvchilar orasidagi farqlar</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>1.3  Int va Float tiplari farqlari</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. OOP dasturlash asoslari</Accordion.Header>
                <Accordion.Body>
                  <div className="accordion_flex">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>3.1 OOP dasturlashga kirish</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>3.2 OPP da class lar tushunchasi
                        haqida</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>3.3 Polifarmizim haqida ma’lumot</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
                <Accordion.Body>
                  <div className="accordion_flex1">
                    <div className="accordion_img"><img src={img_accordion} alt="" /></div>
                    <div className="accordion_text">
                      <h6>3.4 Inkapsulyatsiya haqida ma’lumot</h6>
                      <p><span><BiTime /> </span>01:07:15</p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <Vazifa />
    </div>
  )
}
