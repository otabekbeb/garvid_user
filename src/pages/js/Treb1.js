import React from 'react';
import '../css/treb1.css'


export default function About_comment() {
    return(
    <div>
        <h5>Требования</h5>
        <div className="m_treb_big">
            <div className="m_treb_small">
                <div className="m_div_circle"></div>
                <p>Знание компьютерных уроков</p>
            </div>
            <div className="m_treb_small">
                <div className="m_div_circle"></div>
                <p>Интерес к программированию</p>
            </div>
            <div className="m_treb_small">
                <div className="m_div_circle"></div>
                <div className="m_treb_text">
                <p>Знать английский</p>
                </div>
               
            </div>
        </div>
        <div className="m_treb_big2">
            <div className="m_treb_small">
                <div className="m_div_circle"></div>
                <p>Персональный ноутбук</p>
            </div>
            <div className="m_treb_small">
                <div className="m_div_circle"></div>
                <p>Базовая Java</p>
            </div>
        </div>
        </div>
        )
    }