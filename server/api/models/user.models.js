const { Schema, model } = require("mongoose");
const { validation } = require("../../services/constants");

const {
    nameMaxLength,
    nameMinLength,
    nameRegexp,
    nameRequired,
    lastNameMaxLength,
    lastNameMinLength,
    lastNameRegexp,
    lastNameRequired,
    birthdayMax,
    birthdayMin,
    birthdayRequired,
    passwordMinLength,
    passwordMaxLength,
    passwordRequired,
    emailRegexp,
    phoneNumberRegexp,
    phoneNumberRequired,
    genderRequired,
} = validation;

const usersSchema = new Schema({
    firstName: {
        type: String,
        minlength: [2, nameMinLength],
        maxlength: [20, nameMaxLength],
        trim: true,
        validate: {
            validator: function(v) {
                const re = new RegExp(/^([a-zA-Z]{2,20})$/);
                return re.test(v);
            },
            message: nameRegexp,
        },
        required: [true, nameRequired],
    },
    lastName: {
        type: String,
        minlength: [2, lastNameMinLength],
        maxlength: [20, lastNameMaxLength],
        trim: true,
        validate: {
            validator: function(v) {
                const re = new RegExp(/^([a-zA-Z]{2,20})$/);
                return re.test(v);
            },
            message: lastNameRegexp,
        },
        required: [true, lastNameRequired],
    },
    birthday: {
        type: Date,
        min: ["1920-01-01", birthdayMin],
        max: [new Date(), birthdayMax],
        required: [true, birthdayRequired],
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: function(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            message: emailRegexp,
        },
    },
    password: {
        type: String,
        minlength: [8, passwordMinLength],
        maxlength: [64, passwordMaxLength],
        trim: true,
        required: [true, passwordRequired],
    },
    phoneNumber: {
        type: String,
        validate: {
            validator: function(v) {
                return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(
                    v
                );
            },
            message: phoneNumberRegexp,
        },
        required: [true, phoneNumberRequired],
    },
    gender: {
        type: String,
        required: [true, genderRequired],
    },
    approved: {
        type: String,
        default: "pending",
    },
    role: {
        type: String,
        default: "user",
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
