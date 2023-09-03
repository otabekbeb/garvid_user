
import React, { Component, useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'
import Navbar from "./Navbar"
import Futer from "./Footer1"
import Images from "./Images"
import axios from 'axios'
import url from './Host'
import img_for_null from '../img/download.png'
import Swal from 'sweetalert2';
import { BsCheck2 } from 'react-icons/bs'
import { BsCheckAll } from 'react-icons/bs'
export default function Home() {
    const [state, setState] = React.useState(1)
    const [state1, setState1] = React.useState();
    const [univercard, setUnivercard] = useState([])
    const [chec, setChec] = useState([])
    const dataPost = () => {
        var formdata = {
            fullname: document.querySelectorAll('#contact_inp')[0].value,
            email: document.querySelectorAll('#contact_inp')[1].value,
            purchase: document.querySelectorAll('#contact_inp')[2].value,
            message: document.querySelector('.contact_textarea').value
        }
        axios.post("https://markazback2.onrender.com/api/call_me", formdata, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            state === "ru" ? (Swal.fire("Information sent, wait for a call from the operator")) : (Swal.fire("Information sent, wait for a call from the operator"))
            window.location.reload()
        }).catch(err => {
            state === "ru" ? (Swal.fire("Check information, Failed to send")) : (Swal.fire("Check information, Failed to send"))
        })

    }
    useEffect(() => {
        axios.get(`https://markazback2.onrender.com/api/call_me`).then(res => {
            setChec(res.data)
        }).catch(err => { })
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);

    useEffect(() => {
        axios.get(`${url}/api/university`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
            setUnivercard(res.data)
        }).catch(err => { })
    })


    return (
        <div>

            <div>
                <div className='body1'>
                    <Navbar />

                    <div class="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{ marginBottom: "90px;" }}>
                        <div style={{ textAlign: "center" }} class="container my-5 py-5">
                            <h3 id='huch' style={{ fontSize: "18px", color: "#44bef1" }}>BEST ONLINE COURSES</h3>
                            <h1 class="text-white mt-4 mb-4" id='hbir'>Get Educated Online From Your Home</h1>
                            <p id='pp1' style={{ color: "white", fontSize: "20px" }}>With over 20 years of experience we'll ensure you always get the best guidance</p>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }} className="butonss">
                                <button onClick={() => window.location = "/services"}>Services</button>
                                <button onClick={() => window.location = "/contacts"} id='but22'>Contacts</button>
                            </div>
                            <div class="mx-auto mb-5" style={{ width: "100%;", maxWidth: "600px;" }}>
                                <div class="input-group">
                                    <div class="input-group-prepend">

                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Courses 1</a>
                                            <a class="dropdown-item" href="#">Courses 2</a>
                                            <a class="dropdown-item" href="#">Courses 3</a>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control border-light" style={{ padding: "30px 25px;" }} placeholder="Keyword" />
                                    <div class="input-group-append">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qiy"><img src="https://demo.htmlcodex.com/1574/online-education-website-template/img/overlay-bottom.png" alt="" /></div>
                    </div>
                    <div className="universty">
                        <div className="iniversty_cards">
                            {univercard.map(item => {
                                return (
                                    <div className="iniversty_card">
                                        <div className="iniversty_img">
                                            {item.image === null ? (<img src={img_for_null} alt="" />) : (<img src={item.image} alt="" />)}
                                        </div>
                                        <p>{item.title}</p>
                                        <h2>{item.deckription}</h2>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="big1">
                        <div className="bigdiv">
                            <div className="card1">
                                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon01.jpg" alt="" />
                                <h3>Financial Planning</h3>
                                <p>We'll help you make sensible decisions about money that can help you achieve your goals in life.</p>
                            </div>
                            <div className="card1">
                                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon02.jpg" alt="" />
                                <h3>Retirement Planning</h3>
                                <p>Use our strategies and retirement advice, including retirement calculators to help you retire faster.</p>
                            </div>
                            <div className="card1">
                                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon03.jpg" alt="" />
                                <h3>Risk Management</h3>
                                <p>Risk management is intended to manage financial and other losses associated with risks to your assets or business.</p>
                            </div>
                            <div className="card1">
                                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon04.jpg" alt="" />
                                <h3>Taxation</h3>
                                <p>Tax planning considers the tax implications of business decisions, usually with the goal of minimizing tax liability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="soz1">
                        <h1>What We Do</h1>
                        <div className="soz2">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="line"></div>
                                <p>We provide expert financial advice for businesses and individuals</p>
                            </div>
                            <button>See All Services</button>
                        </div>
                    </div>
                    <div className="katta1">
                        <center><h1 className='katta1_about_h1'>О нас</h1></center>
                        <center><div className="blue1"></div></center>
                        <div className="cards1">
                            <div className="cards2">
                                <div className="card4">
                                    <div className="buttons1">
                                        <button
                                            style={state === 1 ? { background: "#44bef1", color: "#fff", border: "none !important" } : state === 2 ? { background: "white" } : { background: "white" }}
                                            onClick={() => setState(1)} className='but1'>Facts</button>
                                        <button style={state === 2 ? { background: "#44bef1", color: "#fff", border: "none" } : state === 2 ? { background: "white" } : { background: "white" }} onClick={() => setState(2)} className='but2'>Advantages</button>
                                        <button style={state === 3 ? { background: "#44bef1", color: "#fff", border: "none" } : state === 2 ? { background: "white" } : { background: "white" }} onClick={() => setState(3)} className='but2'>Skills</button>
                                    </div>
                                    <p className='about_p'>Our company is your one stop solution for all needs. There is no doubt that we are the leaders and you don't have to worry about our image because it is perfect.</p>
                                    {state === 1 ? (<div className='fact1'>
                                        <div className="facts">
                                            <h1>275</h1>
                                            <p>Cases completed</p>
                                        </div>
                                        <div className="facts">
                                            <h1>19</h1>
                                            <p>Consultants</p>
                                        </div>
                                        <div className="facts">
                                            <h1>130</h1>
                                            <p>Awards won</p>
                                        </div>
                                    </div>) : <div>
                                        {state === 2 ? (<div className='advantage1'>

                                            <div className="advantages">
                                                <h1>19</h1>
                                                <p>Consultants</p>
                                            </div>
                                            <div className="advantages">
                                                <h1>130</h1>
                                                <p>Awards won</p>
                                            </div>
                                            <div className="advantages">
                                                <h1>275</h1>
                                                <p>Cases completed</p>
                                            </div>
                                        </div>) : (<div className='skill1'>
                                            <div className="skills">
                                                <h1>130</h1>
                                                <p>Awards won</p>
                                            </div>
                                            <div className="skills">
                                                <h1>275</h1>
                                                <p>Cases completed</p>
                                            </div>
                                            <div className="skills">
                                                <h1>19</h1>
                                                <p>Consultants</p>
                                            </div>
                                        </div>)}</div>
                                    }

                                </div>
                                <div className="card4">
                                    <h1 className='card_about_us_ikki_page'>Doing the right thing, at the right time.</h1>
                                    <p className='card_about_us_ikki_p'>Welcome to the leading company on the market! Our success is driven by the highest quality customer service. We can meet the requirements even of the whimsical clients; there are no complex tasks for us! Thanks for your choice! Our company can boast the reputation of the trusted partner known worldwide. We are proud of the uncompromising quality of services</p>
                                    <button className='card_about_us_ikki_button'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_form_input_big">
                        <div className="contact_form_input_big_div">
                            <h1>Contact Form</h1>
                            <div className="blue1"></div>
                            <div className="contact_form_input_big_div_input">
                                <form action="">
                                    <label>
                                        <p>fullname</p>
                                        <input type="email" name="" id="contact_inp" required />
                                    </label>
                                    <label>
                                        <p >email</p>
                                        <input id='contact_inp' type="text" required />
                                    </label>
                                    <label>
                                        <p>purchase</p>
                                        <input id='contact_inp' type="text" required />
                                    </label>
                                    <label>
                                        <p>Message</p>
                                        <textarea name="" className='contact_textarea' id="text1" cols="30" rows="10"></textarea>
                                    </label>
                                    <div className="admin_button">
                                        <button onClick={() => { dataPost() }}>Send</button>
                                        {/* <div className="admin_title">
                                            <h4>Admin:</h4>
                                            <div className="chec_icon">
                                                {chec.map(item => {
                                                    return (
                                                        <>
                                                            {item.read === true ? (<BsCheck2 className='bir_chec' />) : (<BsCheckAll className='ikki_chec' />)}

                                                        </>
                                                    )

                                                })}


                                            </div>
                                        </div> */}
                                    </div>
                                </form>

                            </div>

                        </div>
                        <img className="girl" src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-home-image-2.png" alt="" />
                    </div>
                    <div className="Testimonial">
                        <center><h1>Testimonials</h1></center>
                        <center><div className="blue1"></div></center>

                        <center><div className="testimonial_cards">
                            <testimonial_card className='sli1'>
                                <div className="sli-kurg-rasm">

                                    <div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

                                </div>
                                <div className="sli-text">
                                    <p>Hi, guys! You've solved my<br />  problem in no time! Your <br /> efficient services and customer care are second to none!</p>

                                    <strong>Adam Watson</strong>
                                    <h4>(CEO & Founder)</h4>
                                </div>
                            </testimonial_card>
                            <testimonial_card className='sli1'>
                                <div className="sli-kurg-rasm">

                                    <div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

                                </div>
                                <div className="sli-text">
                                    <p>Wow, I'm so happy with your service. You managed to exceed my <br /> expectations! You guys are very efficient.</p>

                                    <strong>Louise Smith</strong>
                                    <h4>(CEO & Founder)</h4>
                                </div></testimonial_card>
                            <testimonial_card id="sli11" className='sli1'>
                                <div className="sli-kurg-rasm">

                                    <div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

                                </div>
                                <div className="sli-text">
                                    <p>Great organization!! Your prompt answer became a pleasant surprise for me.You've rendered an invaluable service! Thank you!</p>

                                    <strong>Jack Walsh</strong>
                                    <h4>(CEO & Founder)</h4>
                                </div>
                            </testimonial_card>


                        </div>
                        </center>
                    </div>
                    <Images />
                    <Futer />
                </div>
            </div>
        </div>

    )
}