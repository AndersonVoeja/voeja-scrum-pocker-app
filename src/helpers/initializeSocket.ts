import { DefaultEventsMap } from "@socket.io/component-emitter";
import { io, Socket } from "socket.io-client";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

function initializeSocket() {
  if (!socket) {
    socket = io("http://localhost:3000", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected to WebSocket server:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });
  }
  return socket;
}

export default initializeSocket;
