import React, { useState,useEffect } from 'react'
import "../css/mentorkurs.css";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Mon from "../img/Mon.png";
import { AiOutlineStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import Rasp from "../img/Rasp.png";
import { BsPlus, BsTrash3 } from "react-icons/bs";
import { LuEdit } from "react-icons/lu";
import deleteimg from "../img/Group 2.png"
import {MdClose} from "react-icons/md"
import "../css/deletModal.css"

export default function Mentorkurs() {

  function deleteModal(){
    document.querySelector(".delete_big_div").style=" display: block;"

  }
  function deletClose(){
    document.querySelector(".delete_big_div").style="display:none"

   }
   
   function Filter (){
    document.querySelector(".filter_button").classList.toggle("filter")
}
const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
    );},[]);

  return (
    <div>
      {state1==="eng"? (<div>
      <div className="delete_big_div">
            <div className="delete_text_div">
                <div className="delete_close_div"><MdClose onClick={()=>deletClose()} className="delete_icon"/></div>
                <div className="delete_img_div"><img src={deleteimg} alt="" /></div>
                <div className="delete_h1_div"><h1>Are you sure you want to delete the course?</h1></div>
                <div className="delete_p_div"><p>If you confirm the removal of the course, your request will be processed within 24 hours
and completely removed from the system.</p></div>
                <div className="delete_button_div"><button onClick={()=>deletClose()} >Cancel</button><button>Delete</button></div>
            </div>
        </div>
      <div className="Filter">
        <div className="blur_blok">
          <div className="inp_blok">
            <input type="text" placeholder="Поиск среди моих курсов" />
            <CiSearch className="search" />
          </div>
          <div className="blur">
                    <div className="icon_blok">
                        <div className="sel_blok" onClick={()=>{Filter()}}>
                            <BiMenu className='menyu' />
                            <h4>Filter</h4>
                        </div>
                        <div className="win_men">
                            <MdWindow className='window' />
                            <TfiMenuAlt className='manu' />
                        </div>
                    </div>
                    <div className="filter_button">
                        <div className="button_filter_kurs">
                       <div className='div_kurs'>FrontEnd</div>
                       <div className='div_kurs'>Backend</div>
                       <div className='div_kurs'>Modx</div>

                       </div>
                    </div>
                </div>
        </div>
      </div>
      <div className="cali_df">
        <div className="cali">
          <img src={Mon} alt="" />
          <div className="mentor_text_kurs">
            <div className="mentor_h1">AWS for Developers: ECS and Multi-Regional Load Balancing</div>
            <div className="mentor_size">
            <div>
            <div className="mentor_star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><span>4.1</span><span>(524)</span></div>
            <div className="mentor_soat_bolim">
              <div className="mentor_soat">
                <p>Course size</p>
                <h1>38 часов</h1>
              </div>
              <div className="mentor_bolim">
                <p>Course sections</p>
                <h1>5 секций</h1>
              </div>
            </div>
            </div>
            <div className="mentor_text_icon">
            <div className="mentor_kurs_icon_edit"><LuEdit/></div>
            <div onClick={()=>deleteModal()} className="mentor_kurs_icon_trash"><BsTrash3/></div>
            <div className="mentor_kurs_icon_HiArrowRight"><HiArrowRight/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="cali">
          <img src={Mon} alt="" />
          <div className="mentor_text_kurs">
            <div className="mentor_h1">AWS for Developers: ECS and Multi-Regional Load Balancing</div>
            <div className="mentor_size">
            <div>
            <div className="mentor_star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><span>4.1</span><span>(524)</span></div>
            <div className="mentor_soat_bolim">
              <div className="mentor_soat">
                <p>Course size</p>
                <h1>38 часов</h1>
              </div>
              <div className="mentor_bolim">
                <p>Course sections</p>
                <h1>5 секций</h1>
              </div>
            </div>
            </div>
            <div className="mentor_text_icon">
            <div className="mentor_kurs_icon_edit"><LuEdit/></div>
            <div onClick={()=>deleteModal()} className="mentor_kurs_icon_trash"><BsTrash3/></div>
            <div className="mentor_kurs_icon_HiArrowRight"><HiArrowRight/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="cali">
          <img src={Mon} alt="" />
          <div className="mentor_text_kurs">
            <div className="mentor_h1">AWS for Developers: ECS and Multi-Regional Load Balancing</div>
            <div className="mentor_size">
            <div>
            <div className="mentor_star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><span>4.1</span><span>(524)</span></div>
            <div className="mentor_soat_bolim">
              <div className="mentor_soat">
                <p>Course size</p>
                <h1>38 часов</h1>
              </div>
              <div className="mentor_bolim">
                <p>Course sections</p>
                <h1>5 секций</h1>
              </div>
            </div>
            </div>
            <div className="mentor_text_icon">
            <div className="mentor_kurs_icon_edit"><LuEdit/></div>
            <div onClick={()=>deleteModal()} className="mentor_kurs_icon_trash"><BsTrash3/></div>
            <div className="mentor_kurs_icon_HiArrowRight"><HiArrowRight/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="cali1">
                <div className="plus_blok">
              <BsPlus className='plus_icon'/>
                <h6>Yangi kurs qo’shish</h6>
                </div>
            </div>
      </div>
    </div>):(<div>
      <div className="delete_big_div">
            <div className="delete_text_div">
                <div className="delete_close_div"><MdClose onClick={()=>deletClose()} className="delete_icon"/></div>
                <div className="delete_img_div"><img src={deleteimg} alt="" /></div>
                <div className="delete_h1_div"><h1>Вы действительно хотите удалить курс ?</h1></div>
                <div className="delete_p_div"><p>Если вы подтвердите удаление курса, ваш запрос будет обработан в течение 24 часов 
и полностью удаляется из системы.</p></div>
                <div className="delete_button_div"><button onClick={()=>deletClose()} >Отмена</button><button>Удалить</button></div>
            </div>
        </div>
      <div className="Filter">
        <div className="blur_blok">
          <div className="inp_blok">
            <input type="text" placeholder="Поиск среди моих курсов" />
            <CiSearch className="search" />
          </div>
          <div className="blur">
                    <div className="icon_blok">
                        <div className="sel_blok" onClick={()=>{Filter()}}>
                            <BiMenu className='menyu' />
                            <h4>Фильтр</h4>
                        </div>
                        <div className="win_men">
                            <MdWindow className='window' />
                            <TfiMenuAlt className='manu' />
                        </div>
                    </div>
                    <div className="filter_button">
                        <div className="button_filter_kurs">
                       <div className='div_kurs'>FrontEnd</div>
                       <div className='div_kurs'>Backend</div>
                       <div className='div_kurs'>Modx</div>

                       </div>
                    </div>
                </div>
        </div>
      </div>
      <div className="cali_df">
        <div className="cali">
          <img src={Mon} alt="" />
          <div className="mentor_text_kurs">
            <div className="mentor_h1">AWS для разработчиков: балансировка нагрузки ECS и Multi-Regional</div>
            <div className="mentor_size">
            <div>
            <div className="mentor_star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><span>4.1</span><span>(524)</span></div>
            <div className="mentor_soat_bolim">
              <div className="mentor_soat">
                <p>Размер курса</p>
                <h1>38 часов</h1>
              </div>
              <div className="mentor_bolim">
                <p>Разделы курса</p>
                <h1>5 секций</h1>
              </div>
            </div>
            </div>
            <div className="mentor_text_icon">
            <div className="mentor_kurs_icon_edit"><LuEdit/></div>
            <div onClick={()=>deleteModal()} className="mentor_kurs_icon_trash"><BsTrash3/></div>
            <div className="mentor_kurs_icon_HiArrowRight"><HiArrowRight/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="cali">
          <img src={Mon} alt="" />
          <div className="mentor_text_kurs">
            <div className="mentor_h1">AWS для разработчиков: балансировка нагрузки ECS и Multi-Regional</div>
            <div className="mentor_size">
            <div>
            <div className="mentor_star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><span>4.1</span><span>(524)</span></div>
            <div className="mentor_soat_bolim">
              <div className="mentor_soat">
                <p>Размер курса</p>
                <h1>38 часов</h1>
              </div>
              <div className="mentor_bolim">
                <p>Разделы курса</p>
                <h1>5 секций</h1>
              </div>
            </div>
            </div>
            <div className="mentor_text_icon">
            <div className="mentor_kurs_icon_edit"><LuEdit/></div>
            <div onClick={()=>deleteModal()} className="mentor_kurs_icon_trash"><BsTrash3/></div>
            <div className="mentor_kurs_icon_HiArrowRight"><HiArrowRight/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="cali">
          <img src={Mon} alt="" />
          <div className="mentor_text_kurs">
            <div className="mentor_h1">AWS для разработчиков: балансировка нагрузки ECS и Multi-Regional</div>
            <div className="mentor_size">
            <div>
            <div className="mentor_star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><span>4.1</span><span>(524)</span></div>
            <div className="mentor_soat_bolim">
              <div className="mentor_soat">
                <p>Размер курса</p>
                <h1>38 часов</h1>
              </div>
              <div className="mentor_bolim">
                <p>Разделы курса</p>
                <h1>5 секций</h1>
              </div>
            </div>
            </div>
            <div className="mentor_text_icon">
            <div className="mentor_kurs_icon_edit"><LuEdit/></div>
            <div onClick={()=>deleteModal()} className="mentor_kurs_icon_trash"><BsTrash3/></div>
            <div className="mentor_kurs_icon_HiArrowRight"><HiArrowRight/></div>
            </div>
            </div>
          </div>
        </div>
        <div className="cali1">
                <div className="plus_blok">
              <BsPlus className='plus_icon'/>
                <h6>Yangi kurs qo’shish</h6>
                </div>
            </div>
      </div>
    </div>)}
    
    </div>
  );
}
