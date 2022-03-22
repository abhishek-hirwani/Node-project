const express = require("express");

const router = express.Router();

//importing all the functions from jobs controller
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require("../controllers/jobs");

//setting up the routes
//The POST verb is mostly utilized to create new resources.
router.route("/").post(createJob).get(getAllJobs);
//setting up the endpath
//Patch request says that we would only send the data that we need to modify without modifying or effecting other parts of the data. Ex: if we need to update only the first name, we pass only the first name.
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);
//exporting the module
module.exports = router;
