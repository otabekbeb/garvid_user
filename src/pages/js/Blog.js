import React from 'react'
import "../css/Blog.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'

export default function Blog() {
  return (
    <div>
<Navbar/>
<div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Блог</h1>
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
<div className="sdkojfdsopj">
<div className="container">
        <div className="left">
            <div className="big-card">

                <div className="big-cards">
                    <div className="h01">
                        <p className="h11">Основные цели маркетолога</p>
                        <p className="pp"><i className='bx bx-calendar'></i> 07.09.2016</p>
                    </div>
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img02.jpg" alt=""/>
                    <p>Современный рынок абсолютно непредсказуем. И все же оно живет по строгим законам. Маркетологам нужно быть известными, чтобы добиться максимальных результатов в своем деле – вот основная задача маркетолога.</p>                    
                    <button className="btn">Читать далее</button>
                </div>

                <div className="big-cards">
                    <div className="h01">
                        <p className="h11">Кризис — хорошая возможность нанести смертельный удар конкурентам</p>
                        <p className="pp"><i className='bx bx-calendar'></i> 07.09.2016</p>
                    </div>
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img01.jpg" alt=""/>
                    <p>Цены на СМИ падают, поэтому реклама становится более прибыльной. Сочетание низких цен на СМИ и слабой конкуренции дает компаниям возможность дешево захватить долю рынка.</p>
                    <button className="btn">Читать далее</button>
                </div>
            </div>

        </div>

        <div className="right">
            <div className="category">
                <h1>Категория</h1>
            <div className="a">
                <h3>Бизнес-консультирование</h3>
                <h3>Финансовый менеджмент</h3>
                <h3>Маркетинг</h3>
                <h3>Новости</h3>
                <h3>Малый бизнес</h3>
            </div>
        </div>
            <div className="right-h1">
                <h1>Недавние Посты</h1>
            </div>
            <div className="min-card">
            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img08.jpg" alt=""/>
                <h2><a href="#">Самые распространенные ошибки при управлении личными финансами</a></h2>
            </div>

            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img06.jpg" alt=""/>
                <h2><a href="#">Методы вербовки</a></h2>
            </div>

            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img04.jpg" alt=""/>
                <h2><a href="#">Комбинезон с логотипом как способ рекламы</a></h2>
            </div>

            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img02.jpg" alt=""/>
                <h2><a href="#">Основные цели маркетолога</a></h2>
            </div>

        
        </div>

        </div>
    </div>
</div>
<Images/>
    <Footer/>
    </div>
  )
}
