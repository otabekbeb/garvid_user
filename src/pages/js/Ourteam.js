import React from 'react'
import '../css/Ourteam.css'
import Navbar from './Navbar'
import Footer from './Footer1'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Images from './Images';
export default function Ourteam() {
  return (
    <div>
      <Navbar />
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
      <div className="header66">
        <div className="ikki23">
          <div className="left-img33">
            <div className="cards23">
              <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img01.jpg" alt="" />
              <h1><a href="#">Деннис Робертс</a></h1>
              <h5>Основатель и генеральный директор</h5>
              <p>Как основатель FinExpert, Денис решает вопросы развития компании и ее подразделений...</p>
              <div className="two21">
                <div className="icon223">
                  <div className="dumalo12"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
                <div className="view12"><h4>Профиль <span></span></h4></div>
              </div>
            </div>

            <div className="cards23">
              <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img02.jpg" alt="" />
              <h1><a href="#">Кларк Гринн</a></h1>
              <h5>Финансовый консультант</h5>
              <p>Clarke предоставляет услуги по финансовому планированию и управлению капиталом, пытаясь минимизировать наши расходы и риски.</p>
              <div className="two21">
                <div className="icon223">
                  <div className="dumalo12"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
                <div className="view12"><h4>Профиль <span></span></h4></div>
              </div>
            </div>

            <div className="cards23">
              <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img03.jpg" alt="" />
              <h1><a href="#">Эшли Джонас</a></h1>
              <h5>Главный финансовый директор</h5>
              <p>Основная задача Эшли — управление финансовыми рисками FinExpert. Она также отвечает за анализ данных, полученных от...</p>
              <div className="two21">
                <div className="icon223">
                  <div className="dumalo12"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
                <div className="view12"><h4>Профиль <span></span></h4></div>
              </div>
            </div>

            <div className="cards23">
              <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img04.jpg" alt="" />
              <h1><a href="#">Джонни Беннетт</a></h1>
              <h5>Налоговый консультант</h5>
              <p>Г-н Бенетт является важным членом нашей команды. Его работа заключается в управлении налогами и решении различных ситуаций...</p>
              <div className="two21">
                <div className="icon223">
                  <div className="dumalo12"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
                <div className="view12"><h4>Профиль <span></span></h4></div>
              </div>
            </div>

            <div className="cards23">
              <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img05.jpg" alt="" />
              <h1><a href="#">Джо Норрис</a></h1>
              <h5>Финансовый консультант</h5>
              <p>Г-жа Норрис занимается различными финансовыми проблемами малого бизнеса и стартапов. Оказывает консультационные услуги онлайн...</p>
              <div className="two21">
                <div className="icon223">
                  <div className="dumalo12"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
                <div className="view12"><h4>Профиль <span></span></h4></div>
              </div>
            </div>

            <div className="cards23">
              <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-team-img06.jpg" alt="" />
              <h1><a href="#">Бернард Харрис</a></h1>
              <h5>Финансовый консультант</h5>
              <p>Когда речь идет о снижении финансовых рисков международных компаний и бизнес-корпораций, Бернар является нашим ведущим консультантом...</p>
              <div className="two21">
                <div className="icon223">
                  <div className="dumalo12"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                  <div className="dumalo12"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
                <div className="view12"><h4>Профиль <span></span></h4></div>
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
      </div>
      <Images />
      <Footer />

    </div>
  )
}
