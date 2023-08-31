import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "../css/Chat.css"
import { IoArrowBackOutline } from 'react-icons/io';
import tgimg from "../img/photo_2023-06-25_22-19-50 (2).jpg";
import data from '@emoji-mart/data'
import { Picker } from "emoji-mart";




function Chat({ socket, email, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [theme,setTheme] = useState(localStorage.getItem("back"))

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: email,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  function send1(){
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "color:white";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "color:black";
    }
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "background:white";
    }
  }
  function send2(){
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "color:black";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "color:white";
    }
    if (theme=="moon") {
      document.querySelector(".chat-window .chat-footer button").style = "background:rgb(33,33,33)";
    }else{
      document.querySelector(".chat-window .chat-footer button").style = "background:white";
    }
  }function back() {
  if (theme=="moon") {
    document.querySelector(".yozishma_bolim_text_nik").style = "background:rgb(33,33,33);color:white;display:block";
  }else{
    document.querySelector(".yozishma_bolim_text_nik").style = "background:#dbdbdb;color:black;display:block";
  }
  document.querySelector(".yozishma_small_div").style = "display:none"
}
function prof_tg() {
  
}
  useEffect(() => {
    if (theme=="moon") {
      document.querySelector(".forr_white").style = "color:white !important";
    }else{
      document.querySelector(".forr_white").style = "color:black !imporatnt";
    }
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      socket.on("load_messages", (data) => {
        setMessageList(data);
        console.log(data,"load messages");
      });
      // socket.emit("join_room", { email, room });
      console.log(data," receive_message");
      console.log(messageList,"usestate");
    });
  }, [socket]);
  useEffect(() => {
    socket.on("load_messages", (data) => {
      setMessageList(data);
      console.log(data,"load messages");
    });
  }, [socket]);
  
  

  return (
    <div className="chat-window">
      <div className="chat-header">
        <i  style={theme=="moon"?{color:"white"}:{color:"black"}} id="back_icons" onClick={() => back()} class='bx bx-arrow-back'></i>
        <div style={{marginLeft:"15px"}} className="tg_img">
          <img onClick={()=>prof_tg()} style={{height:"100%"}} src={tgimg} alt="" />
          
        </div>
        <div className="prof_tg1"><div className="left_tg">
                    <i id="icon2" class='bx bx-left-arrow-alt'></i>
                    <p>Profile</p></div>
                    
                    </div>
        <p className="forr_white">
          {(() => {
            if (!email) {
              return "foydalanuvchini tanlang";
            }
            // split the room into two parts
            const [email1, email2] = room.split("_");
            // determine which part to display
            const displayName = email1 === email ? email2 : email1;
            return displayName.slice(0,-10);
          })()}
        </p>



      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={email === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p> 
                    <div className="timee"><p id="time">{messageContent.time}</p></div>
                    
                  </div>
                  <div className="message-meta">

                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
       
        <input
          type="text"
          value={currentMessage}
          placeholder="Write a message..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onMouseLeave={()=>send2()} onMouseEnter={()=>send1()} onClick={sendMessage}><i style={{ fontSize: "25px" }} class='bx bx-send'></i></button>
      </div>
    </div>
  );
}

export default Chat;
