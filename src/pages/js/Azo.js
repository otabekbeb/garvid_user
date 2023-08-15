import React, { useState, useEffect } from 'react'
import "../css/azo.css"
import azoimg from "../img/Ellipse.jpg"

export default function Azo() {

    //   function azobutton(){
    //     for (let i = 0; i = document.querySelectorAll("#azo_bolgan_katta_div_text_block_button").length; i++) {
    //         if(doccument.querySelectorAll("#azo_bolgan_katta_div_text_block_button"))
    //     }
    //   }
    function obuna() {
        document.querySelector('#azo_bolgan_katta_div_text_block_button').classList.toggle("obuna1")
    }
    function obuna2() {
        document.querySelector('#azo_bolgan_katta_div_text_block_button1').classList.toggle("obuna2")
    }
    const [state1, setState1] = React.useState();
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);

    return (
        <div>

            <div className="azo_bolgan_katta">
                <div className="azo_bolgan_katta_div">
                    <div className='azo_blogan_katta_img'>
                        <img src={azoimg} alt="" />
                    </div>
                    <div className="azo_bolgan_katta_div_text">
                        <div className="azo_bolgan_katta_div_text_block">
                            <h1>Diana Henry</h1>
                            <p>Java Developer, Python</p>
                        </div>
                        <button id='azo_bolgan_katta_div_text_block_button' onClick={() => obuna()} style={{ background: '#44bef1' }}><span className='obuna_olin'>Subscribed</span><span className='obuna_text'>Subscription</span></button>
                    </div>
                </div>

                <div className="azo_bolgan_katta_div">
                    <div className='azo_blogan_katta_img'>
                        <img src={azoimg} alt="" />
                    </div>
                    <div className="azo_bolgan_katta_div_text">
                        <div className="azo_bolgan_katta_div_text_block">
                            <h1>Diana Henry</h1>
                            <p>Java Developer, Python</p>
                        </div>
                        <button id='azo_bolgan_katta_div_text_block_button1' onClick={() => obuna2()} style={{ background: '#44bef1' }}><span className='obuna_olin'>Subscribed</span><span className='obuna_text'>Subscription</span></button>
                    </div>
                </div>
            </div>

        </div>

    )
}
