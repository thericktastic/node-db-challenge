const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (request, response) => {
    response.send("<h3>Let's crush this sprint</h3>")
})

module.exports = server;