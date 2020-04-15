const User = require("../../models/user.models");
const { selectTypes } = require("../../services/constants");

module.exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    if (users.length > 0) {
        res.status(200).send({ users });
    } else {
        res.status(404).send({ message: "No users found" });
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
            res.status(404).send({ message: "No user found" });
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
                { $set: { avatar: req.body.avatar } }
            );
            if (user && user.avatar) {
                res.status(200).send({ avatar: user.avatar });
            } else {
                res.status(404).send({ message: "No user found" });
            }
        }
    } catch (e) {
        console.log(e);
    }
};
