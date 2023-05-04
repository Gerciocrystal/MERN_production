const express = require("express");
const app = express();
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const colors = require("colors");
const Routes = require("./routes/index");
const path = require("path"); // deployment
dotenv.config();
connectDb();
app.use(express.json());
app.use("/api", Routes);
// ------------------------------------Production---------
const __dirname1 = path.resolve();
console.log(__dirname1);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname1, "..", "client", "dist", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// ------------------------------------Production---------
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`.yellow.bold);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  // console.log("Connectedo ao socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    // console.log(userData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    // console.log("utilizador entrou no room:" + room);
  });

  socket.on("typing", (room) => {
    socket.in(room).emit("typing");
  });
  socket.on("stop typing", (room) => {
    socket.in(room).emit("stop typing");
  });

  socket.on("new message", (newMessageRecieve) => {
    var chat = newMessageRecieve.chat;

    if (!chat.users) return console.log("Chat nao existe");

    //nao sera visivel para min
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieve.sender._id) return;
      // console.log(user._id);

      socket.in(user._id).emit("message received", newMessageRecieve); //no socket do vizinho
    });
  });

  socket.off("setup", () => {
    console.log("USER disconectado");
    socket.leave(userData._id);
  });
});
