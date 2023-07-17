'use clint'
import React, { useState,useEffect } from 'react'
import '../css/About.css'
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';




export default function About() {
  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
    );},[]);
  return (

    
    <div>
      <Navbar/>
      {state1==="eng" ?(
      <div>
<div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>About Us</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Home  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>About Us</p>
</div>
</div>
</div>

<header className='about-header-block'>
<div className="about-header-block-kotta">
  <div className="about-header-block-img">
    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img.jpg" alt="" />
    <div className="about-header-block-text">
      <h2 id='uityty'>Do the right things at the right time.</h2>
      <p>Welcome to the leading company in the market! Our success is due to the highest quality of customer service. <br className='pogos'/> We can meet the requirements of even the most capricious clients; there are no difficult tasks for us! Thank you for your choice! Our  <br className='pogos' /> the company boasts a reputation as a reliable partner known throughout the world. We pride ourselves on uncompromising <br /> quality</p>
      <div className="about-header-addelna">
        <p>Thank you for visiting our site! You are in the right place! We are focused on providing comprehensive <br className='pogos' /> solutions and services to customers around the world. Putting the interests of our clients first, we make every effort to<br className='pogos' /> exceed your expectations.</p>
      </div>
      <div className="about-header-df">
        <div className="about-header-blcos1">
          <h2>275</h2>
          <p>Cases completed </p>
        </div>
        <div className="about-header-blcos2">
          <h2>19</h2>
          <p>Consultants</p>
        </div>
        <div className="about-header-blcos3">
          <h2>130</h2>
          <p id='localengwon'>Won <br  className='dfoigdfoi'/> <br  className='dfoigdfoi'/></p>
        </div>
        <div className="about-header-blcos4">
          <h2>723</h2>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  </div>
 <div className="about-header-block-swiper">
   

<div className="about-header-f">
     <div className="about-header-block2-text">
  <ul>
    <li><a href="#">About Us</a></li>
  </ul>
  <div className="about-header-line"></div>
  
   </div>
   <div className="about-header-block2-text2">
  <ul>
    <li><a href="#">News </a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>
   <div className="about-header-block2-text3">
  <ul>
    <li><a href="#"> team</a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>

</div>
<div className="about-header-card">
<h4>Do you need help?</h4>
<p>Contact us at FinExpert  <br /> office closest to you or <br />submit your business inquiry online.</p>

<button>Connect with us</button>
</div>

<Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper">

        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Wow I'm so happy with you <br />service. You managed to overcome<br /> my expectations! You guys are very efficient.</p>

<strong>Adam Watson</strong>
<h4>(CEO and Founder)</h4>
</div>
        </SwiperSlide>
        <SwiperSlide className='sli'>
          <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Hi guys! You solved my problem in no time!<br />Your service and customer care is excellent!</p>

<strong>Louise Smith</strong>
<h4>(CEO and Founder)</h4>
</div></SwiperSlide>
        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Great organization!! Your quick response was a pleasant surprise for me. Thank you!</p>

<strong>Jack Walsh</strong>
<h4>(CEO and Founder)</h4>
</div>
        </SwiperSlide>

      </Swiper>


      <div className="swiper-button">
    <button>Presentation of the company</button>
  </div>
  </div>
  
</div>
<div className="about-header-block-davom">

     <div className="about-header-block-davom-text-tepa">
    <h3>How we are working</h3><h3 className='letsgio'>Our mission</h3>
  </div>
  <div className="about-header-block-df">
    <div className="about-header-block-df-img">
      <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-about-2.jpg" alt="" />
    </div>
    <div className="about-header-block-df-text">
      <ul>
        <li className='cher'>Our well-known coaching programs will allow you to:</li>
      <div className="cher2">
      <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Relationships with clients and employees</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to achieve complete<br className='adfad'/><span className='dfsdsd'>capacity</span></span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Cut costs without sacrificing quality</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to reach our full potential</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Sharpen your sharp leadership skills to manage your team</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Manage your time to get more done in less time</span></li>
      </div>

      </ul>
    </div>
  </div>


</div>
<div className="media-header-dovom">
<div className="about-header-block-davom-text-tepa">
    <h3>How we are working</h3>
  </div>
  <div className="about-header-block-df">
    <div className="about-header-block-df-img">
      <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-about-2.jpg" alt="" />
    </div>
    <div className="about-header-block-df-text">
<h3>Our mission</h3>
<p>Our renowned coaching programs will allow you to:</p>
<div className="about-header-nn">
<ul>
      <div className="cher2">
      <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Relationships with clients and employees</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to reach our full potential</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Cut costs without sacrificing quality</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Integrity in everything we do to reach our full potential</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Sharpen your sharp leadership skills to manage your team</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Manage your time to get more done in less time</span></li>
      </div>

      </ul>
</div>
    </div>
  </div>
  <div className="media-header-media-kamanda">
    <div className="media-about-gg">
        <p><a href="#">About Us</a></p>
  <div className="about-media-line"></div>
    </div>
    <div className="media-about-gg1">
        <p><a href="#">News</a></p>
  <div className="about-media-line"></div>
    </div>
    <div className="media-about-gg2">
        <p><a href="#">Team</a></p>
  <div className="about-media-line"></div>
    </div>

<div className="media-header-button">
  <h3>Do you need help?</h3>
  <p>Contact us at your nearest FinExpert office or submit a business request online.</p>
  <button>Contact us</button>
</div>



<div className="asdosdd">


<Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper">

        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Wow, I'm so happy with you favor. You managed to overcome <br className='sdfsdf' />my expectations! You guys are very efficient.</p>

<strong>Adam Watson</strong>
<h4>(CEO and Founder)</h4>
</div>
        </SwiperSlide>
        <SwiperSlide className='sli'>
          <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Hi guys! You solved my problem in no time! <br className='sdfsdf' />Your service and customer care is excellent!</p>

<strong>Louise Smith</strong>
<h4>(CEO and Founder)</h4>
</div></SwiperSlide>
        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Great organization!! Your quick response was nice <br className='sdfsdf' /> surprise for me. Thank you!</p>

<strong>Jack Walsh</strong>
<h4>(CEO and Founder)</h4>
</div>
        </SwiperSlide>

      </Swiper>
     </div>
  </div>

 </div>
{/* <div className="asdf">
<div className="navigator-tepaga" >
<a href="#tepaga"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
</div>

</div> */}


</header>

      </div>):(


      <div>

















<div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>O   нас</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Главный <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>O нас</p>
</div>
</div>
</div>

<header className='about-header-block'>
<div className="about-header-block-kotta">
  <div className="about-header-block-img">
    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img.jpg" alt="" />
    <div className="about-header-block-text">
      <h2 id='uityty'>Делать правильные вещи в нужное время.</h2>
      <p>Добро пожаловать в лидирующую компанию на рынке! Наш успех обусловлен высочайшим качеством обслуживания клиентов.<br className='pogos'/> Мы можем встретить  требования даже самых капризных клиентов; для нас нет сложных задач! Спасибо за ваш выбор! Наша <br className='pogos' /> компания может похвастаться репутация надежного партнера, известного во всем мире. Мы гордимся бескомпромиссным<br /> качеством</p>
      <div className="about-header-addelna">
        <p>Спасибо Вам что посетили наш сайт! Вы находитесь в нужном месте! Мы ориентированы на предоставление комплексных<br className='pogos' /> решений и услуг клиентам во всем мире. Ставя интересы наших клиентов на первое место, мы прилагаем все усилия, чтобы<br className='pogos' /> превзойти ваши ожидания.</p>
      </div>
      <div className="about-header-df">
        <div className="about-header-blcos1">
          <h2>275</h2>
          <p>Дела завершены</p>
        </div>
        <div className="about-header-blcos2">
          <h2>19</h2>
          <p>Консультанты</p>
        </div>
        <div className="about-header-blcos3">
          <h2>130</h2>
          <p>Выигранные <br  className='dfoigdfoi'/> <br  className='dfoigdfoi'/> награды</p>
        </div>
        <div className="about-header-blcos4">
          <h2>723</h2>
          <p>Счастливые клиенты</p>
        </div>
      </div>
    </div>
  </div>
 <div className="about-header-block-swiper">
   

<div className="about-header-f">
     <div className="about-header-block2-text">
  <ul>
    <li><a href="#">O нас</a></li>
  </ul>
  <div className="about-header-line"></div>
  
   </div>
   <div className="about-header-block2-text2">
  <ul>
    <li><a href="#">Новости </a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>
   <div className="about-header-block2-text3">
  <ul>
    <li><a href="#">команда</a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>

</div>
<div className="about-header-card">
<h4>Вам нужна помощь?</h4>
<p>Свяжитесь с нами в FinExpert  <br /> ближайший к вам офис или <br /> отправьте бизнес-справка онлайн.</p>

<button>Связаться с нами</button>
</div>

<Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper">

        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Вау, я так счастлива с тобой <br /> услуга. Вам удалось превзойти <br /> мои ожидания! Ты ребята очень оперативны</p>

<strong>Адам Уотсон</strong>
<h4>(Генеральный директор и основатель)</h4>
</div>
        </SwiperSlide>
        <SwiperSlide className='sli'>
          <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Привет, ребята! Вы решили мою проблема в кратчайшие сроки! <br /> Твой  услуги и забота о клиентах отлично!</p>

<strong>Луиза Смит</strong>
<h4>(Генеральный директор и основатель)</h4>
</div></SwiperSlide>
        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Отличная организация!! Твой быстрый ответ стал  приятный сюрприз для меня.  Спасибо!</p>

<strong>Джек Уолш</strong>
<h4>(Генеральный директор и основатель)</h4>
</div>
        </SwiperSlide>

      </Swiper>


      <div className="swiper-button">
    <button>Презентация компании</button>
  </div>
  </div>
  
</div>
<div className="about-header-block-davom">

     <div className="about-header-block-davom-text-tepa">
    <h3>Как мы работаем</h3><h3 className='letsgio'>Наша миссия</h3>
  </div>
  <div className="about-header-block-df">
    <div className="about-header-block-df-img">
      <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-about-2.jpg" alt="" />
    </div>
    <div className="about-header-block-df-text">
      <ul>
        <li className='cher'>Наши известные коучинговые программы позволят вам:</li>
      <div className="cher2">
      <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Отношения с клиентами, с сотрудниками</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Честность во всем, что мы делаем для достижения полного <br className='adfad'/><span className='dfsdsd'>потенциала</span></span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Сокращайте расходы, не жертвуя качеством</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Честность во всем, что мы делаем для достижения полного потенциала</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Отточите острые лидерские навыки, чтобы управлять своей командой</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Управляйте своим временем, чтобы успевать больше за меньшее время</span></li>
      </div>

      </ul>
    </div>
  </div>


</div>
<div className="media-header-dovom">
<div className="about-header-block-davom-text-tepa">
    <h3>Как мы работаем</h3>
  </div>
  <div className="about-header-block-df">
    <div className="about-header-block-df-img">
      <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-about-2.jpg" alt="" />
    </div>
    <div className="about-header-block-df-text">
<h3>Наша миссия</h3>
<p>Our renowned coaching programs will allow you to:</p>
<div className="about-header-nn">
<ul>
      <div className="cher2">
      <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Отношения с клиентами, с сотрудниками</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Честность во всем, что мы делаем для достижения полного потенциала</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Сокращайте расходы, не жертвуя качеством</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Честность во всем, что мы делаем для достижения полного потенциала</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon> <span>Отточите острые лидерские навыки, чтобы управлять своей командой</span></li>
        <li><box-icon name='check' color='#44bef1' ></box-icon><span>Управляйте своим временем, чтобы успевать больше за меньшее время</span></li>
      </div>

      </ul>
</div>
    </div>
  </div>
  <div className="media-header-media-kamanda">
    <div className="media-about-gg">
        <p><a href="#">О нас</a></p>
  <div className="about-media-line"></div>
    </div>
    <div className="media-about-gg1">
        <p><a href="#">Новости</a></p>
  <div className="about-media-line"></div>
    </div>
    <div className="media-about-gg2">
        <p><a href="#">Команда</a></p>
  <div className="about-media-line"></div>
    </div>

<div className="media-header-button">
  <h3>Вам нужна помощь?</h3>
  <p>Свяжитесь с нами в ближайшем к вам офисе FinExpert или отправьте бизнес-запрос онлайн.</p>
  <button>Свяжитесь с нами</button>
</div>



<div className="asdosdd">


<Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper">

        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Вау, я так счастлива с тобой  услуга. Вам удалось превзойти <br className='sdfsdf' /> мои ожидания! Ты ребята очень оперативны</p>

<strong>Адам Уотсон</strong>
<h4>(Генеральный директор и основатель)</h4>
</div>
        </SwiperSlide>
        <SwiperSlide className='sli'>
          <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Привет, ребята! Вы решили мою проблема в кратчайшие сроки! <br className='sdfsdf' /> Твой  услуги и забота о клиентах отлично!</p>

<strong>Луиза Смит</strong>
<h4>(Генеральный директор и основатель)</h4>
</div></SwiperSlide>
        <SwiperSlide className='sli'>
        <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Отличная организация!! Твой быстрый ответ стал  приятный <br className='sdfsdf' /> сюрприз для меня.  Спасибо!</p>

<strong>Джек Уолш</strong>
<h4>(Генеральный директор и основатель)</h4>
</div>
        </SwiperSlide>

      </Swiper>
     </div>
  </div>

 </div>
{/* <div className="asdf">
<div className="navigator-tepaga" >
<a href="#tepaga"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
</div>

</div> */}


</header>
















      </div>)}







<Images/>
<Footer/>
    </div>
  )
}
