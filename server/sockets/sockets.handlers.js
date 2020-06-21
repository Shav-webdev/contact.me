const User = require("../api/models/user.models");

module.exports.socketConnection = socket => {
    console.log("We have a new connection !!!");
    socket.on("disconnect", async id => {
        try {
            const user = await User.findOneAndUpdate(
                { id },
                { $set: { isOnline: false } },
                { new: true }
            );

            socket.emit("isUserOnline", { isOnline: false });
        } catch (e) {
            console.log(e);
        }
    });

    socket.on("join", async ({ id }) => {
        try {
            const user = await User.findOneAndUpdate(
                { id },
                { $set: { isOnline: true } },
                { new: true }
            );

            socket.emit("isUserOnline", { isOnline: true });
        } catch (e) {
            console.log(e);
        }
        console.log(`User joined with id ${id}`);
    });
};
