import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function ProjectCreate() {

 

  const [Employee_Name ,setName] = useState("");
  const [Project , setProject] = useState("");
  const [Technology , setTechnology] = useState("");
  const [Start_date , setStart_date] = useState("");

  

  const nav = useNavigate();
function submit(){
  fetch("http://localhost:4000/api/Project",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Employee_Name,Project, Technology,Start_date})
  });
      
        nav("/Project")     

      }
      
    

  return (
    <>
        <div className='container ' >
          <h3 className='text-center text-info'>Add Project</h3>
            <div className=''>
            <form className='form-group m-4'  >
               <div >Name<input className='form-control p-2' placeholder='Enter  name' type="text" value={Employee_Name} onChange={(e)=>{setName(e.target.value)}} ></input></div>
              
              <div>Project</div><input   className='form-control  p-3'  placeholder='Enter Project Name'type="text" value={Project} onChange={(e)=>{setProject(e.target.value)}} ></input>
              <div>Technology</div><input className='form-control  p-3'  placeholder='Enter Project Technology'type="text" value={Technology} onChange={(e)=>{setTechnology(e.target.value)}} ></input>
              <div>Start date</div><input className='form-control  p-3'  placeholder='Enter Start date' type="text" value={Start_date} onChange={(e)=>{setStart_date(e.target.value)}} ></input>
               <div className='text-center'><button type='submit' className='btn btn-info text-center'  onClick={()=>{submit()}}   >Submit</button></div> 
               
            </form> </div>
            </div>


    </>
  )
}


export default ProjectCreate