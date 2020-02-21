const express = require("express");

const ProjectRouter = require("./projects/project-router.js");
const TaskRouter = require("./tasks/task-router.js");
const ResourceRouter = require("./resources/resource-router.js");

const server = express();

server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/tasks", TaskRouter);
server.use("/api/resources", ResourceRouter)

server.get("/", (request, response) => {
  response.send("<h3>Let's crush this sprint</h3>");
});

module.exports = server;
