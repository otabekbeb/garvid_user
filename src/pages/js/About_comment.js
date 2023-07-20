import React from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import '../css/about_comment.css'


export default function About_comment() {
    return(
    <div>
        <h5>Рейтинг курса</h5>
 <div className="m_about_us">
    <div className="m_otsenka">
        <h1>
            4.1
        </h1>
        <div className="m_star_otsen">
            <p><AiFillStar/></p>
            <p><AiFillStar/></p>
            <p><AiFillStar/></p>
            <p><AiFillStar/></p>
            <p className='aioutlinestare'><AiOutlineStar/></p>
        </div>
        <div className="m_vsego">
            <p>Всего: 524 голоса</p>
        </div>
    </div>
    <div className="m_diagnostic_otsm">
        <div className="m_flex_line">
        <p><span><AiFillStar/></span>5</p>
        <div className="m_line_green"></div> 
        <p>100</p></div>
        <div className="m_flex_line">
        <p><span><AiFillStar/></span>4</p>
        <div className="m_line_blue"></div> 
        <p>400</p></div>
        <div className="m_flex_line">
        <p><span><AiFillStar/></span>3</p>
        <div className="m_line_yellow"></div> 
        <p>20</p></div>
        <div className="m_flex_line">
        <p><span><AiFillStar/></span>2</p>
        <div className="m_line_red"></div> 
        <p>4</p></div>
        <div className="m_flex_line">
        <p><span><AiFillStar/></span>1</p>
        <div className="m_line_pink"></div> 
        <p>0</p></div>
    </div>
 </div>
        </div>
        )
    }