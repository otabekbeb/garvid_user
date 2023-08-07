import React, { useState, useEffect } from "react";
import "../css/yozishmalar.css";
import FollowCard from "../js/FollowCard";
import Chat from "./Chat";
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
    window.location.reload()
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
  function chatModal(room) {
    setRoom(room);
    socket.emit("join_room", { email, room });
    document.querySelector(".yozishma_bolim_text_nik").style = "display:none;";
    document.querySelector(".yozishma_small_div").style = "display:block;";
    document.querySelector(".chat_gap_text_div").style = "display:block;";
    document.querySelector(".chat_yoq_payt").style = "display:none;";
  }

  function back1() {
    document.querySelector(".yozishma_bolim_text_nik").style="display:block"
    document.querySelector(".openModelAddChat").style="display:none"
  }
function openModelAddChat() {
  document.querySelector(".yozishma_bolim_text_nik").style="display:none !important"
  document.querySelector(".openModelAddChat").style="display:block"
}


  return (
    <div>
      <div className="Chat_background">
        <div className="yozishma_big_div">
        
          <div className="yozishma_big_div_size">
          <div className="openModelAddChat" >
            <div className="back_search">
            <i id="back_icons" onClick={() => back1()} class='bx bx-arrow-back'></i>
          <p className="vibor" style={{display:"flex",justifyContent:"center"}}>select the user you want to chat with</p></div>
          <input placeholder="Search..." className="vibor_search" onChange={handleInputChange}/>
          <div className="userList">
            {users.map((item)=>{
              return(
                <div style={{cursor:"pointer",display:"flex"}} onClick={() => createPrivateRoom(item.email)} className="userDiv" ><div className="tg_img" style={{marginRight:"10px"}}><img style={{height:"100%"}} src={tgimg} alt="" /></div>{item.username}</div>
              )
            })}
          </div>
          </div>
            <div className="yozishma_bolim_text_nik">
              <div className="yozishma_bolim_text_nik_search">
                <input onChange={handleInputChange} type="text" placeholder="Search... " />
                              <button className="btnChatAdd" onClick={()=>openModelAddChat()} >+</button>
              </div>


              <div className="telegram_kirish">
              {rooms.map((item) => {
                let a = item;
                if (a !== null) {
                  const [email1, email2] = a.split("_");
           
                  const displayName = email1 === email ? email2 : email1;
                  return (
                    <div 
                      key={item}
                      onClick={() => chatModal(item)}
                      className="yozishma_bolim_text_nik_text"
                    >
                      <div className="yozishma_bolim_text_nik_text_ism_p">
                        <div className="tg_img">
                          <img src={tgimg} alt="" />
                        </div>
                        <h1 id="name">{displayName.slice(0,-10)}</h1>
                  
                      </div>
                      <div className="yozishma_bolim_text_nik_text_qongiroq">
                      </div>
                    </div>
                  );
                }
              })}
              </div>
              
            </div>

            <div className="yozishma_small_div">
              <div className="chat_gap_text_div">
                <Chat socket={socket} room={room} email={email} />
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
