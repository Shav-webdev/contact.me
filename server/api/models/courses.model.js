const { model, Schema } = require("mongoose");
// const userSchema = require("./user.models");
const { status } = require("../../services/constants");
const { pending } = status;

const coursesSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        minLength: 2,
        maxLength: 64,
        required: true,
    },
    description: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    // members: {
    //     type: [userSchema],
    //     default: undefined,
    // },
    rate: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    status: {
        type: String,
        default: pending,
    },
    createdTime: {
        type: Number,
        default: () => Number(Date.now()),
    },
});

module.exports = model("Course", coursesSchema);
