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
      <input type="text" placeholder="Create a room" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={onSubmit}>Create</button>
    </div>
    </div>
  );
}