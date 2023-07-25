import React from 'react'
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


export default function Ourcourse() {

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
    return (
        <div>
          <Usernavbar/>
            <div className="gray_navbar">
                <div className="course_inp">
                    <h1>Bizning kurslar</h1>
                    <div className="df_inp">
                        <input type="text" name="" id="" placeholder='Qanday kurs o’rganmoqchisiz ?' />
                        <i><BiSearch /></i>
                    </div>
                </div>
                <div className="nav_tab">
                    <ul className='nav_menu'>
                        <li className='nav_item'>Barchasi</li>
                        <li className='nav_item'>Dasturlash</li>
                        <li className='nav_item'>Dizayn</li>
                        <li className='nav_item'>Marketing</li>
                        <li className='nav_item'>Biznes</li>
                        <li className='nav_item'>Salomatlik</li>
                        <li className='nav_item'>Menejment</li>
                        <li className='nav_item'>Buxgalteriya</li>
                        <li className='nav_item'>Xavfsizlik</li>
                    </ul>
                    <div className="burger">
                        <GiHamburgerMenu onClick={() => menuModal()} className='bar' />
                        <VscChromeClose onClick={() => menuModalClone()} className='bar_clone' />
                    </div>
                    <ul className='burger_media'>
                        <div className="burger_media_big_div">
                        <div className='burger_media_div'>
                        <li className='block_item'>Barchasi</li>
                        <li className='block_item'>Dasturlash</li>
                        <li className='block_item'>Dizayn</li>
                        <li className='block_item'>Marketing</li>
                        <li className='block_item'>Biznes</li>
                        <li className='block_item'>Salomatlik</li>
                        <li className='block_item'>Menejment</li>
                        <li className='block_item'>Buxgalteriya</li>
                        <li className='block_item'>Xavfsizlik</li>
                        </div>
                        <div className='burger_media_div'>
                        <li className="block_item">Barchasi</li>
                        <li className="block_item">Game dashturlash</li>
                        <li className="block_item">Web dasturlash</li>
                        <li className="block_item">Desktop dasturlash</li>
                        <li className="block_item">Desktop dasturlash</li>
                        <li className="block_item">Mobil dasturlash</li>
                        </div>
                        </div>
                    </ul>
                </div>
            </div>


            <header className="curs">
                <nav className="nav_ul">
                    <ul className="bottom_ul">
                        <li className="bottom_li">Barchasi</li>
                        <li className="bottom_li">Game dashturlash</li>
                        <li className="bottom_li">Web dasturlash</li>
                        <li className="bottom_li">Desktop dasturlash</li>
                        <li className="bottom_li">Desktop dasturlash</li>
                        <li className="bottom_li">Mobil dasturlash</li>
                    </ul>
                </nav>
                <div className="bottom_line"></div>
                <div className="curs_cards">
                    <button className="curs_filter" onClick={() => filter()}>
                        Filter{" "}
                        <i>
                            <HiOutlineChevronUp className='' />
                        </i>
                    </button>
                    <div className="filter_card">
                    <div className="filter_padding">
                        <h5>Tartiblash turlari</h5>
                        <p><input type="checkbox" name="" id="" /> Yangi kurslar</p>
                        <p><input type="checkbox" name="" id="" /> Ko’p ko’rilganlar</p>
                        <p><input type="checkbox" name="" id="" /> Eng baland narx</p>
                        <p><input type="checkbox" name="" id="" /> Yangi kurslar</p>
                        <p><input type="checkbox" name="" id="" /> Yangi kurslar</p>
                        <p><input type="checkbox" name="" id="" /> Yangi kurslar</p>
                    </div>
                    <div className="filter_padding">
                    <h5>Reyting bo’yicha</h5>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> 5.0</p>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar className='none_star'/></div> 4.0 dan yuqori</p>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar className='none_star'/><AiFillStar className='none_star'/></div> 3.0 dan yuqori</p>
                        <p><input type="checkbox" name="" id="" /> <div className="filter_star"><AiFillStar/><AiFillStar/><AiFillStar className='none_star'/><AiFillStar className='none_star'/><AiFillStar className='none_star'/></div> 2.0 dan past</p>
                    </div>
                    </div>
                </div>




                <div className="filter_kurs">
              <div className="filter_course">
                <img src={img} alt="" />
                <div className="filter_card_padding">
                  <h4>Raspberry Pi dasturlash <br />
asoslari</h4>
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
                    </h5>
                    <h5>
                      <p>Course price</p>
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight/>
                </button>
              </div>

              <div className="filter_course">
                <img src={img} alt="" />
                <div className="filter_card_padding">
                  <h4>Raspberry Pi dasturlash <br />
asoslari</h4>
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
                    </h5>
                    <h5>
                      <p>Course price</p>
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight/>
                </button>
              </div>

              <div className="filter_course">
                <img src={img} alt="" />
                <div className="filter_card_padding">
                  <h4>Raspberry Pi dasturlash <br />
asoslari</h4>
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
                    </h5>
                    <h5>
                      <p>Course price</p>
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight/>
                </button>
              </div>
        </div>
            </header>
<futer/>
        </div>
    )
}
