'use clint'
import React, { useState, useEffect } from 'react'
import "../css/Newspage.css"
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
                <div className="newspage">
                <div className="news_themes">
                        <p>On creating RESTful APIs practical</p>
                        <p>On creating RESTful APIs practical</p>
                        <p>On creating RESTful APIs practical</p>
                        <p>On creating RESTful APIs practical</p>
                        <p>On creating RESTful APIs practical</p>
                        <p>On creating RESTful APIs practical</p>
                    </div>
                    <div className="newspage_cards">
                        <img src={newsimg} alt="" />
                    </div>
                </div>
            </div>) : (<div>

            </div>)}

            <Images />
            <Footer />
        </div>
    )
}
