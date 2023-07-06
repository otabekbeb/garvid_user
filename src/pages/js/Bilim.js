import React from 'react'
import '../css/Bilim.css'
import Sas from '../img/Sas.png'
import Htmlimg from '../img/Html.png'
import Bootstrap from '../img/Bootstrap.png'

export default function Bilim() {
  return (
    <div>
     <div className="program">
        <div className="ptogram_tutorial">
            <div className="html_code_tutoril">
            <div className="html_div">
                <div className="html_red">
                    <img src={Htmlimg} alt="" />
                </div>  
            </div>
            <div className="text_html">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit 
amet, consectetur ar.</p>
            </div>
            </div>
            <div className="html_code_tutoril">
            <div className="html_div">
                <div className="sas_red">
                    <img src={Sas} alt="" />
                </div>  
            </div>
            <div className="text_html">
            <h3>Sass</h3>
            <p>Lorem ipsum dolor sit 
amet, consectetur ar.</p>
            </div>
            </div>
            <div className="html_code_tutoril">
            <div className="html_div">
                <div className="bootstrap_red">
                    <img src={Bootstrap} alt="" />
                </div>  
            </div>
            <div className="text_html">
            <h3>Bootstrap</h3>
            <p>Lorem ipsum dolor sit 
amet, consectetur ar.</p>
            </div>
            </div>
            <div className="html_code_tutoril">
            <div className="html_div">
                <div className="bootstrap_red">
                    <img src={Bootstrap} alt="" />
                </div>  
            </div>
            <div className="text_html">
            <h3>GIT</h3>
            <p>Lorem ipsum dolor sit 
amet, consectetur ar.</p>
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}
