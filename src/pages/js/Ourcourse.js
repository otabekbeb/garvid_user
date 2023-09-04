import React, { useEffect, useState } from "react";
import "../css/Ourcourse.css";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineChevronUp } from "react-icons/hi";
import { AiOutlineArrowRight, AiOutlineDown, AiFillStar } from "react-icons/ai";
import img from "../../pages/img/download.png";
// import Navbar from '../js/Navbar.js'
import Futer from "../js/Futer";
import axios from "axios";
import Anime from "../img/download.png";
import url from "./Host";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";

export default function Ourcourse() {
  const [main, setMain] = useState([]);
  const [kursdata, setKursdata] = useState([]);
  const [kurscategory, setKurscategory] = useState([]);
  const [filter1, setFilter1] = useState([]);

  function filter() {
    var b = document.querySelector(".filter_card").style.display;
    if (b === "none") {
      document.querySelector(".filter_card").style.display = "flex";
      document.querySelector(".curs_filter1505").style =
        " transform: rotate(180deg);";
    } else {
      document.querySelector(".filter_card").style.display = "none";
      document.querySelector(".curs_filter1505").style =
        " transform: rotate(0deg);";
    }
    // document.querySelector(".filter_card").classList.toggle("togl");
  }

  function menuModal() {
    document.querySelector(".burger_media").style =
      "display:block  !important;";
    document.querySelector(".bar").style = "display:none !important;";
    document.querySelector(".bar_clone").style = "display:block !important;";
  }
  function menuModalClone() {
    document.querySelector(".burger_media").style = "display:none ;";
    document.querySelector(".bar_clone").style = "display:none !important;";
    document.querySelector(".bar").style = "display:block !important;";
  }
  function filterclosed() {
    document.querySelector(".filter_card").style = "display:none !important";
  }
  function filter11(id) {
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const search = res.data.filter((item) => item.course_type === id);
        setKursdata(search);
      });
  }
  const searchfilter1 = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const searchdata = res.data.filter((item) => {
          return searchRegex.test(item.name);
        });
        setKursdata(searchdata);
      });
  };
  // function filter2 (id) {
  //   axios
  //   .get(`${url}/api/cours_types`, {headers: {Authorization : `Bearer ${localStorage.getItem("token")}`}})
  //   .then((res) => {
  //     const search = res.data.filter(item=>item.course_type===id)
  //     setFilter1(search)
  //   });
  // }
  function AllType() {
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setKursdata(res.data);
        localStorage.setItem("ourcourseLength", res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    document.querySelector(".filter_card").style = "display:none";
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setKursdata(res.data);
        localStorage.setItem("ourcourseLength", res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setKurscategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${url}/api/cours_types`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setFilter1(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="gray_navbar">
        <div className="course_inp">
          <h1>Our courses</h1>
          <div className="df_inp">
            <input
              onChange={searchfilter1}
              type="text"
              name=""
              id=""
              placeholder="What course do you want to study?"
            />
            <i>
              <BiSearch />
            </i>
          </div>
        </div>
      </div>

      <header className="curs">
        {/*  <nav className="nav_ul">
          <ul className="bottom_ul">
            <li style={{ cursor: "pointer" }} className="bottom_li">Everything</li>
            {kurscategory.map(item => {
              return (
                <li style={{ cursor: "pointer" }} className="bottom_li">{item.name}</li>
              )
            })}


          </ul>
        </nav>*/}
        <div className="bottom_line"></div>
        <div className="curs_cards">
          <button className="curs_filter" onClick={() => filter()}>
            Filter{" "}
            <i>
              <AiOutlineDown className="curs_filter1505" />
            </i>
          </button>
          <div onMouseLeave={() => filterclosed()} className="filter_card">
            <div className="filter_padding">
              <h5>Sorting types</h5>
              <p style={{ cursor: "pointer" }} onClick={() => AllType()}>
                All
              </p>
              {filter1.map((item) => {
                return (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => filter11(item.id)}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
            <div className="filter_padding">
              <h5>By rating</h5>
              <p>
                <input type="checkbox" name="" id="" />{" "}
                <div className="filter_star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>{" "}
                5.0
              </p>
              <p>
                <input type="checkbox" name="" id="" />{" "}
                <div className="filter_star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar className="none_star" />
                </div>{" "}
                Above 4.0
              </p>
              <p>
                <input type="checkbox" name="" id="" />{" "}
                <div className="filter_star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar className="none_star" />
                  <AiFillStar className="none_star" />
                </div>{" "}
                Above 3.0
              </p>
              <p>
                <input type="checkbox" name="" id="" />{" "}
                <div className="filter_star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar className="none_star" />
                  <AiFillStar className="none_star" />
                  <AiFillStar className="none_star" />
                </div>
                Above 2.0
              </p>
            </div>
          </div>
        </div>

        <div className="filter_kurs">
          {kursdata.map((item) => {
            localStorage.setItem("for_courses", kursdata.length);
            return (
              <div
                onClick={() => {
                  window.location = "/proverr2";
                  localStorage.setItem("courseid", item.id);
                }}
                className="filter_course"
              >
                {item.image === null ? (
                  <img src={Anime} alt="" />
                ) : (
                  <img src={item.image} />
                )}
                <div className="filter_card_padding">
                  <h4> {item.name}</h4>
                  <div className="star_card">
                    {item.star === 1 ? (
                      <div>
                        <i className="bx bxs-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                      </div>
                    ) : item.star === 2 ? (
                      <div>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                      </div>
                    ) : item.star === 3 ? (
                      <div>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                      </div>
                    ) : item.star === 4 ? (
                      <div>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bx-star"></i>
                      </div>
                    ) : item.star === 5 ? (
                      <div>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                    ) : (
                      <div>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                        <i className="bx bx-star"></i>
                      </div>
                    )}
                    <p>
                      {item.star === null ? "0" : item.star} <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Course size</p>
                      <h5>{item.planned_time}h</h5>
                    </h5>
                    <h5>
                      <p>Course price</p>
                      <h5> {item.price}$</h5>
                    </h5>
                  </div>
                </div>

                <button className="button_circle">
                  <AiOutlineArrowRight
                    onClick={() => {
                      window.location = "/proverr2";
                      localStorage.setItem("courseid", item.id);
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </header>
      {/* <Footer1 /> */}
    </div>
  );
}
