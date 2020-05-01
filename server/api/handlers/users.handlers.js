const User = require("../models/user.models");
const { selectTypes, messages } = require("../../services/constants");

module.exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    if (users.length > 0) {
        res.status(200).send({ users });
    } else {
        res.status(404).send({ message: messages.errorNoUserFound });
    }
};

module.exports.getUserById = async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findOne({ _id }).select(
            selectTypes.userGetById
        );
        if (user) {
            res.status(200).send({ user });
        } else {
            res.status(404).send({ message: messages.errorNoUserFound });
        }
    } catch (e) {
        console.log("error", e);
    }
};

module.exports.updateUserData = async (req, res) => {
    try {
        const _id = req.params.id;
        if (req.body.avatar) {
            const user = await User.findOneAndUpdate(
                { _id },
                { $set: { avatar: req.body.avatar } },
                { new: true }
            );
            if (user && user.avatar) {
                res.status(200).send({
                    avatar: user.avatar,
                    message: messages.successUserAvatarUpdated,
                });
            } else {
                res.status(404).send({ message: messages.errorMessage });
            }
        }
    } catch (e) {
        console.log(e);
    }
};
