const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const auth = require("./api/routes/auth.routes");
const { db } = require("../server/db/db");
const users = require("./api/routes/users.routes");
const courses = require("./api/routes/courses.routes");

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

db(server);
