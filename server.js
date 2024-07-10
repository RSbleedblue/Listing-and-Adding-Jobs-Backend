import app from "./index.js";
import connectDB from "./Util/connectDB.js";

connectDB;
app.listen(3333,()=>{
    console.log("Job APIs are running at 3333");
})