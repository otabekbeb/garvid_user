import React, { useState,useEffect } from 'react'
import '../css/Bilim.css'
import Sas from '../img/Sas.png'
import Htmlimg from '../img/Html.png'
import Bootstrap from '../img/Bootstrap.png'
import Sprint from '../img/Spring.png'
import Git from '../img/Git.png'
import Oragle from '../img/Oragle.png'

export default function Bilim() {

    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
      );},[]);

  return (
<div>
    {state1 ==="en"?(<div>
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
               <h3 className='react_bootstrap' >react-Bootstrap</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Git} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>GIT</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="sp_red">
                       <img src={Sprint} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3 className='react_bootstrap' >Spring</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Oragle} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>Oracle</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
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
               <h3 className='react_bootstrap' >react-Bootstrap</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Git} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>GIT</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="sp_red">
                       <img src={Sprint} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3 className='react_bootstrap' >Spring</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Oragle} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>Oracle</h3>
               <p>Lorem ipsum dolor sit 
   amet, consectetur ar.</p>
               </div>
               </div>
           </div>
        </div>
       </div>):(<div>
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
               <p>Лорем ипсум долар сит аметб консектур</p>
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
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="bootstrap_red">
                       <img src={Bootstrap} alt="" />
                   </div>  
               </div>
               <div className="text_html1">
               <h3>Bootstrap</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="bootstrap_red">
                       <img src={Bootstrap} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3 className='react_bootstrap' >react-Bootstrap</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Git} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>GIT</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="sp_red">
                       <img src={Sprint} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3 className='react_bootstrap' >Spring</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Oragle} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>Oracle</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="html_red">
                       <img src={Htmlimg} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>HTML</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
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
               <p>Лорем ипсум долар сит аметб консектур</p>
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
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="bootstrap_red">
                       <img src={Bootstrap} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3 className='react_bootstrap' >react-Bootstrap</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Git} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>GIT</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="sp_red">
                       <img src={Sprint} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3 className='react_bootstrap' >Spring</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
               <div className="html_code_tutoril">
               <div className="html_div">
                   <div className="git_red">
                       <img src={Oragle} alt="" />
                   </div>  
               </div>
               <div className="text_html">
               <h3>Oracle</h3>
               <p>Лорем ипсум долар сит аметб консектур</p>
               </div>
               </div>
           </div>
        </div>
       </div>)}
    </div>
  )
}
