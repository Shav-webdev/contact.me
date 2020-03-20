const { Schema, model } = require('mongoose');

// const { types, status, img } = require('../../utils/constans');

const usersSchema = new Schema({
    name: {
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
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    approved: {
        type: String,
        default: 'pending',
    },
    avatar: {
        type: String,
        default: 'userAvatarUrl',
    },
    amount: {
        type: Number,
        default: 0,
    },
    createdTime: {
        type: Number,
        default: () => Number(Date.now()),
    },
});

module.exports = model('User', usersSchema);
