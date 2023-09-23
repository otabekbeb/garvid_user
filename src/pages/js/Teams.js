import React, { useEffect, useState } from 'react'
import Navbar from '../js/Navbar'
import Futer1 from '../js/Footer1'
import axios from "axios";
import url from "./Host";
import Images from "./Images";
import img_for_null from "../img/download.png";
export default function Teams() {
  const [univercard, setUnivercard] = useState([])
  useEffect(() => {
    axios.get(`${url}/api/university`, {
      headers: { Authorization: "Bearer" + localStorage.getItem('token') },
    })
      .then((res) => {
        setUnivercard(res.data);
      })
      .catch((err) => { })
  })
  return (
    <div>
      <Navbar />
      <div className="universty">
        <div className="iniversty_cards">
          {univercard.map((item, key) => {
            if (item.id == localStorage.getItem("partner")) {
              return (
                <div
                  onClick={() => {
                    window.location = "/Teams";
                    localStorage.setItem("partner", item.id);
                  }}
                  key={key}
                  className="iniversty_card"
                >
                  <div className="iniversty_img">
                    {item.image === null ? (
                      <img src={img_for_null} alt="" />
                    ) : (
                      <img src={item.image} alt="" />
                    )}
                  </div>
                  <p>{item.title}</p>
                  <div className="line-jome-home"></div>
                  <h2>{item.deckription}</h2>
                </div>
              );
            }

          })}
        </div>
      </div>
      <Futer1 />
    </div>
  )
}
