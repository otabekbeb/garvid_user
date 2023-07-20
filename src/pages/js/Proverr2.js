import React, {useEffect, useState } from "react";
import '../css/Proverr2.css'
import rasmww from '../img/WWW.png'
import iphone from '../img/iphone.png'
import profil from '../img/Ellipse 2.4.png'
import telegram from '../img/Telegram.png'
import facebok from '../img/facebok.png'
import Git from '../img/Git.png'
import copy from '../img/copy.png'


function button() {
        document.querySelector(".aaa").classList.toggle("bbb")
        document.querySelector(".aa").classList.toggle("bb")
        document.querySelector(".potpis").classList.toggle("potpis1")
    }
    function menuobmen(){
        var y= document.querySelector(".obmen-kategory-re").style.display;
        if(y=="none"){
        document.querySelector(".obmen-kategory-re").style.display="block";
        }else{
           document.querySelector(".obmen-kategory-re").style.display="none";
        }
    }
    function akkordion(){
        var u= document.querySelector(".mni-accordion-none1").style.display;
        if(u=="none"){
        document.querySelector(".mni-accordion-none1").style.display="block";
        }else{
           document.querySelector(".mni-accordion-none1").style.display="none";
        }
    }

    function about2222() {
        document.querySelector(".prover20chech-box-a span").style="";

        }
    
        function aboutClose123122() {
      
            document.querySelector(".prover20chech-box-a span").style=""
            }

