import React from 'react'
import Table from '../components'
import { useEffect,useState } from 'react';
import {  NavLink } from 'react-router-dom';

function Project() {
    const columns = [
      { field: "Employee_Name", header: "Employee_Name" },
        { field: "Project", header: "Project" },
        { field: "Technology", header: "Technology" },
       { field: "Start_date", header: "Start_date" },
        
      ]; 

 const [pro, setPro]= useState([]);
      
     
    const api =' http://localhost:4000/api/Project';
     // get api call
      function    getValue(){
       fetch("http://localhost:4000/api/Project").then((data)=>{
         data.json().then((datas)=>{
      setPro(datas)

         })
       })
      } 
     
      // useeffect
     useEffect(() => { 
         getValue();   
      /*  getProject(Name); */ 
     }, [])
     
     
    
  return (
    <div>
   
     <Table Edit="Project" api={api} getval={getValue}  data={pro} columns={columns} hover={true} striped={true} /> 
     <NavLink className="btn btn-info" to="/AddProject">Add Projects</NavLink>
    </div>
  )
}

export default Project