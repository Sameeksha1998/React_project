const router = require("express").Router();
const Employee = require("../model/Employee");
const Project = require("../model/Project");


router.post("/",(req, res) => {
    res.send("Add Employee");
    const list = new Employee({
        Employee_Name:req.body.Employee_Name,
        Employee_Id:req.body.Employee_Id,
        Employee_No: req.body.Employee_No,
        Employee_Email:req.body.Employee_Email,
    });
    try{
        const saves =  list.save();
        res.send(saves);
    }catch(error){
        res.status(400).send(error);
    }
  });


/*   router.put("/:id", (req, res, next) => { console.log(req.body);
    Employee.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          
        } else {
          res.json(data);
          console.log("Product updated successfully");
        }
      }
    );
  }); */

//data of two collection
 /*  router.get("/all", async (req, res) => {
    try {
      const listing = await Employee.find();
      const pro = await Project.find();
      res.json(pro.concat(listing));
    } catch (error) {
      res.json({ message: error });
    }
  }); */

   router.get("/", async (req, res) => { 
    try {
      const listing = await Employee.find();
       res.json(listing);
    } catch (error) {
      res.json({ message: error });
    }
  } ) 

  
  // Single listing
  router.get("/:listingId", async (req, res) => {
    try {
      const listing = await Employee.findById(req.params.listingId);
      res.json(listing);
    } catch (error) {
      res.json({ message: error });
    }
  });



  // Update listing
  router.put("/:listingId",async (req, res) => { 
    try {
      const listing = {
        Employee_Name:req.body.Name,
        Employee_Id:req.body.Id,
        Employee_Email:req.body.Email,
        Employee_No:req.body.No
       
      };
  
     
      const updatedListing = await Employee.findByIdAndUpdate(
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
      const removeListing = await Employee.findByIdAndDelete(req.params.listingId);
      res.json(removeListing);
    } catch (error) {
      res.json({ message: error });
    }
  });
 
  /* router.get("/all", async(req, res) => { console.log("0000000000000000");
   try {
       listing = await Project.find();
       Employee = await Employee.find();  
     res.json(listing);
      }
      catch(error){
        res.json({message:error})
      }
  
  }); */
 





module.exports = router;