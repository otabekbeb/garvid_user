'use clint'
import React, { useState, useEffect } from 'react'
import "../css/Newspage.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import new1 from "../img/news-700x435-1.jpg"
import img_for_null from '../img/download.png'
import axios from 'axios'
import url from './Host'
import { PiCalendarBold } from 'react-icons/pi'
export default function News() {

  const [base, setBase] = useState([])
  const [basetype, setBasetype] = useState([])
  useEffect(() => {
    axios.get(`${url}/api/knowladge`).then(res => {
      setBase(res.data)
      console.log(res.data, "bb");
      axios.get(`${url}/api/base_theme`).then(res1 => {
        setBasetype(res1.data)

        const type = res.data.filter(item => item.base_id == localStorage.getItem("BaseType"))
        setBase(type)

      });
    });

  }, [])
  return (

    <div className='newspage1'>
      <Navbar />

      {/* <div>
        <div className="newspage">
          {base.map((item, key) => {
            if (key == localStorage.getItem("baseId")) {
              return (
                <div >
                  <div className="newspage_cards">
                    {item.image === null ? (<img style={{ height: '555px' }} src={img_for_null} alt="" />) : (<img src={item.image} alt="" />)}
                    <a className="h2 m-0 text-white text-uppercase font-weight-bold" href style={{ color: 'red' }}>{item.name}</a>
                  </div>
                  <div className="newspage_p">
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div> */}

      <div className="newspage">
        <div className='old_news'>
          <div className="old_news_card">
            <div className="calendar">
              <PiCalendarBold className='cl' />
              <p>16:23</p>
            </div>
            <p className='old_news_pro'>ошланиши мумкин. UzAuto расмий вакилининг Kun.uz'га маълум қилишича, айни пайтда синов жараёни ўтказилмоқда. Нархларни сотувлар бошланишидан олдин эълон қилиш режалаштирилган.</p>
          </div>
          <div className="old_news_card">
            <div className="calendar">
              <PiCalendarBold className='cl' />
              <p>16:23</p>
            </div>
            <p className='old_news_pro'>ошланиши мумкин. UzAuto расмий вакилининг Kun.uz'га маълум қилишича, айни пайтда синов жараёни ўтказилмоқда. Нархларни сотувлар бошланишидан олдин эълон қилиш режалаштирилган.</p>
          </div>
          <div className="old_news_card">
            <div className="calendar">
              <PiCalendarBold className='cl' />
              <p>16:23</p>
            </div>
            <p className='old_news_pro'>ошланиши мумкин. UzAuto расмий вакилининг Kun.uz'га маълум қилишича, айни пайтда синов жараёни ўтказилмоқда. Нархларни сотувлар бошланишидан олдин эълон қилиш режалаштирилган.</p>
          </div>
          <div className="old_news_card">
            <div className="calendar">
              <PiCalendarBold className='cl' />
              <p>16:23</p>
            </div>
            <p className='old_news_pro'>ошланиши мумкин. UzAuto расмий вакилининг Kun.uz'га маълум қилишича, айни пайтда синов жараёни ўтказилмоқда. Нархларни сотувлар бошланишидан олдин эълон қилиш режалаштирилган.</p>
          </div>
        </div>
        <div className="news_card">
          {base.map((item, key) => {
            if (key == localStorage.getItem("baseId")) {
              return (
                <div className="news_cards" >
                  <div className="news_img">
                  {item.image === null ? (<img style={{ height: '555px' }} src={img_for_null} alt="" />) : (<img src={item.image} alt="" />)}
                  </div>
                  <div className="news_title">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="news_p">
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            }
          })}

        </div>


      </div>

      <Footer />
    </div>
  )
}