export default function Proverr2() {
    
  return (
    <div>
<div className="prover2">
    <div className="prover2-kotta-men">
        <div className="prover2-search-joy">
        <div className="prover2-mni-search">
           <form action="">
           <input type="text" placeholder='Какой курс вы хотите изучать?' required /><button><box-icon name='search' color='#9da7bb' ></box-icon></button>
           </form>
           <div className="prover2-info-d">
            <div className="prover2-info-filter">
          <button className='prover2-but-clas'><p>#Дизайн</p></button>
          <button className='prover2-but-clas2'><p>#Маркетинг</p></button>
          <button className='prover2-but-clas3'><p>#Бизнес</p></button>
          <button className='prover2-but-clas4'><p>#Интернет</p></button>
            </div>
            <div className="prover2-info-filter2">
                <button className='prover2-but-clas5'><p>#Бухгалтерский</p></button>
                <button className='prover2-but-clas6'><p>#Здоровье</p></button>
                <button className='prover2-but-clas7'><p>#Программирование</p></button>
            </div>
            <div className="prover2-info-youtube-f">
                <p className='prover2-p-df'>Программирование</p>
                <div className="prover2-info-block1">
                    <div className="prover2-info-block1-img">
                        <img src={rasmww} alt="" />
                    </div>
                    <div className="prover2-info-block1-text">
                        <h5>Создание RESTful API <br />
практические задания на</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>
                <div className="prover2-linerr1">

                </div>
                <div className="prover3-info-block1">
                    <div className="prover3-info-block1-img">
                        <img src={rasmww} alt="" />
                    </div>
                    <div className="prover3-info-block1-text">
                       <h5>AWS для разработчиков:  <br />
ECS и мультирегиональные <br /> перевозки. . .</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>
                <div className="prover2-linerr1">

                </div>

                <div className="prover4-info-block1">
                    <div className="prover4-info-block1-img">
                        <img src={iphone} alt="" />
                    </div>
                    <div className="prover4-info-block1-text">
                       <h5>Программирование на iOS <br />
курсы</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>
                <div className="prover2-linerr1">

                </div>
                <div className="prover4-info-block1">
                    <div className="prover4-info-block1-img">
                        <img src={iphone} alt="" />
                    </div>
                    <div className="prover4-info-block1-text">
                       <h5>Программирование на iOS <br />
курсы</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>
                <div className="prover2-linerr1">

                </div>
                <div className="prover4-info-block1">
                    <div className="prover4-info-block1-img">
                        <img src={iphone} alt="" />
                    </div>
                    <div className="prover4-info-block1-text">
                       <h5>Программирование на iOS <br />
курсы</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>
                <div className="prover2-linerr1">

                </div>
                
                <div className="prover5-info-block1">
                    <div className="prover5-info-block1-img">
                        <img src={rasmww} alt="" />
                    </div>
                    <div className="prover5-info-block1-text">
                        <h5>Создание RESTful API <br />
практические задания на</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>

            </div>
            
           </div>
        </div>
        </div>
        <div className="prover2-orta-joy">
        <iframe width="690" height="325" src="https://www.youtube.com/embed/yQb2VS-DCy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

        <div className="prover2-orta-joy-text">
            <h5>Основы программирования на Raspberry Pi</h5>
            <div className="rating">
  <input type="radio" id="star5" name="rate" value="5"/>
  <label for="star5" title="text"></label>
  <input type="radio" id="star4" name="rate" value="4"/>
  <label for="star4" title="text"></label>
  <input checked="" type="radio" id="star3" name="rate" value="3"/>
  <label for="star3" title="text"></label>
  <input type="radio" id="star2" name="rate" value="2"/>
  <label for="star2" title="text"></label>
  <input type="radio" id="star1" name="rate" value="1"/>
  <label for="star1" title="text"></label>

 
</div>
<div className="prover2-orta-joy-reytin">
<p>4.1</p><span>(524)</span>
</div>
<div className="prover2-orta-u">
<button  onClick={()=>menuobmen()}><span><box-icon name='share-alt' type='solid' color='#9da7bb' ></box-icon></span><p>Обмен</p></button>
</div>
        </div>
        <div className="prover2-profil-patpis">
            <div className="prover2-profil-img">
<img src={profil} alt="" />
            </div>
            <div className="prover2-profil-text-info">
                <p>Muhammad Jumayev</p> <button onClick={()=> button()}  className="potpis"><p className="aa">Подписаться</p><p className="aaa">Отменить подписку</p></button>
            </div>
            <div className="obmen-kategory-re">
                <h5>URL-адрес курса:</h5>
              <form action="">
              <input type="url" />
              <div className="obmen-set-internet">
                <img src={telegram} alt="" />
                <img src={facebok} alt="" />
                <img src={Git} alt="" />
                <img src={copy} alt="" />
              </div>
              </form>
            </div>
        </div>



        <div className="pover2-tab-kategoryy">
        <div className="radio-inputs">
  <label className="radio">
    <input type="radio" name="radio" checked=""/>
    <span className="name">О курсе</span>
  </label>
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name">Комментарии</span>
  </label>
      
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name">Требования</span>
  </label>
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name">Чему вы научитесь</span>
  </label>
</div>
        </div>
        <div className="text-kurs-haqida1">
            <p>Этот курс начинается с нуля, вам не нужно знать ни Angular 1, ни Angular 2! Angular 8 просто является  <br /> последней версией Angular 2.</p>

            <p >Присоединяйтесь к самому всестороннему и популярному курсу Angular на Udemy, потому что сейчас самое <br /> время начать! Этот курс охватывает все: от настройки до развертывания! Вы узнаете все о компонентах, <br /> директивах, службах, формах, Http-доступе, аутентификации, оптимизации приложения Angular с помощью <br /> модулей и автономной компиляции и многом другом — и в конце: вы узнаете, как развернуть приложение! <br /> Но это не все! Этот курс также покажет вам, как использовать Angular CLI, и представит полный проект, <br /> который позволит вам практиковать то, что вы узнали на протяжении всего курса!</p>
            <p>И если вы застряли, вы получите чрезвычайно быструю и дружелюбную поддержку - как через <br /> прямой обмен сообщениями, так и через  обсуждение. Даю слово! ;-)</p>

            <p>Абсолютно фантастическая серия уроков. Я не могу тебя отблагодарить. Качество первоклассное, <br /> а ваши презентационные навыки не имеют себе равных. Продолжайте в том же духе. Ты <br /> действительно крут!﻿ - Пол Уайтхаус</p>
        </div>
        </div>
        <div className="prover2-oxiri-joy">
            <div className="prover2-oxiri-block-in">
            <div className="mni-dasturlash-bloc"><p>Dasturlash</p></div>
            <div className="mni-kurs-narxi">
                <div className="mni-kurs-block1"><h5>Kurs narxi</h5>
                <p>250.000 <span>UZS</span></p></div>
                <div className="mni-kurs-block2"></div>
                
                <div className="mni-kurs-block1"><h5>Kurs hajmi</h5>
                <p>38 soat</p></div>
                <div className="mni-kurs-block2"></div>
            </div>
            <p className="spdfodsofdsf">Kurs bo’limlari:</p>
            <div className="mni-blocc-linee"></div>
            
<div className="prover2-oxiri-total-kurss"onMouseLeave={()=>aboutClose123122()}  >
<div className="prover20chech-box-a" onMouseEnter={()=>about2222()} onClick={()=>akkordion()} >
    <input type="checkbox"/>
    <p>Введение в процесс программирования и установки</p>
    <span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
</div>
<div className="mni-kurs-narxi2">
                <div className="mni-kurs-block1"><h5>Kurs narxi</h5>
                <p>150.000  <span>UZS</span></p></div>
                <div className="mni-kurs-block2"></div>
                
                <div className="mni-kurs-block1"><h5>Kurs hajmi</h5>
                <p>38 soat</p></div>
                <div className="mni-kurs-block2"></div>
            </div>
</div>
<div className="mni-accordion-none1">
    <div className="prover20chech-box-a2">
        <input type="checkbox" />
        <p>Работа с простыми операциями в программе</p>
        <span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
    </div>
    <div className="prover20chech-box-a2">
        <input type="checkbox" />
        <p>Работа с простыми операциями в программе</p>
        <span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
    </div>
</div>
<div className="mni-buton-iikki-yo">
    <button>Покупка</button><button>150 000 сум</button>
</div>


            </div>
        </div>
    </div>
</div>



    </div>
  )
}
