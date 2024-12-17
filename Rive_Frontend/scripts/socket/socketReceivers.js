import { ioSocket, socket } from "./socketController.js";
import { healthValue, isEating, isSad } from "../rive/riveController.js";

/* This file contains all the socket.io receivers.
 * That means everything the server emits to the client should be put in here. When the server emits (sends) a message
 * to the frontend such as "status" or "feed", the client runs the code inside the socket.on function.
 */

ioSocket.on("greet", (data) => {
  console.log("Data: ", data);
  socket.emit("hello", { message: "Hello server" });
});
