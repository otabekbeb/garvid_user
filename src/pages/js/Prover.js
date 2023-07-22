import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import img_svg from '../img/Mask Group.svg'
import img_down from '../img/download.svg'
import {AiFillStar, AiOutlineShareAlt} from 'react-icons/ai'
import '../css/prover.css'
import About_us from '../js/About_us'
import About_comment from '../js/About_comment'
import Treb from '../js/Treb1'
import Accordion1 from '../js/Accordion1'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Youtube1() {
    const [id, setId] = useState(1);
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
      );},[]);
      function videoBolim(id) {
        setId(id);
      }
return(
    <div>
        {state1==="en" ?(<div>
        <div className="m_3div_kotta">
            <div className="m_1chidiv">
                <div className="m_input_search">
                    <input type="text" placeholder='Какой курс ищите ?'/> <BiSearch/>
                </div>
                <div className="m_heshteg">
                    <div className="m_little_hsh">
                    #Design
                    </div>
                    <div className="m_little_hsh">
                    #Marketing
                    </div>
                    <div className="m_little_hsh">
                    #Business
                    </div>
                    <div className="m_little_hsh">
                        #Web
                    </div>
                  
                </div>
                <div className="m_heshteg2">
                <div className="m_little_hsh">
                #Bugaltery
                    </div>
                    <div className="m_little_hsh">
                        #Front end
                    </div>
                    <div className="m_little_hsh">
                    #Programming
                    </div>
                </div>
                <div className="m_program">
                    <h6>Programming</h6>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Creating a RESTful API practice tasks on</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="m_2chidiv">
                <div className="m_glav_img_page">
                    <img src={img_down} alt="" />
                </div>
                <div className="m2chi_tex">
                   <div className="m_block_uchun">
                    <h5>Основы программирования на Raspberry Pi</h5>
                    <div className="m_star_flex">
                        <p><AiFillStar/></p>
                        <p><AiFillStar/></p>
                        <p><AiFillStar/></p>
                        <p><AiFillStar/></p>
                        <p className='m_grey_star'><AiFillStar/></p>
                        <p className="m_41">4.1 <span>(524)</span></p>
                    </div></div>
                    <div className="m_button_yon">
                        <button><span><AiOutlineShareAlt/></span> Поделиться</button>
                    </div>
                </div>
                <div className="m_otish_div">
                    <div className="m_about_course" onClick={()=>videoBolim(1)}>
                    О курсе
                    </div>
                    <div className="m_about_course" onClick={()=>videoBolim(2)}>
                    Комментарии
                    </div>
                    <div className="m_about_course" onClick={()=>videoBolim(3)}>
                    Требования
                    </div>
                    <div className="m_about_course" onClick={()=>videoBolim(4)}>
                    Чему вы научитесь
                    </div>
                </div>
                <div className={id === 1 ? "show-content" : "content"}>
          <About_us />
        </div>
        <div className={id === 2 ? "show-content" : "content"}>
          <About_comment />
        </div>
        <div className={id === 3 ? "show-content" : "content"}>
          <Treb />
        </div>
        <div className={id === 4 ? "show-content" : "content"}>
          <Accordion1 />
        </div>
            </div>
            <div className="m_3chidiv">
                <div className="m_programmirovan">
                Программирование
                </div>
                <div className="price_course">
                    <div className="course_price">
                        <p>Стоимость курса</p>
                        <h2>3000 <span>₽</span></h2>
                    </div>
                    <div className="course_price1">
                        <p>Общее время курса</p>
                        <h2>38 <span>часов</span></h2>
                    </div>
                </div>

                <div className="course_stolb">
                    <h6>Разделы курса:</h6>
                    <div className="m_course_accordion">
                    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                    </div>
                </div>
                <div className="m_course_button">
                    <button>Купить полный курс</button>
                </div>
            </div>
        </div>
    </div>):(<div>
        <div className="m_3div_kotta">
            <div className="m_1chidiv">
                <div className="m_input_search">
                    <input type="text" placeholder='Какой курс ищите ?'/> <BiSearch/>
                </div>
                <div className="m_heshteg">
                    <div className="m_little_hsh">
                        #Дизайн
                    </div>
                    <div className="m_little_hsh">
                        #Маркетинг
                    </div>
                    <div className="m_little_hsh">
                        #Бизнес
                    </div>
                    <div className="m_little_hsh">
                        #Web
                    </div>
                  
                </div>
                <div className="m_heshteg2">
                <div className="m_little_hsh">
                        #Бугалтерия
                    </div>
                    <div className="m_little_hsh">
                        #Front end
                    </div>
                    <div className="m_little_hsh">
                        #Прогроммирование
                    </div>
                </div>
                <div className="m_program">
                    <h6>Прогроммирование</h6>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                    <div className="m_program_flex">
                        <div className="m_program_img">
                        <img src={img_svg} alt="" /></div>
                        <div className="m_program_text">
                            <p>Создание RESTful API практические задания на</p> 
                            <span>Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .</span>
                        <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="m_2chidiv">
                <div className="m_glav_img_page">
                    <img src={img_down} alt="" />
                </div>
                <div className="m2chi_tex">
                    <h5>Основы программирования на Raspberry Pi </h5>
                </div>
            </div>
            <div className="m_3chidiv"></div>
        </div>
    </div>)}
    

   
    </div>

)}