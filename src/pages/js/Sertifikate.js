import React, { useState, useEffect } from "react";
import "../css/Sertifikate.css";
import Sertifikat from "../img/Sertifikat.png";
import Start from "../img/Start.png";
import axios from "axios";
import url from "./Host";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../css/Nosignal.css";
import img_for_null from "../img/download.png";
import Groupimg from "../img/Group 2.png";
import Diplom  from '../img/Diploma.png'
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";

export default function Sertifikate() {
  const [state1, setState1] = React.useState();
  const [sertifikat, setSertifikat] = useState([]);
  const [sertifikatID, setSertifikatID] = useState();



  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    axios
      .get(`${url}/edu/student_sertificat`, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((res) => {
        axios.get(`${url}/auth/oneuser`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
          res1.data.map(one => {
            const Filter = res.data.filter(item => item.student_id == one.id)
            setSertifikat(Filter);
          })
        })
      });
  }, []);

  return (
    <div>
      <div>
        <div className="cards_sertifikat">
        {sertifikat.length === 0 ? (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginBottom:'50px'}}>
              <div  className="delete_padding1">
              <img src={Diplom} alt="" />
              <h4 style={{ fontSize: '30px', opacity: '0.3' }}>Our courses are not yet</h4>
              </div>
            </div>
            ) : (
              <div className="card_sertifikat">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                {sertifikat.map((item) => {
                  return (
                    <div
                      style={{ marginBottom: "15px" }}
                      className="sertifikat"
                    >
                      <div className="sertifikat_image">
                        {item.image === null ? (
                          <img src={img_for_null} alt="" />
                        ) : (
                          <img src={item.image} alt="" />
                        )}
                      </div>
                      <div className="button_text_df_blok_pitani_pro_Max">
                        <div className="text_pro_max_gap_sos_lift_gr">
                          <h4>{item.title}</h4>
                          <p>{(item.description).slice(0, 10)}</p>
                        </div>

                        <button onClick={() => { setSertifikatID(item.id) }} className="Dast_konter_dust_pro_dest">
                          Programming
                        </button>

                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
              )}
        </div>
      </div>
    </div>
  );
}
