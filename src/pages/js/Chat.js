import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "../css/Chat.css"
import { IoArrowBackOutline } from 'react-icons/io';
import tgimg from "../img/photo_2023-06-25_22-19-50 (2).jpg";
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import {BsEmojiSmile} from 'react-icons/bs'



function Chat({ socket, email, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [theme,setTheme] = useState(localStorage.getItem("back"))
  const [isPickerVisible,setPickerVisible] = useState(false)
  const [CurrentEmoji,setCurrentEmoji] = useState(null)

  const sendMessage = async () => {
    document.querySelector(".emojiess").style="display:none"
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
function smileu() {
  var a=document.querySelector(".emojiess").style.display
  if (a==="none") {
     document.querySelector(".emojiess").style.display="block"
  }else{
    document.querySelector(".emojiess").style.display="none"
  }
}
  useEffect(() => {
    document.querySelector(".emojiess").style="display:none"
    if (theme=="moon") {
      document.querySelector(".emoj").style = "color:white;";
    }else{
      document.querySelector(".emoj").style = "color:black;";
    }
    if (theme=="moon") {
      document.querySelector(".for_emojis").style = "background: rgb(33, 33, 33);";
    }else{
      document.querySelector(".for_emojis").style = "background: rgb(236, 235, 235);;";
    }
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
        <i  style={theme=="moon"?{color:"white"}:{color:"black"}} id="back_icons" onClick={() => back()} className='bx bx-arrow-back'></i>
        <div style={{marginLeft:"15px"}} className="tg_img">
          <img onClick={()=>prof_tg()} style={{height:"100%"}} src={tgimg} alt="" />
          
        </div>
        <div className="prof_tg1"><div className="left_tg">
                    <i id="icon2" className='bx bx-left-arrow-alt'></i>
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
                  <div className="forsss">
                  <div className="message-content">
                    <p>{messageContent.message}</p> 
                    <div className="timee"><p id="time">{messageContent.time}</p></div>
                    
     
                  </div>{email === messageContent.author?(<div className="for_svg"><svg width="9" height="20" className="svg-appendix"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="messageAppendix"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#000" filter="url(#messageAppendix)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#EEFFDE" className="corner"></path></g></svg></div>):(<div className="for_svg"><svg width="9" height="20" className="svg-appendix"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="messageAppendix"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#000" filter="url(#messageAppendix)"></path><path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="FFF" className="corner"></path></g></svg></div>)}</div>
                  <div className="message-meta">

                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
       <div className="emojiess" ><Picker  data={data} previewPosition="flex" onEmojiSelect={(e)=>{setCurrentMessage(currentMessage+e.native)}}/></div>
      <div className="for_emojis">
      <div className="emojis" onClick={()=> smileu()}><BsEmojiSmile style={{cursor:"pointer"}} className="emoj"/></div>
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
        /></div>
        <button onMouseLeave={()=>send2()} onMouseEnter={()=>send1()} onClick={sendMessage}><i style={{ fontSize: "25px" }} className='bx bx-send'></i></button>
      </div>
    </div>
  );
}

export default Chat;
