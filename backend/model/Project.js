const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
   Employee_Name:String, 
   Project: String,
   Technology  : String,
   Start_date  :String,
  
});


module.exports = mongoose.model("Project",ProjectSchema);