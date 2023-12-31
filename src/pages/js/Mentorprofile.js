import React, { useEffect, useState } from "react";
import Use_img from "../img/Ellipse.jpg";
import icon_img from "../img/start-up.png";
import icon_img1 from "../img/Vector.svg";
import icon_img2 from "../img/medal.svg";
import "../css/profil.css";
import Pdp from "./UserPdp";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BsActivity, BsFillBellFill, BsThreeDots } from "react-icons/bs";
import { BiCast } from "react-icons/bi";
import { FiEdit, FiLifeBuoy, FiLogOut } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import chadimg from "../img/Ellipse.jpg";
import axios from "axios";
import { GrClose } from "react-icons/gr";
import url from "./Host";
import userNull from "../img/149071.png";
import { BiLogoTelegram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {BsFillCreditCard2FrontFill} from 'react-icons/bs'
import Swal from "sweetalert2";

export default function Profil() {
  const [data, setData] = useState([]);
  const [state1, setState1] = React.useState();
  const [user, setUser] = useState([]);
  const [stsertifikat, setStsertifikat] = useState([]);
  const [natlifikation, setNatlifikation] = React.useState([]);
  const [userid, setOneuserId] = useState(localStorage.getItem("OneuserId"));
  function soyaa(id) {
    var formdata = new FormData()
    formdata.append("read", true)
    axios.get(`${url}/api/notification/read/${id}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("ishladi")
    }).catch(err=>{
        alert("xato")
    })
  }
  useEffect(() => {
    const now = new Date();
    console.log("hello");
    axios
      .get("https://markazback2.onrender.com/auth/teachers", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get("https://markazback2.onrender.com/api/follow/", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res2) => {
            if (res.data.id === res2.topuser) {
              console.log(res2.data);
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get(`${url}/API/notification`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setNatlifikation(res.data)
        axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
          setUser(res1.data)
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res1.data.length; j++) {
              if (res.data[i].user_id == res1.data[j].id) {
                res.data[i].image = res1.data[j].image
                res.data[i].username = res1.data[j].username
                res.data[i].last_name = res1.data[j].last_name
              }
            }
          }
          setNatlifikation(res.data)
        })
      })
      .catch((err) => { });
  }, []);

  function userimgModal() {
    document.querySelector(".user_img_hover").style =
      "position: absolute;bottom: 0;";
  }

  function userImgPut(id) {
    var formdata = new FormData();

    formdata.append("image", document.querySelector("#userInput").files[0]);
    formdata.append("address", data[0].address);
    formdata.append("description", data[0].description);
    formdata.append("email", data[0].email);
    formdata.append("last_name", data[0].last_name);
    formdata.append("phone_number", data[0].phone_number);
    formdata.append("username", data[0].username);

    axios
      .put(`${url}/auth/oneuser/${id}`, formdata, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get(`${url}/auth/oneuser`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          });
      })
      .catch((err) => {
        Swal.fire("Что-то пошло не так, попробуйте снова.");
      });
    axios
      .get(`${url}/auth/oneuser`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function userimgClose() {
    document.querySelector(".user_img_hover").style =
      "  position: absolute;bottom: -100px;";
  }

  function taxrirlashModal() {
    var a = document.querySelector(".profil_blok_ikki_icon_texrirlash_modal")
      .style.display;
    if (a === "none") {
      document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
        "display:block ";
    } else {
      document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
        "display:none ";
    }
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
      "display:none;";
  }
  function taxrirlashClose() {
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none;";
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
      "display:none;";
  }
  function taxrirlashChadModal() {
    var s = document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat")
      .style.display;
    if (s === "none") {
      document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
        "display:block ";
    } else {
      document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
        "display:none ";
    }

    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
      "display:block;";
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none;";
  }

  useEffect(() => {
    axios
      .get(`${url}/auth/oneuser/`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        localStorage.setItem("page_user", JSON.stringify(res.data));
        res.data.map((item) => {
          localStorage.setItem("OneuserId", item.id);
        });
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );

    // axios.get(`${url}/API/notification`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
    //   setNatlifikation(res.data)
    //   axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
    //     setUser(res1.data)
    //     for (let i = 0; i < res.data.length; i++) {
    //       for (let j = 0; j < res1.data.length; j++) {
    //         if (res.data[i].user_id == res1.data[j].id) {
    //           res.data[i].image = res1.data[j].image
    //         }
    //       }
    //     }
    //     setNatlifikation(res.data)
    //   })
    // })
  }, []);

  function chiqish() {
    window.location = "/";
    localStorage.removeItem("token");
  }
  function notificationModal() {
    document.querySelector(".profil_notifacation_size").style =
      "position: fixed;right:0px;";

    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none";
    document.querySelector(".profil-qora-qiladi").style = "display:block";
  }
  function notificationClose() {
    document.querySelector(".profil_notifacation_size").style =
      "position: fixed;right:-100%;";
    document.querySelector(".profil-qora-qiladi").style = "display:none";
  }

  // function postUser(){
  //   var formdata=new FormData()
  //   formdata.append("image",document.querySelector("#userInput").value)

  //   axios.put(${url}/auth/user/,formdata,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") }}).then(res=>{
  //     Swal.fire("ishladi")
  //   }).catch(err=>{
  //     Swal.fire("ishlamadi")
  //   })
  // }

  function openNotification() {
    document.querySelector(".yon_notification_all").style = "right:0%;";
  }
  return (
    <div>
      <div className="profil_size_df">
        <div className="profil_size">
          <div className="profil_blok_bir">
            <div onMouseLeave={() => userimgClose()} className="user_img_size">
              {data.map((item) => {
                return (
                  <div>
                    {item.image === null ? (
                      <img
                        onMouseEnter={() => userimgModal()}
                        className="user_img"
                        src={userNull}
                        alt=""
                      />
                    ) : (
                      <img
                        onMouseEnter={() => userimgModal()}
                        className="user_img"
                        src={
                          item.image.includes("http")
                            ? item.image
                            : `${url}/${item.image}`
                        }
                        alt=""
                      />
                    )}
                  </div>
                );
              })}
              {data.map((item) => {
                return (
                  <div className="user_img_hover">
                    <input
                      onChange={() => userImgPut(item.id)}
                      id="userInput"
                      type="file"
                    />
                    <MdOutlinePhotoCamera className="user_hover_photo_icon" />
                  </div>
                );
              })}
            </div>
            <div className="blok_bir_text">
              {data.map((item) => {
                return <h1>{item.username}</h1>;
              })}

              <button>Teacher</button>
              <p>My social networks :</p>
              <div className="blok_bir_icon">
                {data.map((item) => {
                  return (
                    <div
                      className="blok_bir_icon_img1"
                      onClick={() => {
                        window.location = `${item.telegram}`;
                      }}
                    >
                      <BiLogoTelegram />
                    </div>
                  );
                })}

                {data.map((item) => {
                  return (
                    <div
                      className="blok_bir_icon_img2"
                      onClick={() => {
                        window.location = `${item.instagram}`;
                      }}
                    >
                      <RiInstagramFill />
                    </div>
                  );
                })}

                {data.map((item) => {
                  return (
                    <div
                      className="youtube"
                      onClick={() => {
                        window.location = `${item.youtobe}`;
                      }}
                    >
                      <FaYoutube />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="profil_blok_ikki">
            <div className="profil_blok_ikki_text">
              <p>Current balance</p>
              <div className="profil_blok_ikki_sum">
                {data.map((item) => {
                  return (
                    <div>
                      {item.balance === null ? (
                        <h1>0</h1>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <h1>{item.balance}</h1>
                          <p>$</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="profil_blok_ikki_button">
                <button>
                  <BsActivity />
                </button>
                <button onClick={() => (window.location = "/oplata")}>
                  Balance replenishment
                </button>
              </div>
            </div>
            <div
              onMouseLeave={() => taxrirlashClose()}
              className="profil_blok_ikki_icon"
            >
              <BsFillBellFill
                onClick={() => taxrirlashChadModal()}
                className="profil_blok_ikki_icon_bir"
              />

{natlifikation.filter(filter => filter.to_user_id == localStorage.getItem("OneuserId") && filter.read===false) .length === 0 ? ("") : (<div className="nol" style={{ background: "red", width: "20px", height: "20px", borderRadius: '50%', color: '#fff', textAlign: "center", marginTop: '-7px', marginLeft: '-25px' }}>
                {natlifikation.filter(filter => filter.to_user_id == localStorage.getItem("OneuserId") && filter.read===false) .length}
              </div>)}


              {/* {localStorage.getItem("soya").length == 0 ? ("") : (<div className="nol" style={{ background: "red", width: "20px", height: "20px", borderRadius: '50%', color: '#fff', textAlign: "center", marginTop: '-7px', marginLeft: '-25px' }}>
                {localStorage.getItem("soya")}
              </div>)} */}




              <BsThreeDots
                onClick={() => taxrirlashModal()}
                className="profil_blok_ikki_icon_ikki"
              />
              <div className="profil_blok_ikki_icon_texrirlash_modal">
                <div
                  onClick={() => (window.location = "/editprofil")}
                  className="taxrirlash_modal_div"
                >
                  <FiEdit className="taxrirlash_modal_icon" />
                  <p>Edit profile</p>
                </div>
                {/* <div
                  onClick={() => notificationModal()}
                  className="taxrirlash_modal_div"
                >
                  <BiCast className="taxrirlash_modal_icon" />
                  <p>Notifications</p>
                </div> */}
                <div className="taxrirlash_modal_div">
                  <FiLifeBuoy className="taxrirlash_modal_icon" />
                  <p onClick={() => (window.location = "/help")}>Help</p>
                </div>
                <div className="taxrirlash_modal_div">
                  <BsFillCreditCard2FrontFill className="taxrirlash_modal_icon" />
                  <p onClick={() => (window.location = "/Mycard")}>Mycard</p>
                </div>
                <hr />
                <div className="taxrirlash_modal_div" onClick={() => chiqish()}>
                  <FiLogOut className="taxrirlash_modal_icon" />
                  <p>Exit</p>
                </div>
              </div>
              <div className="profil_blok_ikki_icon_taxriirlash_chat">
              <div className="for_wiewall">
                  {natlifikation.length === 0 ? (
                    <div><p style={{ textAlign: 'center', marginTop: '35%', fontSize: '20px', opacity: '0.4' }}>Not written to you</p>

                    </div>) : (<div>
                      {natlifikation.map((item, key) => {
                        
                        if (item.to_user_id == localStorage.getItem("OneuserId")) {
                          if(item.read===false){
return (
                            <div>
                              {/* <p style={{ marginLeft: '70%' }} onClick={() => soyaa(item.id)}>прочитал</p> */}
                              <div style={{cursor:"pointer"}} onClick={()=>{soyaa(item.id);window.location="/WiewAll1";localStorage.setItem("fornati1",item.id);localStorage.setItem("fornati",JSON.stringify([item]))}} className="taxrirlash_chad">
                                <div className="taxrirlash_chad_img_size">
                                  <img src={item.image} alt="" />
                                </div>
                                <div className="taxrirlash_chad_size">
                                  <div className="taxrirlash_chad_vaqt">
                                    <h1>{item.username}</h1>
                                    <div className="taxrirlash_chad_vaqt_soat">
                                      <TbPointFilled className="chad_set" />
                                      <p >{item.time_create.slice(11, 16)}</p>
                                    </div>
                                  </div>
                                  <div className="taxrirlash_chad_text">
                                  <p>{item.description.length>15?(<>{item.description.slice(0,13)}...</>):(item.description)}</p>
                                  </div>
                                </div>
                              </div>
                              <p >{item.time_create.slice(0, 10)}</p>
                            </div>
                          )
                          }
                          
                        }
                      })}
                      </div>
                  )}
                </div>

                <a
                  className="wiewu"
                
                  href="/WiewAll1"
                >
                  {" "}
                  <div className="taxrirlash_chad_barchasini">
                    <p>
                      view all
                      <AiOutlineRight />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="profil_notifacation_size">
          {/* <div className="admin">
            <h4>Sms</h4>
            <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>

          </div> */}

          <div className="div-admin-sms">
            <h5>SMS</h5>
            <div
              onClick={() => notificationClose()}
              className="profil_notifacation_size_close"
            >
              <GrClose className="closei" />
            </div>
          </div>
          <div className="sms-insta">
            <div className="sms-insto-bb1">
              {natlifikation.map((item) => {
                if (item.to_user_id == localStorage.getItem("OneuserId")) {
                  return (
                    <div className="sms-insta-block">
                      <div className="sms-img">
                        <img
                          src={"https://markazback2.onrender.com/" + item.image}
                          alt=""
                        />
                      </div>
                      {/* <div className="sms-kotta-pas">
                        <div className="sms-text-tepa"><p> </p><p></p></div>
                        <div className="sms-text-pas"><p> </p></div>
                      </div> */}

                      <div className="sms_bos">
                        <div className="nik_name">
                          <p>{item.title}</p>
                        </div>
                        <div className="sms_nik">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="div-admin-sms">
            <h5>SMS</h5>
            <div
              onClick={() => notificationClose()}
              className="profil_notifacation_size_close"
            >
              <GrClose className="closei" />
            </div>
          </div>
          <div className="sms-insta">
            <div className="sms-insto-bb1">
              <div className="sms-insta-block">
                <div className="sms-img">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png"
                    alt=""
                  />
                </div>

                <div className="sms-kotta-pas">
                  <div className="sms-text-tepa">
                    <p>
                      boxodirov_025 • now{" "}
                      <span>
                        <box-icon type="solid" name="bell-ring"></box-icon>
                      </span>
                    </p>
                  </div>
                  <div className="sms-text-pas">
                    <p>Sent an sms to: Salom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profil-qora-qiladi"></div>
      </div>
    </div>
  );
}
