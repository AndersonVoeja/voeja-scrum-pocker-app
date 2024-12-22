"use client";
import initializeSocket from "@/helpers/initializeSocket";
import React, { useEffect } from "react";

function RoomApp() {
  useEffect(() => {
    const socket = initializeSocket();
    return () => {
      socket.disconnect(); // Desconecta ao desmontar o componente
    };
  }, []);

  return (
    <div>
      <h1>Room App</h1>
    </div>
  );
}

export default RoomApp;
