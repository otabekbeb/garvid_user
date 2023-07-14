import React from 'react'
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
  return (
    <div>
      <Navbar/>
<div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>О нас</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Главный  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>О нас</p>
</div>
</div>
</div>

<header className='about-header-block'>
<div className="about-header-block-kotta">
  <div className="about-header-block-img">
    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img.jpg" alt="" />
    <div className="about-header-block-text">
      <h2 id='uityty'>Делать правильные вещи в нужное время.</h2>
      <p>Добро пожаловать в лидирующую компанию на рынке! Наш успех обусловлен высочайшим качеством обслуживания клиентов. <br className='pogos'/> Мы можем встретить  требования даже самых капризных клиентов; для нас нет сложных задач! Спасибо за ваш выбор! Наша <br className='pogos' /> компания может похвастаться репутация надежного партнера, известного во всем мире. Мы гордимся бескомпромиссным <br /> качеством</p>
      <div className="about-header-addelna">
        <p>Спасибо Вам что посетили наш сайт! Вы находитесь в нужном месте! Мы ориентированы на предоставление комплексных <br className='pogos' /> решений и услуг клиентам во всем мире. Ставя интересы наших клиентов на первое место, мы прилагаем все усилия, чтобы <br className='pogos' /> превзойти ваши ожидания.</p>
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
    <li><a href="#">О нас</a></li>
  </ul>
  <div className="about-header-line"></div>
  
   </div>
   <div className="about-header-block2-text2">
  <ul>
    <li><a href="#">Новости</a></li>
  </ul>
  <div className="about-header-line"></div>
   </div>
   <div className="about-header-block2-text3">
  <ul>
    <li><a href="#">Команда</a></li>
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



<div className="asdod">


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






<Images/>
<Footer/>
    </div>
  )
}
