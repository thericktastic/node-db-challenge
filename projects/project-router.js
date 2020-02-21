const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.all()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log("This is error in router.get(all): ", error);
      res.status(500).json({ error: "Error retrieving projects" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then(addedId => {
      console.log("This is addedId in router.post: ", addedId);
      res.status(201).json(addedId);
    })
    .catch(error => {
      console.log("This is error in router.post: ", error);
    });
});

module.exports = router;
