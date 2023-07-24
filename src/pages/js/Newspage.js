'use clint'
import React, { useState, useEffect } from 'react'
import "../css/Newspage.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import new1 from "../img/news-700x435-1.jpg"


export default function News() {

    const [state1, setState1] = React.useState();
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);
    return (

        <div className='newspage1'>
            <Navbar />
            {state1 === "en" ? (<div>
                <div className="newspage">
                <div className="mb-3">
                  <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Themes</h4>
                  </div>
                  <div className="bg-white border border-top-0 p-3">
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#39569E'}}>
                      <i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Sports</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
                      <i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Musics</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#0185AE'}}>
                      <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Arts</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#C8359D'}}>
                      <i className="fab fa-instagram text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Sports</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#DC472E'}}>
                      <i className="fab fa-youtube text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Musics</span>
                    </a>
                    <a href className="d-block w-100 text-white text-decoration-none" style={{background: '#055570'}}>
                      <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}} />
                      <span className="font-weight-medium">Arts</span>
                    </a>
                  </div>
                </div>
                    <div className="newspage_cards">
                        <img src={new1} alt="" />
                        <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                    </div>
                </div>
            </div>) : (<div>

            </div>)}


            <Footer />
        </div>
    )
}
