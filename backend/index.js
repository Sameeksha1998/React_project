const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')
const bodyParser = require('body-parser');
dotenv.config();

// connect to db 'mongodb+srv://sameeksha:08july1998@cluster0.8yevg.mongodb.net/test1'
mongoose.connect('mongodb+srv://sameeksha:08july1998@cluster0.8yevg.mongodb.net/test1'  ,
{ useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const listinRoutes = require("./routes/listing");
const projectRoutes = require("./routes/Project"); 


app.use(express.json());
//app.use(bodyParser);
app.use(cors());
// route Middlewares
app.use("/api/Employee", listinRoutes);
app.use("/api/Project", projectRoutes); 
app.listen(4000, () => console.log("server up and runing on port 4000!"));