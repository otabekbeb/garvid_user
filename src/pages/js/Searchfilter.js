import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Mon from "../img/Mon.png";
import { AiFillStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import Rasp from "../img/Rasp.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import "../css/Spiska.css";
import "../css/Calibig.css";
import WWW from "../img/WWW.png";
import axios from "axios";
import url from "./Host";
export default function Searchfilter() {
  const [kursdata, setKursdata] = useState([]);
  const [type, settype] = useState([]);
  const [state1, setState1] = React.useState();

  function Filter() {
    document.querySelector(".filter_button").classList.toggle("filter");
  }
  function windowModal() {
    document.querySelector(".kurs_cards").style = "display:flex;transition:3s";
    document.querySelector(".spiska_img_title_div").style = "display:none";
  }
  function menuModal() {
    document.querySelector(".kurs_cards").style = "display:none";
    document.querySelector(".spiska_img_title_div").style =
      "display:block;transition:3s";
  }

  useEffect(() => {
    axios
      .get(`${url}/course/main/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } })
      .then((res) => {
        setKursdata(res.data);
        axios
          .get(`${url}/course/type/`, { headers: { "Accept-Language": localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" } })
          .then((res) => {
            settype(res.data);
          });
      });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);

  return (
    <div>
      {state1 === "en" ? (<div>
        <div className="Filter">
          <div className="blur_blok">
            <div className="inp_blok">
              <input type="text" placeholder="Search among my courses" />
              <CiSearch className="search" />
            </div>
            <div className="blur">
              <div className="icon_blok">
                <div
                  className="sel_blok"
                  onClick={() => {
                    Filter();
                  }}
                >
                  <BiMenu className="menyu" />
                  <h4>Filter</h4>
                </div>
                <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div>
              </div>
              <div className="filter_button">


                      {type.map((item2) => {
                          return (
                            <div className="button_filter_kurs">
                              <div className="div_kurs">{item2.name}</div>
                            </div>
                          );
                      })}
                
              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards">
          {kursdata.map((item) => {
            return (
              <div className="kurs_card">
                <button className="btn_das">Dasturlash</button>
                {item.image === null ? (
                  <div className="No_img">
                    <h1>no picture</h1>
                  </div>
                ) : (
                  <img src={item.image} />
                )}
                <div className="kurs_paddaing_auto">
                  <h4>{item.name}</h4>
                  <div className="star_card">
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_ib">
                      <AiFillStar />
                    </i>
                    <p>
                      4.1 <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Kurs hajmi</p>
                      {item.planned_time}
                    </h5>
                    <h5>
                      <p>Kurs narxi</p>
                      {item.price}
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight
                    onClick={() => {
                      window.location = "/video";
                      localStorage.setItem("course", item.id)
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* SPISKA */}

        <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>no picture</h1>
                        </div>
                      ) : (
                        <img src={item.image} alt="No img" />
                      )}
                    </div>
                    <div className="spiska_title_df">
                      <div className="spiska_title">
                        <h3>{item.name}</h3>
                        <div className="star_icon_blok1">
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar />
                          <div className="number">
                            <h6>4.1 (524)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="left1_icon">
                        <HiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>) : (<div>
        <div className="Filter">
          <div className="blur_blok">
            <div className="inp_blok">
              <input type="text" placeholder="Поиск среди моих курсов" />
              <CiSearch className="search" />
            </div>
            <div className="blur">
              <div className="icon_blok">
                <div
                  className="sel_blok"
                  onClick={() => {
                    Filter();
                  }}
                >
                  <BiMenu className="menyu" />
                  <h4>Фильтр</h4>
                </div>
                <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div>
              </div>
              <div className="filter_button">
                {kursdata.map((item1) => {
                  return (
                    <>
                      {type.map((item2) => {
                        if (item1.course_type === item2.id) {
                          return (
                            <div className="button_filter_kurs">
                              <div className="div_kurs">{item2.name}</div>
                            </div>
                          );
                        }
                      })}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards">
          {kursdata.map((item) => {
            return (
              <div className="kurs_card">
                <button className="btn_das">Dasturlash</button>
                {item.image === null ? (
                  <div className="No_img">
                    <h1>Нет изображение</h1>
                  </div>
                ) : (
                  <img src={item.image} />
                )}
                <div className="kurs_paddaing_auto">
                  <h4>{item.name}</h4>
                  <div className="star_card">
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_ib">
                      <AiFillStar />
                    </i>
                    <p>
                      4.1 <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Kurs hajmi</p>
                      {item.planned_time}
                    </h5>
                    <h5>
                      <p>Kurs narxi</p>
                      {item.price}
                    </h5>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight
                    onClick={() => {
                      window.location = "/video";
                      localStorage.setItem("course", item.id)
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* SPISKA */}

        <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>Нет изображение</h1>
                        </div>
                      ) : (
                        <img src={item.image} alt="No img" />
                      )}
                    </div>
                    <div className="spiska_title_df">
                      <div className="spiska_title">
                        <h3>{item.name}</h3>
                        <div className="star_icon_blok1">
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar />
                          <div className="number">
                            <h6>4.1 (524)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="left1_icon">
                        <HiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>)}

    </div>
  );
}
