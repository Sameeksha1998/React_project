const router = require("express").Router();

const Project = require("../model/Project");


router.post("/",(req, res) => {
    res.send("Add Project");
    const list = new Project({
        Employee_Name:req.body.Employee_Name,
        Project:req.body.Project,
        Technology:req.body.Technology,
        Start_date: req.body.Start_date
       
       
    });
    try{
        const saves =  list.save();
        res.send(saves);
    }catch(error){
        res.status(400).send(error);
    }
  });

/* 
  router.get("/", async (req, res) => {
    try {
      const listings = await Project.find();
      res.json(listings);
    } catch (error) {
      res.json({ message: error });
    }
  });
   */
  // Single listing
 /*  router.get("/", async (req, res) => { 
    try {
      const listing = await Project.find({Employee_Name:req.query.Name});
      res.json(listing);
    } catch (error) {
      res.json({ message: error });
    }
  }); */

  router.get("/", async (req, res) => { console.log("get projects");
    try {
      const listing = await Project.find();
      res.json(listing);
    } catch (error) {
      res.json({ message: error });
    }
  });
  // Update listing
  router.put("/:listingId",async (req, res) => {
    try {
      const listing = {
        Employee_Name:req.body.Employee_Name,
        Employee_id:req.body.Employee_id,
        Employee_Email:req.body.Employee_Email,
        Employee_no:req.body.Employee_no
       
      };
  
      const updatedListing = await Project.findByIdAndUpdate(
        { _id: req.params.listingId },
        listing
      );
      res.json(updatedListing);
    } catch (error) {
      res.json({ message: error });
    }
  });
  
  // Delete listing
  router.delete("/:listingId", async (req, res) => {
    try {
      const removeListing = await Project.findByIdAndDelete(req.params.listingId);
      res.json(removeListing);
    } catch (error) {
      res.json({ message: error });
    }
  });
 
 

module.exports = router;