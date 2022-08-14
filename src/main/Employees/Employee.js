import React, { useState, useEffect  } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteEmp, getEmp } from '../../features/empSlice';
import Table from '../components/index' ;

function Employee({setEmp}) {
const dispatch = useDispatch();

const empState = useSelector((state) => state.empState);
const {employee}=empState;


  useEffect(() => {
    dispatch(getEmp());
  }, [dispatch]);

  
const columns = [
  { field: "Employee_Id", header: "Employee Id" },
  { field: "Employee_Name", header: "Employee" },
  { field: "Employee_Email", header: "Email" },
  { field: "Employee_No", header: "Mobile No" },
  { field: "Project", header: "Project" },
  { field: "Status", header: "Status" },

 
];

  return (
   <>  
   <h3 className=' text-info'>Register Employees Are{employee && employee.length}</h3>
   <h1 className='text-center'>{empState.getStatus === "pending" ? <p>Loading..............</p>:null}</h1>

   <Table setEmp={setEmp}  Edit="Employee"    getval={employee}   columns={columns}  hover={true} striped={true} /> 


</>)}

export default Employee