import React, { useEffect, useState } from 'react'
import "../css/Ourcourse.css"
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import { HiOutlineChevronUp } from "react-icons/hi"
import { AiFillStar } from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import img from '../../pages/img/download.png'
import Usernavbar from '../js/Usernavbar'
import Futer from '../js/Futer'
import axios from 'axios';
import url from './Host';





export default function Ourcourse() {
  const [main,setMain]=useState([])

    function filter() {
        document.querySelector(".filter_card").classList.toggle("togl");
    }

    function menuModal() {
        document.querySelector(".burger_media").style = "display:block  !important;"
        document.querySelector(".bar").style = "display:none !important;"
        document.querySelector(".bar_clone").style = "display:block !important;"
    }
    function menuModalClone() {
        document.querySelector(".burger_media").style = "display:none ;"
        document.querySelector(".bar_clone").style = "display:none !important;"
        document.querySelector(".bar").style = "display:block !important;"
    }
    
    useEffect(()=>{
      axios.get(`${url}/course/main/`).then(res=>{
        setMain(res.data)
      })
    },[])

    return (
        <div>
          <Usernavbar/>
            <div className="gray_navbar">
                <div className="course_inp">
                    <h1>Our courses</h1>
                    <div className="df_inp">
                        <input type="text" name="" id="" placeholder='What course do you want to study?' />
                        <i><BiSearch /></i>
                    </div>
                </div>
                <div className="nav_tab">
                    <ul className='nav_menu'>
                        <li className='nav_item'>Everything</li>
                        <li className='nav_item'>Programming</li>
                        <li className='nav_item'>Design</li>
                        <li className='nav_item'>Marketing</li>
                        <li className='nav_item'>Business</li>
                        <li className='nav_item'>

Health</li>
                        <li className='nav_item'>Management</li>
                        <li className='nav_item'>Accounting</li>
                        <li className='nav_item'>Security</li>
                    </ul>
                    <div className="burger">
                        <GiHamburgerMenu onClick={() => menuModal()} className='bar' />
                        <VscChromeClose onClick={() => menuModalClone()} className='bar_clone' />
                    </div>
                    <ul className='burger_media'>
                        <div className="burger_media_big_div">
                        <div className='burger_media_div'>
                        <li className='block_item'>Everything</li>
                        <li className='block_item'>Programming</li>
                        <li className='block_item'>Design</li>
                        <li className='block_item'>Marketing</li>
                        <li className='block_item'>Business</li>
                        <li className='block_item'>Health</li>
                        <li className='block_item'>Management</li>
                        <li className='block_item'>Accounting</li>
                        <li className='block_item'>Security</li>
                        </div>
                        <div className='burger_media_div'>
                        <li className="block_item">Everything</li>
                        <li className="block_item">Game programming</li>
                        <li className="block_item">Web programming</li>
                        <li className="block_item">Desktop programming</li>
                        <li className="block_item">Desktop programming</li>
                        <li className="block_item">Mobil programming</li>
                        </div>
                        </div>
                    </ul>
                </div>
            </div>


            <header className="curs">
                <nav className="nav_ul">
                    <ul className="bottom_ul">
                        <li className="bottom_li">Everything</li>
                        <li className="bottom_li">Game dashturlash</li>
                        <li className="bottom_li">Web programming</li>
                        <li className="bottom_li">Desktop programming</li>
                        <li className="bottom_li">Desktop programming</li>
                        <li className="bottom_li">Mobil programming</li>
                    </ul>
                </nav>
                <div className="bottom_line"></div>
                <div className="curs_cards">
                    <button className="curs_filter" onClick={() => filter()}>
                        Filter{" "}
                        <i>
                            <HiOutlineChevronUp />
                        </i>
                    </button>
                    <div className="filter_card">
                    <div className="filter_padding">
                        <h5>Sorting 

types</h5>
                        <p><input type="checkbox" name="" id="" /> New courses</p>
                        <p><input type="checkbox" name="" id="" /> Most viewed</p>
                        <p><input type="checkbox" name="" id="" /> The highest price</p>
                        <p><input type="checkbox" name="" id="" /> New courses</p>
                        <p><input type="checkbox" name="" id="" /> New courses</p>
                        <p><input type="checkbox" name="" id="" /> New courses</p>
                    </div>
                    <div className="filter_padding">
                    <h5>By rating</h5>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> 5.0</p>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar className='none_star'/></div> Above 4.0</p>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar className='none_star'/><AiFillStar className='none_star'/></div> Above 3.0</p>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar className='none_star'/><AiFillStar className='none_star'/><AiFillStar className='none_star'/></div>Above 2.0</p>
                    </div>
                    </div>
                </div>




                <div className="filter_kurs">
               {main.map(item=>{
                return(
                  <div className="filter_course" onClick={()=>{window.location="/proverr2";localStorage.setItem("filtrid",item.id)}}>
                  <img src={item.image} alt="" />
                  <div className="filter_card_padding">
                    <h4>{item.name}</h4>
                    <div className="star_card">
                      <i className="star_i">
                        <AiFillStar />
                      </i>
                      <i className="star_i">
                        <AiFillStar />
                      </i>
                      <i className="star_i">
                        <AiFillStar />
                      </i>
                      <i className="star_i">
                        <AiFillStar />
                      </i>
                      <i className="star_ib">
                        <AiFillStar />
                      </i>
                      <p>
                        4.1 <span>(524)</span>
                      </p>
                    </div>
                    <div className="hajm">
                      <h5>
                        <p>Course size</p>
                        <h5>{item.planned_time}</h5>
                      </h5>
                      <h5>
                        <p>Course price</p>
                        <h5>{item.price}</h5>
                      </h5>
                    </div>
                  </div>
                  
                  <button className="button_circle">
                    <AiOutlineArrowRight onClick={()=>{window.location="/proverr2";localStorage.setItem("filtrid",item.id)}}/>
                  </button>
                </div>
                )
               })}


               </div>
            </header>
<futer/>
        </div>
    )
}
