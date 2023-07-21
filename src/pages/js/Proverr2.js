import React, { useState } from "react";
import '../css/Proverr2.css'
import rasmww from '../img/WWW.png'
import iphone from '../img/iphone.png'
import profil from '../img/Ellipse 2.4.png'
import telegram from '../img/Telegram.png'
import facebok from '../img/facebok.png'
import Git from '../img/Git.png'
import copy from '../img/copy.png'
import munbay from '../img/Group 33.png'
import iteen from '../img/Group 34.png'


function onga(){
document.querySelector(".mni-gridf1").classList.toggle("mni-gridf1-none")
document.querySelector(".mni-gridf2").classList.toggle("mni-gridf2-none")


document.querySelector(".mni-gridf1").classList.toggle("mni-gridf5-none")
document.querySelector(".mni-gridf2").classList.toggle("mni-gridf6-none")
}


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


function kamentgo(){
    document.querySelector(".text-kurs-haqida1").classList.toggle("popopo3")
    document.querySelector(".text-kurs-haqida2").classList.toggle("popopo4")

}






export default function Proverr2() {
    const [toggle,setToggle] =useState(1)
    function okurse(id){
    setToggle(id)

    }
    
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zalcSgxoL0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
    <span className="name" onClick={()=>okurse(1)} >О курсе</span>
  </label>
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name"  onClick={()=>okurse(2)} >Комментарии</span>
  </label>
      
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name"  onClick={()=>okurse(3)} >Требования</span>
  </label>
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name" onClick={()=>okurse(4)} >Чему вы научитесь</span>
  </label>
</div>
        </div>

        <div className={toggle===1?"text-kurs-haqida3":"text-kurs-haqida2"}><div className="text-kurs-haqida1">
            <p>Этот курс начинается с нуля, вам не нужно знать ни Angular 1, ни Angular 2! Angular 8 просто является  <br /> последней версией Angular 2.</p>

            <p >Присоединяйтесь к самому всестороннему и популярному курсу Angular на Udemy, потому что сейчас самое <br /> время начать! Этот курс охватывает все: от настройки до развертывания! Вы узнаете все о компонентах, <br /> директивах, службах, формах, Http-доступе, аутентификации, оптимизации приложения Angular с помощью <br /> модулей и автономной компиляции и многом другом — и в конце: вы узнаете, как развернуть приложение! <br /> Но это не все! Этот курс также покажет вам, как использовать Angular CLI, и представит полный проект, <br /> который позволит вам практиковать то, что вы узнали на протяжении всего курса!</p>
            <p>И если вы застряли, вы получите чрезвычайно быструю и дружелюбную поддержку - как через <br /> прямой обмен сообщениями, так и через  обсуждение. Даю слово! ;-)</p>

            <p>Абсолютно фантастическая серия уроков. Я не могу тебя отблагодарить. Качество первоклассное, <br /> а ваши презентационные навыки не имеют себе равных. Продолжайте в том же духе. Ты <br /> действительно крут!﻿ - Пол Уайтхаус</p>
        </div></div>
        <div className={toggle===2?"text-kurs-haqida3":"text-kurs-haqida2"}><div className="text-kurs-haqida1">
            <div className="kamment-mni-df">
                {/* <h5>Kurs reytingi</h5>
                <div className="kommentttt-xaxa">
                    <div className="komenttt-ichii">
                        <h3>4.1</h3>
                            <div className="yulduzlaaaaa1">
                            <box-icon name='star' type='solid' color='#ecc918' ></box-icon>
                            <box-icon name='star' type='solid' color='#ecc918' ></box-icon>
                            <box-icon name='star' type='solid' color='#ecc918' ></box-icon>
                            <box-icon name='star' type='solid' color='#ecc918' ></box-icon>
                            <box-icon name='star' color='#ecc918' ></box-icon>
                            </div>
                            <p>Всего: 524 голоса</p>
                    </div>
                    <div className="progrees-mni-relou">
                      <div className="progre-block-mni1"><box-icon name='star' color='#ecc918' ></box-icon><span>5</span><input type="range"  id="inpottt1" /></div>
                      <div className="progre-block-mni1"><box-icon name='star' color='#ecc918' ></box-icon><span>4</span><input type="range"  id="inpottt2" /></div>
                      <div className="progre-block-mni1"><box-icon name='star' color='#ecc918' ></box-icon><span>3</span><input type="range"  id="inpottt3" /></div>
                      <div className="progre-block-mni1"><box-icon name='star' color='#ecc918' ></box-icon><span>2</span><input type="range"  id="inpottt4" /></div>
                      <div className="progre-block-mni1"><box-icon name='star' color='#ecc918' ></box-icon><span>1</span><input type="range"  id="inpottt5" /></div>
                    </div>
                </div> */}
                
            </div>
            
            
            
            </div></div>
        <div className={toggle===3?"text-kurs-haqida3":"text-kurs-haqida2"}><div className="text-kurs-haqida3">
            
            treboviniya
            
            </div></div>
        <div className={toggle===4?"text-kurs-haqida3":"text-kurs-haqida2"}><div className="text-kurs-haqida4">chemu</div></div>
        
        
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
    <button id="gbfdgfdgdfgdf">Покупка</button><div className="line-mni-but"></div><button >150 000 сум</button>
</div>
      
            </div>
      <div className="mni-krus-techer-swiper">
<div className="boshqa-mentorla">
    <h5>Boshqa Mentorlar</h5>
    <div className="boshqa-mentorla-krugg1">
        <div className="boshqa-kurglaaaaa1" onClick={()=>onga()}><box-icon name='right-arrow-alt' color='#536dfd' ></box-icon></div>
    </div>
</div>
<div className="mni-swiper-grid">
    <div className="mni-gridf1">
<img src={munbay} alt="" />
<img src={iteen} alt="" />
<img src={munbay} alt="" />
<img src={iteen} alt="" />
    </div>
    
    <div className="mni-gridf2">
<img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt="" />
<img src="https://bronk.club/uploads/posts/2023-02/1676935060_bronk-club-p-otkritki-prirodi-ochen-krasivie-krasivo-39.jpg" alt="" />
<img src="https://funart.pro/uploads/posts/2021-03/thumbs/1617041574_9-p-oboi-krasivie-foto-prirodi-11.jpg" alt="" />
<img src="https://cdn.forbes.ru/forbes-static/c/1040x549/new/2023/04/1GettyImages-183930658-kopia-643018c796355.webp" alt="" />

    </div>
</div>
</div>

        </div>
    </div>
</div>



    </div>
  )
}
