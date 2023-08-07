import React, { useState, useEffect } from "react";
import "../css/yozishmalar.css";
import YozishmaUserImg from "../img/Ellipse.jpg";
import FollowCard from "../js/FollowCard";
import Chat from "./Chat";
import {
  BsArrow90DegLeft,
  BsArrowLeft,
  BsCheck,
  BsCheckAll,
} from "react-icons/bs";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdClose } from "react-icons/md";
import Anime from "../img/png-transparent-anime-desktop-manga-television-show-anime-black-hair-manga-human.png";
import ImgChat from "../img/Ellipse 3.png";
import ImgChatt from "../img/Ellipse 2.4.png";
import tgimg from "../img/photo_2023-06-25_22-19-50 (2).jpg";
import axios from "axios";
import io from "socket.io-client";
const socket = io.connect("https://markazback2.onrender.com");
export default function MentorChat() {
  const [page, setPage] = useState();
  const [state1, setState1] = React.useState();
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    axios
      .get("https://markazback2.onrender.com/auth/oneuser", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        console.log(res1.data);
        // alert(res1.data[0].email)
        let email = res1.data[0].email;
        socket.emit("authenticate", { email });
        setEmail(email);
        // alert("ishladi")
        //     socket.emit("authenticate", { email });
        //         const getRooms = async () => {
        socket.emit("get_rooms", { email });
      })
      .catch((err) => {
        // alert("ishlamadi")
      });
      axios
      .get("https://markazback2.onrender.com/auth/allusers", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        setUsers(res1.data);
        // // alert(res1.data[0].email)
        // let email = res1.data[0].email;
        // socket.emit("authenticate", { email });
        // setEmail(email);
        // // alert("ishladi")
        // //     socket.emit("authenticate", { email });
        // //         const getRooms = async () => {
        // socket.emit("get_rooms", { email });
      })
    // alert(socket.id)
    // alert(email)
    // alert("zn")
    // const getRooms = async () => {
    //   socket.emit("get_rooms", { email });
    // };
    // getRooms()
    
  }, []);
  useEffect(() => {
    socket.on("load_rooms", (data) => {
      setRooms(data);
    });
  }, [socket]);
  useEffect(() => {
    socket.on("new_private_room", (data) => {
      setRooms((prevRooms) => [...prevRooms, data.roomName]);
      alert(`Новая приватная комната создана: ${data.roomName}`);
    });
  }, [socket]);
  const createPrivateRoom = (otheremail) => {
    // let email2="piyoz@gmail.com"
    socket.emit("create_private_room", {
      email1: email,
      email2: otheremail,
    });
    socket.emit("get_rooms", { email });
    socket.on("load_rooms", (data) => {
      setRooms(data);
    });
    // getRooms();
    // getUsers();


  };
  const handleInputChange = (event) => {
    // setSearch(event.target.value);
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios.get("https://markazback2.onrender.com/auth/allusers", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then((res) => {
      const searchdata = res.data.filter((item) => {
        return (
          searchRegex.test(item.username) ||
          searchRegex.test(item.email) 
        );
      });

      setUsers(searchdata);
    });
  };
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageList((list) => [...list, data]);
  //   });
  // }, [socket]);
  // useEffect(() => {
  //   socket.on("load_messages", (data) => {
  //     setMessageList(data);
  //   });
  // }, [socket]);
  function chatModal(room) {
    setRoom(room);
    socket.emit("join_room", { email, room });
    document.querySelector(".yozishma_small_div").style = "display:block;";
    // document.querySelector(".yozishma_bolim_text_nik").style = "display:none"
    // document.querySelector(".yoq1").style = "display:block;"
    // document.querySelector(".yoq").style = "display:flex ;"
    // document.querySelector(".javob_berish").style = "display:none;"
    document.querySelector(".chat_gap_text_div").style = "display:block;";
    document.querySelector(".chat_yoq_payt").style = "display:none;";

    //     var abj = item

    //     var tush = []
    //     tush.push(abj)
    //     tush.map(item => {
    //       document.querySelector('.telegram_pro_img_text').innerHTML = `
    //     <div style="margin-top: 10px !important;display: block !important;" className="telegram_pro_text">
    //     <h1 style="font-size: 15px !important;margin-bottom: 0 !important;" >${item}yyyyy</h1>
    // `
    //     })
  }
  function Chatnone() {
    document.querySelector(".yozishma_bolim_text_nik").style = "display:block;";
    document.querySelector(".yoq").style = "display:none";
  }
  function ChatClose() {
    document.querySelector(".yozishma_bolim_text_nik").style = "display:block;";
    document.querySelector(".yozishma_small_div").style = "display:none;";
    document.querySelector(".yoq1").style = "display:none";
  }

  function javobModal() {
    document.querySelector(".javob_berish").style = "display:block;";
    document.querySelector(".javob_berish_ikki").style = "display:none;";
  }
  function javobClose() {
    document.querySelector(".javob_berish").style = "display:none;";
  }
  function javobBerishModal() {
    document.querySelector(".javob_berish_ikki").style = "display:block;";
    document.querySelector(".javob_berish").style = "display:none;";
  }
  function javobBerishClose() {
    document.querySelector(".javob_berish_ikki").style = "display:none;";
  }
  function edit_chat_hoverModal() {
    document.querySelector(".edit_chat_hover").style =
      "display:block;scale: 1;transition: 10s;";
    document.querySelector(".edit_chat_hover_ikki").style =
      "display:none;scale: 0.4;transition: 2s;";
  }
  function edit_chat_hoverClose() {
    document.querySelector(".edit_chat_hover").style =
      "display:none;scale: 0.4;transition: 2s;";
  }
  function edit_chat_ikki_hoverModal() {
    document.querySelector(".edit_chat_hover_ikki").style =
      "display:block;scale: 1;transition: 10s;";
    document.querySelector(".edit_chat_hover").style =
      "display:none;scale: 0.4;transition: 2s;";
  }
  function edit_chat_ikki_hoverClose() {
    document.querySelector(".edit_chat_hover_ikki").style =
      "display:none;scale: 0.4;transition: 2s;";
  }
function openModelAddChat() {
  // document.querySelector(".openModelAddChat").style="display:block"
if (modal===false) {
   document.querySelector(".openModelAddChat").style="display:block" 
   setModal(true)
}else{
  document.querySelector(".openModelAddChat").style="display:none" 
  setModal(false)
}
}
  var data = [
    {
      name: "002",
      img: Anime,
      time: "23:10",
    },
    {
      name: "Abdurahm",
      img: ImgChat,
      time: "23:10",
    },
    {
      name: "Jonibek",
      img: ImgChatt,
      time: "6:10",
    },
    {
      name: "Otabek",
      img: YozishmaUserImg,
      time: "13:10",
    },
  ];

  return (
    <div>
      <div className="Chat_background">
        <div className="yozishma_big_div">
        <div className="openModelAddChat" >
          <p style={{display:"flex",justifyContent:"center"}}>viberite polzvatekya s kotorim xotite nachat obshatsya</p>
          <input onChange={handleInputChange}/>
          <div className="userList">
            {users.map((item)=>{
              return(
                <div               onClick={() => createPrivateRoom(item.email)} className="userDiv" >{item.username}</div>
              )
            })}
            {/* <div className="userDiv" >user</div>
            <div className="userDiv" >user</div>
            <div className="userDiv" >user</div>
            <div className="userDiv" >user</div>
            <div className="userDiv" >user</div>
            <div className="userDiv" >user</div>
            <div className="userDiv" >user</div>
            <div className="userDiv" >user</div> */}
          </div>
          </div>
          <div className="yozishma_big_div_size">
            <div className="yozishma_bolim_text_nik">
              <div className="yozishma_bolim_text_nik_search">
                <input type="text" placeholder="Search... " />
                              <button className="btnChatAdd" onClick={()=>openModelAddChat()} >dobavit noviy chat</button>
              </div>
              {/* <p>{socket.id}</p> */}

              <div>
              {rooms.map((item) => {
                let a = item;
                if (a !== null) {
                  const [email1, email2] = a.split("_");
                  //  // determine which part to display
                  const displayName = email1 === email ? email2 : email1;
                  return (
                    <div
                      key={item}
                      onClick={() => chatModal(item)}
                      className="yozishma_bolim_text_nik_text"
                    >
                      {/* <img id="img" src={item.img} alt="" /> */}
                      <div className="yozishma_bolim_text_nik_text_ism_p">
                        <div className="tg_img">
                          <img src={tgimg} alt="" />
                        </div>
                        <h1 id="name">{displayName}</h1>
                        {/* <p>Hi</p> */}
                      </div>
                      <div className="yozishma_bolim_text_nik_text_qongiroq">
                        {/* <div className="yozishma_bolim_text_nik_text_qongiroq_vaqti">{item.time}</div> */}
                        {/* <div className="yozishma_bolim_text_nik_text_qongiroq_bildir">2</div> */}
                      </div>
                    </div>
                  );
                }
                //  const [email1, email2] = item.split("_");
                //  // determine which part to display
                //  const displayName = email1 === email ? email2 : email1;
              })}
              </div>
              
            </div>

            <div className="yozishma_small_div">
              <div className="chat_gap_text_div">
                <Chat socket={socket} room={room} email={email} />
                {/* <div className="yozishma_telegram_profil">
                  <BsArrowLeft className="yoq" onClick={() => Chatnone()} />
                  <BsArrowLeft className="yoq1" onClick={() => ChatClose()} />

                  {[rooms[0]].map(item => {
                    return (
                      <div className="telegram_pro_img_text">

                        <div className="telegram_pro_text">
                          <h1>{item}</h1>
                          <p>dddddddd</p>
                        </div>
                      </div>
                    )
                  })}

                </div>
                <div className="yozishma_small_text_div">

                  <div className="yozishma_small_text_div_chat">

                    <div className="yozishma_small_text_div_text">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste harum tempora dolores fugit quidem necessitatibus totam doloribus eligendi aperiam architecto consequatur enim exercitationem reprehenderit mollitia, voluptatibus vitae. Illo, eligendi.</p>
                      <div className="yozishma_small_text_div_text_javob_sozi">
                        <div
                          onClick={() => javobModal()}
                          className="javob_sozi_big"
                        >
                          <BsArrow90DegLeft className="javob_sozi" />
                          <p>
                            <a className="Javob" href="#Javob">
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="yozishma_small_text_div_ptichka">
                          <div className="edit_chat_hover_relative">
                            <div className="edit_chat_hover">
                              Delete
                            </div>
                            <MdDeleteForever onMouseLeave={() => edit_chat_hoverClose()} onMouseEnter={() => edit_chat_hoverModal()} className="edit_chat" />
                          </div>
                          <div className="edit_chat_hover_ikki_relative">
                            <div className="edit_chat_hover_ikki">
                              Edit
                            </div>
                            <MdEdit onMouseLeave={() => edit_chat_ikki_hoverClose()} onMouseEnter={() => edit_chat_ikki_hoverModal()} className="edit_chat" />
                          </div>
                          <BsCheckAll className="ptichka_chat" />
                          <BsCheck className="ptichka_chat" />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="yozishma_small_xabar_div">
                  <div id="Javob" className="javob_berish">
                    <div className="javob_berish_div">
                      <div className="javob_berish_blok_text">
                        <h1>Turaev Jafarbek</h1>
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="javob_berish_div_fill">
                        <MdClose onClick={() => javobClose()} />
                      </div>
                    </div>
                  </div>
                  <div className="javob_berish_ikki">
                    <div className="javob_berish_div">
                      <div className="javob_berish_blok_text">
                        <h1>Turaev Jafarbek</h1>
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="javob_berish_div_fill">
                        <MdClose onClick={() => javobBerishClose()} />
                      </div>
                    </div>
                  </div>
                  <div className="chat_file_smile">
                    <LiaTelegramPlane className="telegram_plane" />
                  </div>
                  <input placeholder="Введите текст" id="smile_input" type="text" />
                </div> */}
                {/* <p>d</p> */}
              </div>
              <div className="chat_yoq_payt">
                <p>Select a chat to start messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FollowCard />
    </div>
  );
}
