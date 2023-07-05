import React from 'react'
import '../css/Pdp.css'
import {CiSearch} from 'react-icons/ci'
import {BiMenu} from 'react-icons/bi'
import {MdWindow} from 'react-icons/md'
import {TfiMenuAlt} from 'react-icons/tfi'
export default function Pdp() {
  return (
    <div>
        <div className="gray_blok">
        <div className="kurs_blok">
            <div className="mening_kursm">
                <h2>Мои курсы</h2>
            </div>
            <div className="bilimlar">
                <h2>Мои усвоенные знания</h2>
            </div>
            <div className="Sertifikat">
                <h2>Мои сертификаты</h2>
            </div>
            <div className="Azomentorlarim">
                <h2>Мои наставники-члены</h2>
            </div>
        </div>
        </div>
        <div className="Filter">
            <div className="blur_blok">
            <div className="inp_blok">
                <input type="text"  placeholder='Поиск среди моих курсов' />
                <CiSearch className='search'/>
            </div>
            <div className="icon_blok">
                <div className="sel_blok">
                    <BiMenu className='menyu'/>
                   <h4>Фильтр</h4>
                </div>
                <div className="win_men">
                <MdWindow className='window'/>
                <TfiMenuAlt className='manu'/>
                </div>
            </div>
            </div>   
        </div>
    </div>
  )
}
