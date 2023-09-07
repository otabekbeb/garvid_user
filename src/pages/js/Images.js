import React, { useEffect, useState } from "react";
import "../css/Images.css";
import images1 from "../img/images1.png";
import images2 from "../img/images2.png";
import images3 from "../img/images3.png";
import images4 from "../img/images4.png";
import images5 from "../img/images5.png";
import images6 from "../img/images6.png";
import axios from "axios";
import url from "./Host";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function Images() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/homiy`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <header id="imagees" className="images1">
      <div className="wrapper1">
        <div className="running_img1">
          <div className="row1">
            {data.map((item) => {
              return (
                <>
                  <img
                    style={{
                      height: "100px",
                      width: "200px",
                      marginRight: "40px",
                    }}
                    onClick={() => {
                      window.location = "/Teams";
                      localStorage.setItem("partner", item.id);
                    }}
                    src={item.image}
                    alt=""
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
