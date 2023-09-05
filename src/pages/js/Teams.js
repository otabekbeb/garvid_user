import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer1 from './Footer1'
import axios from 'axios'
import url from "./Host";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdOutlineGrade, MdWindow } from "react-icons/md";
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
import Loader from "./loader";
import img_for_null from "../img/download.png";
import img_prover from "../img/istockphoto-1321436405-612x612.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../css/Nosignal.css";
import Groupimg from "../img/Teacher-cuate.png";

export default function Teams() {
    const [partner, setPartner] = useState([])
    const [courstype, setCoursetype] = useState([]);

  const [kursdata, setKursdata] = useState([]);
  const [type, settype] = useState([]);
  const [state1, setState1] = React.useState();
  const [loader, setLoader] = useState(1);
  const [oneuser, setOneuser] = useState([]);
  const [star, setStar] = useState([]);

  function Filter() {
    document.querySelector(".filter_button").classList.toggle("fill1")
  }
  function filter1() {
    document.querySelector(".filter_button").style = "display:none !important";
  }
  function windowModal() {
    document.querySelector(".kurs_cards").style = "display:flex;transition:3s";
    document.querySelector(".spiska_img_title_div").style = "display:none";
  }

  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );

    axios
      .get(`${url}/api/cours_types`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setCoursetype(res.data);
        console.log(res.data);
      })
      .catch((err) => { });

    axios
      .get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        axios
          .get(`${url}/api/course`, {
            header: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res1) => {
            for (let i = 0; i < res.data.length; i++) {
              for (let j = 0; j < res1.data.length; j++) {
                if (res.data[i].id == res1.data[j].id) {
                  res.data[i].star = res1.data[j].star;
                }
              }
            }
            setKursdata(res.data);
            localStorage.setItem("mycourseUser", res.data.length)
            setLoader(0);
          });
      });
  }, []);

  function filter(id) {
    axios
      .get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const search = res.data.filter((item) => item.course_type === id);
        setKursdata(search);
      });
  }
  const searchInput = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios
      .get(`${url}/api/university/${localStorage.getItem("partner")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        axios
          .get(`${url}/api/university/`, {
            header: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res1) => {
            for (let i = 0; i < res.data.length; i++) {
              for (let j = 0; j < res1.data.length; j++) {
                if (res.data[i].id == res1.data[j].id) {
                  res.data[i].star = res1.data[j].star;
                }
              }
            }
            const searchdata = res.data.filter((item) => {
              return searchRegex.test(item.name);
            });
            setPartner(searchdata);
          });

      });
  };
  
  function Allfilter(){
    axios
      .get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        axios
          .get(`${url}/api/course`, {
            header: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res1) => {
            for (let i = 0; i < res.data.length; i++) {
              for (let j = 0; j < res1.data.length; j++) {
                if (res.data[i].id == res1.data[j].id) {
                  res.data[i].star = res1.data[j].star;
                }
              }
            }
            setKursdata(res.data);
            localStorage.setItem("mycourseUser", res.data.length)
            setLoader(0);
          });
      });
  }


    useEffect(() => {
        axios.get(`${url}/api/university/${localStorage.getItem("partner")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            setPartner(res.data)
          }).catch(err => {
      
          })
    }, [])
    
  return (
    <div>
        <Navbar/>
        <div className="asd">
            {/* <img src={abaut} alt="" /> */}
            <div className="asd-block">
              <h1>Our partner</h1> 
              <br />
              <br className='rr' />

              <div className="mini"></div>
            </div>
          </div>
          <div className="sahifa">
            <div className="sahifa-glav">
              <div className="safiha-p">
                <h4><a href="/">Home  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
              </div>
              <div className="safiha-d">
                <p id='tepaga'>Our partner</p>
              </div>
            </div>
          </div>
          <div>
          <div>
            <div className="Filter">
              <div className="blur_blok">
                <div className="inp_blok">
                  <input
                    onChange={searchInput}
                    id="search"
                    type="text"
                    placeholder="Search among my courses"
                  />
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
                    {/* <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div> */}
                  </div>
                  <div onMouseLeave={() => filter1()} className="filter_button">
                  <div className="button_filter_kurs">
                            <div
                              onClick={() => Allfilter()}
                              className="div_kurs"
                              style={{ paddingBottom: "5px" }}
                            >
                              All
                            </div>
                        </div>
                    {courstype.map((item) => {
                      return (
                        <div className="button_filter_kurs">
                          {item.name === null ? (
                            ""
                          ) : ( 
                            <div
                              onClick={() => filter(item.id)}
                              className="div_kurs"
                              style={{ paddingBottom: "5px" }}
                            >
                              {item.name}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="kurs_cards">
              {partner.length === 0 ? (
                   <div className="delete_padding1">
                   <img src={Groupimg} alt="" />
                   <h4 style={{ fontSize: '30px', opacity: '0.3' }}>There are no courses here yetYou didn't buy the course</h4>
                   <div className="delete_btns">
                     <a href="/Ourcourse">
                       {" "}
                     </a>
                   </div>
                 </div>
              ) : (
                <div className="cursu" style={{display:"flex"}}>
                  {partner.map((item) => {
                    
                    return (
                      <div>
                        <div
                          onClick={() => {
                            window.location = "/video";
                            localStorage.setItem("abbas", item.id);
                          }}
                          className="kurs_card"
                        >
                          <img
                            src={
                              item.oneuser ? (
                                item.oneuser.image.includes("http") ? (
                                  item.oneuser.image
                                ) : (
                                  `${url}/${item.oneuser.image}`
                                )
                              ) : (
                                <img src={img_for_null} alt="" />
                              )
                            }
                            alt=""
                          />
                          <div className="kurs_paddaing_auto">
                            <h4>{item.name}</h4>
                            <div>
                              {item.star == 1 ? (
                                <div style={{ display: "flex", gap: "5px" }}>
                                  {" "}
                                  <div className="star_card">
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#FFD401" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                  </div>
                                  <p style={{ fontSize: "16px" }}>
                                    {item.star}
                                    
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  {item.star == 2 ? (
                                    <div
                                      style={{ display: "flex", gap: "5px" }}
                                    >
                                      <div className="star_card">
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#FFD401" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#FFD401" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#9DA7BB" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#9DA7BB" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#9DA7BB" }}
                                          />
                                        </i>
                                      </div>
                                      <p style={{ fontSize: "16px" }}>
                                        {item.star}
                                        
                                      </p>
                                    </div>
                                  ) : (
                                    <div>
                                      {item.star === 3 ? (
                                        <div
                                          style={{
                                            display: "flex",
                                            gap: "5px",
                                          }}
                                        >
                                          <div className="star_card">
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#FFD401" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#FFD401" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#FFD401" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#9DA7BB" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#9DA7BB" }}
                                              />
                                            </i>
                                          </div>
                                          <p style={{ fontSize: "16px" }}>
                                            {item.star}
                                            
                                          </p>
                                        </div>
                                      ) : (
                                        <div>
                                          {item.star == 4 ? (
                                            <div
                                              style={{
                                                display: "flex",
                                                gap: "5px",
                                              }}
                                            >
                                              <div className="star_card">
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#9DA7BB" }}
                                                  />
                                                </i>
                                              </div>{" "}
                                              <p style={{ fontSize: "16px" }}>
                                                {item.star}
                                               
                                              </p>
                                            </div>
                                          ) : (
                                            <div>
                                              {item.star == 5 ? (
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    gap: "5px",
                                                  }}
                                                >
                                                  <div className="star_card">
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                  </div>
                                                  <p
                                                    style={{ fontSize: "16px" }}
                                                  >
                                                    {item.star}
                                                    
                                                  </p>
                                                </div>
                                              ) : (
                                                <div>
                                                  {item.star === null ? (
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        gap: "5px",
                                                      }}
                                                    >
                                                      <div className="star_card">
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                      </div>{" "}
                                                      <p
                                                        style={{
                                                          fontSize: "16px",
                                                        }}
                                                      >
                                                        0
                                                        
                                                      </p>
                                                    </div>
                                                  ) : (
                                                    ""
                                                  )}{" "}
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="hajm">
                              <h5>
                                <p>Course size</p>
                                {item.planned_time}h
                              </h5>
                              <h5>
                                <p>Course price</p>
                                {item.price}$
                              </h5>
                            </div>
                          </div>
                          <button className="button_circle">
                            <AiOutlineArrowRight
                              onClick={() => {
                                window.location = "/video";
                                localStorage.setItem("abbas", item.id);
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>


          </div>
        </div>


          
        <Footer1/>
    </div>
  )
}
