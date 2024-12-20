const { log } = require("console");
const express = require("express");
const app = express();
const http = require("http");
const PORT = 3000;
// const PORT = 5500;

// Create Express http server
const server = http.createServer(app);

// Server listens on port
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// Initialize Socket IO on server
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "https://groggyfroggy.netlify.app",
  },
});

// Here we need to create the states for the rive animation and
// set up an interval that updates the values
let isSad = false;
let hp = 100;

console.log(hp);

setInterval(() => {
  if (hp > 0) {
    if (hp < 25) {
      isSad = true;
    } else {
      isSad = false;
    }
    hp = hp - 0.1;
    console.log(hp);

    io.sockets.emit("status", { sadness: isSad, health: hp });
  }
}, 1000);

// A user connects to the server (opens a socket)
io.sockets.on("connection", function (socket) {
  // Server recieves a ping and responds with an emit event (sends a message to all connected sockets)
  io.sockets.emit("greet", { message: "Server says hello" });

  socket.on("feed", (data) => {
    if (hp < 90) {
      hp = hp + 10;
    } else {
      hp = 101;
    }
    console.log("Recieved client ping: ", data);

    io.sockets.emit("feeding", { message: "Client is fed" });
  });
});
