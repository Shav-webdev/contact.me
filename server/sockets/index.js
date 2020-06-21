const { socketConnection } = require("./sockets.handlers");
const socket_io = require("socket.io");

const socketIO = server => {
    const io = socket_io(server);
    io.on("connection", socket => socketConnection(socket));
};

module.exports = socketIO;
