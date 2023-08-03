import React from 'react'
import '../css/Help2.css'
import { AiOutlineLeft } from 'react-icons/ai'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar' 

export default function UserHelp() {
    return (
        <div>
      <Usernavbar />
        <h2 className='Savol'>Answers to frequently asked questions</h2>
            <div className="big_svl">
                <div className="orqaga">
                    <div className="orqaga_icon">
                       <a href="/Help"><button className='nazad_bt'>   <AiOutlineLeft /> back</button></a>
                    </div>
                </div>
                <div className="mod_svg">
                   <a href="/User_help2" style={{color:'black'}}>
                   <div className="text_mod">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, doloremque.</p>
                    </div>
                   </a>
                   <a href="/User_help2" style={{color:'black'}}>
                   <div className="text_mod">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aperiam.</p>
                    </div>
                   </a>
                   <a href="/User_help2" style={{color:'black'}}>
                   <div className="text_mod">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sint.</p>
                    </div>
                   </a>
                </div>
            </div>
      <Futer />

        </div>
    )
}
