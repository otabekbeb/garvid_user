import React, { useState, useEffect } from "react";
import "../css/yozishmalar.css";
import FollowCard from "../js/FollowCard";
import Chat from "./Chat";
import tgimg from "../img/photo_2023-06-25_22-19-50 (2).jpg";
import axios from "axios";
import Swal from "sweetalert2"; 
import io from "socket.io-client";
import profimg from "../img/Rectangle.png"
import {BsMoonStars} from "react-icons/bs"
const socket = io.connect("https://markazback2.onrender.com");
export default function MentorChat() {
  const [page, setPage] = useState();
  const [state1, setState1] = React.useState();
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [theme,setTheme] = useState(localStorage.getItem("back"))
  useEffect(() => {
    if(localStorage.getItem("back")!=="moon"){
      document.querySelector("#checkbox2").checked=false
      }else{
        document.querySelector("#checkbox2").checked=true
      };
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );    axios
      .get("https://markazback2.onrender.com/auth/oneuser", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        console.log(res1.data);
        // Swal.fire(res1.data[0].email)
        let email = res1.data[0].email;
        socket.emit("authenticate", { email });
        setEmail(email);
        // Swal.fire("ishladi")
        //     socket.emit("authenticate", { email });
        //         const getRooms = async () => {
        socket.emit("get_rooms", { email });
      })
      .catch((err) => {
        // Swal.fire("ishlamadi")
      });
      axios
      .get("https://markazback2.onrender.com/auth/allusers", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        setUsers(res1.data);
        // // Swal.fire(res1.data[0].email)
        // let email = res1.data[0].email;
        // socket.emit("authenticate", { email });
        // setEmail(email);
        // // Swal.fire("ishladi")
        // //     socket.emit("authenticate", { email });
        // //         const getRooms = async () => {
        // socket.emit("get_rooms", { email });
      })
    // Swal.fire(socket.id)
    // Swal.fire(email)
    // Swal.fire("zn")
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
      Swal.fire(`Новая приватная комната создана: ${data.roomName}`);
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
  function pencil() {
    if (theme=="moon") {
      document.querySelector(".pencil").style="left:10px;background:rgb(33,33,33)"
    }else{
      document.querySelector(".pencil").style="left:10px;background:white"
    }
  }
  function pencil_close() {
    if (theme=="moon") {
    document.querySelector(".pencil").style="left:-570px;background:rgb(33,33,33)"
    }else{
      document.querySelector(".pencil").style="left:-570px;background:white"
    }
  }
  function telegram_close() {
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector("#telegram_menu").style = "color:white";
    }else{
      document.querySelector("#telegram_menu").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-left-arrow-alt").style = "color:white";
    }else{
      document.querySelector(".bx-left-arrow-alt").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".tg_header p").style = "color:white";
    }else{
      document.querySelector(".tg_header p").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-pencil").style = "color:white";
    }else{
      document.querySelector(".bx-pencil").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-dots-vertical-rounded").style = "color:white";
    }else{
      document.querySelector(".bx-dots-vertical-rounded").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".telegram_menu").style="left:-570px"
    document.querySelector("#telegram_menu").style="left:10px;background:rgb(33,33,33)"
    }else{
      document.querySelector(".telegram_menu").style="left:-570px"
    document.querySelector("#telegram_menu").style="left:10px;background:white"
    }
  }
  function telegrammenu() {
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector("#telegram_menu").style = "color:white";
    }else{
      document.querySelector("#telegram_menu").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-left-arrow-alt").style = "color:white";
    }else{
      document.querySelector(".bx-left-arrow-alt").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".tg_header p").style = "color:white";
    }else{
      document.querySelector(".tg_header p").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-pencil").style = "color:white";
    }else{
      document.querySelector(".bx-pencil").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-dots-vertical-rounded").style = "color:white";
    }else{
      document.querySelector(".bx-dots-vertical-rounded").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".telegram_menu").style="left:10px;background:rgb(33,33,33)"
    document.querySelector("#telegram_menu").style="left:-570px"
    }else{
      document.querySelector(".telegram_menu").style="left:10px;background:white"
    document.querySelector("#telegram_menu").style="left:-570px"
    }
  }
  function chatModal(room) {
    setRoom(room);
    socket.emit("join_room", { email, room });
    document.querySelector(".yozishma_bolim_text_nik").style = "display:none;";
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector(".yozishma_bolim_text_nik").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".yozishma_bolim_text_nik").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector(".chat-body").style = "background:url('https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png')";
    }else{
      document.querySelector(".chat-body").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector(".chat-header").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-header").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer input").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-window .chat-footer input").style = "background:white";
    }
    if (theme=="moon") {
      document.querySelector("#telegram_menu").style = "color:white";
    }else{
      document.querySelector("#telegram_menu").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".theme_icons p").style = "color:white";
    }else{
      document.querySelector(".theme_icons p").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".theme_iconss").style = "color:white";
    }else{
      document.querySelector(".theme_iconss").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-left-arrow-alt").style = "color:white";
    }else{
      document.querySelector(".bx-left-arrow-alt").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".tg_header p").style = "color:white";
    }else{
      document.querySelector(".tg_header p").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-pencil").style = "color:white";
    }else{
      document.querySelector(".bx-pencil").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".bx-dots-vertical-rounded").style = "color:white";
    }else{
      document.querySelector(".bx-dots-vertical-rounded").style = "color:black";
    }


    document.querySelector(".yozishma_small_div").style = "display:block;";
    document.querySelector(".chat_gap_text_div").style = "display:block;";
    document.querySelector(".chat_yooq").style = "display:none;";
  }

  function back1() {
    document.querySelector(".yozishma_bolim_text_nik").style="display:block"
    document.querySelector(".openModelAddChat").style="display:none"
    if (theme=="moon") {
      document.querySelector(".yozishma_bolim_text_nik").style = "background:rgb(33,33,33);color:white";
    }else{
      document.querySelector(".yozishma_bolim_text_nik").style = "background:white;color:black";
    }
  }
