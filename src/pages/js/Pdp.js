import React, { useState } from 'react'
import '../css/Pdp.css'
import Nav from 'react-bootstrap/Nav';
import Filtr from "./Searchfilter"
import 'bootstrap/dist/css/bootstrap.min.css';
import Mon from '../img/Mon.png'
import { AiFillStar } from 'react-icons/ai'
import {HiArrowRight} from 'react-icons/hi'
import Rasp from '../img/Rasp.png'
import {BsPlus} from 'react-icons/bs'
import {TbPointFilled} from 'react-icons/tb'
export default function Pdp() {
    const [toggle, setToggle] = useState(1)

    function updatetoggle(id) {
        setToggle(id)
    }

    return (
        <div>
            <div className="gray_blok">
                <div className="fil_text_blok">
                    <Nav variant="underline" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link onClick={() => updatetoggle(1)} >Мои курсы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => updatetoggle(2)} className='znani'  >Мои усвоенные знания</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => updatetoggle(3)} >
                                Мои сертификаты
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='werker' onClick={() => updatetoggle(4)}  >
                                Мои наставники-члены
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
    <div className={toggle === 1 ? "show-content" : "content"}><Filtr />
        <div className='cali_df'>
            <div className="cali">
                <img src={Mon} alt="" />
                <div className="zero_blok">
                <div className="text_blok">
                    <h3>AWS для разработчиков: балансировка нагрузки ECS и Multi-Regional</h3>
                </div>
                <div className="star_icon_blok">
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar />
                                <div className="number">
                                    <h6>4.1 (524)</h6>
                                </div>
                    </div>
                    <div className="bolim_blok">
                        <div className="kurs_hajmi">
                        <p>Размер курса</p>
                        <h3 className='soat'>38 часы</h3>
                        </div>
                        <div className="kurs_bolimlari">
                        <p>Разделы курса</p>
                        <h3 className='soat'>38 часы</h3>
                        </div>
                        <div className="left_icon">
                        <HiArrowRight/>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="cali">
                <img src={Rasp} alt="" />
                <div className="zero_blok">
                <div className="text_blok">
                    <h3>Программирование Raspberry Pi
основы</h3>
                </div>
                <div className="star_icon_blok">
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar />
                                <div className="number">
                                    <h6>4.1 (524)</h6>
                                </div>
                    </div>
                    <div className="bolim_blok">
                        <div className="kurs_hajmi">
                        <p>Размер курса</p>
                        <h3 className='soat'>38 часы</h3>
                        </div>
                        <div className="kurs_bolimlari">
                        <p>Разделы курса</p>
                        <h3 className='soat'>38 часы</h3>
                        </div>
                        <div className="left_icon">
                        <HiArrowRight/>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="cali1">
                <div className="plus_blok">
              <BsPlus className='plus_icon'/>
                <h6>Yangi kurs qo’shish</h6>
                </div>
            </div>

        </div>
        <div className="point_blok">
            <TbPointFilled className="nuqta"/>
            <TbPointFilled className="nuqta"/>
            <TbPointFilled className="nuqta"/>
            <h6>Yuklanmoqda</h6>
        </div>
            </div>




            <div className={toggle === 2 ? "show-content" : "content"}><h1>Oqganganim</h1></div>
            <div className={toggle === 3 ? "show-content" : "content"}>sertifikatim </div>
            <div className={toggle === 4 ? "show-content" : "content"}>azolarim</div>

        </div>
    )
}
