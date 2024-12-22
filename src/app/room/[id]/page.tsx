"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://voeja-scrum-pocker-server.onrender.com", {
  transports: ["websocket"],
});
function RoomApp() {
  const [messages, setMessages] = useState<string[]>([]);
  const [roomId, setRoomId] = useState("");
  const [vote, setVote] = useState(0);

  useEffect(() => {
    // Listen for events from the server
    socket.on("player-joined", (data) => {
      setMessages((prev) => [...prev, `${data.playerId} joined the room`]);
    });

    socket.on("player-left", (data) => {
      setMessages((prev) => [...prev, `${data.playerId} left the room`]);
    });

    socket.on("player-voted", (data) => {
      setMessages((prev) => [...prev, `${data.playerId} voted: ${data.vote}`]);
    });

    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const joinRoom = () => {
    if (roomId) {
      socket.emit("join-room", { roomId });
    }
  };

  const sendVote = () => {
    if (roomId) {
      socket.emit("vote", { roomId, playerId: socket.id, vote });
    }
  };

  return (
    <div>
      <h1>Room App</h1>
      <div>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Vote"
          value={vote}
          onChange={(e) => setVote(Number(e.target.value))}
        />
        <button onClick={sendVote}>Vote</button>
      </div>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RoomApp;