function openModelAddChat() {
  document.querySelector(".yozishma_bolim_text_nik").style="display:none !important"
  document.querySelector(".openModelAddChat").style="display:block !important"
  if (theme=="moon") {
    document.querySelector(".openModelAddChat").style = "background:rgb(33,33,33);color:white;display:block";
  }else{
    document.querySelector(".openModelAddChat").style = "background:white;color:black;display:block";
  }
}
function tg_imagess() {
  document.querySelector(".foto_tg").style="bottom:0px"
}
function tg_imagess_close() {
  document.querySelector(".foto_tg").style="bottom:-60px"
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
            <div style={theme=="moon"?{background:"rgb(33,33,33)",color:"white"}:{background:"white",color:"black"}} className="yozishma_bolim_text_nik">
              <div className="telegram_menu">
                <div className="tg_header">
                  <div className="left_tg">
              <i  onClick={()=>telegram_close()} class='bx bx-left-arrow-alt'></i>
              <p>Settings</p></div>
              <div className="right_tg">
              <i onClick={()=>pencil()} class='bx bx-pencil'></i>
              <div className="pencil">
                <div className="left_pen">
                  <i  onClick={()=>pencil_close()} class='bx bx-left-arrow-alt'></i>
                  <p>change profile</p>
                  </div>
                  <div className="edit_profilees">
                    <div onMouseEnter={()=>tg_imagess()} onMouseLeave={()=>tg_imagess_close()} className="tg_imagess">
                      <img src={profimg} alt="" />
                      <input style={{cursor:"pointer"}} type="file" className="tg_input" />
                      <div style={{cursor:"pointer"}} className="foto_tg"><i style={{cursor:"pointer"}} class='bx bx-camera'></i></div>
                    </div>
                  </div>
                  <input style={theme=="moon"?{background:"rgb(33,33,33)",color:"white"}:{background:"white",color:"black"}} className="tgs_inp" type="text" placeholder="Name"/>
                  </div>
              <i class='bx bx-dots-vertical-rounded'></i>
              </div>
              </div>
                <div className="tg_images">
                <img src={profimg} alt="" /></div>
                <div className="for_theme">
                  <div className="theme_icons">
                  <BsMoonStars className="theme_iconss"/>
                  <p>Night mode</p>
                  </div>
                <label class="switch" >
  <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
  <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
  <input id="checkbox2" onClick={()=>{!document.querySelector("#checkbox2").checked?(localStorage.setItem("back", "sun")):(localStorage.setItem("back", "moon"));window.location.reload()}} type="checkbox" class="input"/>
  <span class="slider"></span>
</label></div>
              </div>
              <div className="yozishma_bolim_text_nik_search">
              <i style={{fontSize:"25px"}} onClick={()=>telegrammenu()} id="telegram_menu" class='bx bx-menu'></i>
                <input style={theme=="moon"?{background:"rgb(33,33,33)"}:{background:"white"}} id="searchss" onChange={handleInputChange} type="text" placeholder="Search... " />
                
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
                        <h1 style={theme=="moon"?{color:"white"}:{color:"black"}} id="name">{displayName.slice(0,-10)}</h1>
                  
                      </div>
                      <div className="yozishma_bolim_text_nik_text_qongiroq">
                      </div>
                    </div>
                  );
                }
              })}
              </div>
              
            </div>

            <div style={theme=="moon"?{background:"rgb(33,33,33)"}:{background:"white"}} className="yozishma_small_div">
              <div className="chat_gap_text_div">
                <Chat socket={socket} room={room} email={email} />
              </div>
              <div className="chat_yooq">
              <div className="chat_yoq_payt">
                <p style={theme=="moon"?{color:"white"}:{color:"black"}}>Select a chat to start messaging</p>
              </div></div>
            </div>
          </div>
        </div>
      </div>
      <FollowCard />
    </div>
  );
}
