import React, { useState, useEffect  } from 'react'
import {  useSelector } from "react-redux";
import Table from '../components/index' ;

function Project() {

const empState = useSelector((state) => state.empState);
const {employee}=empState;


  
const columns = [
  { field: "Project", header: "Projects" },
  { field: "Status", header: "Status" },
  { field: "Employee_Name", header: "Assign" },
  
 
];

  return (
   <>  
   <h3 className=' text-info'>{employee && employee.length} Employees Working in Project</h3>
   <Table setEmp={employee}  Edit="Emp"    getval={employee}   columns={columns}  hover={true} striped={true} /> 


</>)}

export default Project