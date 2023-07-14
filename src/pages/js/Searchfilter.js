import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BiMenu } from 'react-icons/bi'
import { MdWindow } from 'react-icons/md'
import { TfiMenuAlt } from 'react-icons/tfi'
import Mon from '../img/Mon.png'
import { AiFillStar } from 'react-icons/ai'
import { HiArrowRight } from 'react-icons/hi'
import Rasp from '../img/Rasp.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import '../css/Spiska.css'
import '../css/Calibig.css'
import WWW from '../img/WWW.png'
export default function Searchfilter() {
    function Filter() {
        document.querySelector(".filter_button").classList.toggle("filter")
    }
    function windowModal() {
        document.querySelector(".kurs_cards").style = "display:flex;transition:3s"
        document.querySelector(".spiska_img_title_div").style = "display:none"
    }
    function menuModal() {
        document.querySelector(".kurs_cards").style = "display:none"
        document.querySelector(".spiska_img_title_div").style = "display:block;transition:3s"

    }
    return (
        <div>
            <div className="Filter">

                <div className="blur_blok">
                    <div className="inp_blok">
                        <input type="text" placeholder='Поиск среди моих курсов' />
                        <CiSearch className='search' />
                    </div>
                    <div className="blur">
                        <div className="icon_blok">
                            <div className="sel_blok" onClick={() => { Filter() }}>
                                <BiMenu className='menyu' />
                                <h4>Фильтр</h4>
                            </div>
                            <div className="win_men">
                                <MdWindow className='window' onClick={() => windowModal()} />
                                <TfiMenuAlt className='manu' onClick={() => menuModal()} />
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

            <div className="kurs_cards">
                <div className="kurs_card">
                    <button className='btn_das'>Dasturlash</button>
                    <img  src={Rasp} alt="" />
                    <h4>Ishlab chiquvchilar uchun AWS: ECS <br />
                        va ko'p mintaqali yuklarni <br />
                        muvozanatlash</h4>
                    <div className='star_card'>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_ib'><AiFillStar /></i>
                        <p>4.1 <span>(524)</span></p>
                    </div>
                    <div className='hajm'>
                        <h5>
                            <p>Kurs hajmi</p>
                            38 soat
                        </h5>
                        <h5>
                            <p>Kurs narxi</p>
                            5 ta bo’lim
                        </h5>
                    </div>
                    <button className='button_circle'><AiOutlineArrowRight /></button>
                </div>

                <div className="kurs_card">
                    <button className='btn_das'>Dasturlash</button>
                    <img src={Mon} alt="" />
                    <h4>Ishlab chiquvchilar uchun AWS: ECS <br />
                        va ko'p mintaqali yuklarni <br />
                        muvozanatlash</h4>
                    <div className='star_card'>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_ib'><AiFillStar /></i>
                        <p>4.1 <span>(524)</span></p>
                    </div>
                    <div className='hajm'>
                        <h5>
                            <p>Kurs hajmi</p>
                            38 soat
                        </h5>
                        <h5>
                            <p>Kurs narxi</p>
                            5 ta bo’lim
                        </h5>
                    </div>
                    <button className='button_circle'><AiOutlineArrowRight /></button>
                </div>
                <div className="kurs_card">
                    <button className='btn_das'>Dasturlash</button>
                    <img src={Mon} alt="" />
                    <h4>Ishlab chiquvchilar uchun AWS: ECS <br />
                        va ko'p mintaqali yuklarni <br />
                        muvozanatlash</h4>
                    <div className='star_card'>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_i'><AiFillStar /></i>
                        <i className='star_ib'><AiFillStar /></i>
                        <p>4.1 <span>(524)</span></p>
                    </div>
                    <div className='hajm'>
                        <h5>
                            <p>Kurs hajmi</p>
                            38 soat
                        </h5>
                        <h5>
                            <p>Kurs narxi</p>
                            5 ta bo’lim
                        </h5>
                    </div>
                    <button className='button_circle'><AiOutlineArrowRight /></button>
                </div>
                <div className="kurs_card1">
                    <i><AiOutlinePlus /></i>
                    <h4>Yangi kurs qo’shish</h4>
                </div>
            </div>

            <div className="spiska_img_title_div">
                <div className="Spiska_blok">
                    <div className="spiska">
                        <div className="spiska_display_flex">
                            <div className="spiska_img">
                                <img src={WWW} alt="" />
                            </div>
                            <div className="spiska_title_df">
                                <div className="spiska_title">
                                    <h3>Ishlab chiquvchilar uchun AWS: ECS
                                        va ko'p mintaqali yuklarni
                                        muvozanatlash</h3>
                                    <div className="star_icon_blok1">
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar />
                                        <div className="number">
                                            <h6>4.1 (524)</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="left1_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Spiska_blok">
                    <div className="spiska">
                        <div className="spiska_display_flex">
                            <div className="spiska_img">
                                <img src={WWW} alt="" />
                            </div>
                            <div className="spiska_title_df">
                                <div className="spiska_title">
                                    <h3>Ishlab chiquvchilar uchun AWS: ECS
                                        va ko'p mintaqali yuklarni
                                        muvozanatlash</h3>
                                    <div className="star_icon_blok1">
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar />
                                        <div className="number">
                                            <h6>4.1 (524)</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="left1_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Spiska_blok">
                    <div className="spiska">
                        <div className="spiska_display_flex">
                            <div className="spiska_img">
                                <img src={WWW} alt="" />
                            </div>
                            <div className="spiska_title_df">
                                <div className="spiska_title">
                                    <h3>Ishlab chiquvchilar uchun AWS: ECS
                                        va ko'p mintaqali yuklarni
                                        muvozanatlash</h3>
                                    <div className="star_icon_blok1">
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar />
                                        <div className="number">
                                            <h6>4.1 (524)</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="left1_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Spiska_blok">
                    <div className="spiska">
                        <div className="spiska_display_flex">
                            <div className="spiska_img">
                                <img src={WWW} alt="" />
                            </div>
                            <div className="spiska_title_df">
                                <div className="spiska_title">
                                    <h3>Ishlab chiquvchilar uchun AWS: ECS
                                        va ko'p mintaqali yuklarni
                                        muvozanatlash</h3>
                                    <div className="star_icon_blok1">
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar className='gold' />
                                        <AiFillStar />
                                        <div className="number">
                                            <h6>4.1 (524)</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="left1_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}