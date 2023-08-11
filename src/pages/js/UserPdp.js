import React, { useEffect, useState } from "react";
import "../css/Pdp.css";
import Filtr from "./Searchfilter";
import "bootstrap/dist/css/bootstrap.min.css";
import Bilim from "./Bilim";
import Sertifikat from "./Sertifikate";
import Azo from "./Azo";
import io from "socket.io-client";
import UserChat from "./userChat";
import { TiThMenu } from "react-icons/ti";
import axios from "axios";
import url from "./Host";
import Testpage from '../js/Testpage'

// const socket = io.connect("http://localhost:5000");
export default function Pdp() {
  const [toggle, setToggle] = useState(1);
  const [kursdata, setKursData] = useState([]);
  const [state1, setState1] = React.useState();
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios.get(`${url}/api/course`).then((res) => {
      setKursData(res.data);
    });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    // Swal.fire(socket.id);
    // Swal.fire("zm")
    // axios
    //   .get("http://localhost:5000/auth/oneuser", {
    //     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    //   })
    //   .then((res1) => {
    //     console.log(res1.data);
    //     // Swal.fire(res1.data[0].email)
    //     let email = res1.data[0].email
    //     socket.emit("authenticate", { email });
    //     setEmail(email)
    //     // Swal.fire("ishladi")
    //   })
    //   .catch((err) => {
    //     // Swal.fire("ishlamadi")
    //   });
  }, []);

  function updatetoggle(id) {
    // if (id===5) {
    //     socket.emit("authenticate", { email });
    //         const getRooms = async () => {
    //   socket.emit("get_rooms", { email });
    // };
    // getRooms()
    // }
    setToggle(id);
    document.querySelector(".profil_modal_media").style = "display:none;";
    document.querySelector(".profil_blok_menu_clone").style =
      "display:none !important;";
    document.querySelector(".profil_blok_menu").style = "display:block;";
  }

  function menuModal() {
    document.querySelector(".profil_modal_media").style = "display:block;";
    document.querySelector(".profil_blok_menu").style =
      "display:none !important;";
    document.querySelector(".profil_blok_menu_clone").style = "display:block;";
  }
  function menuModalClone() {
    document.querySelector(".profil_modal_media").style = "display:none;";
    document.querySelector(".profil_blok_menu_clone").style =
      "display:none !important;";
    document.querySelector(".profil_blok_menu").style = "display:block;";
  }

  return (
    <div>
      <div>
        {state1 === "en" ? (
          <div className="gray_blok">
            <div className="fil_text_blok">
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(1)}
                  style={
                    toggle === 1 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  My courses
                </h1>
                {toggle === 1 ? (
                  <div className="fil_text_blok_kurs_lenght">
                    {kursdata.length} pieces
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(2)}
                  style={
                    toggle === 2 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  My learned knowledge
                </h1>
                {toggle === 2 ? (
                  <div className="fil_text_blok_kurs_lenght">14 pieces</div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(3)}
                  style={
                    toggle === 3 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Test
                </h1>
                {toggle === 3 ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(3)}
                  style={
                    toggle === 3 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  My certificates
                </h1>
                {toggle === 3 ? (
                  <div className="fil_text_blok_kurs_lenght">24 pieces</div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(4)}
                  style={
                    toggle === 4 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  My Subscriptions
                </h1>
                {toggle === 4 ? (
                  <div className="fil_text_blok_kurs_lenght">24 pieces</div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(5)}
                  style={
                    toggle === 5 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Correspondence
                </h1>
                <div className="fil_text_blok_kurs_lenght">1 pieces</div>
              </div>
            </div>
            <div className="profil_blok_menu_size">
              <TiThMenu
                onClick={() => menuModal()}
                className="profil_blok_menu"
              />
              <TiThMenu
                onClick={() => menuModalClone()}
                className="profil_blok_menu_clone"
              />
            </div>
            <div className="profil_modal_media">
              <h1 onClick={() => updatetoggle(1)} className="fromMenu">
                My Courses
              </h1>
              <h1 onClick={() => updatetoggle(2)} className="fromMenu">
                My acquired knowledge
              </h1>
              <h1 onClick={() => updatetoggle(3)} className="fromMenu">
                test
              </h1>
              <h1 onClick={() => updatetoggle(4)} className="fromMenu">
                My Certificates
              </h1>
              <h1 onClick={() => updatetoggle(5)} className="fromMenu">
                My Subscriptions
              </h1>
              <h1 onClick={() => updatetoggle(6)} className="fromMenu">
                Correspondence
              </h1>
            </div>
          </div>
        ) : (
          <div className="gray_blok">
            <div className="fil_text_blok">
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(1)}
                  style={
                    toggle === 1 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Мои курсы
                </h1>
                {toggle === 1 ? (
                  <div className="fil_text_blok_kurs_lenght">
                    {kursdata.length} штуки
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(2)}
                  style={
                    toggle === 2 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Мои усвоенные знания
                </h1>
                {toggle === 2 ? (
                  <div className="fil_text_blok_kurs_lenght">14 штуки</div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(3)}
                  style={
                    toggle === 3 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Мои сертификаты
                </h1>
                {toggle === 3 ? (
                  <div className="fil_text_blok_kurs_lenght">24 штуки</div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(4)}
                  style={
                    toggle === 4 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Мои подписки
                </h1>
                {toggle === 4 ? (
                  <div className="fil_text_blok_kurs_lenght">24 штуки</div>
                ) : (
                  ""
                )}
              </div>
              <div className="fil_text_blok_soz">
                <h1
                  onClick={() => updatetoggle(5)}
                  style={
                    toggle === 5 ? { borderBottom: "2px solid #44bef1" } : {}
                  }
                  className="fromLeft"
                >
                  Переписка
                </h1>
                <div className="fil_text_blok_kurs_lenght">1 штуки</div>
              </div>
            </div>
            <div className="profil_blok_menu_size">
              <TiThMenu
                onClick={() => menuModal()}
                className="profil_blok_menu"
              />
              <TiThMenu
                onClick={() => menuModalClone()}
                className="profil_blok_menu_clone"
              />
            </div>
            <div className="profil_modal_media">
              <h1 onClick={() => updatetoggle(1)} className="fromMenu">
                Мои курсы
              </h1>
              <h1 onClick={() => updatetoggle(2)} className="fromMenu">
                Мои усвоенные знания
              </h1>
              <h1 onClick={() => updatetoggle(3)} className="fromMenu">
                Мои сертификаты
              </h1>
              <h1 onClick={() => updatetoggle(4)} className="fromMenu">
                Мои подписки
              </h1>
              <h1 onClick={() => updatetoggle(5)} className="fromMenu">
                Переписка
              </h1>
            </div>
          </div>
        )}

        <div className={toggle === 1 ? "show-content" : "content"}>
          <Filtr />
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <Bilim />
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <Testpage />{" "}
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
          <Sertifikat />{" "}
        </div>
        <div className={toggle === 5 ? "show-content" : "content"}>
          <Azo />
        </div>
        <div className={toggle === 6 ? "show-content" : "content"}>
          <UserChat/>
        </div>
      </div>
    </div>
  );
}

