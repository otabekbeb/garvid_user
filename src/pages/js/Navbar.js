import React from 'react'
import Pdp from '../img/Pdp.png'
import Elp from '../img/Ellipse.jpg'
import '../css/Navbar.css'
import {BiChevronDown} from 'react-icons/bi'
export default function Navbar() {
    
    function Down(){
        document.querySelector(".profil_menu_modal").classList.toggle("db")
    }
       
    return (
    <div>
        <div className="Navbar_df_flex">
            <div className="img_navbar_img">
                <img src={Pdp} alt="" />
            </div>
            <div className="profil_profil">
                <div className="profil_emile">
                <div className="profil_img">
                    <img src={Elp} alt="" />
                </div>
                <div className="profil_text">
                    <h3>To’rayev Ja’farbek</h3>
                    <p>Oddiy foydalanuvchi</p>
                    
                </div>
                </div>
                <BiChevronDown onClick={()=>{Down()}}  className='Down_icon'/>
                <div className="profil_menu_modal">
                    awdadwadwad
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
