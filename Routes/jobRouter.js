import jobController from "../Controller/jobController.js";
import { Router } from "express";

const JobController = new jobController;

const jobRouter = Router();

jobRouter.post("/createJob",(req,res) => JobController.createJob(req,res));
jobRouter.put("/updateJob/:id", (req,res) => JobController.updateJob(req,res));
jobRouter.get("/jobs", (req,res) => JobController.getAllJobs(req,res));
jobRouter.delete("/deletJob/:id", (req,res) => JobController.DeleteJob(req,res));

export default jobRouter;