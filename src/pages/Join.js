import React, { useState } from "react";
import "./css/videoChat.css"

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className="VideoChat_room_big_div">
    <div className="VideoChat_room_big">
      <img style={{width:"50%",margin:"auto",display:"flex"}} src="https://www.edigitalagency.com.au/wp-content/uploads/zoom-logo-png-video-meeting-call-software.png" alt="" />
      <img style={{width:"100%",marginTop:"30px"}} src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png" alt="" />
      <input type="text" placeholder="Создать комнату" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={onSubmit}>Создавать</button>
    </div>
    </div>
  );
}