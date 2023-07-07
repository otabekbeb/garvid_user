import React from 'react'
import "../css/azo.css"
import azoimg from "../img/Ellipse.jpg"

export default function azo() {

    function obuna(){
        document.querySelector("#azo_bolgan_katta_div_text_block_button").classList.toggle("button_obuna")
        document.querySelector(".obuna_text").classList.toggle("db")   
        document.querySelector(".obuna_olin").classList.toggle("dn")
    }

  return (
    <div>
    <div className="azo_bolgan_katta">
        <div className="azo_bolgan_katta_div">
            <div className='azo_blogan_katta_img'>
            <img src={azoimg} alt="" />
            </div>
            <div className="azo_bolgan_katta_div_text">
                <div className="azo_bolgan_katta_div_text_block">
                    <h1>Диана Генри</h1>
                    <p>Разработчик Java, Python</p>
                </div>
                <button  onClick={()=>obuna()} id='azo_bolgan_katta_div_text_block_button'><span className='obuna_olin'>Подписались</span><span className='obuna_text'>Подписка</span></button>
            </div>
        </div>
    </div>
    </div>
  
)}
