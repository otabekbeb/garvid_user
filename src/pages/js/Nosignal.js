import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import '../css/Nosignal.css'
export default function Nosignal() {
  return (
    <div>
        <div className="No_div">
              <h1>Курс не куплен</h1>
              <div className="pas_icon">
                <AiOutlineArrowDown className='pas'/>
                <AiOutlineArrowDown className='pas'/>
                <AiOutlineArrowDown className='pas'/>
                
              </div>
              <button>Покупка курса </button>
        </div>
    </div>
  )
}
