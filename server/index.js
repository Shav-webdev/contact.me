const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const auth = require("./api/routes/auth.routes");
const { db } = require("../server/db/db");
const users = require("./api/routes/users.routes");
const courses = require("./api/routes/courses.routes");
const socket_io = require("socket.io");
const path = require("path");
require("dotenv").config({
    path: path.join(__dirname, "../.env"),
});
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/server/api"));
app.use(passport.initialize());
require("./middlewares/passport.middleware")(passport);
app.use(morgan("dev"));
app.use(cors());
app.use(auth);
app.use(users);
app.use(courses);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});

const io = socket_io(server);

io.on("connection", socket => {
    console.log("We have a new connection !!!");
    socket.on("disconnect", () => {
        console.log("User has left !!!");
    });

    socket.on("join", ({ id }) => {
        console.log(`User joined with id ${id}`);
    });
    // socket.emit("news", { hello: "world" });
    // socket.on("my other event", data => {
    //     console.log(data);
    // });
});

db(server);
