import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import img_svg from '../img/Mask Group.svg'
import img_down from '../img/download.svg'
import '../css/prover.css'


export default function Youtube1() {
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
      );},[]);
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
                    <h4>Raspberry Pi dasturlash asoslari</h4>
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
                    <h4>Raspberry Pi dasturlash asoslari</h4>
                </div>
            </div>
            <div className="m_3chidiv"></div>
        </div>
    </div>)}
    
    </div>
)


}  