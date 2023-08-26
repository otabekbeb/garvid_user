import React, { useState, useEffect } from 'react'
import '../css/Sertifikate.css'
import Sertifikat from '../img/Sertifikat.png'
import Start from '../img/Start.png'
import axios from 'axios'
import url from './Host'
import { AiOutlineArrowDown } from 'react-icons/ai'
import '../css/Nosignal.css'
import img_for_null from '../img/download.png'
import Groupimg from '../img/Group 2.png'
export default function Sertifikate() {
    const [state1, setState1] = React.useState();
    const [sertifikat, setSertifikat] = useState([])
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);

    useEffect(() => {
        axios.get(`${url}/edu/student_sertificat`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
            setSertifikat(res.data)
        })
    })
    return (
        <div>

            <div>
                <div className="cards_sertifikat">
                    <div className="card_sertifikat">
                        {sertifikat.length === 0 ? (
                           <div className="delete_padding">
                           <img src={Groupimg} alt="" />
                           <h4>У вас нет сертификата</h4>
                           <div className="delete_btns">
                             
                           {/* <a href="/Ourcourse">  <button style={{background:'#44bef1  '}} className="delete_btn_yes">Купить курс</button></a> */}
                           </div>
                         </div>) : (<>
                            {sertifikat.map(item => {
                                return (
                                    <div className="sertifikat">
                                        <div className="sertifikat_image">
                                            {item.image === null ? (<img src={img_for_null} alt="" />) : (<img src={item.image} alt="" />)}
                                        </div>
                                        <div className="button_text_df_blok_pitani_pro_Max">
                                            <div className="text_pro_max_gap_sos_lift_gr">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                            <button className='Dast_konter_dust_pro_dest' >Programming</button>
                                        </div>
                                    </div>
                                )
                            })}</>)}



                    </div>
                </div>

            </div>

        </div>
    )
}
