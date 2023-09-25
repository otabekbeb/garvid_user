import React, { Component, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import Navbar from "./Navbar";
import Futer from "./Footer1";
import Images from "./Images";
import axios from "axios";
import url from "./Host";
import img_for_null from "../img/download.png";
import Swal from "sweetalert2";
import { BsCheck2 } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import Groupimg from "../img/oooo.png";
import Number from '../js/Number'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper style s
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Home() {
  const [state, setState] = React.useState(1);
  const [state1, setState1] = React.useState();
  const [univercard, setUnivercard] = useState([]);
  const [chec, setChec] = useState([]);

  const [data, setData] = useState([]);

  const dataPost = () => {
    var formdata = {
      fullname: document.querySelectorAll("#contact_inp")[0].value + " " + document.querySelectorAll("#contact_inp")[1].value,
      purchase: document.querySelectorAll("#contact_inp")[2].value,
      message: document.querySelector(".contact_textarea").value,
    };
    axios
      .post("https://markazback2.onrender.com/api/call_me", formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        state === "ru"
          ? Swal.fire("Information sent, wait for a call from the operator")
          : Swal.fire("Information sent, wait for a call from the operator");
        window.location.reload();
      })
      .catch((err) => {
        state === "ru"
          ? Swal.fire("Check information, Failed to send")
          : Swal.fire("Check information, Failed to send");
      });
  };
  useEffect(() => {
    axios
      .get(`https://markazback2.onrender.com/api/call_me`)
      .then((res) => {
        setChec(res.data);
      })
      .catch((err) => { });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/api/university`, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((res) => {
        setUnivercard(res.data);
      })
      .catch((err) => { });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/auth/teachers/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => { });
  }, []);
  return (
    <div>
      <div>
        <div className="body1">
          <Navbar />

          <div
            className="jumbotron jumbotron-fluid position-relative overlay-bottom"
            style={{ marginBottom: "90px;" }}
          >
            <div
              style={{ textAlign: "center", padding: "20px" }}
              className="container my-5 py-5"
            >
              <h3 id="huch" style={{ fontSize: "18px", color: "#fff" }}>
                BEST ONLINE COURSES
              </h3>
              <h1 className="text-white mt-4 mb-4" id="hbir">
                Get Educated Online From Your Home
              </h1>
              <p id="pp1" style={{ color: "white", fontSize: "20px" }}>
                With over 20 years of experience we'll ensure you always get the
                best guidance
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
                className="butonss"
              >
                <button onClick={() => (window.location = "/servis")}>
                  Services
                </button>
                <button
                  onClick={() => (window.location = "/contacts")}
                  id="but22"
                >
                  Contacts
                </button>
              </div>
              <div
                className="mx-auto mb-5"
                style={{ width: "100%;", maxWidth: "600px;" }}
              >
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Courses 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Courses 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Courses 3
                      </a>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control border-light"
                    style={{ padding: "30px 25px;" }}
                    placeholder="Keyword"
                  />
                  <div className="input-group-append"></div>
                </div>
              </div>
            </div>
            <div className="qiy">
              <img
                src="https://demo.htmlcodex.com/1574/online-education-website-template/img/overlay-bottom.png"
                alt=""
              />
            </div>
          </div>
          <div className="universty">
            <div className="iniversty_cards">
              {univercard.map((item, key) => {
                return (
                  <div
                    // onClick={() => {
                    //   window.location = "/Teams";
                    //   localStorage.setItem("partner", item.id);
                    // }}
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
              })}
            </div>
          </div>
          <div className="big1">
            <div className="bigdiv">
              <div className="card1">
                <img 
                  src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon01.jpg"
                  alt=""
                />
                <h3>Career support</h3>
                <p>
                  Some study centers provide career counseling services and help
                  students find jobs in their field after graduation.
                </p>
              </div>
              <div className="card1">
                <img
                  src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon02.jpg"
                  alt=""
                />
                <h3>Modern teaching methods</h3>
                <p>
                  Learning centers can use modern teaching methods, including
                  online resources, interactive materials and technologies, to
                  make learning more interesting and effective.
                </p>
              </div>
              <div className="card1">
                <img
                  src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon03.jpg"
                  alt=""
                />
                <h3>Knowledge update</h3>
                <p>
                  Studying at a learning center allows students to constantly
                  update their knowledge and skills, which is important in a
                  rapidly changing world.
                </p>
              </div>
              <div className="card1">
                <img
                  src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon04.jpg"
                  alt=""
                />
                <h3>Certifications and diplomas</h3>
                <p>
                  After completing their studies at the training center,
                  students receive certificates or diplomas confirming their
                  qualifications, which can be useful when looking for a job or
                  raising their professional status.
                </p>
              </div>
            </div>
          </div>
          <div className="soz1">
            <h1>What We Do</h1>
            <div className="soz2">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="line"></div>
                <p>
                  We provide expert financial advice for businesses and
                  individuals
                </p>
              </div>
              <button>See All Services</button>
            </div>
          </div>
          <div className="katta1">
            <center>
              <h1 className="katta1_about_h1">О нас</h1>
            </center>
            <center>
              <div className="blue1"></div>
            </center>
            <div className="cards1">
              <div className="cards2">
                <div className="card4">
                  <div className="buttons1">
                    <button
                      style={
                        state === 1
                          ? {
                            background: "#6b3d0c",
                            color: "#fff",
                            border: "none !important",
                          }
                          : state === 2
                            ? { background: "white" }
                            : { background: "white" }
                      }
                      onClick={() => setState(1)}
                      className="but1"
                    >
                      Facts
                    </button>
                    <button
                      style={
                        state === 2
                          ? {
                            background: "#6b3d0c",
                            color: "#fff",
                            border: "none",
                          }
                          : state === 2
                            ? { background: "white" }
                            : { background: "white" }
                      }
                      onClick={() => setState(2)}
                      className="but2"
                    >
                      Advantages
                    </button>
                    <button
                      style={
                        state === 3
                          ? {
                            background: "#6b3d0c",
                            color: "#fff",
                            border: "none",
                          }
                          : state === 2
                            ? { background: "white" }
                            : { background: "white" }
                      }
                      onClick={() => setState(3)}
                      className="but2"
                    >
                      Skills
                    </button>
                  </div>
                  {state === 1 ? (
                    <div
                      style={{ width: "100%", flexDirection: "column" }}
                      className="fact1"
                    >
                      <div style={{ width: "100%" }}>
                        <p className="about_p">
                          Our company is your one stop solution for all needs.
                          There is no doubt that we are the leaders and you
                          don't have to worry about our image because it is
                          perfect.
                        </p>
                      </div>
                      <div
                        style={{
                          width: "90%",
                          margin: "0 auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="facts">
                          <h1>275</h1>
                          <p>Users</p>
                        </div>
                        <div className="facts">
                          <h1>19</h1>
                          <p>teachers</p>
                        </div>
                        <div className="facts">
                          <h1>130</h1>
                          <p>students</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {state === 2 ? (
                        <div
                          style={{ width: "100%", flexDirection: "column" }}
                          className="fact1"
                        >
                          <div style={{ width: "100%" }}>
                            <p className="about_p">
                              Variety of study programs: The Study Center offers
                              a wide range of educational programs and courses,
                              allowing students to choose from a variety of
                              options depending on their interests and goals.
                            </p>
                          </div>
                          <div
                            style={{
                              width: "90%",
                              margin: "0 auto",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="advantage1">
                              <div className="advantages">
                                <h1>33</h1>
                                <p>Consultants</p>
                              </div>
                              <div className="advantages">
                                <h1>89</h1>
                                <p>Awards won</p>
                              </div>
                              <div className="advantages">
                                <h1>132</h1>
                                <p>Cases completed</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{ width: "100%", flexDirection: "column" }}
                          className="fact1"
                        >
                          <div style={{ width: "100%" }}>
                            <p className="about_p">
                              Cultural Literacy: Understanding and adapting to
                              different cultures and socio-cultural contexts.
                            </p>
                          </div>
                          <div
                            style={{
                              width: "90%",
                              margin: "0 auto",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="skill1">
                              <div className="skills">
                                <h1>78</h1>
                                <p>Сourses</p>
                              </div>
                              <div className="skills">
                                <h1>143</h1>
                                <p>Branches</p>
                              </div>
                              <div className="skills">
                                <h1>12</h1>
                                <p>Consultants</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="card4">
                  <h1 className="card_about_us_ikki_page">
                    Doing the right thing, at the right time.
                  </h1>
                  <p className="card_about_us_ikki_p">
                    Welcome to the leading company on the market! Our success is
                    driven by the highest quality customer service. We can meet
                    the requirements even of the whimsical clients; there are no
                    complex tasks for us! Thanks for your choice! Our company
                    can boast the reputation of the trusted partner known
                    worldwide. We are proud of the uncompromising quality of
                    services
                  </p>
                  <button
                    onClick={() => (window.location = "about")}
                    className="card_about_us_ikki_button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_form_input_big">
            <div className="contact_form_input_big_div">
              <h1>Contact Form</h1>
              <div className="blue1"></div>
              <div className="contact_form_input_big_div_input">
                <form action="">
                  <label>
                    <p>FirstName</p>
                    <input type="email" name="" id="contact_inp" required />
                  </label>
                  <label>
                    <p>LastName</p>
                    <input type="email" name="" id="contact_inp" required />
                  </label>
                  <label>
                    <p>email</p>
                    <input id="contact_inp" type="text" required />
                  </label>
                  <p>PhoneNumber</p>
                  <Number/>
                  <label>
                    <p>purchase</p>
                    <input id="contact_inp" type="text" required />
                  </label>
                  <label>
                    <p>Message</p>
                    <textarea
                      name=""
                      className="contact_textarea"
                      id="text1"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </label>
                  <div className="admin_button">
                    <button
                      onClick={() => {
                        dataPost();
                      }}
                    >
                      Send
                    </button>
                    {/* <div className="admin_title">
                                              <h4>Admin:</h4>
                                              <div className="chec_icon">
                                                  {chec.map(item => {
                                                      return (
                                                          <div>
                                                              {item.read === true ? (<BsCheck2 className='bir_chec' />) : (<BsCheckAll className='ikki_chec' />)}

                                                          </div>
                                                      )

                                                  })}


                                              </div>
                                          </div> */}
                  </div>
                </form>
              </div>
            </div>
            <img
              className="girl"
              src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-home-image-2.png"
              alt=""
            />
          </div>
          <div className="Testimonial">
            <center>
              <h1>Teacher</h1>
            </center>
            <center>
              <div className="blue1"></div>
            </center>

            <div className="container-fluid pt-5 mb-3">
              <div className="container">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  // pagination={{
                  //     clickable: true,
                  // }}
                  breakpoints={{
                    // when window width is <= 782px
                    300: {
                      slidesPerView: 2,
                    },
                    800: {
                      slidesPerView: 3,
                    },
                    1000: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper100"
                >
                  {data.map((item) => {
                    return (
                      <SwiperSlide>
                        <div
                          className="position-relative overflow-hidden"
                          style={{ height: "300px" }}
                        >
                          {item.image === null ? (
                            <img
                              style={{ width: "100%", margin: "auto" }}
                              src={Groupimg}
                              alt=""
                            />
                          ) : (
                            <img src={item.image} alt="" />
                          )}
                          <div className="overlay">
                            <div className="mb-2">
                              <a
                                className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href=""
                              >
                                {item.name}
                              </a>
                            </div>
                            <a
                              className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                              href=""
                            >
                              {item.description}
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <Images />
          <Futer />
        </div>
      </div>
    </div>
  );
}
