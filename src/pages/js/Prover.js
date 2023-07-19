import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import img_svg from '../img/Mask Group.svg'
import img_down from '../img/download.svg'
import {AiFillStar, AiOutlineShareAlt} from 'react-icons/ai'
import '../css/prover.css'
import About_comment from '../js/About_comment'


export default function Youtube1() {
    const [id, setId] = useState(1);
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
      );},[]);
      function videoBolim(id) {
        setId(id);
      }
return(
    <div>
        {state1==="eng" ?(<div>
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
                    <div className="m_about_course">
                    Комментарии
                    </div>
                    <div className="m_about_course">
                    Требования
                    </div>
                    <div className="m_about_course">
                    Чему вы научитесь
                    </div>
                </div>
               
            </div>
            <div className="m_3chidiv"></div>
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
    

    <div className={id === 1 ? "show-content" : "content"}>
          <About_comment />
        </div>
        <div className={id === 2 ? "show-content" : "content"}>
          <About_comment />
        </div>
        <div className={id === 3 ? "show-content" : "content"}>
          <About_comment />
        </div>
        <div className={id === 4 ? "show-content" : "content"}>
          <About_comment />
        </div>
    </div>
)


}  