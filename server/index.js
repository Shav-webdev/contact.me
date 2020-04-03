const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const user = require("../server/api/routes/users.routes");
const { db } = require("../server/db/db");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/server/api"));
app.use(morgan("combined"));
app.use(cors());
app.use(user);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${PORT}...`);
});

db(server);
