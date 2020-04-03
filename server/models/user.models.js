const { Schema, model } = require("mongoose");

// const { types, status, img } = require('../../utils/constans');

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    approved: {
        type: String,
        default: "pending",
    },
    avatar: {
        type: String,
        default:
            "https://res.cloudinary.com/do4elvogx/image/upload/v1585041498/defaultImages/avatar_wivmdv.png",
    },
    createdTime: {
        type: Number,
        default: () => Number(Date.now()),
    },
});

module.exports = model("User", usersSchema);
