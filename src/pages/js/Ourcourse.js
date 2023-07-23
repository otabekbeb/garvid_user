import React from 'react'
import "../css/Ourcourse.css"
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'
import { HiOutlineChevronUp } from "react-icons/hi"



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
                    <div className="filter_card"></div>
                </div>
            </header>

        </div>
    )
}
