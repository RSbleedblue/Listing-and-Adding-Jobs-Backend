import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    id:{
        type : String,
    },
    title: {
        type: String,
        required: true,
    },
    technology: {
        type: [String],  
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,  
    },
    lastDay: {
        type: Date,
    },
    experience: {
        type: String,
        required: true,
    },
});

jobSchema.pre('save', function(next) {
    if (!this.lastDay) {
        this.lastDay = new Date(this.createdAt.getTime() + 24*60*60*1000);
    }
    if (!this.id){
        this.id = `Job${Math.floor(Math.random()*9000)}`;
    }
    next();
});

export default mongoose.model("job", jobSchema, "jobs");
