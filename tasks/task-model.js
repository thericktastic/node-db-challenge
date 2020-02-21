const db = require("../data/db-config");

module.exports = {
  all,
  allWProjects,
  add,
  findProject
};

function all() {
  return db("tasks");
}

function allWProjects() {
  return db("projects")
  .join("tasks", "tasks.project_id", "projects.id")
  .select(
    "tasks.description as task_description",
    "projects.id",
    "projects.name as project_name",
    "projects.description as project_description"
    )
}

function findProject(id) {
  return db("projects")
  .join("tasks", "tasks.project_id", "projects.id")
  .select(
    "tasks.description as task_description",
    "projects.id",
    "projects.name",
    "projects.description as project_description"
    )
    .where("projects.id", id)
}

function add(task) {
  return db("tasks").insert(task, "id");
}