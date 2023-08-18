import React, { useState, useEffect } from 'react'
import '../css/Sertifikate.css'
import Sertifikat from '../img/Sertifikat.png'
import Start from '../img/Start.png'
import axios from 'axios'
import url from './Host'
import img_for_null from '../img/download.png'
export default function Sertifikate() {
    const [state1, setState1] = React.useState();
    const [sertifikat, setSertifikat] = useState([])
    useEffect(() => {
        setState1(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
        );
    }, []);

    useEffect(() => {
    axios.get(`${url}/edu/student_sertificat`,{headers:{Authorization:"Bearer" + localStorage.getItem("token")}}).then(res=>{
        setSertifikat(res.data )
    })
    })
    return (
        <div>

            <div>
                <div className="cards_sertifikat">     
                    <div className="card_sertifikat">
                   {sertifikat.map(item=>{
                    return (
                        <div className="sertifikat">
                       {item.image === null?(<img style={{height:'200px'}} src={img_for_null} alt="" />) :( <img src={item.image} alt="" />)}
                       
                        <div className="button_text_df_blok_pitani_pro_Max">
                            <div className="text_pro_max_gap_sos_lift_gr">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                            <button className='Dast_konter_dust_pro_dest' >Programming</button>
                        </div>
                    </div>
                    )
                   })}


                    </div>
                </div>

            </div>

        </div>
    )
}
