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



export default function Profil() {
  const [data, setData] = useState([]);
  const [state1, setState1] = React.useState();
  const [toggle, setToggle] = useState(1)
  const [kursdata, setKursData] = useState([])

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
      .put(`${url}/auth/oneuser/${id}`, formdata, {
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
      .get(`${url}/auth/oneuser/`, {
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
function follow () {
  document.querySelector(".Following").classList.toggle("following2")
}
  return (
    <div>
      <Usernavbar />
      <div className="profil_size_df">
        <div className="profil_size">
          <div className="profil_blok_bir">
            <div onMouseLeave={() => userimgClose()} className="user_img_size">
              {data.map((item) => {
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
              <p className="yutub_text">Youtube</p>
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
                <button className="Following" onClick={() => follow()}>
                  Subscribe
                </button>
              </div>
            </div>
            <div
              onMouseLeave={() => taxrirlashClose()}
              className="profil_blok_ikki_icon"
            >
              {/* <BsFillBellFill
                onMouseEnter={() => taxrirlashChadModal()}
                className="profil_blok_ikki_icon_bir"
              /> */}
               <BsThreeDots
                onMouseEnter={() => taxrirlashModal()}
                className="follow_ringtong "
              />
              <div className="profil_blok_ikki_icon_texrirlash_modal">
                <div
                  onClick={() => (window.location = "/editprofil")}
                  className="taxrirlash_modal_div"
                >
                  <FiEdit className="taxrirlash_modal_icon" />
                  <p>Edit profile</p>
                </div>
                <div
                  onClick={() => notificationModal()}
                  className="taxrirlash_modal_div"
                >
                  <BiCast className="taxrirlash_modal_icon" />
                  <p>Notifications</p>
                </div>
                <div className="taxrirlash_modal_div">
                  <FiLifeBuoy className="taxrirlash_modal_icon" />
                  <p onClick={() => (window.location = "/help")}>Help</p>
                </div>
                <hr />
                <div className="taxrirlash_modal_div" onClick={() => chiqish()}>
                  <FiLogOut className="taxrirlash_modal_icon" />
                  <p>Exit</p>
                </div>
              </div>
              <div className="profil_blok_ikki_icon_taxriirlash_chat">
                <p>Today</p>
                <div className="taxrirlash_chad">
                  <div className="taxrirlash_chad_img_size">
                    <img src={chadimg} alt="" />
                  </div>
                  <div className="taxrirlash_chad_size">
                    <div className="taxrirlash_chad_vaqt">
                      <h1>Jenny Fox</h1>
                      <div className="taxrirlash_chad_vaqt_soat">
                        <TbPointFilled className="chad_set" />
                        <p>19:22</p>
                      </div>
                    </div>
                    <div className="taxrirlash_chad_text">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
                <div className="taxrirlash_chad">
                  <div className="taxrirlash_chad_img_size">
                    <img src={chadimg} alt="" />
                  </div>
                  <div className="taxrirlash_chad_size">
                    <div className="taxrirlash_chad_vaqt">
                      <h1>Jenny Fox</h1>
                      <div className="taxrirlash_chad_vaqt_soat">
                        <TbPointFilled className="chad_set" />
                        <p>19:22</p>
                      </div>
                    </div>

                    <div className="taxrirlash_chad_text">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
                <p>06.08.2019</p>
                <div className="taxrirlash_chad">
                  <div className="taxrirlash_chad_img_size">
                    <img src={chadimg} alt="" />
                  </div>
                  <div className="taxrirlash_chad_size">
                    <div className="taxrirlash_chad_vaqt">
                      <h1>Jenny Fox</h1>
                      <div className="taxrirlash_chad_vaqt_soat">
                        <TbPointFilled className="chad_set" />
                        <p>19:22</p>
                      </div>
                    </div>
                    <div className="taxrirlash_chad_text">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>

                <div className="taxrirlash_chad_barchasini">
                  <p>
                    view all
                    <AiOutlineRight />
                  </p>
                </div>
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
        {state1 === 'en' ? (<div className="gray_blok">
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
            <h1 onClick={() => updatetoggle(1)} className='fromMenu'>My Courses</h1>
            <h1 onClick={() => updatetoggle(2)} className='fromMenu'>My acquired knowledge</h1>
            <h1 onClick={() => updatetoggle(3)} className='fromMenu'>My Certificates</h1>
            <h1 onClick={() => updatetoggle(4)} className='fromMenu'>My Subscriptions</h1>
            <h1 onClick={() => updatetoggle(5)} className='fromMenu'>Correspondence</h1>
          </div>
        </div>) : (<div className="gray_blok">
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


        <div className={toggle === 1 ? "show-content" : "content"}><Filtr /></div>
        <div className={toggle === 2 ? "show-content" : "content"}><Bilim /></div>
        <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /> </div>
        <div className={toggle === 4 ? "show-content" : "content"}><Azo /></div>
      </div>
      <Futer />
    </div>
  );
}
