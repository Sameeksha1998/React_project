import React, { useState, useEffect  } from 'react'
import {  useSelector } from "react-redux";
import Table from '../components/index' ;
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmp } from '../../features/empSlice';
import { useDispatch } from 'react-redux';


function Project({items , setEmp}) {

//   const empState = useSelector((state) => state.empState);
//  const {employee}=empState;

let dispatch = useDispatch();
  
const columns = [
  { field: "Project", header: "Projects" },
  { field: "Status", header: "Status" },
  { field: "Employee_Name", header: "Assign" },
  
 
];
 useEffect(() => { 
   if(!items.length){
 dispatch(getEmp());}
    }, []);


  return (
   <>  
   
 {/* <table >
 <tbody>
                <th>Employee_Name</th>
                <th >Project</th>
                <th >Technology</th>
</tbody>           
            
    
{items.map((data , i) => (
                <tr>
                <Link onClick={()=>{setEmp(data)}}   to={`/Employee/Project/${data._id}/edit`} ><td >{data.Employee_Name}</td></Link>
                <td>{data.Project}</td>
                <td>{data.Status}</td>
                </tr>
              ))}

   </table>  */}

<h3 className=' text-info'>{items && items.length} Employees Working in Project</h3>
   <Table setEmp={setEmp}  Edit="Project"    getval={items}   columns={columns}  hover={true} striped={true} /> 
   

</>)}

const mapStatetoProps = state=>({
  items : state.empState.employee
});


export default connect(mapStatetoProps)(Project);