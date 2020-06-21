const Message = require("../models/messages.model");
const { messages, types } = require("../../services/constants");
const { validationError } = types;
const { errorMessage, successCourseCreated } = messages;

module.exports.newMessage = async (req, res) => {
    if (req.body.roomId && req.body.userId && req.body.message) {
        const message = new Message({
            author: req.body.userId,
            roomId: req.body.roomId,
            message: req.body.message,
        });

        await message.save(async err => {
            if (err) {
                console.log("err.message", err.message);
                console.log("err", err);
                if (err.name === validationError) {
                    return res.status(400).send({ message: err.message });
                }
                return res.status(404).send({
                    message: errorMessage,
                });
            }
            res.status(201).send({
                message: successCourseCreated,
            });
        });
    }
};

module.exports.getMessagesByRoom = async (req, res) => {
    console.log("req.params", req.params);
    if (req.params && req.params.roomId) {
        const roomId = req.params.roomId;
        const messages = await Message.find({ roomId })
            .sort({
                createdTime: -1,
            })
            .limit(6);
        if (messages) {
            res.status(200).send({
                [roomId]: messages,
            });
        } else {
            res.status(404).send({ message: "No message founded" });
        }
    }
};

module.exports.removeMessage = async (req, res) => {
    console.log(req.params);
    if (req.params && req.params.roomId && req.params.messageId) {
        const { roomId, messageId } = req.params;
        const message = await Message.findOneAndDelete({
            roomId,
            _id: messageId,
        });
        if (message) {
            console.log(message);
            res.status(200).send({
                message,
            });
        } else {
            res.status(404).send({ message: messages.errorNoCourseFound });
        }
    }
};
