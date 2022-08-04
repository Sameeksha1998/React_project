import React from 'react'
import Table from '../components/index'
import { useEffect,useState } from 'react';

function Project() {
    const columns = [
      { field: "Employee_Name", header: "Employee_Name" },
        { field: "Project", header: "Project" },
        { field: "Technology", header: "Technology" },
       { field: "Start_date", header: "Start_date" },
        
      ]; 

  const [show, setshow] = useState("");
      const [pro, setPro]= useState([]);
       const [project, setProject]= useState([]); 
     
     
     // get api call
      function getValue(){
       fetch("http://localhost:4000/api/Project").then((data)=>{
         data.json().then((datas)=>{
      setPro(datas)
      
         })
       })
      } 
     
      // useeffect
     useEffect(() => { console.log(show,"oooooo");
         getValue();   
      /*  getProject(Name); */ 
     }, [])
     
     
     
     //specific user project
    /*  function getProject(Name){  
       fetch(`http://localhost:4000/api/project/?Name=${Name}`).then((data)=>{
         data.json().then((pro)=>{
         setProject(pro) 
         console.log("getpro",pro);
       
        pro.map((a)=>{setshow(a)});
          
           return document.getElementById("bb").innerHTML = show.Project;
       
       
           
         })
       })
       
     } */








  return (
    <div>
     <Table  getval={getValue}  data={pro} columns={columns} hover={true} striped={true} /> 
    </div>
  )
}

export default Project