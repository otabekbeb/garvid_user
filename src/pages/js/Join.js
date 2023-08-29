import React, { useState } from "react";
import "../css/videoChat.css"

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className="VideoChat_room_big_div">
    <div className="VideoChat_room_big">
      <p>Xona yarating</p>
      <input type="text" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
    </div>
    </div>
  );
}