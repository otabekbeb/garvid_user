import React from 'react'
import Pdp from '../img/Pdp.png'
import Elp from '../img/Ellipse.jpg'
import '../css/Navbar.css'
import { BiChevronDown } from 'react-icons/bi'
export default function Navbar() {

    function Down() {
        document.querySelector(".profil_menu_modal").classList.toggle("db")

 }
    function Foto() {
        document.querySelector(".profil_name").classList.toggle("dode");
        document
    }
    return (
        <div>
            <div className="navbar">
                <div className="Navbar_df_flex">

                    <div className="img_navbar_img">
                        <img src={Pdp} alt="" />
                    </div>
                    <div className="profil_profil">
                        <div className="profil_emile">
                            <div className="profil_img" onClick={() => { Foto() }}>
                                <img src={Elp} alt="" />
                            </div>
                            <div className="profil_text">
                                <h3>To’rayev Ja’farbek</h3>
                                <p>Oddiy foydalanuvchi</p>

                            </div>
                        </div>
                        <BiChevronDown  onClick={() => { Down() }} className='Down_icon' />
                        <div className="profil_menu_modal">
                            <div className="Front_div">
                                <h3>Front End Kursi</h3>
                            </div>
                            <div className="Modx_div">
                                <h3>Modx Kursi</h3>
                            </div>
                            <div className="Bac_div">
                                <h3>Backend Kursi</h3>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="profil_name">
                    <div className="profil_text_name">
                        <div className="tex_name">
                            <h3>To’rayev Ja’farbek</h3>
                            <p>Oddiy foydalanuvchi</p>
                        </div>
                        <img className='elp_img_profil' src={Elp} alt="" />
                    </div>
                    <div className="profil_menu">
                        <div className="Front_div">
                            <h3>Front End Kursi</h3>
                        </div>
                        <div className="Modx_div">
                            <h3>Modx Kursi</h3>
                        </div>
                        <div className="Bac_div">
                            <h3>Backend Kursi</h3>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
