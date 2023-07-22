'use clint'
import React, { useState, useEffect } from 'react'
import "../css/News.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'
import newsimg from '../img/download.png'

export default function News() {

    const [state1, setState1] = React.useState();
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);
    return (

        <div>
            <Navbar />
            {state1 === "en" ? (<div>
                <div className="news">
                    <div className="news_themes">
                        <p>On creating RESTful APIs practical </p>
                        <p>On creating RESTful APIs practical </p>
                        <p>On creating RESTful APIs practical </p>
                        <p>On creating RESTful APIs practical </p>
                        <p>On creating RESTful APIs practical </p>
                        <p>On creating RESTful APIs practical </p>
                    </div>
                    <div className="news_cards">
                        <div onClick={()=> window.location="newspage"} className="news_card">
                        <img src={newsimg} alt="" />
                        <h6>On creating RESTful APIs
practical assignments</h6>
                        </div>
                        <div onClick={()=> window.location="newspage"} className="news_card">
                        <img src={newsimg} alt="" />
                        <h6>On creating RESTful APIs
practical assignments</h6>
                        </div>
                        <div onClick={()=> window.location="newspage"} className="news_card">
                        <img src={newsimg} alt="" />
                        <h6>On creating RESTful APIs
practical assignments</h6>
                        </div>
                        <div onClick={()=> window.location="newspage"} className="news_card">
                        <img src={newsimg} alt="" />
                        <h6>On creating RESTful APIs
practical assignments</h6>
                        </div>
                        <div onClick={()=> window.location="newspage"} className="news_card">
                        <img src={newsimg} alt="" />
                        <h6>On creating RESTful APIs
practical assignments</h6>
                        </div>
                        <div onClick={()=> window.location="newspage"} className="news_card">
                        <img src={newsimg} alt="" />
                        <h6>On creating RESTful APIs
practical assignments</h6>
                        </div>
                    </div>
                </div>
            </div>) : (<div>

            </div>)}

            
            <Footer />
        </div>
    )
}
