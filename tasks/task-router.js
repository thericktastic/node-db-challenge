const express = require("express");

const Tasks = require("./task-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.all()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log("This is error in router.get(all): ", error);
      res.status(500).json({ error: "Error retrieving projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.findProject(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log("This is error in router.get(id): ", error);
      res.status(500).json({ error: "Error retrieving project" });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Tasks.add(taskData)
    .then(addedId => {
      console.log("This is addedId in router.post: ", addedId);
      res.status(201).json(addedId);
    })
    .catch(error => {
      console.log("This is error in router.post: ", error);
    });
});

module.exports = router;
