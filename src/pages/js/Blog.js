'use clint'
import React, { useState,useEffect } from 'react'
import "../css/Blog.css"
import Navbar from './Navbar'
import Footer from './Footer1'
import Images from './Images'

export default function Blog() {

    const [state1, setState1] = React.useState();
    useEffect(() => {
        setState1(
          localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
        );
      }, []);
  return (
    
    <div>
<Navbar/>
{state1 === "eng" ?(<div><div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>Blog</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="/">Home  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>Blog</p>
</div>
</div>
</div>
<div className="sdkojfdsopj">
<div className="container1">
        <div className="left">
            <div className="big-card">

                <div className="big-cards">
                    <div className="h01">
                        <p className="h11">The main objectives of the marketer</p>
                        <p className="pp"><i className='bx bx-calendar'></i> 07.09.2016</p>
                    </div>
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img02.jpg" alt=""/>
                    <p>The modern market is absolutely unpredictable. And yet it lives according to strict laws. The marketers need to be known to achieve maximum results in their business - that is the main task of the marketer.</p>                    
                    <button className="btn">Read More</button>
                </div>

                <div className="big-cards">
                    <div className="h01">
                        <p className="h11">Recession is a good opportunity to deal a deathblow to the competitors</p>
                        <p className="pp"><i className='bx bx-calendar'></i> 07.09.2016</p>
                    </div>
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img01.jpg" alt=""/>
                    <p>Media prices are falling, so advertising becomes more profitable. The combination of low prices on media and weak competition gives companies the opportunity to cheaply grab market share.</p>
                    <button className="btn">Read More</button>
                </div>
            </div>

        </div>

        <div className="right">
            <div className="category">
                <h1>Category</h1>
            <div className="a">
                <h3>Business Consulting</h3>
                <h3>Financial Management</h3>
                <h3>Marketing</h3>
                <h3>News</h3>
                <h3>Small Business</h3>
            </div>
        </div>
            <div className="right-h1">
                <h1>Recent Posts</h1>
            </div>
            <div className="min-card">
            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img08.jpg" alt=""/>
                <h2><a href="#">The most common mistakes when managing personal finances</a></h2>
            </div>

            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img06.jpg" alt=""/>
                <h2><a href="#">Methods of the recruitment</a></h2>
            </div>

            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img04.jpg" alt=""/>
                <h2><a href="#">Overalls with logo as a method of advertising</a></h2>
            </div>

            <div className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img02.jpg" alt=""/>
                <h2><a href="#">The main objectives of the marketer</a></h2>
            </div>
            <div id='min-cards' className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img01.jpg" alt=""/>
                <h2><a href="#">Recession is a good opportunity to deal a deathblow to the competitors</a></h2>
            </div>

        
        </div>

        </div>
    </div>
</div></div>):(<div><div className="asd">
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
    <p id='tepaga'>Блог</p>
</div>
</div>
</div>
<div className="sdkojfdsopj">
<div className="container1">
        <div className="left">
            <div className="big-card">

                <div className="big-cards">
                    <div className="h01">
                        <p className="h11">Основные цели маркетолога</p>
                        <p className="pp"><i className='bx bx-calendar'></i> 07.09.2016</p>
                    </div>
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img02.jpg" alt=""/>
                    <p>Современный рынок абсолютно непредсказуем. И все же оно живет по строгим законам. Маркетологам нужно быть известными, чтобы добиться максимальных результатов в своем деле – вот основная задача маркетолога.</p>                    
                    <button className="btn">Read More</button>
                </div>

                <div className="big-cards">
                    <div className="h01">
                        <p className="h11">Кризис — хорошая возможность нанести смертельный удар конкурентам</p>
                        <p className="pp"><i className='bx bx-calendar'></i> 07.09.2016</p>
                    </div>
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img01.jpg" alt=""/>
                    <p>Цены на СМИ падают, поэтому реклама становится более прибыльной. Сочетание низких цен на СМИ и слабой конкуренции дает компаниям возможность дешево захватить долю рынка.</p>
                    <button className="btn">Read More</button>
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
             <div id='min-cards' className="min-cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-blog-img01.jpg" alt=""/>
                <h2><a href="#">Рецессия - это хорошая возможность нанести смертельный удар конкурентам</a></h2>
            </div>

        
        </div>

        </div>
    </div>
</div></div>)}

<Images/>
    <Footer/>
    </div>
  )
}
