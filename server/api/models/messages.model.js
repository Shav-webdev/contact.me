const { model, Schema } = require("mongoose");

const messagesSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        minLength: 1,
        maxLength: 64,
        required: true,
    },
    createdTime: {
        type: Number,
        default: () => Number(Date.now()),
    },
    roomId: String,
});

module.exports = model("Message", messagesSchema);
