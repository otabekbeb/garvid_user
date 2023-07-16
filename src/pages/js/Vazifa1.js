import React from 'react'
import '../css/vazifa1.css'
import {BsArrowDownShort} from 'react-icons/bs'

export default function Vazifa1() {
  return (
    <div className='m_vazifa_kotta'> 
        <div className="m_vazifa_scachat">
            <input type="checkbox" />
            <div className="m_zadaniya_s">
                <div className="m_scachat"><BsArrowDownShort /></div>
                <h5>Задачи по переменным.txt</h5>
            </div>
        </div>
    </div>
  )
}
