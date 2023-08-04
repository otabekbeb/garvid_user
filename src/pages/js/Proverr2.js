
import React, { useEffect, useState } from "react";
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
import About_comment from '../js/About_comment'
import axios  from "axios";
import url from "./Host";
import img_for_null1 from '../img/download.png'
import Usernavbar from '../js/Usernavbar'

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
    const [data, setData] = useState([]);
    const [jalod, jalodData] = useState([]);
    const [dusha, filTerrdata1] = useState([]);
    const [ticher, ticherData] = useState([]);
    const [cours, coursData] = useState([]);
    const [mycousr, myData] = useState([]);
    const [oneuser, oneData] = useState([]);

    function okurse(id){
    setToggle(id)

    }
    useEffect(()=>{
        axios.get(`${url}/api/cours_types`).then(res=>{
setData(res.data)
console.log(res.data)
        }).catch(err=>{
            alert("xato")
        })

        axios.get(`${url}/api/course`,{headers:{Authorization : ` Bearer ${localStorage.getItem("token")}`}}).then(res=>{
            jalodData(res.data)
            filTerrdata1(res.data)
            console.log(res.data)
        }).catch(err=>{
            alert('hato')
        })

axios.get(`${url}/auth/teachers`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
    ticherData(res.data)
    console.log(res.data)
}).catch(err=>{
    alert("techirri malumoti xato keldi")
})
       
axios.get(`${url}/auth/oneuser`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
    oneData(res.data)
    console.log(res.data)
}).catch(err=>{
    alert("malumot xato keldi")
})




    },[])
 // axios.get(`${url}/api/mycourse/${localStorage.getItem("courseid")}`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
        //     myData(res.data)
        //     console.log(res.data,)
        //     alert("siz kurs sotib oldingiz")
        // }).catch(err=>{
        //  alert("balans yetarli mas")
        // })
    function coursid(){
        axios.post(`${url}/api/course/register/${localStorage.getItem("courseid")}`,{headers:{Authorization :  `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
            coursData(res.data)
            console.log(res.data)
            alert("siz kurs sotib oldiz")
        }).catch(err=>{
            alert("balans ytarli mas yoki server blan xato")
        })
   
    }
  
    function filter (id) {
        axios
        .get(`${url}/api/course`, {headers: {Authorization : `Bearer ${localStorage.getItem("token")}`}})
        .then((res) => {
          const search = res.data.filter(item=>item.course_type===id)
          filTerrdata1(search)
        });
      }

      const Filter = (event) => {
        const searchRegex = new RegExp(`^${event.target.value}`, "i");
        axios.get(`${url}/api/course`, {headers: {Authorization : `Bearer ${localStorage.getItem("token")}`}}).then(res=>{
          const searchdata = res.data.filter((item) => {
            return (
              searchRegex.test(item.name) 
            );
          })
          filTerrdata1(searchdata)
        })
    
      }

return (
    <div>
<Usernavbar/>

<div className="prover2">
    <div className="prover2-kotta-men">
        <div className="prover2-search-joy">
        <div className="prover2-mni-search">
           <form action="">
           <input type="text" placeholder='Какой курс вы хотите изучать?' onClick={()=>filter()}  onChange={Filter}  required /><button><box-icon name='search' color='#9da7bb' ></box-icon></button>
           </form>
           <div className="prover2-info-d">
            <div className="prover2-info-filter2">
{data.map((item=>{
    return(
        <button><p>#{item.name}</p></button>
    )
}))}
            </div>
            <div className="prover2-info-youtube-f">
                <p className='prover2-p-df'>Программирование</p>
 {dusha.map(item1=>{
return(
    <div className="prover2-info-block1">
    <div className="prover2-info-block1-img">
    {item1.image === null ? (
                 <img src={img_for_null1} alt="" />
                ) : (
                  <img src={item1.image} />
                 )}
    </div>
    <div className="prover2-info-block1-text">
        <h5>{item1.name}</h5>
<p>{item1.description}</p>
<hr />
    </div>
</div>
)
})}
{/* 
                <div className="prover2-linerr1">

</div> */}

            </div>
            
           </div>
        </div>
        </div>
       
        
        {jalod.map(item=>{
        if(item.id==localStorage.getItem("courseid")){
            return(
                <div className="prover2-orta-joy">
<img className="saas" src={item.image} alt="" />
                
                             <div className="prover2-orta-joy-text">
            <h5>{item.name}</h5>
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
            
                </div>
                <div className="prover2-profil-patpis">
                    <div className="prover2-profil-img">
            <img src={profil} alt="" />
                    </div>
                    <div className="prover2-profil-text-info">
                        <p>Muhammad Jumayev</p> <button onClick={()=> button()}  className="potpis"><p className="aa">Подписаться</p><p className="aaa">Отменить подписку</p></button>
                    </div>
                    {/* <div className="obmen-kategory-re">
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
                    </div> */}
                </div>


<div className="pover2-tab-kategoryy">
                <div className="radio-inputs">
            <label className="radio">
            <input type="radio" name="radio"/>
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
            <p>
         {item.description}
            
            </p>
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
                        <About_comment/>
                    </div>
                    
                    
                    
                    </div></div>
                <div className={toggle===3?"text-kurs-haqida3":"text-kurs-haqida2"}><div className="text-kurs-haqida3">
                    
                    <div className="prover2-mni-treboniya">
                        <div className="prover2-trebovaniya-block">
                            <div className="span"></div>
                            <p>Знание компьютерных  уроков</p>
                        </div>
                        <div className="prover2-trebovaniya-block2">
                            <div className="span"></div>
                            <p>Интерес к программированию</p>
                        </div>


<div className="prover2-trebovaniya-block3">
                            <div className="span"></div>
                            <p>Элементарный английский</p>
                        </div>
                        <div className="prover2-trebovaniya-block4">
                            <div className="span"></div>
                            <p>Персональный ноутбук</p>
                        </div>
                        <div className="prover2-trebovaniya-block5">
                            <div className="span"></div>
                            <p>Базовая Java</p>
                        </div>
                    </div>
                    
                    </div></div>
                <div className={toggle===4?"text-kurs-haqida3":"text-kurs-haqida2"}><div className="text-kurs-haqida4">
                    
                    <h5>Содержание курса</h5>
                    <div className="faq">
                        <div className="faq-item">
                        <input type="checkbox" className="faq-input"  name="faq" id="faq_1"/>
                            <div className="faq-div">
                            <label htmlFor="faq_1" className="faq-title">1. Введение в процесс программирования и установки</label>
                            </div>
                            
                            <div className="faq-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati quidem explicabo sunt minima <br id="yoqaollllll" /> perspiciatis!</p>
                            </div>
                        </div>
            
            
            <div className="faq-item">
                        <input type="checkbox" className="faq-input"  name="faq" id="faq_2"/>
                        <div className="faq-div">
                            <label htmlFor="faq_2" className="faq-title" id="saopdsados">2. Работа с простыми операциями в программе </label>
                            </div>
                            <div className="faq-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. jalod obcaecati quidem explicabo sunt minima <br id="yoqaollllll" /> perspiciatis!</p>
                            </div>
                        </div>
                    </div>
                    
                    </div></div>
                
                
                </div>
            )
        }
       })}


       


                        
                        <div className="prover2-oxiri-joy">
                        {jalod.map(item=>{
                if(item.id==localStorage.getItem("courseid")){
                    return(    
            <div className="prover2-oxiri-block-in">
            <div className="mni-dasturlash-bloc"><p>{item.name}</p></div>
            <div className="mni-kurs-narxi">
                <div className="mni-kurs-block1"><h5>Стоимость курса</h5>
                <p>{item.price} <span>RUB</span></p></div>
                <div className="mni-kurs-block2"></div>
                
                <div className="mni-kurs-block1"><h5>Kurs hajmi</h5>
                <p>{item.planned_time} час</p></div>
                <div className="mni-kurs-block2"></div>
            </div>
            <p className="spdfodsofdsf">Разделы курса:</p>
            {/* <div className="mni-blocc-linee"></div> */}
            
{/* <div className="prover2-oxiri-total-kurss"onMouseLeave={()=>aboutClose123122()}  >


<div className="mni-kurs-narxi2">
                <div className="mni-kurs-block1"><h5>Стоимость курса</h5>
                <p>150.000  <span>RUB</span></p></div>
                <div className="mni-kurs-block2"></div>
                
                <div className="mni-kurs-block1"><h5>Размер поля</h5>
                <p>38 час</p></div>
                <div className="mni-kurs-block2"></div>
            </div>
</div> */}
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
<div className="mni-buton-iikki-yo" onClick={()=>coursid()}>
    <button id="gbfdgfdgdfgdf">Покупка</button><div className="line-mni-but"></div><button >{item.price} RUB</button>
</div>
      
            </div>
)
}
})}

      <div className="mni-krus-techer-swiper">
<div className="boshqa-mentorla">
    <h5>Boshqa Mentorlar</h5>
    <div className="boshqa-mentorla-krugg1">
        <div className="boshqa-kurglaaaaa1" onClick={()=>onga()}><box-icon name='right-arrow-alt' color='#44bef1 ' ></box-icon></div>
    </div>
</div>
{ticher.map(item1=>{
        return(
           
          <div className="mni-swiper-grid">
    <div className="mni-gridf1">
<div className="asdasdsadasdsa">
{item1.image === null ? (
                 <img src={img_for_null1} alt="" />
                ) : (
                  <img src={item1.image} />
                 )}
    
</div>
             

    </div>
    
    <div className="mni-gridf2">
    {item1.image === null ? (
                 <img src={img_for_null1} alt="" />
                ) : (
                  <img src={item1.image} />
                 )}
             

    </div>
</div>
           
        )
    })}

</div>


</div>  

  

        
    </div>
    <div className="mni-orta-bloxk-mediaa">
        <div className="mni-orta-kota-media">
        <div className="mni-media-orta-input">
        <form action="">
           <input type="text" placeholder='Какой курс вы хотите изучать?' required /><button id="input-neposhlushni"><box-icon name='search' color='#9da7bb' ></box-icon></button>
           </form>
        </div>
        <p className="pddppdsd"></p>
        <p className="pddppdsd"></p>
        
        <div className="mni-media-orta-filter">
        <box-icon name='chevron-down' color='#c5c9d3' ></box-icon>
        </div>


</div>
        <div className="prover3-search-joy">
        <div className="prover3-mni-search">
           <div className="prover2-info-d">
         
            <div className="prover2-info-filter2">
            {data.map((item=>{
    return(
        <button><p>#{item.name}</p></button>
    )
}))}
            </div>
            <div className="prover2-info-youtube-f">
                <p className='prover2-p-df'>Программирование</p>


{dusha.map(item1=>{
return(
    <div className="prover4-info-block1">
    <div className="prover2-info-block1-img">
    {item1.image === null ? (
                 <img src={img_for_null1} alt="" />
                ) : (
                  <img src={item1.image} />
                 )}
    </div>
    <div className="prover2-info-block1-text">
        <h5>{item1.name}</h5>
<p>{item1.description}</p>
<hr />
    </div>
</div>
)
})}
{/*                
                <div className="prover4-info-block1">
                    <div className="prover4-info-block1-img">
                        <img src={iphone} alt="" />
                    </div>
                    <div className="prover4-info-block1-text">
                       <h5>Программирование на iOS <br className="prover1-info-none-br" />
курсы</h5>
<p>Lorem ipsum dolor sit amet, consectetur <br />
dolor sit amet. . . .</p>
                    </div>
                </div>
                <div className="prover3-linerr1">


</div> */}
                
            

            </div>
            
           </div>
        </div>
        </div>
    </div>

    {/* kereka */}
{jalod.map(item=>{
    if(item.id==localStorage.getItem("courseid")){
      return(
        <div className="mni-grid-pas-media">

        <div className="prover2-oxiri-block-in">
                  <div className="mni-dasturlash-bloc"><p>{item.name}</p></div>
                  <div className="mni-kurs-narxi">
                      <div className="mni-kurs-block1"><h5>Стоимость курса</h5>
                      <p>{item.price} <span>RUB</span></p></div>
                      <div className="mni-kurs-block2"></div>
                      
                      <div className="mni-kurs-block1"><h5>Kurs hajmi</h5>
                      <p>{item.planned_time} час</p></div>
                      <div className="mni-kurs-block2"></div>
                  </div>
                  <p className="spdfodsofdsf">Разделы курса:</p>
                
                  
       <div className="prover2-oxiri-total-kurss"onMouseLeave={()=>aboutClose123122()}  >
      <div className="prover20chech-box-a" onMouseEnter={()=>about2222()} onClick={()=>akkordion()} >
          <input type="checkbox"/>
          <p>Введение в процесс программирования и установки</p>
          <span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
      </div>
      <div className="mni-kurs-narxi2">
                      <div className="mni-kurs-block1"><h5>Стоимость курса</h5>
                      <p>150.000  <span>RUB</span></p></div>
                      <div className="mni-kurs-block2"></div>
                      
                      <div className="mni-kurs-block1"><h5>Размер поля</h5>
                      <p>38 час</p></div>
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
          <button id="gbfdgfdgdfgdf">Покупка</button><div className="line-mni-but"></div><button >{item.price} RUB</button>
      </div>
            
                  </div>
            <div className="mni-krus-techer-swiper">
      <div className="boshqa-mentorla">
          <h5>Boshqa Mentorlar</h5>
          <div className="boshqa-mentorla-krugg1">
              <div className="boshqa-kurglaaaaa1" onClick={()=>onga()}><box-icon name='right-arrow-alt' color='#536dfd' ></box-icon></div>
          </div>
      </div>
      {ticher.map(item1=>{
        return(


<div className="mni-swiper-grid">
    <div className="mni-gridf1">
    {item1.image === null ? (
                 <img src={img_for_null1} alt="" />
                ) : (
                  <img src={item1.image } />
                 )}
             

    </div>
    
    <div className="mni-gridf2">
    {item1.image === null ? (
                 <img src={img_for_null1} alt="" />
                ) : (
                  <img src={item1.image} />
                 )}
             

    </div>
</div>
           
        )
    })}
      </div>
      
        
        </div>
      )
    }
})}





  <div className="lolipap-kptta-nomoylabtopomadim">
  <div className="mni-krus-techer-swiper1">
<div className="boshqa-mentorla">
    <h5>Boshqa Mentorlar</h5>
    <div className="boshqa-mentorla-krugg1">
        <div className="boshqa-kurglaaaaa1" onClick={()=>onga()}><box-icon name='right-arrow-alt' color='#536dfd' ></box-icon></div>
    </div>
</div>
<div className="mni-swiper-grid">
    <div className="mni-gridf1">
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/46f705111077375.5ffb645951e7c.jpg" alt="" />
<img src="https://ag-spots-2020.o.auroraobjects.eu/2020/08/22/other/2880-1800-crop-bmw-m5-f90-competition-2021-c330122082020014437_1.jpg" alt="" />
<img src="https://ag-spots-2020.o.auroraobjects.eu/2020/03/07/other/2880-1800-crop-bmw-m5-f90-competition-c490507032020171519_1.jpg" alt="" />
<img src="https://ag-spots-2021.o.auroraobjects.eu/2021/01/17/bmw-m5-f90-competition-2021-c451117012021040035_1.jpg" alt="" />
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
  )
}