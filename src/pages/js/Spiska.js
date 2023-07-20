import React, { useState,useEffect } from 'react'
import '../css/Spiska.css'
import { AiFillStar } from 'react-icons/ai'
import { HiArrowRight } from 'react-icons/hi'
import WWW from '../img/WWW.png'
export default function Spiska() {
    const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
    );},[]);
    return (
        <div>
            {state1==="eng" ?(<div>
            <div className="spiska_img_title_div">
            <div className="Spiska_blok">
                <div className="spiska">
                    <div className="spiska_display_flex">
                        <div className="spiska_img">
                            <img src={WWW} alt="" />
                        </div>
                        <div className="spiska_title_df">
                        <div className="spiska_title">
                            <h3>AWS for Developers: ECS
                                and inter-regional loads
                                balancing</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
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
                            <h3>AWS for Developers: ECS
                                and inter-regional loads
                                balancing</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
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
                            <h3>AWS for Developers: ECS
                                and inter-regional loads
                                balancing</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
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
                            <h3>AWS for Developers: ECS
                                and inter-regional loads
                                balancing</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
                                    <HiArrowRight />
                                </div>
                                </div>
                    </div>
                </div>
            </div>
            </div>
        </div>):(<div>
            <div className="spiska_img_title_div">
            <div className="Spiska_blok">
                <div className="spiska">
                    <div className="spiska_display_flex">
                        <div className="spiska_img">
                            <img src={WWW} alt="" />
                        </div>
                        <div className="spiska_title_df">
                        <div className="spiska_title">
                            <h3>AWS для разработчиков: ECS
                                и межрегиональные нагрузки
                                балансировка</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
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
                            <h3>AWS для разработчиков: ECS
                                и межрегиональные нагрузки
                                балансировка</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
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
                            <h3>AWS для разработчиков: ECS
                                и межрегиональные нагрузки
                                балансировка</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
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
                            <h3>AWS для разработчиков: ECS
                                и межрегиональные нагрузки
                                балансировка</h3>
                            <div className="star_icon_blok">
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
                        <div className="left_icon">
                                    <HiArrowRight />
                                </div>
                                </div>
                    </div>
                </div>
            </div>
            </div>
        </div>)}
        
        </div>
    )
}
