import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'
import "../css/Services.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
export default function Services() {
  return (
    <div>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Услуги</h1>
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
         <div className="box">
        <div className="left-card">
            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img01.jpg" alt=""/>
                <h1><a href="#">Финансовое Планирование</a></h1>
                <p>Несмотря на то, что финансовое планирование является непрерывным и сложным процессом, оно помогает человеку принимать разумные решения относительно денежных целей в своей жизни.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img02.jpg" alt=""/>
                <h1><a href="#">Инвестиционный Консалтинг</a></h1>
                <p>Наши инвестиционные консультанты изучают цели клиентов, инвестиционный опыт и устойчивость к риску и определяют план финансовых вложений, наиболее подходящий для каждого клиента.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img03.jpg" alt=""/>
                <h1><a href="#">Налогообложение</a></h1>
                <p>Устроить свои дела так, чтобы избежать или отсрочить налогообложение — настоящее искусство, а эффективное налоговое планирование может стать первым шагом к вашему финансовому успеху и потенциальной экономии.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img04.jpg" alt=""/>
                <h1><a href="#">Пенсионное планирование</a></h1>
                <p>Планирование выхода на пенсию может быть проблематичным, если у вас нет необходимых знаний о том, как управлять своими средствами или создать основу для выхода на пенсию.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img05.jpg" alt=""/>
                <h1><a href="#">Планирование Бизнеса</a></h1>
                <p>Управление финансами компании, независимо от того, большая она или маленькая, часто кажется сложной задачей, но наши специалисты могут помочь вам улучшить финансовое состояние вашей компании.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img06.jpg" alt=""/>
                <h1><a href="#">Управление Рисками</a></h1>
                <p>Эта сфера финансового консультирования включает выявление, оценку и приоритизацию возможных рисков для вашего бизнеса с последующими превентивными мерами.</p>
            </div>
        </div>


        <div className="right-card">
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
        </div>
        
    </div>
    <Images/>
    <Footer/>
    </div>
  )
}
