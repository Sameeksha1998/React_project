const Joi = require("joi")
const router = require("express").Router();
const Employee = require("../model/Employee");
const Project = require("../model/Project");




router.post("/", async (req, res) => {
  try {
    const schema = Joi.object({
      Employee_Name: Joi.string().min(3).max(300).required(),
      Employee_Id: Joi.string().min(3).max(300).required(),
      Employee_No: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
      Employee_Email: Joi.string().min(3).required().email(),
      Project:Joi.string().min(3).required(),
      Status:Joi.string().min(3).required()
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const { Employee_Name, Employee_Id, Employee_No, Employee_Email  , Project, Status} = req.body;

    let data = new Employee({ Employee_Name, Employee_Id, Employee_Email, Employee_No , Project, Status});

    data = await data.save();
    res.send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});



   router.get("/", async (req, res) => { 
    try {
      const listing = await Employee.find();
       res.json(listing);
    } catch (error) {
      res.json({ message: error });
    }
  } ) 
  

  
  // Single listing
  router.get("/page", async (req, res) => {
    try { 
      
      const pageNumber = parseInt(req.query.pageNumber) || 0;
    const limit = parseInt(req.query.limit) || 12;
    const result = {};
   
    const totalPosts = await Employee.countDocuments().exec();
    
    let startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;
    result.totalPosts = totalPosts;
    if (startIndex > 0) {
      result.previous = {
        pageNumber: pageNumber - 1,
        limit: limit,
      };
    }
    if (endIndex < (await Employee.countDocuments().exec())) {
      result.next = {
        pageNumber: pageNumber + 1,
        limit: limit,
      };
    }
    result.data = await Employee.find()
      .sort("-_id")
      .skip(startIndex)
      .limit(limit)
      .exec();
    result.rowsPerPage = limit;
   
    return res.json({ msg: "Posts Fetched successfully", data: result });
    } catch (error) {
      res.json({ message: "error" });
    }
    
  });



  router.put("/:id", async (req, res) => {
    const schema = Joi.object({
      Employee_Name: Joi.string().min(3).max(300).required(),
      Employee_Id: Joi.string().min(3).max(300).required(),
      Employee_No: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
      Employee_Email: Joi.string().min(3).required().email(),
      Project:Joi.string().min(3).required(),
      Status:Joi.string().min(3).required()
      
    });
  
    const { error } = schema.validate(req.body);
  
    if (error) return res.status(400).send(error.details[0].message);
  
    const Emp = await Employee.findById(req.params.id);
  
    if (!Emp) return res.status(404).send("Employee not found...");
  
    const { Employee_Name, Employee_Id, Employee_No, Employee_Email , Project, Status} = req.body;
  
    const updated= await Employee.findByIdAndUpdate(
      req.params.id,
      { Employee_Name, Employee_Id, Employee_No, Employee_Email , Project,Status  },
      { new: true }
    );
  
    res.send(updated);
  });
  
  router.delete("/:id", async (req, res) => {

    const emp = await Employee.findById(req.params.id);
  
    if (!emp) return res.status(404).send("Employee not found...");
  
    const deleted = await Employee.findByIdAndDelete(req.params.id);
  
    res.send(deleted);
  });
  
  
  router.delete("/:id", async (req, res) => {

    const emp = await Employee.findById(req.params.id);
  
    if (!emp) return res.status(404).send("Employee not found...");
  
    const deleted = await Employee.findByIdAndDelete(req.params.id);
  
    res.send(deleted);
  });





module.exports = router;