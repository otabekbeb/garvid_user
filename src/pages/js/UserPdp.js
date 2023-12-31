import React, { useEffect, useState } from "react";
import "../css/Pdp.css";
import Filtr from "./Searchfilter";
import "bootstrap/dist/css/bootstrap.min.css";
import Bilim from "./Bilim";
import Sertifikat from "./Sertifikate";
import Azo from "./Azo";
import io from "socket.io-client";
import UserChat from "./FollowCard";
import { TiThMenu } from "react-icons/ti";
import axios from "axios";
import url from "./Host";
import Testpage from '../js/Testpage'
import Courses from "./Ourcourse"
import Mysubscribers from '../js/Mysubscribers'
import Student from '../js/Student'
import Loader from "./loader";
import Teacherpage from '../js/Teacherpage'
// const socket = io.connect("http://localhost:5000");
export default function Pdp() {
  const [toggle, setToggle] = useState(1);
  const [kursdata, setKursData] = useState([]);
  const [state1, setState1] = React.useState();
  const [courses,setCourses] = useState([])
  const [email, setEmail] = useState("");
  const [follow, setFollow] = useState([])
  const[loader,setLoader] = useState(1)
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      axios.get(`${url}/auth/oneuser`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res10=>{
        res10.data.map(ite=>{axios.get(`${url}/api/mycourse/${ite.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
          setKursData(res.data)
        }) })
      }),
      axios.get(`${url}/auth/oneuser`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res10=>{
        res10.data.map(ite=>{axios.get(`${url}/api/nomycourse/${ite.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
          setCourses(res.data)
          setLoader(0);
        }) })
      }),
      
      
      axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setFollow(res.data)
    }).catch(err=>{})
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
    <div>{loader==0?(<div>
        
      {state1 === "en" ? (
        <div className="#6b3d0c_blok">
          <div className="fil_text_blok">
            <div className="fil_text_blok_soz">
              <h1
                onClick={() => updatetoggle(1)}
                style={
                  toggle === 1 ? { borderBottom: "2px solid #6b3d0c" } : {}
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
                  toggle === 2 ? { borderBottom: "2px solid #6b3d0c" } : {}
                }
                className="fromLeft"
              >
                Courses
              </h1>
              {toggle===2?( <div className="fil_text_blok_kurs_lenght">{courses.length} pieces</div>):("")}
             
            </div>
            <div className="fil_text_blok_soz">
              <h1
                onClick={() => updatetoggle(5)}
                style={
                  toggle === 5 ? { borderBottom: "2px solid #6b3d0c" } : {}
                }
                className="fromLeft"
              >
                My Subscriptions
              </h1>
              {toggle === 5 ? (
                <div className="fil_text_blok_kurs_lenght">{localStorage.getItem("for_azo")} pieces</div>
              ) : (
                ""
              )}
            </div>
            <div className="fil_text_blok_soz">
            <h1
              onClick={() => updatetoggle(6)}
              style={
                toggle === 6 ? { borderBottom: "2px solid #6b3d0c" } : {}
              }
              className="fromLeft"
            >
              All Teachers
            </h1>
            {toggle === 6 ? (
              <div className="fil_text_blok_kurs_lenght">{localStorage.getItem("FollowCard")} pieces</div>
            ) : (
              ""
            )}
          </div>

            

            {/* <div className="fil_text_blok_soz">
              <h1
                onClick={() => updatetoggle(6)}
                style={
                  toggle === 6 ? { borderBottom: "2px solid #6b3d0c" } : {}
                }
                className="fromLeft"
              >
                Chat
              </h1>
              <div className="fil_text_blok_kurs_lenght">1 pieces</div>
            </div> */}
            
            <div className="fil_text_blok_soz">
              <h1
                onClick={() => updatetoggle(8)}
                style={
                  toggle === 8 ? { borderBottom: "2px solid #6b3d0c" } : {}
                }
                className="fromLeft"
              >
                Student
              </h1>
              {/* <div className="fil_text_blok_kurs_lenght">1 pieces</div> */}
            </div>
            <div className="fil_text_blok_soz">
              <h1
                onClick={() => updatetoggle(10)}
                style={
                  toggle === 10 ? { borderBottom: "2px solid #6b3d0c" } : {}
                }
                className="fromLeft"
              >
                Teacher
              </h1>
              {/* <div className="fil_text_blok_kurs_lenght">1 pieces</div> */}
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
            {/* <h1 onClick={() => updatetoggle(2)} className="fromMenu">
              My acquired knowledge
            </h1> */}
            {/* <h1 onClick={() => updatetoggle(3)} className="fromMenu">
              test
            </h1> */}
            {/* <h1 onClick={() => updatetoggle(4)} className="fromMenu">
              My Certificates
            </h1> */}<h1 onClick={() => updatetoggle(2)} className="fromMenu">
            Courses

            </h1>
            <h1 onClick={() => updatetoggle(5)} className="fromMenu">
              My Subscriptions
            </h1>
            <h1 onClick={() => updatetoggle(6)} className="fromMenu">
              All Teachers
            </h1>
            {/* <h1 onClick={() => updatetoggle(9)} className="fromMenu">
              My subscribers
            </h1> */}
            {/*<h1 onClick={() => updatetoggle(6)} className="fromMenu">
             Chat
           </h1>*/}
            
            <h1 onClick={() => updatetoggle(8)} className="fromMenu">
            Student
            </h1>
            <h1 onClick={() => updatetoggle(9)} className="fromMenu">
            Teacher
            </h1>
          </div>
        </div>
      ) : (
        <div className="#6b3d0c_blok">
          <div className="fil_text_blok">
            <div className="fil_text_blok_soz">
              <h1
                onClick={() => updatetoggle(1)}
                style={
                  toggle === 1 ? { borderBottom: "2px solid #6b3d0c" } : {}
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
                  toggle === 2 ? { borderBottom: "2px solid #6b3d0c" } : {}
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
                  toggle === 3 ? { borderBottom: "2px solid #6b3d0c" } : {}
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
                onClick={() => updatetoggle(4)}
                style={
                  toggle === 4 ? { borderBottom: "2px solid #6b3d0c" } : {}
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
                  toggle === 5 ? { borderBottom: "2px solid #6b3d0c" } : {}
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
      <Filtr />{" "}
      </div>
      <div className={toggle === 2 ? "show-content" : "content"}>
        <Courses />
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
      <div className={toggle === 9 ? "show-content" : "content"}>
        <Mysubscribers />
      </div>
      <div className={toggle === 6 ? "show-content" : "content"}>
        <UserChat />
      </div>
      <div className={toggle === 7 ? "show-content" : "content"}>
     
      </div>
      <div className={toggle === 8 ? "show-content" : "content"}>
        <Student />
      </div>
      <div className={toggle === 10 ? "show-content" : "content"}>
        <Teacherpage />
      </div>

    </div>):(<Loader/>)}
      
    </div>
  );
}

