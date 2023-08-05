import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "../css/Chat.css"
function Chat({ socket, email, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

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

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      socket.emit("join_room", { email, room });
    });
  }, [socket]);
  useEffect(() => {
    socket.on("load_messages", (data) => {
      setMessageList(data);
    });
  }, [socket]);
  
  return (
    <div className="chat-window">
      <div className="chat-header">
      <p>
  {(() => {
    if (!email) {
      return "foydalanuvchini tanlang";
    }
    // split the room into two parts
    const [email1, email2] = room.split("_");
    // determine which part to display
    const displayName = email1 === email ? email2 : email1;
    return displayName;
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
                    <p>{messageContent.message}</p> <p id="time">{messageContent.time}</p>
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
        <button onClick={sendMessage}><i style={{fontSize:"25px"}} class='bx bx-send'></i></button>
      </div>
    </div>
  );
}

export default Chat;
