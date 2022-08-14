
import React, { useState, useEffect  } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ProjectGet} from '../../features/postSlice';
import Table from '../components/index' ;
import { useNavigate } from 'react-router-dom';

function Employee() {
const dispatch = useDispatch();
const nav = useNavigate();
const postState = useSelector((state) => state.postState);
const {project}=postState;


  useEffect(() => {
    dispatch(ProjectGet());
  }, [dispatch]);

  
const columns = [
  { field: "Employee_Name", header: "Employee_Name" },
       { field: "Project", header: "Project" },
     { field: "Technology", header: "Technology" },
      { field: "Start_date", header: "Start_date" },
        
 
];

  return (
   <>  
   <button  className='btn btn-info'  onClick={()=>{nav("/AddProject")}}>Add Projects</button>
   <h3 className='text-center'>Register Employees Are{project && project.length}</h3>
 <h1 className='text-center'>{project.getStatus === "pending" ? <p>Loading..............</p>:null}</h1>

<Table se  Edit="projects"    getval={project}   columns={columns}  hover={true} striped={true} /> 


</>)}

export default Employee