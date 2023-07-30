import React, { useState,useEffect } from 'react'
import '../css/Sertifikate.css'
import Sertifikat from '../img/Sertifikat.png'
import Start from '../img/Start.png'
export default function Sertifikate() {
    const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );},[]);
  return (
    <div>

        <div>
        <div className="cards_sertifikat">
            <div className="card_sertifikat">
            <div className="sertifikat">
                <img src={Start} alt="" />
                <div className="button_text_df_blok_pitani_pro_Max">
                    <div className="text_pro_max_gap_sos_lift_gr">
                    <h4>Raspberry Pi programming basics</h4>
                    <p>June 20, 2019</p>
                    </div>
                    <button className='Dast_konter_dust_pro_dest' >Programming</button>
                </div>  
            </div>
            <div className="sertifikat">
                <img src={Start} alt="" />
                <div className="button_text_df_blok_pitani_pro_Max">
                    <div className="text_pro_max_gap_sos_lift_gr">
                    <h4>Raspberry Pi programming basics</h4>
                    <p>June 20, 2019</p>
                    </div>
                    <button className='Dast_konter_dust_pro_dest' >Programming</button>
                </div>
            </div>
            <div className="sertifikat">
                <img src={Start} alt="" />
                <div className="button_text_df_blok_pitani_pro_Max">
                    <div className="text_pro_max_gap_sos_lift_gr">
                    <h4>Raspberry Pi programming basics</h4>
                    <p>June 20, 2019</p>
                    </div>
                    <button className='Dast_konter_dust_pro_dest'>Programming</button>
                </div>
            </div>
            <div className="sertifikat">
                <img src={Start} alt="" />
                <div className="button_text_df_blok_pitani_pro_Max">
                    <div className="text_pro_max_gap_sos_lift_gr">
                    <h4>Raspberry Pi programming basics</h4>
                    <p>June 20, 2019</p>
                    </div>
                    <button className='Dast_konter_dust_pro_dest'>Programming</button>
                </div>
            </div>
            <div className="sertifikat">
                <img src={Start} alt="" />
                <div className="button_text_df_blok_pitani_pro_Max">
                    <div className="text_pro_max_gap_sos_lift_gr">
                    <h4>Raspberry Pi programming basics</h4>
                    <p>June 20, 2019</p>
                    </div>
                    <button className='Dast_konter_dust_pro_dest'>Programming</button>
                </div>
            </div>
            <div className="sertifikat">
                <img src={Start} alt="" />
                <div className="button_text_df_blok_pitani_pro_Max">
                    <div className="text_pro_max_gap_sos_lift_gr">
                    <h4>Raspberry Pi programming basics</h4>
                    <p>June 20, 2019</p>
                    </div>
                    <button className='Dast_konter_dust_pro_dest'>Programming</button>
                </div>
            </div>
            
            </div>
        </div>

    </div>
    
    </div>
  )
}
