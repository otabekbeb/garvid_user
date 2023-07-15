'use clint'

import React, { Component,useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'
import Navbar from "./Navbar"
import Futer from "./Footer1"
import Images from "./Images"


export default function Home() {

    const[state, setState]=React.useState(1)
    
    return (
        <div className='body1'>
            <Navbar/>


            <Carousel data-bs-theme="dark">
                <Carousel.Item className='item1'>
                    <img
                        className="d-block"
                        src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-slider01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
          <h1>Решения, которые<br /> никогда не промахивайся</h1>
          <div className="buttons">
            <button className='button'>Узнать больше</button>
            <button className='button1'>Наши услуги</button>
          </div>
        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-slider02.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carusel'>
          <h1>Экспертный финансовый совет</h1>
          <p>Благодаря более чем 20-летнему опыту мы гарантируем <br /> вы всегда получаете лучшее руководство</p>
          <div className="buttons">
            <button className='button'>Наши услуги</button>
            <button className='button1'>Купить сейчас</button>
          </div>
        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
<div className="big1">
            <div className="bigdiv">
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon01.jpg" alt="" />
                    <h3>Финансовое планирование</h3>
                    <p>Мы поможем вам принять разумные решения относительно денег, которые помогут вам достичь ваших жизненных целей.</p>
                </div>
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon02.jpg" alt="" />
                    <h3>Пенсионное планирование</h3>
                    <p>Воспользуйтесь нашими стратегиями и советами по выходу на пенсию, включая пенсионные калькуляторы, которые помогут вам быстрее выйти на пенсию.</p>
                </div>
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon03.jpg" alt="" />
                    <h3>Управление рисками</h3>
                    <p>Управление рисками предназначено для управления финансовыми и другими потерями, связанными с рисками для ваших активов или бизнеса.</p>
                </div>
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon04.jpg" alt="" />
                    <h3>Налогообложение</h3>
                    <p>Налоговое планирование учитывает налоговые последствия бизнес-решений, обычно с целью минимизации налоговых обязательств.</p>
                </div>
            </div>
            </div>
            <div className="soz1">
                <h1>Что мы делаем</h1>
                <div className="soz2">
                <div style={{display:'flex',alignItems:'center'}}>
                <div className="line"></div>
                <p>Мы предоставляем экспертные финансовые консультации для предприятий и частных лиц</p>
                </div>
                <button>Посмотреть все услуги</button>
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
                                style={ state===1 ? {background:"#44bef1",color:"#fff",border:"none !important"}:state===2?{background:"white"}:{background:"white"} }
                                onClick={()=> setState(1)} className='but1'>Факты</button>
                                <button style={ state===2 ? {background:"#44bef1",color:"#fff",border:"none"}:state===2?{background:"white"}:{background:"white"} } onClick={()=> setState(2)} className='but2'>Преимущества</button>
                                <button style={ state===3 ? {background:"#44bef1",color:"#fff",border:"none"}:state===2?{background:"white"}:{background:"white"} } onClick={()=> setState(3)} className='but2'>Навыки</button>
                            </div>
                            <p className='about_p'>Наша компания является вашим универсальным решением для всех потребностей. Нет сомнений, что мы лидеры, и вам не нужно беспокоиться о нашем имидже, потому что он идеален.</p>
                            {state===1 ? (<div className='fact1'>
                                <div className="facts">
                                    <h1>275</h1>
                                    <p>Дела завершены</p>
                                </div>
                                <div className="facts">
                                    <h1>275</h1>
                                    <p>Дела завершены</p>
                                </div>
                                <div className="facts">
                                    <h1>275</h1>
                                    <p>Дела завершены</p>
                                </div>
                            </div>):<div>
                            {state===2?(<div className='advantage1'>
                                
                                <div className="advantages">
                                    <h1>19</h1>
                                    <p>Консультанты</p>
                                </div>
                                <div className="advantages">
                                    <h1>19</h1>
                                    <p>Консультанты</p>
                                </div>
                                <div className="advantages">
                                    <h1>19</h1>
                                    <p>Консультанты</p>
                                </div>
                            </div>): (<div className='skill1'>
                                <div className="skills">
                                    <h1>130</h1>
                                    <p>Выигранные награды</p>
                                </div>
                                <div className="skills">
                                    <h1>130</h1>
                                    <p>Выигранные награды</p>
                                </div>
                                <div className="skills">
                                    <h1>130</h1>
                                    <p>Выигранные награды</p>
                                </div>
                            </div>)}</div>
                             }
                            
                        </div>
                        <div className="card4">
                            <h1 className='card_about_us_ikki_page'>Поступаю правильно, в нужное время.</h1>
                            <p className='card_about_us_ikki_p'>Добро пожаловать в ведущую компанию на рынке! Наш успех обусловлен высочайшим качеством обслуживания клиентов. Мы можем удовлетворить требования даже самых прихотливых клиентов, для нас нет сложных задач! Спасибо за ваш выбор! Наша компания может похвастаться репутацией надежного партнера, известного во всем мире. Мы гордимся бескомпромиссным качеством предоставляемых услуг</p>
                            <button className='card_about_us_ikki_button'>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_form_input_big">
             <div className="contact_form_input_big_div">
                <h1>Контактная форма</h1>
                <div className="blue1"></div>
                <div className="contact_form_input_big_div_input">
                    
                </div>
             </div>
             <img src="https://template59172.motopreview.com/mt-demo/5910…-content/uploads/2019/07/mt-0514-home-image-2.png" alt="" />
            </div>
             <Images/>
             <Futer/>
        </div>
    )
}