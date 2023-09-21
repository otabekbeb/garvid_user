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
import NewsRasm from '../img/NewsRasm.png'
export default function News() {

  const [base, setBase] = useState([])
  const [base1, setBase1] = useState([])
  const [basetype, setBasetype] = useState([])
  useEffect(() => {
    axios.get(`${url}/api/knowladge`).then(res => {
      setBase(res.data)
      const Filter = res.data.filter((item, key) => key < 2)
      setBase1(Filter)
      console.log(res.data, "bb");
      axios.get(`${url}/api/base_theme`).then(res1 => {
        setBasetype(res1.data)

        const type = res.data.filter(item => item.base_id == localStorage.getItem("BaseType"))
        setBase(type)

      });
    });

  }, [])
  function all() {
    axios.get(`${url}/api/knowladge`).then(res => {
      setBase1(res.data);
    })
  }
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
      {base.length === 0 ? (<div style={{width:'80%',margin:'auto',textAlign:'center',marginTop:'10%',marginBottom:'20px'}}>
        <img style={{width:'40%'}} src={NewsRasm} alt="" />
        <p style={{fontSize:'40px',textAlign:'center'}}>No news</p>
      </div>) : (
        <div className="newspage">
          <div className='old_news'>
            <div className='old_news1'>
              {base1.map((item, key) => {
                return (
                  <div className="old_news_card">
                    <div className="news_chas">
                      <div className="calendar">
                        <PiCalendarBold className='cl' />
                        <p>{item.time_create.slice(0, 10)}</p>
                        {/* <p>2020-19-09</p> */}

                      </div>
                      <div className="chas">
                        {item.time_create.slice(11, 16)}
                        {/* <p>10:00</p> */}
                      </div>
                    </div>
                    <p className='old_news_pro'>{item.description}</p>
                    {/* <p className='old_news_pro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim ut impedit autem commodi quasi reprehenderit doloremque ipsam deleniti necessitatibus suscipit, labore sit dolore nobis iste possimus facere ex voluptas.</p> */}
                  </div>
                )

              })}
            </div>
            {base.length === 0 ? ("") : (<button className='all_butn' onClick={() => all()}>Wiew all</button>)}

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
                      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus praesentium doloremque veritatis assumenda sunt numquam deserunt modi maiores, similique reprehenderit enim ipsam adipisci, saepe nihil iure aperiam sequi magnam?</p> */}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>)}

      <Footer />
    </div>
  )
}
