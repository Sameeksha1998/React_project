const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
   Employee_Name: String,
   Employee_Id: String,
   Employee_No:String,
   Employee_Email:String,
   Project:String,
   Status:String

   
 
});


module.exports = mongoose.model("Employee", EmployeeSchema);