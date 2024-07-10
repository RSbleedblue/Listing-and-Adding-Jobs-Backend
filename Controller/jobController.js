import jobModel from "../Models/jobModel.js";
class jobController {
    constructor(){

    }
    async getAllJobs(req,res){
        try{
            const jobs = await jobModel.find();
            return res.status(200).json({message:"All jobs Fetched", jobs : jobs, success: true});
        }
        catch(err){
            return res.status(400).json({message : "Error while fetching Data", success : false});
        }
    }
    async createJob(req,res){
        const {title, 
            technology,
            description,
            createdAt,
            lastDay,
            experience} = req.body;
        try{
            const data = {title,technology,description,createdAt,lastDay,experience};
            const newJob = await jobModel.create(data);
            const createdJob = await newJob.save();
            return res.status(200).json({message : "Job Successfully Created", data : createdJob, success : true});
        }
        catch(err){
            return res.status(404).json({message:"Error while creating Job", success : false});
        }
    }
    async updateJob(req,res){
        const jobID = req.params;
        const {title, 
        technology,
        description,
        lastDay,
        experience} = req.body;
        const findUser = await jobModel.findOne(jobID);
        if(!findUser){
            return res.status(404).json({message : "No Jobs Found Realted to the ID", success : false});
        }
        try{
            const data = {title,technology,description,lastDay,experience};
            const updatedJob = await jobModel.findOneAndUpdate(jobID,data,{new:true})
            return res.status(202).json({message : "User Successfully Updated",data : updatedJob, success: true});
        }
        catch(err){
            return res.status(404).json({message : "Failed to Update the User", success : false});
        }
    }
    async DeleteJob(req,res){
        const JobID = req.params;
        const findJob = await jobModel.findOne(JobID);
        if(!findJob){
            return res.status(404).json({message : "No Job Found with this Job ID", success : false});
        }
        try{
            await jobModel.findOneAndDelete(JobID);
            return res.status(200).json({message : `Job deleted Successfully`,success:true});
        }
        catch(err){
            return res.status(404).json({message : "Failed to Delete the Job", success : false})    
        }
    }
}
export default jobController;