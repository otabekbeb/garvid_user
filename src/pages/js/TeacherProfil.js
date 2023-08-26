import React, { useEffect, useState } from "react";
// import Use_img from "../img/Ellipse.jpg";
// import icon_img from "../img/start-up.png";
// import icon_img1 from "../img/Vector.svg";
// import icon_img2 from "../img/medal.svg";

// import Pdp from "./UserPdp";
import Usernavbar from "./Usernavbar"
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BsActivity, BsFillBellFill, BsThreeDots } from "react-icons/bs";
import { BiCast } from "react-icons/bi";
import { FiEdit, FiLifeBuoy, FiLogOut } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { TiThMenu } from 'react-icons/ti'
import chadimg from "../img/Ellipse.jpg";
import axios from "axios";
import { GrClose } from 'react-icons/gr'
import url from "./Host";
import userNull from "../img/149071.png";
import { BiLogoTelegram } from 'react-icons/bi'
import { FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import "../css/profil.css";
import Filtr from "./Searchfilter"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bilim from './Bilim'
import Sertifikat from './Sertifikate'
import Azo from "./Azo"
import Futer from "./Footer1"
import UserChat from "./userChat"
import '../css/TeacherProfil.css'

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
import "../css/Spiska.css";
import "../css/Calibig.css";
import WWW from "../img/WWW.png";
import Loader from './loader'
import img_for_null from '../img/download.png'
import img_prover from '../img/istockphoto-1321436405-612x612.jpg'
import Sas from '../img/Sas.png'
import Htmlimg from '../img/Html.png'
import Bootstrap from '../img/Bootstrap.png'
import Git from '../img/Git.png'
import Oragle from '../img/Oragle.png'
import Sprint from '../img/Spring.png'
import Start from '../img/Start.png'

import Groupimg from '../img/Group 2.png'
import azoimg from "../img/Ellipse.jpg"
export default function Profil() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(1)
  const [kursdata, setKursData] = useState([])
  const [allusers, setAllusers] = useState(localStorage.getItem("allUsersId"))
  const [courstype, setCoursetype] = useState([])
  const [type, settype] = useState([]);
  const [loader, setLoader] = useState(1)
  const [oneuser, setOneuser] = useState([])
  const [sertifikat, setSertifikat] = useState([])
  const [follow, setFollow] = useState([])
  const [following, setFollowing] = useState(localStorage.getItem("OneuserId"))
  function Filter() {
    var a = document.querySelector(".filter_button").style.display
    if (a === "none") {
      document.querySelector(".filter_button").style = "display:block "
    } else {
      document.querySelector(".filter_button").style = "display:none "
    }
  }
  function filter1() {
    document.querySelector(".filter_button").style = "display:none !important"
  }
  function windowModal() {
    document.querySelector(".kurs_cards").style = "display:flex;transition:3s";
    document.querySelector(".spiska_img_title_div").style = "display:none";
  }


  useEffect(() => {


    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );

    axios.get(`${url}/api/cours_types`, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }).then(res => {
      setCoursetype(res.data)
      console.log(res.data);
    }).catch(err => {

    })



    axios.get(`${url}/api/mycourse/${localStorage.getItem("allUsersId")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      setKursData(res.data)
      console.log(res.data);
    }).catch(err => {

    })
    setLoader(0)

  }, []);


  function filter(id) {
    axios
      .get(`${url}/api/mycourse/${localStorage.getItem("allUsersId")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((res) => {
        const search = res.data.filter(item => item.course_type === id)
        setKursData(search)
      });
  }
  const searchInput = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios.get(`${url}/api/mycourse/${localStorage.getItem("allUsersId")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      const searchdata = res.data.filter((item) => {
        return (
          searchRegex.test(item.name)
        );
      })
      setKursData(searchdata)
    })

  }
  useEffect(() => {
    axios.get(`${url}/api/course`).then(res => {
      setKursData(res.data)
    })
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, [])



  function updatetoggle(id) {
    setToggle(id)
    document.querySelector(".profil_modal_media").style = "display:none;"
    document.querySelector(".profil_blok_menu_clone").style = "display:none !important;"
    document.querySelector(".profil_blok_menu").style = "display:block;"
  }

  function menuModal() {
    document.querySelector(".profil_modal_media").style = "display:block;"
    document.querySelector(".profil_blok_menu").style = "display:none !important;"
    document.querySelector(".profil_blok_menu_clone").style = "display:block;"
  }
  function menuModalClone() {
    document.querySelector(".profil_modal_media").style = "display:none;"
    document.querySelector(".profil_blok_menu_clone").style = "display:none !important;"
    document.querySelector(".profil_blok_menu").style = "display:block;"
  }

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
      .put(`${url}/auth/allusers/${id}`, formdata, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        window.location.reload();
        // alert("ishladi")
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${url}/auth/allusers`, {
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
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:block;";
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
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
      "display:block;";
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none;";
  }

  useEffect(() => {
    axios
      .get(`${url}/auth/allusers`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
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


  function openNotification() {
    document.querySelector(".yon_notification_all").style = "right:0%;"
  }
  function follow1() {
    document.querySelector(".Following").classList.toggle("following2")
  }

  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);

  useEffect(() => {
    axios.get(`${url}/edu/student_sertificat`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
      setSertifikat(res.data)
    })
  })
  function folowcolor1(key) {
    document.querySelectorAll('.followButton1')[key].classList.toggle("followButton3")
  }
  useEffect(() => {
    axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
    })
  }, [])
  function obuna() {
    document.querySelector('#azo_bolgan_katta_div_text_block_button').classList.toggle("obuna1")
  }
  function obuna2() {
    document.querySelector('#azo_bolgan_katta_div_text_block_button1').classList.toggle("obuna2")
  }
  const [state1, setState1] = React.useState();
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setUsers(res.data)
    })
  }, []);
  return (
    <div>
      <Usernavbar />
      <div className="profil_size_df">
        <div className="profil_size">
          <div className="profil_blok_bir">
            <div onMouseLeave={() => userimgClose()} className="user_img_size">
              {data.map((item) => {
                if (allusers == item.id) {
                  return (
                    <>
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
                    </>
                  );
                }

              })}
              {data.map((item) => {
                if (allusers == item.id) {
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
                }

              })}
            </div>
            <div className="blok_bir_text">
              {data.map((item) => {
                if (allusers == item.id) {
                  return <h1>{item.username}</h1>;
                }

              })}

              <button>Regular user</button>
              <p>My social networks :</p>
              <div className="blok_bir_icon">
                <div className="blok_bir_icon_img1">
                  <BiLogoTelegram />
                </div>
                <div className="blok_bir_icon_img2">
                  <RiInstagramFill />
                </div>
                <div className="youtube">
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>

          <div className="profil_blok_ikki">
            <div className="profil_blok_ikki_text">
              {/* <p className="yutub_text">Youtube</p> */}
              {/* <div className="profil_blok_ikki_sum">
                {data.map((item) => {
                  return (
                    <>
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
                    </>
                  );
                })}
              </div> */}
              <div className="followin_div">
                {/* <button>
                  <BsActivity />
                </button> */}
                <button className="Following" onClick={() => follow1()}>
                  Subscribe
                </button>
                <button style={{ marginTop: "25px" }} className="Following" id="following" >
                  Send a message
                </button>
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
            <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>
          </div>
          <div className="sms-insta">
            <div className="sms-insto-bb1">
              <div className="sms-insta-block">
                <div className="sms-img">
                  <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
                </div>
                <div className="sms-kotta-pas">
                  <div className="sms-text-tepa"><p>boxodirov_025  </p><p></p></div>
                  <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
                </div>
              </div>

              <div className="sms-insta-block">
                <div className="sms-img">
                  <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
                </div>
                <div className="sms-kotta-pas">
                  <div className="sms-text-tepa"><p>boxodirov_025 </p><p></p></div>
                  <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
                </div>
              </div>

              <div className="sms-insta-block">
                <div className="sms-img">
                  <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png" alt="" />
                </div>
                <div className="sms-kotta-pas">
                  <div className="sms-text-tepa"><p>boxodirov_025  </p><p></p></div>
                  <div className="sms-text-pas"><p>Sent an sms to: Salom</p></div>
                </div>
              </div>
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
      <div>
        {state1 === 'en' ? (
          <div className="gray_blok">
            <div className="fil_text_blok">
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} style={toggle === 1 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>My courses</h1>{toggle === 1 ? (<div className="fil_text_blok_kurs_lenght">{kursdata.length} pieces</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} style={toggle === 2 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>My learned knowledge</h1>{toggle === 2 ? (<div className="fil_text_blok_kurs_lenght">14 pieces</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} style={toggle === 3 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>My certificates</h1>{toggle === 3 ? (<div className="fil_text_blok_kurs_lenght">24 pieces</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} style={toggle === 4 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>My Subscriptions</h1>{toggle === 4 ? (<div className="fil_text_blok_kurs_lenght">24 pieces</div>) : ("")}</div>

            </div>
            <div className="profil_blok_menu_size">
              <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
              <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
            </div>
            <div className="profil_modal_media">
              <h1 onClick={() => updatetoggle(1)} className='fromMenu'>Its courses are</h1>
              <h1 onClick={() => updatetoggle(2)} className='fromMenu'>My acquired knowledge</h1>
              <h1 onClick={() => updatetoggle(3)} className='fromMenu'>My Certificates</h1>
              <h1 onClick={() => updatetoggle(4)} className='fromMenu'>My Subscriptions</h1>
              <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Correspondence</h1>
            </div>
          </div>) : (
          <div className="gray_blok">
            <div className="fil_text_blok">
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} style={toggle === 1 ? { borderBottom: '2px solid #44bef1', } : {}} className='fromLeft'>Мои курсы</h1>{toggle === 1 ? (<div className="fil_text_blok_kurs_lenght">{kursdata.length} штуки</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} style={toggle === 2 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Мои усвоенные знания</h1>{toggle === 2 ? (<div className="fil_text_blok_kurs_lenght">14 штуки</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} style={toggle === 3 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Мои сертификаты</h1>{toggle === 3 ? (<div className="fil_text_blok_kurs_lenght">24 штуки</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} style={toggle === 4 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Мои подписки</h1>{toggle === 4 ? (<div className="fil_text_blok_kurs_lenght">24 штуки</div>) : ("")}</div>
              <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} style={toggle === 5 ? { borderBottom: '2px solid #44bef1' } : {}} className='fromLeft'>Переписка</h1><div className="fil_text_blok_kurs_lenght">1 штуки</div></div>
            </div>
            <div className="profil_blok_menu_size">
              <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
              <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
            </div>
            <div className="profil_modal_media">
              <h1 onClick={() => updatetoggle(1)} className='fromMenu'>Мои курсы</h1>
              <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Мои усвоенные знания</h1>
              <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Мои сертификаты</h1>
              <h1 onClick={() => updatetoggle(4)} className='fromMenu'>Мои подписки</h1>
              <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Переписка</h1>
            </div>
          </div>)}


        <div className={toggle === 1 ? "show-content" : "content"}>
          <div className="Filter">
            <div className="blur_blok">
              <div className="inp_blok">
                <input onChange={searchInput} id="search" type="text" placeholder="Search among my courses" />
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


                  {courstype.map(item => {
                    return (
                      <div className="button_filter_kurs" >
                        {item.name === null ? ("") : (<div onClick={() => filter(item.id)} className="div_kurs" style={{ paddingBottom: '5px' }}>{item.name}</div>)}
                      </div>
                    )
                  })}



                </div>
              </div>
            </div>
          </div>
          <div className="kurs_cards">
            {kursdata.length === 0 ? (
                <div className="delete_padding">
                <img src={Groupimg} alt="" />
                <h4>Он еще не купил курс</h4>
                <div className="delete_btns">
                  
                <a href="/Ourcourse">  <button style={{background:'#44bef1  '}} className="delete_btn_yes">Купить курс</button></a>
                </div>
              </div>
            ) : (
              <>
                {kursdata.map(item => {
                  return (
                    <div onClick={() => { window.location = "/video"; localStorage.setItem("abbas", item.id) }} className="kurs_card">
                      <button className="btn_das">Programming</button>
                      <img src={item.oneuser ? item.oneuser.image.includes("http") ? item.oneuser.image : `${url}/${item.oneuser.image}` :
                        <img src={img_for_null} alt="" />} alt="" />
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
                            <p>Course size</p>
                            {item.planned_time}
                          </h5>
                          <h5>
                            <p>Course price</p>
                            {item.price}$
                          </h5>
                        </div>
                      </div>
                      <button className="button_circle">
                        <AiOutlineArrowRight onClick={() => { window.location = "/video"; localStorage.setItem("abbas", item.id) }} />
                      </button>
                    </div>

                  )

                })}
              </>
            )}

          </div>
          </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div>
            <div className="program">
              <div className="ptogram_tutorial">
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="html_red">
                      <img src={Htmlimg} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>HTML</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="sas_red">
                      <img src={Sas} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>Sass</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="bootstrap_red">
                      <img src={Bootstrap} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>Bootstrap</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="bootstrap_red">
                      <img src={Bootstrap} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3 className='react_bootstrap' >react-Bootstrap</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="git_red">
                      <img src={Git} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>GIT</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="sp_red">
                      <img src={Sprint} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3 className='react_bootstrap' >Spring</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="git_red">
                      <img src={Oragle} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>Oracle</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="html_red">
                      <img src={Htmlimg} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>HTML</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="sas_red">
                      <img src={Sas} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>Sass</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="bootstrap_red">
                      <img src={Bootstrap} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>Bootstrap</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="bootstrap_red">
                      <img src={Bootstrap} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3 className='react_bootstrap' >react-Bootstrap</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="git_red">
                      <img src={Git} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>GIT</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="sp_red">
                      <img src={Sprint} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3 className='react_bootstrap' >Spring</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
                <div className="html_code_tutoril">
                  <div className="html_div">
                    <div className="git_red">
                      <img src={Oragle} alt="" />
                    </div>
                  </div>
                  <div className="text_html">
                    <h3>Oracle</h3>
                    <p>Lorem ipsum dolor sit
                      amet, consectetur ar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <div>
            <div className="cards_sertifikat">
              {sertifikat.length === 0?(   
              <div className="delete_padding">
                <img src={Groupimg} alt="" />
                <h4>Он еще не получил сертификат</h4>
                <div className="delete_btns">
                  
                <a href="/Ourcourse">  <button style={{background:'#44bef1  '}} className="delete_btn_yes">Купить курс</button></a>
                </div>
              </div>):( <div className="card_sertifikat">
                {sertifikat.map(item => {
                  return (
                    <div className="sertifikat">
                      <div className="sertifikat_image">
                        {item.image === null ? (<img src={img_for_null} alt="" />) : (<img src={item.image} alt="" />)}
                      </div>
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


              </div>)}
             
            </div>

          </div>
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
          <div className="followcards1">
            {follow.map((item, key) => {
              return <>
                {users.map(item1 => {
                  if (item1.id == item.topuser) {
                    return (

                      <a>
                        <div className="followcard1">
                          <a href="/TeacherProfil">
                            {item.image === null ? (<h1>No signaL</h1>) : (<img className='jony_foto' src={item1.image} alt="" />)}

                            <h5 className='Name'>{item1.username}</h5 >
                          </a>
                          <button onClick={() => folowcolor1(key)} className='followButton1' >subscribe</button>
                        </div>
                      </a>


                    )
                  }
                })}
              </>
            })}




          </div>
        </div>
      </div>
      <Futer />
    </div>
  );
}
